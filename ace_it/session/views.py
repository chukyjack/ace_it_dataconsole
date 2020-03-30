from django.core.files.base import ContentFile
from django.core.files.uploadedfile import InMemoryUploadedFile

from ff.core.testing import FFBaseTestCase, feature_test
from ff.mods.bulkimport.constants import BulkImportErrors
from ff.mods.bulkimport.models import CSVData
from ff.mods.bulkimport.utils import get_bulk_user_import_preview_data, read_csv_file
from ff.mods.company.constants import FeatureName
from ff.mods.group.models import CompanyGroup


class ValidatorsTestCase(FFBaseTestCase):

    def test_validate_csv(self):
        file_contents = b'email,first_name,last_name\n"test@test.test","test","test"'
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        self.assertTrue(csv_object.is_valid())
        self.assertEqual(csv_object.errors, [])

    def test_validate_csv_invalid_headers(self):
        file_contents = b'email,first_name,last_name,favorite_chewing_gum\n'
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        self.assertFalse(csv_object.is_valid())
        self.assertNotEqual(csv_object.errors, [])

    def test_validate_csv_all_row_cells_have_headers(self):
        file_contents = b'email\n"test@test.test",'
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        self.assertFalse(csv_object.is_valid())
        self.assertNotEqual(csv_object.errors, [])


