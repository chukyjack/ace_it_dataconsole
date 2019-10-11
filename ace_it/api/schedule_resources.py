from tastypie.resources import ModelResource
from schedule.models import Schedule
from course.models import Course
from api.user_resources import UserResource
from tastypie import fields
from api.course_resources import CourseResource
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie.constants import ALL
from django.contrib.auth import get_user_model
User = get_user_model()


class ScheduleResource(ModelResource):

    subject = fields.CharField(attribute='subject')
    tutor = fields.ForeignKey(UserResource, 'tutor', null=True)
    student = fields.ForeignKey(UserResource, 'student', null=True)

    class Meta:
        resource_name = 'schedule'
        queryset = Schedule.objects.all()
        # allowed_methods = ['get', 'post', 'put', 'patch']
        fields = ['id', 'start_time', 'end_time', 'location', 'type']
        limit = 0
        # authentication = SillyAuthentication
        authorization = Authorization()

    def dehydrate_subject(self, bundle):
        return bundle.obj.subject.name

    def hydrate(self, bundle):
        print(bundle.data['subject'])
        print(bundle.data)
        bundle.data['subject'] = Course.objects.get(id=1)
        bundle.data['student'] = User.objects.get(id=1)
        bundle.data['tutor'] = bundle.request.user
        bundle.data['start_time'] = bundle.data['time']
        bundle.data['end_time'] = bundle.data['time']
        bundle.data['type'] = 1
        print(bundle.data)
        return bundle

    def dehydrate_tutor(self, bundle):
        return bundle.obj.tutor.id

    def dehydrate_student(self, bundle):
        return bundle.obj.student.first_name + ' ' + bundle.obj.student.last_name

