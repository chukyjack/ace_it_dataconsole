import csv
import io
import os

import pytz
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.core.management import call_command
from django.db.models import Q
from django.utils import timezone
from freezegun import freeze_time

from ff.core.testing import FFBaseTestCase, StdOutRedirect, feature_test
from ff.mods.bulkimport import constants, utils
from ff.mods.bulkimport.utils import process_bulk_user_import_file
from ff.mods.company.constants import FeatureName
from ff.mods.group.models import CompanyGroup, CompanyGroupMember
from ff.mods.scim.models import SCIMIntegrationConfig
from ff.mods.security_audit.models import SecurityAuditEvent


class BulkImportUtilsTestCase(FFBaseTestCase):
    @classmethod
    def setUpTestData(cls):
        cls.company = cls.create_testing_company(3)
        cls.group1 = CompanyGroup.objects.create(
            company=cls.company,
            name='Group1',
            group_type=cls.company.default_group_type,
            group_admin=cls.company.u1
        )
        CompanyGroupMember.objects.create(member=cls.company.u1, group=cls.group1)
        CompanyGroupMember.objects.create(member=cls.company.u2, group=cls.group1)

    def test_delete_group_members_by_filter(self):
        self.assertEqual(CompanyGroupMember.objects.count(), 2)

        result = utils.delete_group_members_by_filter(
            self.company.u1,
            Q(member=self.company.u1),
            called_from='from tests'
        )

        self.assertTrue(result)
        self.assertEqual(CompanyGroupMember.objects.count(), 1)

        security_event = SecurityAuditEvent.objects.filter(type='groups.remove_member', actor=self.company.u1).first()

        # check that security event created and correct
        self.assertIsNotNone(security_event)
        self.assertEqual(security_event.extra.get('from_where'), 'from tests')
        self.assertEqual(security_event.extra.get('group_id'), self.group1.id)
        self.assertEqual(security_event.extra.get('group_name'), 'Group1')

    def test_delete_group_members_by_filter_no_group_member(self):
        CompanyGroupMember.objects.all().delete()
        result = utils.delete_group_members_by_filter(
            self.company.u1,
            Q(member=self.company.u1),
            called_from='from tests'
        )

        # No group members should be found
        self.assertFalse(result)

    @feature_test(FeatureName.GROUP_TYPES)
    def test_group_names_with_group_type_name_to_python(self):
        group_names_str = 'moose group, jerry\'s group, Sales TEAM!!!'
        group_names_with_group_type_name, _throwaway = utils.group_names_with_group_type_name_to_python(
            self.company,
            group_names_str
        )
        expected_result = {('jerry\'s group', 'Groups'), ('Sales TEAM!!!', 'Groups'), ('moose group', 'Groups')}
        self.assertEqual(group_names_with_group_type_name, expected_result)

    @feature_test(FeatureName.GROUP_TYPES)
    def test_group_names_with_group_type_name_to_python_with_group_types(self):
        group_names_str = 'Groups ~ moose group, jerry\'s group, Deps~Sales TEAM!!!'
        group_names_with_group_type_name, _throwaway = utils.group_names_with_group_type_name_to_python(
            self.company,
            group_names_str
        )
        if self.company.is_feature_enabled(FeatureName.GROUP_TYPES):
            expected_result = {
                ('jerry\'s group', 'Groups'), ('Sales TEAM!!!', 'Deps'), ('moose group', 'Groups')
            }
        else:
            # When feature is disabled we do not check for ~ separator
            expected_result = {
                ('jerry\'s group', 'Groups'), ('Deps~Sales TEAM!!!', 'Groups'), ('Groups ~ moose group', 'Groups')
            }
        self.assertEqual(group_names_with_group_type_name, expected_result)

    @feature_test(FeatureName.GROUP_TYPES)
    def test_group_names_with_group_type_name_to_python_with_more_than_one_tilde_separator(self):
        group_names_str = '~Groups ~ moose group, jerry\'s group, Deps~~Sales TEAM!!!'

        if not self.company.is_feature_enabled(FeatureName.GROUP_TYPES):
            group_names_with_group_type_name, error_list = utils.group_names_with_group_type_name_to_python(
                self.company,
                group_names_str
            )
            expected_result = {
                ('jerry\'s group', 'Groups'), ('Deps~~Sales TEAM!!!', 'Groups'), ('~Groups ~ moose group', 'Groups')
            }
            expected_error_list = []
        else:
            group_names_with_group_type_name, error_list = utils.group_names_with_group_type_name_to_python(
                self.company,
                group_names_str
            )
            expected_result = {('jerry\'s group', 'Groups')}
            expected_error_list = ['~Groups ~ moose group', 'Deps~~Sales TEAM!!!']

        self.assertEqual(group_names_with_group_type_name, expected_result)
        self.assertEqual(error_list, expected_error_list)

    def test_get_available_groups_id_by_group_name_with_group_type_name(self):
        result = utils.get_available_groups_id_by_group_name_with_group_type_name(self.company)
        self.assertEqual(result, {(self.group1.name, self.group1.group_type.name_plural): self.group1.id})

        self.group1.soft_delete()
        result = utils.get_available_groups_id_by_group_name_with_group_type_name(self.company)
        self.assertEqual(result, {})

    def test_get_bulk_user_import_preview_data_with_scim_enabled(self):
        in_mem_csv = io.StringIO(
            'email,add_to_groups\n' 'pikachu@pokemon.com,"Types~Electric,Departments~Group1"\n'
        )
        csv_data = utils.read_csv_file(in_mem_csv)

        row_list, errors = utils.get_bulk_user_import_preview_data(
            csv_data, self.company, create_groups=True,
        )
        error_list = [e for e in errors]
        self.assertFalse(error_list)

        SCIMIntegrationConfig.objects.create(company=self.company, is_active=True)
        in_mem_csv = io.StringIO(
            'email,add_to_groups\n' 'charmander@pokemon.com,"Types~Fire,Departments~Group1"\n'
        )
        csv_data = utils.read_csv_file(in_mem_csv)

        row_list, errors = utils.get_bulk_user_import_preview_data(
            csv_data, self.company, create_groups=True,
        )
        for error in errors:
            self.assertEqual(error.name, 'duplicate_group_with_scim')

    @feature_test(FeatureName.GROUP_TYPES)
    def test_bulk_remove_user_from_groups_for_non_existing_group(self):
        is_group_types_enabled = self.company.is_feature_enabled(FeatureName.GROUP_TYPES)

        remove_from_groups_str = 'moose group'
        updated, err_msg = utils.bulk_remove_user_from_groups(
            self.company.u1,
            remove_from_groups_str,
            called_from='from tests',
        )

        self.assertFalse(updated)
        if is_group_types_enabled:
            expected_err_msg = 'User update failed - Group object(s) don\'t exist in your company: ' \
                               '{\'%s within %s\'}' % (
                                   remove_from_groups_str, self.company.default_group_type.name_plural
                               )
        else:
            expected_err_msg = 'User update failed - Group object(s) don\'t exist in your company: ' \
                               '{\'%s\'}' % remove_from_groups_str
        self.assertEqual(err_msg, expected_err_msg)

    @feature_test(FeatureName.GROUP_TYPES)
    def test_bulk_remove_user_from_groups_empty_str(self):
        result = utils.bulk_remove_user_from_groups(self.company.u1, '', called_from='from tests')
        # no group memberships need to be deleted
        self.assertEqual(result, (False, None))

    @feature_test(FeatureName.GROUP_TYPES)
    def test_bulk_remove_user_from_groups(self):
        self.assertTrue(CompanyGroupMember.objects.filter(group=self.group1, member=self.company.u1).exists())

        result = utils.bulk_remove_user_from_groups(self.company.u1, self.group1.name, called_from='from tests')
        self.assertEqual(result, (True, None))
        self.assertFalse(CompanyGroupMember.objects.filter(group=self.group1, member=self.company.u1).exists())

    def test_bulk_add_user_to_groups_no_groups_specified(self):
        result = utils.bulk_add_user_to_groups(self.company.u3, self.company.u1, '', '')
        self.assertEqual(result, (set(), None))

    def test_bulk_add_user_to_groups_user_already_in_group(self):
        self.assertTrue(CompanyGroupMember.objects.filter(group=self.group1, member=self.company.u1).exists())
        result = utils.bulk_add_user_to_groups(self.company.u1, self.company.u1, self.group1.name, '')
        self.assertEqual(result, ({self.group1.id}, None))

    def test_bulk_add_user_to_groups_user(self):
        group2 = CompanyGroup.objects.create(
            company=self.company,
            name='Group2',
            group_type=self.company.default_group_type,
            group_admin=self.company.u1
        )
        self.assertEqual(1, CompanyGroupMember.objects.filter(member=self.company.u1).count())
        # specifying only active_group_names_str. Should add u1 to group2
        result = utils.bulk_add_user_to_groups(
            self.company.u1,
            self.company.u1,
            f'{self.group1.name}, {group2.name}',
            ''
        )
        self.assertEqual(result, ({self.group1.id, group2.id}, None))
        self.assertEqual(2, CompanyGroupMember.objects.filter(member=self.company.u1).count())

        # specifying only add_to_groups
        self.assertFalse(CompanyGroupMember.objects.filter(member=self.company.u3).exists())
        result = utils.bulk_add_user_to_groups(
            self.company.u3,
            self.company.u1,
            '',
            f'{self.group1.name}, {group2.name}'
        )
        self.assertEqual(result, ({self.group1.id, group2.id}, None))
        self.assertEqual(2, CompanyGroupMember.objects.filter(member=self.company.u3).count())

        # specifying active_group_names_str and add_to_groups. Should add u2 to group2
        self.assertEqual(1, CompanyGroupMember.objects.filter(member=self.company.u2).count())
        result = utils.bulk_add_user_to_groups(self.company.u3, self.company.u1, self.group1.name, group2.name)
        self.assertEqual(result, ({self.group1.id, group2.id}, None))
        self.assertEqual(2, CompanyGroupMember.objects.filter(member=self.company.u3).count())

    @feature_test(FeatureName.GROUP_TYPES)
    def test_bulk_add_user_to_groups_user_new_group(self):
        new_group_name = 'Some new group'
        result = utils.bulk_add_user_to_groups(self.company.u1, self.company.u1, '', new_group_name)
        self.assertEqual(result, (set(), f'Could not find group named "{new_group_name}"'))

        group_ids, err_msg = utils.bulk_add_user_to_groups(
            self.company.u1, self.company.u1, '', new_group_name, create_groups=True
        )
        self.assertNotEqual(group_ids, set())
        self.assertIsNone(err_msg)

        group = CompanyGroup.objects.filter(name=new_group_name).get()
        self.assertEqual(group_ids, {group.id})
        self.assertEqual(group.group_type, self.company.default_group_type)

    def test_bulk_add_user_to_groups_user_new_group_with_group_types(self):
        self.company.add_feature(FeatureName.GROUP_TYPES)

        for group_type_name in ['Groups', 'Departments']:
            new_group_name = 'Some new group'

            add_to_groups_str = f'{group_type_name}~{new_group_name}'
            result = utils.bulk_add_user_to_groups(self.company.u1, self.company.u1, '', add_to_groups_str)
            self.assertEqual(result, (set(), f'Could not find group named "{new_group_name}"'))

            group_ids, err_msg = utils.bulk_add_user_to_groups(
                self.company.u1, self.company.u1, '', add_to_groups_str, create_groups=True
            )
            self.assertNotEqual(group_ids, set())
            self.assertIsNone(err_msg)
            group = CompanyGroup.objects.filter(name=new_group_name, group_type__name_plural=group_type_name).get()
            self.assertEqual(group_ids, {group.id})

    def test_add_user_to_group_no_group_name(self):
        result = utils.add_user_to_group(self.company.u1, '', 'Groups', self.company.u1)
        self.assertEqual(result, (False, None, None))

    def test_add_user_to_group_nonexisting_group_without_perms_to_create(self):
        result = utils.add_user_to_group(self.company.u1, 'Nonexisting group', 'Groups', self.company.u1)
        self.assertEqual(result, (False, 'Could not find group named "Nonexisting group"', None))
        self.assertFalse(CompanyGroupMember.objects.filter(
            group__name='Nonexisting group', member=self.company.u1
        ).exists())

    def test_add_user_to_group_nonexisting_group_with_perms_to_create(self):
        is_user_added, error_message, group_id = utils.add_user_to_group(
            self.company.u1, 'Nonexisting group', 'Groups', self.company.u1, create_groups=True
        )
        self.assertTrue(is_user_added)
        self.assertIsNone(error_message)
        self.assertIsNotNone(group_id)
        self.assertTrue(CompanyGroupMember.objects.filter(
            group__name='Nonexisting group', member=self.company.u1
        ).exists())

    def test_add_user_to_group_where_already_member(self):
        result = utils.add_user_to_group(
            self.company.u1, self.group1.name, self.group1.group_type.name_plural, self.company.u1
        )
        self.assertEqual(result, (False, None, self.group1.id))


