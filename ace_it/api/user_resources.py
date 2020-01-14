import json
from tastypie.resources import ModelResource
from django.conf.urls import url
from django.contrib.auth import get_user_model, authenticate, login, logout
from django.http.response import HttpResponse
from django.contrib.auth.models import User
from tastypie.authentication import Authentication, SessionAuthentication
from tastypie.authorization import DjangoAuthorization, Authorization
from tastypie.constants import ALL
from tastypie.utils import trailing_slash
from util.utils import set_user_details
from session.models import Session
from django.forms import model_to_dict
MyUser = get_user_model()

class UserResource(ModelResource):

    class Meta:
        resource_name = 'user'
        queryset = MyUser.objects.all()
        authentication = SessionAuthentication()
        authorization = Authorization()
        allowed_methods = ['get']
        fields = ['id', 'username', 'first_name', 'last_name', 'last_login']

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
            url(r"^(?P<resource_name>%s)/login%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('login'),
                name="login"
                ),
            url(r"^(?P<resource_name>%s)/logout%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('logout'),
                name="logout"
                ),

        ]

    def get_associated_users(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user = request.user
        session_users = []
        if user.userprofile.role == 'student':
            session_users = Session.objects.filter(student=user).values_list('tutor_id')
        elif user.userprofile.role == 'tutor':
            session_users = Session.objects.filter(tutor=user).values_list('student_id')
        users = MyUser.objects.filter(id__in=session_users)
        users = [model_to_dict(user, fields=['id', 'first_name', 'last_name', 'email']) for user in users]
        return self.create_response(request, self._format_user(users))

    def user_session_details(self, request, **kwargs):
        self.method_check(request, allowed=['get'])
        self.is_authenticated(request)
        self.throttle_check(request)
        user_session_data = set_user_details(request)
        return self.create_response(request, user_session_data)

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

