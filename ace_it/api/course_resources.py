import json
from tastypie.resources import ModelResource
from course.models import Course
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import Authorization
from tastypie.constants import ALL
from django.conf.urls import url
from tastypie.utils import trailing_slash
from session.models import Session
from django.db.models import Q

class CourseResource(ModelResource):

    class Meta:
        resource_name = 'course'
        queryset = Course.objects.all()
        # allowed_methods = ['get', 'post']
        authorization = Authorization()
        # authentication = BasicAuthentication

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/registered_courses%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('registered_courses'),
                name="registered_courses"
                ),
            url(r"^(?P<resource_name>%s)/unregistered_courses%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('unregistered_courses'),
                name="unregistered_courses"
                ),
            url(r"^(?P<resource_name>%s)/register_for_new_courses%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('register_for_new_courses'),
                name="register_for_new_courses"
                ),

        ]

    def registered_courses(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user = request.user
        other_user = request.GET.get('other_user', None)
        if not other_user:
            registered_subjects = user.userprofile.registeredcourses_set.values('course__name', 'status').order_by('status', 'course__name')
            return self.create_response(request, list(registered_subjects))
        # print(other_user, 'other user')
        other_user = int(other_user)
        register_subjects_with_other_user = Session.objects.prefetch_related('subject')\
            .filter(Q(student=user, tutor=other_user) | Q(student=other_user, tutor=user))\
            .distinct().values('subject', 'subject__name')
        return self.create_response(request, list(register_subjects_with_other_user))

    def unregistered_courses(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user = request.user
        all_courses = Course.objects.all()
        registered_subjects = user.userprofile.registeredcourses_set.values_list('course_id', flat=True)
        return self.create_response(request, self._format_courses(all_courses.exclude(id__in=registered_subjects).values('id', 'name')))

    def register_for_new_courses(self, request, **kwargs):
        self.method_check(request, allowed=['patch'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user_profile = request.user.userprofile
        new_courses = json.loads(request.body).get('new_courses', [])
        courses_to_register = Course.objects.filter(id__in=new_courses)
        for course in courses_to_register:
            user_profile.courses.add(course)
        return self.create_response(request, {})

    def _format_courses(self, courses):
        formated_courses = []
        for course in courses:
            data = {'value': str(course['id']), 'label': course['name']}
            formated_courses.append(data)
        return formated_courses
