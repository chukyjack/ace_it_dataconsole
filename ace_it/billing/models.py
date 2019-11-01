from django.db import models
from schedule.models import Schedule
from django.contrib.auth import get_user_model
User = get_user_model()


class Bill(models.Model):
    student = models.ForeignKey(User, related_name='student_bill', on_delete=models.SET_NULL, null=True)
    tutor = models.ForeignKey(User, related_name='tutor_invoice', on_delete=models.SET_NULL, null=True)
    schedule = models.OneToOneField(Schedule, on_delete=models.SET_NULL, null=True)
    amount = models.PositiveIntegerField()
    is_paid = models.BooleanField(default=False)
