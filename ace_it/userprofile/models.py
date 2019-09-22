from django.db import models
from django.contrib.auth import get_user_model

MyUser = get_user_model()
# Create your models here.


class UserProfile(models.Model):
    car = 1
    bike = 2
    public_transportation =3
    transportation_choices = (
        (car,'Car'),
        (bike,'Bike'),
        (public_transportation, 'Public Transportation')
    )
    distance = (
        (10, '10'), (15, '15'), (20, '20'),
        (25, '25'), (30, '30'), (35, '35'),
        (40, '40'), (45, '45'), (50, '50')
    )
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    address = models.TextField(null=True)
    # phone_number = models.CharField(null=True)
    personal_statement = models.TextField(null=True)
    hobbies = models.TextField(null=True)
    transportation = models.PositiveIntegerField(choices=transportation_choices)
    send_more_students = models.BooleanField(default=False)
    send_text = models.BooleanField(default=True)
    max_distance = models.PositiveIntegerField(choices=distance)
