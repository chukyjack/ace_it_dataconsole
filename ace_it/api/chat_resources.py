from tastypie.resources import ModelResource
from chat.models import Chat, Message
from tastypie.authentication import BasicAuthentication
from tastypie.authorization import Authorization
from tastypie.constants import ALL
from tastypie import fields
from api.authorization import ChatParticipantAuthorization
from api.user_resources import UserResource


class MessageResource(ModelResource):

    class Meta:
        resource_name = 'message'
        queryset = Message.objects.all()
        allowed_methods = ['get', 'post', 'detail', 'put', 'delete']
        authorization = Authorization()
        authentication = BasicAuthentication


class ChatResource(ModelResource):

    messages = fields.ToManyField(MessageResource, 'messages')
    participant = fields.ToManyField(UserResource, 'user', null=True)

    class Meta:
        resource_name = 'chat'
        queryset = Chat.objects.all()
        allowed_methods = ['get', 'post', 'detail', 'put', 'delete']
        fields = ['id', 'messages', 'participant']
        authorization = Authorization()
        # authentication = BasicAuthentication

    def get_object_list(self, request):
        user = request.user
        user_chats = user.chats.all()
        print(user_chats)
        return user_chats

    def dehydrate_messages(self, bundle):
        return list(bundle.obj.messages.all().values('content', 'timestamp', 'sender'))

    def dehydrate_participant(self, bundle):
        return list(bundle.obj.participant.all().values('id'))

