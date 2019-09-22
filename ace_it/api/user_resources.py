from tastypie.resources import ModelResource
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.constants import ALL
MyUser = get_user_model()

class UserResource(ModelResource):

    class Meta:
        resource_name = 'user'
        queryset = MyUser.objects.all()
        allowed_methods = ['get']
        fields = ['username', 'first_name', 'last_name', 'last_login']
