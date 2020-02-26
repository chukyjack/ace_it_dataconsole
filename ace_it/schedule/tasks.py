from celery import shared_task
from django.contrib.auth import get_user_model
from schedule.models import Schedule
from util.utils import send_email_to_user
MyUser = get_user_model()

@shared_task
def send_appointment_notification():
    # user = MyUser.objects.get(id=receiver_id)
    # schedule = Schedule.objects.get(id=schedule_id)
    return 5667
