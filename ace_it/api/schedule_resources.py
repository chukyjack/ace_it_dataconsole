from django.conf.urls import url
from tastypie.resources import ModelResource
from tastypie.utils import trailing_slash

from schedule.models import Schedule
from course.models import Course
from api.user_resources import UserResource
from tastypie import fields
from api.course_resources import CourseResource
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie.constants import ALL, ALL_WITH_RELATIONS
from django.contrib.auth import get_user_model
from api.authorization import UserAuthorization
from util.utils import convert_time_to_string
from datetime import datetime
User = get_user_model()


class ScheduleResource(ModelResource):

    subject = fields.CharField(attribute='subject')
    tutor = fields.ForeignKey(UserResource, 'tutor', null=True)
    student = fields.ForeignKey(UserResource, 'student', null=True)
    requested_by = fields.ForeignKey(UserResource, 'requested_by', null=True)
    contact = fields.CharField(blank=True, null=True)
    name = fields.CharField(blank=True, null=True)

    class Meta:
        resource_name = 'schedule'
        queryset = Schedule.objects.all().order_by('status', 'start_time')
        allowed_methods = ['get', 'post', 'put', 'patch']
        fields = ['id', 'start_time', 'location', 'status', 'is_billed', 'end_time']
        limit = 0
        # authentication = SillyAuthentication
        authorization = UserAuthorization()
        filtering = {
            'status': ALL,
            'end_time': ALL,
            'student': ALL_WITH_RELATIONS
        }

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/unbilled_schedules%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('unbilled_schedules'),
                name="unbilled_schedules"
                ),
            url(r"^(?P<resource_name>%s)/billed_schedules%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('billed_schedules'),
                name="billed_schedules"
                ),
        ]

    def dehydrate_subject(self, bundle):
        return bundle.obj.subject.name

    def hydrate_subject(self, bundle):
        #TODO change subject field to dict with id and name. Remove condidtion below.
        if 'requested_user' in bundle.data:
            bundle.data['subject'] = Course.objects.get(id=bundle.data['subject'])
            return bundle
        bundle.data['subject'] = Course.objects.get(name=bundle.data['subject'])
        return bundle

    def dehydrate_name(self, bundle):
        if bundle.request.user.userprofile.role == 'tutor':
            return bundle.obj.student.first_name + " " + bundle.obj.student.last_name
        elif bundle.request.user.userprofile.role == 'student':
            return bundle.obj.tutor.first_name + " " + bundle.obj.tutor.last_name
        return

    def hydrate(self, bundle):
        #TODO return dictionaries for bundle.data values to avoid irregularities between format
        # of data for POST and PATCH
        if 'requested_user' in bundle.data:
            user = bundle.request.user
            bundle.data['requested_by'] = user
            requested_user = User.objects.get(id=bundle.data.get('requested_user', None))
            if user.userprofile.role == 'tutor':
                bundle.data['student'] = requested_user
                bundle.data['tutor'] = user
                return bundle
            if user.userprofile.role == 'student':
                bundle.data['tutor'] = requested_user
                bundle.data['student'] = user
                return bundle
        else:
            bundle.data['tutor'] = User.objects.get(id=bundle.data['tutor'])
            bundle.data['student'] = User.objects.get(id=bundle.data['student'])
            bundle.data['requested_by'] = User.objects.get(id=bundle.data['requested_by'])
        return bundle

    def dehydrate_tutor(self, bundle):
        print(bundle.obj.tutor.first_name, bundle.obj.tutor.id)
        return bundle.obj.tutor.id

    def dehydrate_student(self, bundle):
        return bundle.obj.student.id

    def dehydrate_requested_by(self, bundle):
        return bundle.obj.requested_by.id

    def dehydrate_contact(self, bundle):
        if bundle.request.user.userprofile.role == 'tutor':
            return bundle.obj.student.userprofile.preferred_contact
        elif bundle.request.user.userprofile.role == 'student':
            return bundle.obj.tutor.userprofile.preferred_contact
        return

    def dehydrate_start_time(self, bundle):
        return convert_time_to_string(bundle.obj.start_time)

    def hydrate_start_time(self, bundle):
        if 'requested_user' in bundle.data:
            bundle.data['start_time'] = datetime.strptime(bundle.data['start_time'], '%Y:%m:%d:%H:%M')
            return bundle
        bundle.data['start_time'] = datetime.strptime(bundle.data['start_time'], '%d %b, %Y  %I:%M%p')
        return bundle

    def hydrate_end_time(self, bundle):
        if 'requested_user' in bundle.data:
            bundle.data['endtime'] = datetime.strptime(bundle.data['start_time'], '%Y:%m:%d:%H:%M')
            return bundle
        bundle.data['endtime'] = datetime.strptime(bundle.data['start_time'], '%d %b, %Y  %I:%M%p')
        return bundle

    def dehydrate_location(self, bundle):
        if bundle.obj.type == 1:
            return 'online'
        return bundle.obj.location or 'N/A'

    def dehydrate_status(self, bundle):
        if bundle.obj.status == 0:
            return 'pending'
        return 'confirmed'

    def unbilled_schedules(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        tutor = request.user
        student_id = request.GET.get('student_id')
        unbilled_schedules = Schedule.objects.filter(
            tutor=tutor,
            student_id=student_id,
            is_billed=False,
            status=1,
            end_time__lt=datetime.now()).values('id', 'subject__name', 'start_time', 'end_time')
        return self.create_response(request, self._format_schedule(unbilled_schedules))

    def _format_schedule(self, schedules):
        formated_schedules = []
        for schedule in schedules:
            data = {}
            data['value'] = str(schedule['id'])
            start_time = convert_time_to_string(schedule['end_time'])
            data['label'] = schedule['subject__name'] + ' completed ' + start_time
            formated_schedules.append(data)
        return formated_schedules
