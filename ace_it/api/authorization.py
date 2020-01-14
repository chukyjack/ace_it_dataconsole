from tastypie.authorization import Authorization
from chat.models import Chat
from django.db.models import Q

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
