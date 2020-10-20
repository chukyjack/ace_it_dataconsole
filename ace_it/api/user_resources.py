import json

from django.db.models import Q
from tastypie.resources import ModelResource
from django.conf.urls import url
from django.contrib.auth import get_user_model, authenticate, login, logout
from django.http.response import HttpResponse
from django.contrib.auth.models import User
from tastypie.authentication import Authentication, SessionAuthentication
from tastypie.authorization import DjangoAuthorization, Authorization
from tastypie.constants import ALL
from tastypie.utils import trailing_slash

from api.course_resources import CourseResource
from util.utils import set_user_details, get_user_details
from session.models import Session, SessionContract, SessionUnit
from django.forms import model_to_dict
from api.authorization import UserWithContractAuthorization
from tastypie import fields

MyUser = get_user_model()
import logging
logger = logging.getLogger()

class UserResource(ModelResource):

    phone = fields.CharField(attribute='userprofile__phone_number', null=True)
    address = fields.CharField(attribute='userprofile__address', null=True)
    hobbies = fields.CharField(attribute='userprofile__hobbies', null=True)
    statement = fields.CharField(attribute='userprofile__personal_statement', null=True)
    courses = fields.ListField(blank=True, null=True)
    subject = fields.CharField(readonly=True, null=True)
    role = fields.CharField(attribute='userprofile__role', readonly=True, null=True)
    level = fields.CharField(attribute='userprofile__level', readonly=True, null=True)

    class Meta:
        resource_name = 'user'
        queryset = MyUser.objects.all()
        authentication = Authentication()
        authorization = UserWithContractAuthorization()
        # allowed_methods = ['get', 'post', 'patch']
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'last_login']

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/user_session_details%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('user_session_details'),
                name="user_session_details"
                ),
            url(r"^(?P<resource_name>%s)/get_associated_users%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('get_associated_users'),
                name="get_associated_users"
                ),
            url(r"^(?P<resource_name>%s)/update_user_profile%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('update_user_profile'),
                name="update_user_profile"
                ),
            url(r"^(?P<resource_name>%s)/add_session_unit%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('add_session_unit'),
                name="add_session_unit"
                ),
            url(r"^(?P<resource_name>%s)/login%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('login'),
                name="login"
                ),
            url(r"^(?P<resource_name>%s)/logout%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('logout'),
                name="logout"
                ),

        ]

    def dispatch(self, request_type, request, **kwargs):
        return super(UserResource, self).dispatch(request_type, request, **kwargs)

    def dehydrate_subject(self, bundle):
        user = bundle.request.user
        other_user = bundle.obj
        session_name = 'N/A'
        if user == other_user:
            # courses = list(user.userprofile.courses.all().values_list('name', flat=True))
            return session_name
        if user.userprofile.role == 'tutor':
            session_name = SessionContract.objects.prefetch_related('session__subject').get(tutor=user, student=other_user).session.subject.name
        elif user.userprofile.role == 'student':
            session_name = SessionContract.objects.prefetch_related('session__subject').get(tutor=other_user, student=user).session.subject.name
        return session_name

    def hydrate_statement(self, bundle):
        user_profile = bundle.obj.userprofile
        user_profile.personal_statement = bundle.data.get('personal_statement')
        user_profile.save()
        return bundle

    def get_associated_users(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user = request.user
        session_users = []
        if user.userprofile.role == 'student':
            session_users = SessionContract.objects.filter(student=user).values_list('tutor_id')
        elif user.userprofile.role == 'tutor':
            session_users = SessionContract.objects.filter(tutor=user).values_list('student_id')
        users = MyUser.objects.filter(id__in=session_users)
        users = [model_to_dict(user, fields=['id', 'first_name', 'last_name', 'email']) for user in users]
        #TODO specify fields using queryset values method instead
        return self.create_response(request, self._format_user(users))

    def user_session_details(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user_session_data = set_user_details(request)
        return self.create_response(request, user_session_data)

    # def update_user_profile(self, request, **kwargs):
    #     self.method_check(request, allowed=['patch'])
    #     self.is_authenticated(request)
    #     self.throttle_check(request)
    #     old_details = get_user_details(request)
    #     post_body = json.loads(request.body)
    #     if old_details and (old_details != post_body):
    #         print('Save new details')
    #
    #     return self.create_response(request, post_body)
    def add_session_unit(self, request, **kwargs):
        self.method_check(request, allowed=['patch'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user = request.user
        if user.userprofile.role != 'student':
            return self.create_response(request, {'error': 'Units can be added only for students.'})
        if not authenticate_payment():
            return self.create_response(request, {'error': 'Card authentication failed'})
        post_body = json.loads(request.body)
        requested_session_unit_value = int(post_body.get('requested_session_unit', 0))
        try:
            previous_unit_value = user.session_unit.value
            new_value = previous_unit_value + requested_session_unit_value
            user.session_unit.value = new_value
            user.session_unit.save()
        except SessionUnit.DoesNotExist:
            SessionUnit.objects.create(student=user, value=requested_session_unit_value)
            new_value = requested_session_unit_value
        return self.create_response(request, {'new_session_unit': new_value, 'msg': 'Unit successfully added.'})

    def login(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        # self.is_authenticated(request)
        post_body = json.loads(request.body)
        username = post_body['username']
        password = post_body['password']
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
        else:
            # self.create_response(request,  {"success": 'false'}, response_class=HttpResponseNotAllowed)
            return HttpResponse('Unauthorized', status=401)

        user_session_data = set_user_details(request)
        return self.create_response(request, user_session_data)

    def logout(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        logout(request)

        return self.create_response(request, 'logged out')

    def _format_user(self, users):
        formated_users = []
        for user in users:
            data = {}
            data['value'] = str(user['id'])
            data['label'] = user['first_name'] + ' ' + user['last_name']
            formated_users.append(data)
        return formated_users


def authenticate_payment():
    return True
