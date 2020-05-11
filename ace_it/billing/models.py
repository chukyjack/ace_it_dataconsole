from django.db import models
from schedule.models import Schedule
from django.contrib.auth import get_user_model
User = get_user_model()


class Bill(models.Model):
    # student = models.ForeignKey(User, related_name='student_bill', on_delete=models.SET_NULL, null=True)
    # tutor = models.ForeignKey(User, related_name='tutor_invoice', on_delete=models.SET_NULL, null=True)
    schedule = models.OneToOneField(Schedule, on_delete=models.SET_NULL, null=True)
    amount = models.PositiveIntegerField()
    extra_info = models.TextField(null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    bill_date = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.schedule and not self.schedule.is_billed:
            self.schedule.is_billed = True
            self.schedule.save()
        return

    def __str__(self):
        return f'Invoice from {self.schedule.tutor.username} to {self.schedule.student.username}'
