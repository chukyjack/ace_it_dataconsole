from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course
from common.models import Timeslot
# Create your models here.
MyUser = get_user_model()


class Session(models.Model):
    online = 1
    offline = 2
    types = (
        (online, 'Online'),
        (offline,'Offline')
    )
    student = models.ForeignKey(MyUser, related_name='student', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_assigned = models.BooleanField(default=False)
    tutor = models.ForeignKey(MyUser, related_name='tutor', on_delete=models.CASCADE, null=True)
    duration = models.PositiveIntegerField()
    location = models.TextField()
    type = models.PositiveIntegerField(choices=types)
    time_slot = models.ForeignKey(Timeslot,on_delete=models.CASCADE)