class ExportUtilsTestCase(FFBaseTestCase):
    maxDiff = None

    def setUp(self):
        super().setUp()

        self.company = self.create_testing_company(
            num_of_users=1,
        )

    def test_get_bulk_export_columns(self):
        columns = utils.get_bulk_export_columns(self.company)
        self.assertEqual(columns, constants.BULK_EXPORT_COLUMNS)


class StartDateTestCase(FFBaseTestCase):
    maxDiff = None

    def setUp(self):
        super().setUp()

        self.company = self.create_testing_company(
            num_of_users=2,
        )

    def process_bulk_import_file(self, file_contents):
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(
            file=file_,
            field_name='',
            name='test.csv',
            content_type='text/plain',
            size=file_.size,
            charset='utf-8'
        )

        (_error_results,
         updated_user_emails,
         created_user_emails,
         _deactivate_emails) = process_bulk_user_import_file(
            bulk_user_import_file=file_,
            company_id=self.company.id,
            bulk_importer_user=self.company.u1,
            welcome_message='Welcome!',
            history_object=None,
        )

        return created_user_emails, updated_user_emails, _error_results

    def test_export_includes_start_date_if_user_has_start_date(self):
        self.company.u1.start_date_ts = pytz.utc.localize(timezone.datetime(2050, 2, 1, 8))
        self.company.u1.save()

        file_ = utils.handle_user_csv_export(
            [self.company.u1],
            self.company,
        )
        file_.seek(0)
        file_ = io.StringIO(file_.read().decode())

        rows = list(csv.DictReader(file_))
        rows = [row for row in rows if row['email'] == self.company.u1.email]
        self.assertEqual(len(rows), 1)
        self.assertEqual(rows[0]['start_date'], '02/01/2050')

    @freeze_time('2019-11-05')
    def test_start_date_set_on_user_correctly(self):
        file_contents = (
            'email,start_date\n'
            '"test@test.test","03/04/2050"'
        )
        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)

        self.assertEqual(len(created_user_emails), 1)

        user = self.company.user_set.filter(email='test@test.test').first()
        self.assertEqual(user.start_date_ts, pytz.utc.localize(timezone.datetime(2050, 3, 4, 8)))

    @freeze_time('2019-11-05')
    def test_start_date_set_on_user_in_users_timezone(self):
        timezone_name = 'Africa/Johannesburg'
        file_contents = (
            'email,time_zone,start_date\n'
            f'"test@test.test","{timezone_name}","03/04/2050"'
        )

        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)

        self.assertEqual(len(created_user_emails), 1)

        user = self.company.user_set.filter(email='test@test.test').first()
        ts = pytz.timezone(timezone_name).localize(timezone.datetime(2050, 3, 4, 8))
        self.assertEqual(user.start_date_ts, pytz.utc.normalize(ts))

    @freeze_time('2019-11-05')
    def test_no_start_date_set_if_column_is_empty(self):
        file_contents = (
            'email\n'
            '"test@test.test"'
        )
        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(created_user_emails), 1)

        user = self.company.user_set.filter(email='test@test.test').first()
        self.assertIsNone(user.start_date_ts)

    @freeze_time('2019-11-05')
    def test_no_start_date_set_if_column_and_row_is_empty(self):
        file_contents = (
            'email,start_date\n'
            '"test@test.test",""'
        )
        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(created_user_emails), 1)

        user = self.company.user_set.filter(email='test@test.test').first()
        self.assertIsNone(user.start_date_ts)

    @freeze_time('2019-11-05')
    def test_start_date_not_updatable_if_user_created_without_start_date(self):
        self.assertIsNone(self.company.u2.start_date_ts)

        file_contents = (
            'email,start_date\n'
            f'"{self.company.u2.email}","03/04/2050"'
        )
        _created_user_emails, updated_user_emails, errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(updated_user_emails), 0)

        # User was created without a start date so it should not be updated
        self.company.u2.refresh_from_db()
        self.assertIsNone(self.company.u2.start_date_ts)

    @freeze_time('2019-11-05')
    def test_start_date_not_updated_if_start_date_has_passed(self):
        self.company.u2.start_date_ts = pytz.utc.localize(timezone.datetime(2018, 3, 4, 8))
        self.company.u2.save()

        file_contents = (
            'email,start_date\n'
            f'"{self.company.u2.email}","03/04/2050"'
        )
        _created_user_emails, updated_user_emails, errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(updated_user_emails), 0)

        expected_start_date_ts = self.company.u2.start_date_ts
        self.assertEqual(expected_start_date_ts, pytz.utc.localize(timezone.datetime(2018, 3, 4, 8)))

        self.company.u2.refresh_from_db()
        # Start Date was not updated because it has already passed
        self.assertEqual(self.company.u2.start_date_ts, expected_start_date_ts)

    @freeze_time('2019-11-05')
    def test_start_date_can_be_updated(self):
        self.company.u2.start_date_ts = pytz.utc.localize(timezone.datetime(2020, 3, 4, 8))
        self.company.u2.save()

        file_contents = (
            'email,time_zone,start_date\n'
            f'"{self.company.u2.email}",utc,"03/04/2050"'
        )
        _created_user_emails, updated_user_emails, _errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(updated_user_emails), 1)

        self.company.u2.refresh_from_db()

        self.assertEqual(self.company.u2.start_date_ts, pytz.utc.localize(timezone.datetime(2050, 3, 4, 8)))

    @freeze_time('2019-11-05')
    def test_bulk_import_users_with_future_start_date_not_sent_invite(self):
        file_contents = (
            'email,time_zone,start_date\n'
            f'"exampl@example.com",utc,"03/04/2050"'
        )
        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(created_user_emails), 1)

        self.assert_empty_mail_outbox()

    @freeze_time('2019-11-05')
    def test_bulk_import_users_with_no_start_date_sent_invite(self):
        file_contents = (
            'email,time_zone,start_date\n'
            f'"exampl@example.com",utc,'
        )
        created_user_emails, _updated_user_emails, errors = self.process_bulk_import_file(file_contents)
        self.assertEqual(len(created_user_emails), 1, errors)

        self.assert_single_email(('subject', 'User 1 Bacon via 15Five - please accept my invitation to 15Five'))

    @freeze_time('2019-11-05')
    def test_command_send_invites_on_start_date_sends_email_on_start_date(self):
        file_contents = (
            'email,time_zone,start_date\n'
            '"test@test.test",utc,"12/01/2019"'
        )
        created_user_emails, _updated_user_emails, _errors = self.process_bulk_import_file(file_contents)

        self.assertEqual(len(created_user_emails), 1)

        self.assert_empty_mail_outbox()

        with freeze_time('2019-12-01 12:00'):
            with StdOutRedirect(os.devnull):
                call_command('send_invites_on_start_date')
            self.assert_single_email(('subject', 'User 1 Bacon via 15Five - please accept my invitation to 15Five'))
