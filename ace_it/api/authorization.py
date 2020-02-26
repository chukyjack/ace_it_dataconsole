from abc import ABC

from tastypie.authorization import Authorization
from chat.models import Chat
from django.db.models import Q
from session.models import Session, SessionContract

class ChatParticipantAuthorization(Authorization):

    def authorize_list(self, object_list, bundle):
        user = bundle.request.user
        user_chats = user.chats.all()
        print(user)
        print(user_chats)
        print(object_list)
        return object_list

    def read_list(self, object_list, bundle):
        self.authorize_list(object_list, bundle)

class UserAuthorization(Authorization):

    def read_list(self, object_list, bundle):
        user = bundle.request.user
        return object_list.filter(Q(tutor=user) | Q(student=user))


class OpportunityAuthorization(Authorization):

    def read_list(self, object_list, bundle):
        user = bundle.request.user
        interested_sessions = user.session_interest.all().values_list('session__id', flat=True)
        return object_list.exclude(id__in=interested_sessions)


class UserWithContractAuthorization(Authorization):

    def read_list(self, object_list, bundle):
        user = bundle.request.user
        if user.userprofile.role == 'tutor':
            associated_users = SessionContract.objects.filter(tutor=user).values_list('student_id', flat=True)
        elif user.userprofile.role == 'student':
            associated_users = SessionContract.objects.filter(student=user).values_list('tutor_id', flat=True)
        else:
            return object_list
        return object_list.filter(id__in=associated_users)

    def update_detail(self, object_list, bundle):
        return super().update_detail(object_list, bundle)
