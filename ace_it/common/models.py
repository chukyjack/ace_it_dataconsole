from django.db import models
from django.contrib.auth import get_user_model
from session.models import Session, SessionInterest

MyUser = get_user_model()
# Create your models here.


class Timeslot(models.Model):
    SUNDAY = 'SUNDAY'
    MONDAY = 'MONDAY'
    TUESDAY = 'TUESDAY'
    WEDNESDAY = 'WEDNESDAY'
    THURSDAY = 'THURSDAY'
    FRIDAY = 'FRIDAY'
    SATURDAY = 'SATURDAY'
    DAYS = (
        (SUNDAY, SUNDAY),
        (MONDAY, MONDAY),
        (TUESDAY, TUESDAY),
        (WEDNESDAY, WEDNESDAY),
        (THURSDAY, THURSDAY),
        (FRIDAY, FRIDAY),
        (SATURDAY, SATURDAY)
    )
    start_time = models.TimeField(null=True)
    end_time = models.TimeField(null=True)
    day = models.CharField(choices=DAYS, max_length=255, null=True)

    class Meta:
        # unique_together = ['owner','start_time', 'end_time']
        abstract = True


class StudentsAvailability(Timeslot):

    session = models.ForeignKey(Session, on_delete=models.CASCADE, blank=True, null=True, related_name= 'students_availability')

    class Meta:
        # unique_together = ['owner','start_time', 'end_time']
        app_label = 'common'
        db_table = 'students_availability'

    def __str__(self):
        return '{0} from {1} to {2}'.format(self.day, self.start_time, self.end_time)


class PreferredAvailability(Timeslot):

    session_interest = models.ForeignKey(SessionInterest, on_delete=models.CASCADE, blank=True, null=True)

    class Meta:
        # unique_together = ['owner','start_time', 'end_time']
        app_label = 'common'
        db_table = 'preffered_availability'

    def __str__(self):
        return '{0} from {1} to {2}'.format(self.day, self.start_time, self.end_time)


