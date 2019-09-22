from django.db import models
from django.contrib.auth import get_user_model

MyUser = get_user_model()
# Create your models here.


class Timeslot(models.Model):
    owner = models.ForeignKey(MyUser,on_delete=models.CASCADE)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    class Meta:
        # unique_together = ['ownwer','start_time', 'end_time']
        app_label = 'common'
        db_table = 'time_slot'
