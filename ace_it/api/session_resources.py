import json
from datetime import datetime
from django.conf.urls import url
from django.db import transaction
from tastypie.resources import ModelResource
from tastypie.utils import trailing_slash

from session.models import Session, SessionInterest
from course.models import Course
from common.models import PreferredAvailability
from api.user_resources import UserResource
from api.authorization import  OpportunityAuthorization
from tastypie import fields
from api.course_resources import CourseResource
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie.constants import ALL
from django.contrib.auth import get_user_model
from util.utils import convert_time_to_string
MyUser = get_user_model()


class SessionInterestResource(ModelResource):
    # tutor = fields.ForeignKey(UserResource, 'tutor_id', null=True)

    class Meta:
        queryset = SessionInterest.objects.all()


class SessionResource(ModelResource):

    # course = fields.ForeignKey(CourseResource, 'course')
    subject = fields.CharField(attribute='subject')
    tutor = fields.ForeignKey(UserResource, 'tutor', null=True)
    student = fields.CharField(attribute='student__first_name', null=True, readonly=True)
    interested_tutors = fields.ListField(blank=True, null=True)
    # interested_tutors = fields.ToManyField(SessionInterestResource, 'session_interest', full=True, null=True)
    students_availability = fields.ListField(blank=True, null=True)

    class Meta:
        resource_name = 'session'
        queryset = Session.objects.all()
        # allowed_methods = ['get', 'post', 'put', 'patch']
        fields = ['id', 'type', 'duration', 'distance', 'details', 'location',
                  'is_assigned', 'start_date', 'student', 'frequency', 'additional_notes', 'has_materials']
        limit = 0
        # authentication = SillyAuthentication
        authorization = OpportunityAuthorization()

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/accept_opportunity%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('accept_opportunity'),
                name="accept_opportunity"
                )
        ]

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
            bundle.data['tutor'] = MyUser.objects.get(id=bundle.data['tutor'])
        print(bundle.data)
        return bundle

    def dehydrate_start_date(self, bundle):
        return convert_time_to_string(bundle.obj.start_date)

    def dehydrate_interested_tutors(self, bundle):
        return list(bundle.obj.session_interest.values_list('tutor_id', flat=True))
    #
    def hydrate_interested_tutors(self, bundle):
        session = bundle.obj
        # session.interested_tutors.set(MyUser.objects.filter(id__in=bundle.data['interested_tutors']))
        #create new endpoint to accept oppportuinity
        #endpoint creates new seesion interest and preffered availabilty if any
        return bundle

    def dehydrate_students_availability(self, bundle):
        return list(bundle.obj.students_availability.values('day', 'start_time', 'end_time'))

    def dehydrate_has_materials(self, bundle):
        if bundle.obj.has_materials:
            return 'Yes'
        return 'No'

    # @transaction.atomic
    def accept_opportunity(self, request, **kwargs):
        self.method_check(request, allowed=['patch'])
        self.is_authenticated(request)
        self.throttle_check(request)
        post_body = json.loads(request.body)
        session_id = post_body.get('session')
        tutor_id = post_body.get('tutor')
        preferred_availability = post_body.get('preferred_availability')
        if session_id and tutor_id:
            with transaction.atomic():
                interest = SessionInterest.objects.create(session_id=session_id, tutor_id=tutor_id)
                if preferred_availability:
                    for availability in preferred_availability:
                        PreferredAvailability.objects.create(
                            session_interest=interest,
                            day=availability.get('day').upper(),
                            start_time=datetime.strptime(availability.get('start_time'), '%I:%M%p'),
                            end_time=datetime.strptime(availability.get('end_time'), '%I:%M%p')
                        )
        return self.create_response(request, {})
