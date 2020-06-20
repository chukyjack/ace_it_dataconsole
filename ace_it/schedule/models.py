from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course
from django.core.exceptions import ValidationError


MyUser = get_user_model()

# Create your models here.

class Schedule(models.Model):
    online = 1
    offline = 2
    types = (
        (online, 'Online'),
        (offline, 'Offline')
    )
    pending = 0
    confirmed = 1
    completed = 2
    statuses = (
        (pending, 'Pending'),
        (confirmed, 'Confirmed')
    )
    student = models.ForeignKey(MyUser, related_name='students', on_delete=models.CASCADE, blank=True, null=True)
    subject = models.ForeignKey(Course, on_delete=models.CASCADE)
    tutor = models.ForeignKey(MyUser, related_name='tutors', on_delete=models.CASCADE, blank=True, null=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)
    location = models.TextField(blank=True, null=True)
    type = models.PositiveIntegerField(choices=types, null=True, blank=True)
    material = models.FileField(null=True, blank=True, upload_to='lesson_materials')
    status = models.PositiveIntegerField(choices=statuses, default=pending)
    requested_by = models.ForeignKey(MyUser, related_name='requested_by', on_delete=models.CASCADE, blank=True, null=True)
    is_billed = models.BooleanField(default=False)


    # def save(self, *args, **kwargs):
    #     # if self.tutor.userprofile.role != 'tutor' or self.student.userprofile.role != 'student':
    #     #         raise ValidationError('Invalid student or tutor assignment')
    #     super().save(*args, **kwargs)
    #     self.clean_fields()
    def __str__(self):
        return '{0} appointment for {1} by {2}'.format(self.subject.name, self.student.username, self.tutor.username)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
