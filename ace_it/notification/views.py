import calendar
import time

from django.template import Context, Template
from django.urls import reverse
from django.utils.translation import ugettext_lazy as _

from ff.core.constants import VALID_BOOLEANS, Constant
from ff.core.csv_exports import ColumnsForSpreadsheetExport

UPLOAD_LOCATION = 'bulk_import'

# Status of a User being processed by a bulkimport
PROCESS_STATUS_USER_ERROR = -1
PROCESS_STATUS_USER_CREATED = 0
PROCESS_STATUS_USER_UPDATED = 1
PROCESS_STATUS_USER_NOOP = 2

# Some of these headers need to be the same as in the user CSV export. Those in turn, are shared amongst all exports.
# Hence the reassignment of names
BULK_IMPORT_COL_EMAIL = ColumnsForSpreadsheetExport.EMAIL
BULK_IMPORT_COL_FIRST_NAME = ColumnsForSpreadsheetExport.FIRST_NAME
BULK_IMPORT_COL_LAST_NAME = ColumnsForSpreadsheetExport.LAST_NAME
BULK_IMPORT_COL_TITLE = ColumnsForSpreadsheetExport.TITLE
BULK_IMPORT_COL_DUE_DAY = ColumnsForSpreadsheetExport.DUE_DAY
BULK_IMPORT_COL_REVIEWER_EMAIL = ColumnsForSpreadsheetExport.REVIEWER_EMAIL
BULK_IMPORT_COL_TIMEZONE = ColumnsForSpreadsheetExport.TIMEZONE
BULK_IMPORT_COL_ADD_TO_GROUPS = 'add_to_groups'
BULK_IMPORT_COL_REMOVE_FROM_GROUPS = 'remove_from_groups'
BULK_IMPORT_COL_ACTIVE_GROUP_NAMES = ColumnsForSpreadsheetExport.ACTIVE_GROUP_NAMES
BULK_IMPORT_COL_IS_ACTIVE = 'is_active'
BULK_IMPORT_COL_LOCATION = ColumnsForSpreadsheetExport.LOCATION
BULK_IMPORT_COL_EMPLOYEE_ID = ColumnsForSpreadsheetExport.EMPLOYEE_ID
BULK_IMPORT_COL_JOB_DESCRIPTION = ColumnsForSpreadsheetExport.JOB_DESCRIPTION
BULK_IMPORT_COL_STRENGTHS = ColumnsForSpreadsheetExport.STRENGTHS
BULK_IMPORT_COL_SAML_USER_ID = ColumnsForSpreadsheetExport.SAML_USER_ID
BULK_IMPORT_COL_CHANGE_EMAIL_TO = 'change_email_to'
BULK_IMPORT_COL_SEND_WELCOME_FROM = 'send_welcome_from'
BULK_IMPORT_COL_START_DATE = 'start_date'

BULK_IMPORT_IS_ACTIVE_ACCEPTABLE_VALUES = (
    ('',) +
    VALID_BOOLEANS
)

BULK_IMPORT_COL_NAME_ACTIVE_GROUP_NAMES = _('Active Group Names')

BULK_IMPORT_WELCOME_EMAIL_TITLE = _('Welcome to 15Five!')


class BulkImportError:
    def __init__(self, name, remediation_template, **kwargs):
        self.name = name
        self.remediation_template = _(remediation_template)
        self.link = kwargs.get('link', None)
        self.group = kwargs.get('group', None)

    def render_for_company(self, company=None):

        if not company:
            return ''

        template = Template(self.remediation_template)

        data = {'company_name': company.name}

        due_days_long_form = []
        if 'due_days' in company.prefs_json:
            due_days = company.prefs_json.get('due_days')
            for day in due_days:
                due_days_long_form.append(time.strftime("%A", time.strptime(day, '%a')))

        else:
            for day in range(0, 7):
                due_days_long_form.append(calendar.day_name[day])
        data.update({'due_days_possible': due_days_long_form})

        if self.link:
            url = str(reverse(self.link))
            data.update({'link': url})

        return template.render(context=Context(data))

    def __str__(self):
        return self.name

    def __hash__(self):
        return hash(str(self))

    def __eq__(self, other):
        return self.name == other.name


class BulkImportErrors(Constant):
    DUPLICATE_GROUP_WITH_SCIM = BulkImportError(
        'duplicate_group_with_scim',
        'All Group names must be unique. Please make changes to your upload and try again.',
        link='ff_group_list',
        group='Groups'
    )

    DUPLICATE_GROUP = BulkImportError(
        'duplicate_group',
        'There are multiple groups with the same name. Please update the group name in the CSV '
        'or <a href="{{ link }}">Manage groups</a> in 15Five',
        link='ff_group_list',
        group='Groups'
    )

    GROUP_DOES_NOT_EXIST = BulkImportError(
        'group_does_not_exist',
        'We cannot find the following groups in 15Five. '
        'Please update the group name or <a href="{{ link }}">add as a new group</a>',
        link='ff_group_add',
        group='Groups'
    )

    REVIEWER_DOES_NOT_EXIST = BulkImportError(
        'reviewer_does_not_exist',
        'We can\'t find the following reviewers with these email address in 15Five or '
        'in the file you are uploading. Check the spelling or check they have a 15Five '
        'account in <a href="{{ link }}">Manage people</a>',
        link='ff_user_add',
        group='Setup'
    )

    VALUE_TOO_LONG = BulkImportError(
        'value_too_long',
        'Unfortunately the following fields have exceeded the character limit. Please update '
        'the CSV and ensure the following fields have under 50 characters',
        group='Formatting'
    )

    INVALID_DUE_DAY = BulkImportError(
        'invalid_due_day',
        'For {{ company_name }}, the 15Five due day must be {% for day in due_days_possible %}'
        '{% if forloop.last and not forloop.first %} or {{ day }}.'
        '{% elif forloop.last and forloop.first %}{{ day }}.'
        '{% else %}{{ day }}, '
        '{% endif %} '
        '{% endfor %}'
        'Please update the following due days in the CSV to reflect your company\'s 15Five setup',
        group='Setup'
    )
    INVALID_STATUS = BulkImportError(
        'invalid_status',
        'We don\'t recognize a status you have used. '
        'Please only use true, false or leave this field blank.',
        group='Setup'
    )

    INVALID_EMAIL = BulkImportError(
        'invalid_email',
        'Several email addresses are invalid or exceed the 75 character limit. '
        'Please update the CSV for:',
        group='Formatting'
    )

    UNKNOWN_TIMEZONE = BulkImportError(
        'unknown_timezone',
        (
            'We do not recognise  the following timezones. For more '
            'information on supported timezones and formatting please '
            'see the <a href="https://s.15five.com/s/QW-gmA">Bulk upload help documentation.</a>'
        ),
        group='Data'
    )
    TOO_MANY_TILDE_SEPARATORS = BulkImportError(
        'too_many_tilde_separators',
        'Only one tilde (~) can be used to define the relationship between the group type and group. '
        'The following instances had more then one tilde',
        group='Groups'
    )


