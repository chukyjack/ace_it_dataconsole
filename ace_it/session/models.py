from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course

# Create your models here.
MyUser = get_user_model()


class Session(models.Model):
    online = 1
    offline = 2
    types = (
        (online, 'Online'),
        (offline,'Offline')
    )
    student = models.ForeignKey(MyUser, related_name='student', on_delete=models.CASCADE, blank=True, null=True)
    subject = models.ForeignKey(Course, on_delete=models.CASCADE)
    is_assigned = models.BooleanField(default=False)
    tutor = models.ForeignKey(MyUser, related_name='tutor', on_delete=models.CASCADE, blank=True, null=True)
    duration = models.PositiveIntegerField()
    location = models.TextField()
    type = models.PositiveIntegerField(choices=types)
    details = models.TextField(null=True, blank=True)
    distance = models.PositiveIntegerField(null=True, blank=True)
    start_date = models.DateField(auto_now_add=True)
    # interested_tutors = models.ManyToManyField(MyUser, related_name='interested_tutors', blank=True)
    frequency = models.CharField(max_length=255, null=True, blank=True)
    level = models.CharField(max_length=255, null=True, blank=True)
    has_materials = models.BooleanField(default=False)
    additional_notes = models.TextField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.tutor:
            self.is_assigned = True
        super().save()


class SessionContract(models.Model):
    tutor = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name='tutor_contract')
    student = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name='student_contract')
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='session_contract')

    class Meta:
        app_label = 'session'
        unique_together = ['tutor', 'student', 'session']
        db_table = 'session_contract'


class SessionInterest(models.Model):
    tutor = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name='session_interest')
    session = models.ForeignKey(Session, on_delete=models.CASCADE, related_name='session_interest')

    class Meta:
        app_label = 'session'
        db_table = 'session_interest'
        unique_together = ['tutor', 'session']


