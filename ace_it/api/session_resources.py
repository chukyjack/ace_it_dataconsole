from tastypie.resources import ModelResource
from session.models import Session
from course.models import Course
from api.user_resources import UserResource
from tastypie import fields
from api.course_resources import CourseResource
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie.constants import ALL
from django.contrib.auth import get_user_model
User = get_user_model()


class SessionResource(ModelResource):

    # course = fields.ForeignKey(CourseResource, 'course')
    subject = fields.CharField(attribute='subject')
    tutor = fields.ForeignKey(UserResource, 'tutor', null=True)

    class Meta:
        resource_name = 'session'
        queryset = Session.objects.all()
        # allowed_methods = ['get', 'post', 'put', 'patch']
        fields = ['id', 'type', 'duration', 'distance', 'details', 'location', 'is_assigned']
        limit = 0
        # authentication = SillyAuthentication
        authorization = Authorization()

    def dehydrate_subject(self, bundle):
        return bundle.obj.subject.name

    def hydrate_subject(self, bundle):
        print(bundle.obj.subject)
        bundle.data['subject'] = Course.objects.get(name=bundle.obj.subject.name)
        print(bundle.data)
        return bundle

    def dehydrate_tutor(self, bundle):
        return bundle.obj.tutor.id if bundle.obj.tutor else None

    def hydrate_tutor(self, bundle):
        print(bundle.data['tutor'])
        if bundle.data['tutor']:
            bundle.data['tutor'] = User.objects.get(id=bundle.data['tutor'])
        print(bundle.data)
        return bundle

