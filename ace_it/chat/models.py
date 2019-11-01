from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()
# Create your models here.


class Chat(models.Model):
    participant = models.ManyToManyField(
        User, related_name='chats', blank=True)

    def __str__(self):
        return "{}".format(self.pk)


class Message(models.Model):
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    chat = models.ForeignKey(Chat, related_name='messages', on_delete=models.CASCADE)
    sender = models.ForeignKey(User, related_name='messages', on_delete=models.CASCADE)

    def __str__(self):
        return self.sender.username
