from django.db.models.signals import post_save
from django.dispatch import receiver
from session.models import SessionContract, Session
from schedule.tasks import send_appointment_notification
from app.celery import debug_task

@receiver(post_save, sender=Session)
def create_session_contract(sender, instance, **kwargs):
    SessionContract.objects.get_or_create(student=instance.student, tutor=instance.tutor, session=instance)
