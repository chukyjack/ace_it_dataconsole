from django.db import models

# Create your models here.
from userprofile.models import UserProfile


class NotificationPreference(models.Model):
    mobile = models.BooleanField(default=True)
    email = models.BooleanField(default=True)
    push = models.BooleanField(default=True)
    userprofile = models.OneToOneField(UserProfile, on_delete=models.CASCADE, null=True)


