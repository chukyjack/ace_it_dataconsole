from django.db.models.signals import post_save
from django.dispatch import receiver
from schedule.models import Schedule
from schedule.tasks import send_appointment_notification
from app.celery import debug_task

@receiver(post_save, sender=Schedule)
def appointment_notification(sender, **kwargs):

    send_appointment_notification.delay()
