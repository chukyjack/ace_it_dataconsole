from tastypie.resources import ModelResource
from course.models import Course
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import Authorization
from tastypie.constants import ALL


class CourseResource(ModelResource):

    class Meta:
        resource_name = 'course'
        queryset = Course.objects.all()
        # allowed_methods = ['get', 'post']
        authorization = Authorization()
        # authentication = BasicAuthentication

