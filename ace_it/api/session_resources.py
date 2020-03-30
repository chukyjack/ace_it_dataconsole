import json
from os.path import join
from datetime import datetime
from django.conf.urls import url
from django.db import transaction
from tastypie.resources import ModelResource
from tastypie.utils import trailing_slash

from app import settings
from session.models import Session, SessionInterest, Gig, GigFile, GigInterest
from course.models import Course
from common.models import PreferredAvailability
from api.user_resources import UserResource
from api.authorization import GigAuthorization, OpportunityAuthorization
from tastypie import fields
from api.course_resources import CourseResource
from tastypie.authentication import Authentication
from tastypie.authorization import Authorization, ReadOnlyAuthorization
from tastypie.constants import ALL
from django.contrib.auth import get_user_model
from util.utils import convert_time_to_string, convert_time_to_date_string
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


class GigResource(ModelResource):
    owner = fields.ForeignKey(UserResource, 'owner', null=True)
    files = fields.ListField(null=True)

    class Meta:
        queryset = Gig.objects.filter(status='New')
        resource_name = 'gig'
        authorization = GigAuthorization()
        always_return_data = True
        limit = 0

    def prepend_urls(self):
        return [
            url(r"^(?P<resource_name>%s)/upload_file%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('upload_file'),
                name="upload_file"
                ),
            url(r"^(?P<resource_name>%s)/accept_gig%s$" %(self._meta.resource_name, trailing_slash),
                self.wrap_view('accept_gig'),
                name="accept_gig"
                ),
        ]

    def hydrate_owner(self, bundle):
        bundle.data['owner'] = MyUser.objects.get(id=bundle.data['owner_id'])
        return bundle

    def dehydrate_owner(self, bundle):
        return bundle.obj.owner.first_name + ' ' + bundle.obj.owner.last_name

    def dehydrate_files(self, bundle):
        files = list(bundle.obj.gig_file.all().values_list('file', flat=True))
        media_path  = settings.MEDIA_ROOT
        files_path = {
            'media_root': settings.MEDIA_ROOT,
            'files': files
        }

        files_with_path = [join(media_path, f) for f in files]
        return files_with_path

    def dehydrate_deadline(self, bundle):
        return convert_time_to_date_string(bundle.obj.deadline) if bundle.obj.deadline else ''

    def upload_file(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        self.is_authenticated(request)
        post_body = request.POST
        file = request.FILES.get('file')
        gig_id = post_body.get('gig_id')
        GigFile.objects.create(gig_id=gig_id, file=file)
        return self.create_response(request, {})

    def dispatch(self, request_type, request, **kwargs):
        return super().dispatch(request_type, request, **kwargs)

    def accept_gig(self, request, **kwargs):
        self.method_check(request, allowed=['post'])
        self.is_authenticated(request)
        self.throttle_check(request)
        post_body = json.loads(request.body)
        gig_id = post_body.get('gig')
        tutor_id = post_body.get('tutor')
        if gig_id and tutor_id:
            GigInterest.objects.create(gig_id=gig_id, tutor_id=tutor_id)
        return self.create_response(request, {})


class GigFileResource(ModelResource):
    gig = fields.ForeignKey(GigResource, 'gig_id')
    file = fields.FileField(attribute='file')

    class Meta:
        queryset = GigFile.objects.all()
        resource_name = 'gig_file'
        authorization = Authorization()
        limit = 0

    def dispatch(self, request_type, request, **kwargs):
        return super().dispatch(request_type, request, **kwargs)

    def hydrate_gig(self, bundle):
        bundle.data['gig'] = MyUser.objects.get(id=bundle.data['gig'])
        return bundle

    def hydrate_file(self, bundle):
        bundle.data['file'] = bundle.request.FILES.get('file')
        return bundle
