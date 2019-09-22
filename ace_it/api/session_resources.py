from tastypie.resources import ModelResource
from session.models import Session
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.constants import ALL


class SessionResource(ModelResource):

    class Meta:
        resource_name = 'session'
        queryset = Session.objects.all()
        allowed_methods = ['get']
        authorization = DjangoAuthorization
        authentication = BasicAuthentication