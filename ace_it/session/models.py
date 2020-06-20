from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course

# Create your models here.
from session.constants import LOW_BALANCE_THRESHOLD

MyUser = get_user_model()

def user_gig_directory_path(instance, filename):

    # file will be uploaded to MEDIA_ROOT / user_<id>/<filename>
    return 'user_{0}_gig_{1}/{2}'.format(instance.gig.owner_id, instance.gig.id, filename)

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


class SessionUnit(models.Model):
    student = models.OneToOneField(MyUser, on_delete=models.CASCADE, related_name='session_unit')
    value = models.DecimalField(max_digits=6, decimal_places=2, default=0)

    def is_low(self):
        return self.value <= LOW_BALANCE_THRESHOLD

    def __str__(self):
        return f'Tutoring unit for {self.student.first_name} {self.student.last_name}'


class Gig(models.Model):
    NEW = 'New'
    ASSIGNED = 'Assigned'
    COMPLETED = 'Completed'
    PROJECT = 'Project'
    ESSAY = 'Essay'
    HOMEWORK = 'Home work'
    STATUSES = (
        (NEW, NEW),
        (ASSIGNED, ASSIGNED),
        (COMPLETED, COMPLETED)
    )
    TYPES = (
        (PROJECT, PROJECT),
        (ESSAY, ESSAY),
        (HOMEWORK, HOMEWORK)
    )
    owner = models.ForeignKey(MyUser, on_delete=models.CASCADE)
    description = models.TextField(null=True)
    # files = models.FileField(null=True, blank=True)
    status = models.CharField(choices=STATUSES, default=NEW, max_length=255)
    type = models.CharField(choices=TYPES, default=HOMEWORK, max_length=255)
    pay = models.PositiveIntegerField(null=True)
    deadline = models.DateTimeField(null=True, blank=True)

    class Meta:
        app_label = 'session'
        db_table = 'gig'


class GigFile(models.Model):
    gig = models.ForeignKey(Gig, on_delete=models.CASCADE, related_name='gig_file')
    file = models.FileField(null=True, blank=True, upload_to=user_gig_directory_path)


class GigInterest(models.Model):
    tutor = models.ForeignKey(MyUser, on_delete=models.CASCADE, related_name='gig_interest')
    gig = models.ForeignKey(Gig, on_delete=models.CASCADE, related_name='gig_interest')

    class Meta:
        app_label = 'session'
        db_table = 'gig_interest'
        unique_together = ['tutor', 'gig']


