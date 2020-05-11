import json

from tastypie import fields
from tastypie.resources import ModelResource

from api.schedule_resources import ScheduleResource
from api.user_resources import UserResource
from billing.models import Bill
from course.models import Course
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import Authorization
from tastypie.constants import ALL
from django.conf.urls import url
from tastypie.utils import trailing_slash

from schedule.models import Schedule
from session.models import Session
from django.db.models import Q

from util.utils import convert_time_to_date_string


class BillResource(ModelResource):
    details = fields.CharField(blank=True, null=True)
    schedule = fields.ForeignKey(ScheduleResource, 'schedule')

    class Meta:
        resource_name = 'bill'
        queryset = Bill.objects.all().order_by('-bill_date')
        # allowed_methods = ['get', 'post']
        authorization = Authorization()
        # authentication = BasicAuthentication

    def dehydrate_details(self, bundle):
        display_text = f'${bundle.obj.amount} charged to ' \
                       f'{bundle.obj.schedule.student.first_name} ' \
                       f'{bundle.obj.schedule.student.last_name}'
        return display_text

    def dehydrate_bill_date(self, bundle):
        return convert_time_to_date_string(bundle.obj.bill_date)

    def dehydrate_is_paid(self, bundle):
        return 'Paid' if bundle.obj.is_paid else 'Not Paid'

    def hydrate_schedule(self, bundle):
        schedule_id = bundle.data.get('session')
        if schedule_id:
            bundle.data['schedule'] = Schedule.objects.get(id=schedule_id)
        return bundle

    # def hydrate_amount(self, bundle):
    #     amount = bundle.requets.GET.get('amount')
    #     if amount:
    #         bundle.data['student'] = Schedule.objects.get(id=schedule_id)
