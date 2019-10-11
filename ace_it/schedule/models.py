from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course

MyUser = get_user_model()

# Create your models here.

class Schedule(models.Model):
    online = 1
    offline = 2
    types = (
        (online, 'Online'),
        (offline,'Offline')
    )
    student = models.ForeignKey(MyUser, related_name='students', on_delete=models.CASCADE, blank=True, null=True)
    subject = models.ForeignKey(Course, on_delete=models.CASCADE)
    tutor = models.ForeignKey(MyUser, related_name='tutors', on_delete=models.CASCADE, blank=True, null=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()
    location = models.TextField(blank=True, null=True)
    type = models.PositiveIntegerField(choices=types)
    material = models.FileField(null=True, blank=True, upload_to='lesson_materials')
