from tastypie.resources import ModelResource
from common.models import Timeslot
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import DjangoAuthorization
from tastypie.constants import ALL


class TimeResource(ModelResource):

    class Meta:
        resource_name = 'course'
        queryset = Timeslot.objects.all()
        allowed_methods = ['get']
        authorization = DjangoAuthorization
        authentication = BasicAuthentication