# Tuple of 2-tuples of column headers and column titles
BULK_IMPORT_COLUMNS = (
    (BULK_IMPORT_COL_EMAIL, 'Email'),
    (BULK_IMPORT_COL_FIRST_NAME, 'First Name'),
    (BULK_IMPORT_COL_LAST_NAME, 'Last Name'),
    (BULK_IMPORT_COL_TITLE, 'Title'),
    (BULK_IMPORT_COL_DUE_DAY, 'Due Day'),
    (BULK_IMPORT_COL_REVIEWER_EMAIL, "Reviewer's Email"),
    (BULK_IMPORT_COL_TIMEZONE, 'Timezone'),
    (BULK_IMPORT_COL_ADD_TO_GROUPS, 'Add to Groups'),
    (BULK_IMPORT_COL_REMOVE_FROM_GROUPS, 'Remove from Groups'),
    (BULK_IMPORT_COL_ACTIVE_GROUP_NAMES, BULK_IMPORT_COL_NAME_ACTIVE_GROUP_NAMES),
    (BULK_IMPORT_COL_IS_ACTIVE, 'Active'),
    (BULK_IMPORT_COL_LOCATION, 'Location'),
    (BULK_IMPORT_COL_EMPLOYEE_ID, 'Employee ID'),
    (BULK_IMPORT_COL_JOB_DESCRIPTION, 'Job Description'),
    (BULK_IMPORT_COL_STRENGTHS, 'Strengths'),
    (BULK_IMPORT_COL_SAML_USER_ID, 'SAML 2.0 User ID'),
    (BULK_IMPORT_COL_CHANGE_EMAIL_TO, 'Changes email to this email address.'),
    (BULK_IMPORT_COL_SEND_WELCOME_FROM, 'Send welcome email to users created through the API from this email address.'),
    (BULK_IMPORT_COL_START_DATE, 'Start Date'),
)

BULK_IMPORT_CSV_FILENAME_KEY = 'bulk_import_csv_file_name_{}'

# Columns to check for max_length. Exclude email since that has a separate check.
BULK_IMPORT_MAX_LENGTH_COLS = (
    BULK_IMPORT_COL_FIRST_NAME,
    BULK_IMPORT_COL_LAST_NAME,
    BULK_IMPORT_COL_TITLE,
    BULK_IMPORT_COL_LOCATION,
    BULK_IMPORT_COL_EMPLOYEE_ID,
    BULK_IMPORT_COL_SAML_USER_ID,
)

# Some columns are not necessary or hard to populate (eg. group_name) in bulk exports of
# users and can be confusing when included in an export. We exclude those from exports here.
BULK_EXPORT_EXCLUDE_COL_NAMES = (
    BULK_IMPORT_COL_ADD_TO_GROUPS,
    BULK_IMPORT_COL_REMOVE_FROM_GROUPS,
    BULK_IMPORT_COL_IS_ACTIVE,
)

BULK_IMPORT_GROUP_MANAGEMENT_COLS = (
    BULK_IMPORT_COL_ADD_TO_GROUPS,
    BULK_IMPORT_COL_REMOVE_FROM_GROUPS,
    BULK_IMPORT_COL_ACTIVE_GROUP_NAMES
)

BULK_IMPORT_EMAIL_CHANGE_COLS = (
    BULK_IMPORT_COL_EMAIL,
    BULK_IMPORT_COL_CHANGE_EMAIL_TO
)

BULK_EXPORT_COLUMNS = [t for t in BULK_IMPORT_COLUMNS if t[0] not in BULK_EXPORT_EXCLUDE_COL_NAMES]

BULK_IMPORT_GROUP_GROUP_TYPE_SEPARATOR = '~'


class BulkImportHistoryStatus(Constant):

    SCHEDULED = 'scheduled'
    IN_PROGRESS = 'in_progress'
    COMPLETED = 'completed'
    FAILED = 'failed'  # TODO: This seems unused. Should remove it or add logic to use it.

    @classmethod
    def choices(cls):
        return (
            (cls.SCHEDULED, _('Scheduled')),
            (cls.IN_PROGRESS, _('In Progress')),
            (cls.COMPLETED, _('Completed')),
            (cls.FAILED, _('Failed')),
        )