class ReadCSVTestCase(FFBaseTestCase):

    @classmethod
    def setUpTestData(cls):
        cls.company = cls.create_testing_company()

    def test_read_csv_file(self):
        file_contents = (b'email,first_name,last_name\n'
                         b'"test@test.test","firsty","lasty"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        row_data = csv_object.rows
        col_headers = csv_object.header

        self.assertEqual(set(col_headers), {'email', 'first_name', 'last_name'})
        expected = [{'email': 'test@test.test', 'first_name': 'firsty', 'last_name': 'lasty'}]
        self.assertEqual(row_data, expected)

    def test_read_csv_file_doesnt_strip_sanitizing_spaces(self):
        file_contents = (b'email,first_name,last_name\n'
                         b' =jdoe@gmail.com," +firsty"," @lasty"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        row_data = csv_object.rows
        col_headers = csv_object.header

        self.assertEqual(set(col_headers), {'email', 'first_name', 'last_name'})
        expected = [{'email': ' =jdoe@gmail.com', 'first_name': ' +firsty', 'last_name': ' @lasty'}]
        self.assertEqual(row_data, expected)

    def test_read_csv_file_with_active_groups(self):
        file_contents = (b'email,active_group_names\n'
                         b'"test@test.test","moose group, jerry\'s group, Sales TEAM!!!"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = read_csv_file(file_)
        row_data = csv_object.rows
        col_headers = csv_object.header

        self.assertEqual(set(col_headers), {'email', 'active_group_names'})
        expected = [{
            'active_group_names': "moose group, jerry's group, Sales TEAM!!!",
            'email': 'test@test.test'
        }]
        self.assertEqual(row_data, expected)

    @feature_test(FeatureName.GROUP_TYPES)
    def test_get_bulk_user_import_preview_data(self):
        CompanyGroup.objects.create(name='moose group', company=self.company).save()
        CompanyGroup.objects.create(name='jerry\'s group', company=self.company).save()
        CompanyGroup.objects.create(name='Sales TEAM!!!', company=self.company).save()
        file_contents = (b'email,active_group_names\n'
                         b'"test@test.test","moose group, jerry\'s group, Sales TEAM!!!"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = CSVData(file_)
        col_headers = csv_object.header
        row_list, errors = get_bulk_user_import_preview_data(csv_object, self.company)

        self.assertEqual(set(col_headers), {'email', 'active_group_names'})

        row = row_list[0]
        self.assertEqual(len(row), 3)
        self.assertIn('test@test.test', row)
        self.assertIn('moose group, jerry\'s group, Sales TEAM!!!', row)
        self.assertIn('OK', row)
        self.assertEqual(errors, {})

    @feature_test(FeatureName.GROUP_TYPES)
    def test_get_bulk_user_import_preview_data_non_existing_group(self):
        file_contents = (b'email,active_group_names\n'
                         b'"test@test.test","Sales TEAM!!!,Departments~Cats"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = CSVData(file_)
        col_headers = csv_object.header
        row_list, errors = get_bulk_user_import_preview_data(csv_object, self.company)

        self.assertEqual(set(col_headers), {'email', 'active_group_names'})

        row = row_list[0]
        self.assertEqual(len(row), 3)
        self.assertIn('test@test.test', row)
        self.assertIn('Sales TEAM!!!, Departments~Cats', row)
        if self.company.is_feature_enabled(FeatureName.GROUP_TYPES):
            self.assertIn('Group "Sales TEAM!!!" with Group type "Groups" does not exist. \n', row[-1])
            self.assertIn('Group "Cats" with Group type "Departments" does not exist. \n', row[-1])
            expected_errors = {BulkImportErrors.GROUP_DOES_NOT_EXIST: {'Sales TEAM!!!': [1], 'Cats': [1]}}
        else:
            # when feature is off we not checking for separator
            self.assertIn('Group "Sales TEAM!!!" does not exist. \n', row[-1])
            self.assertIn('Group "Departments~Cats" does not exist. \n', row[-1])

            expected_errors = {BulkImportErrors.GROUP_DOES_NOT_EXIST: {'Sales TEAM!!!': [1], 'Departments~Cats': [1]}}
        self.assertEqual(errors, expected_errors)

        # allow create new groups
        row_list, errors = get_bulk_user_import_preview_data(csv_object, self.company, create_groups=True)
        self.assertEqual(set(col_headers), {'email', 'active_group_names'})

        row = row_list[0]
        self.assertEqual(len(row), 3)
        self.assertIn('test@test.test', row)
        self.assertIn('Sales TEAM!!!, Departments~Cats', row)
        self.assertIn('OK', row)
        self.assertEqual(errors, {})

    @feature_test(FeatureName.GROUP_TYPES)
    def test_get_bulk_user_import_preview_data_when_group_name_and_group_type_has_more_than_one_tilde_separator(self):
        file_contents = (b'email,active_group_names\n'
                         b'"test@test.test","Sales TEAM!!!,Departments~~Cats"')
        file_ = ContentFile(file_contents)
        file_ = InMemoryUploadedFile(file=file_, field_name='', name='test.csv',
                                     content_type='text/plain', size=file_.size, charset='utf-8')

        csv_object = CSVData(file_)
        col_headers = csv_object.header
        row_list, errors = get_bulk_user_import_preview_data(csv_object, self.company)

        self.assertEqual(set(col_headers), {'email', 'active_group_names'})

        row = row_list[0]
        self.assertEqual(len(row), 3)
        self.assertIn('test@test.test', row)
        self.assertIn('Sales TEAM!!!, Departments~~Cats', row)

        if self.company.is_feature_enabled(FeatureName.GROUP_TYPES):
            self.assertIn('Group "Sales TEAM!!!" with Group type "Groups" does not exist. \n', row[-1])
            self.assertIn('"Departments~~Cats" has more than one tilde separator. \n', row[-1])
            expected_errors = {
                BulkImportErrors.GROUP_DOES_NOT_EXIST: {'Sales TEAM!!!': [1]},
                BulkImportErrors.TOO_MANY_TILDE_SEPARATORS: {'Departments~~Cats': [1]}
            }
        else:
            self.assertIn('Group "Sales TEAM!!!" does not exist. \n', row[-1])
            self.assertIn('Group "Departments~~Cats" does not exist. \n', row[-1])
            expected_errors = {
                BulkImportErrors.GROUP_DOES_NOT_EXIST: {'Sales TEAM!!!': [1], 'Departments~~Cats': [1]}
            }
        self.assertEqual(errors, expected_errors)
