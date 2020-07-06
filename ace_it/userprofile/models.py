from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course

MyUser = get_user_model()
# Create your models here.


class UserProfile(models.Model):
    car = 1
    bike = 2
    public_transportation = 3
    staff = 'staff'
    tutor = 'tutor'
    student = 'student'
    transportation_choices = (
        (car, 'Car'),
        (bike, 'Bike'),
        (public_transportation, 'Public Transportation')
    )
    distance = (
        (10, '10'), (15, '15'), (20, '20'),
        (25, '25'), (30, '30'), (35, '35'),
        (40, '40'), (45, '45'), (50, '50')
    )
    role_choices = (
        (staff, staff),
        (tutor, tutor),
        (student, student)
    )
    user = models.OneToOneField(MyUser, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, null=True)
    last_name = models.CharField(max_length=255, null=True)
    address = models.TextField(null=True)
    phone_number = models.CharField(max_length=255, null=True)
    personal_statement = models.TextField(null=True)
    hobbies = models.TextField(null=True)
    transportation = models.PositiveIntegerField(choices=transportation_choices, default=car)
    send_more_students = models.BooleanField(default=False)
    send_text = models.BooleanField(default=True)
    max_distance = models.PositiveIntegerField(choices=distance, default=10)
    role = models.CharField(choices=role_choices, default='staff', max_length=255)
    courses = models.ManyToManyField(to=Course, through='RegisteredCourses')
    level = models.CharField(max_length=255, null=True, blank=True)


    @property
    def preferred_contact(self):
        return self.phone_number or self.user.email

    def save(self, *args, **kwargs):
        if self.role != self.student:
            self.level = None
        super().save(*args, **kwargs)


class RegisteredCourses(models.Model):

    PENDING = 'Pending'
    APPROVED = 'Approved'
    STATUSES = (
        (PENDING, PENDING),
        (APPROVED, APPROVED)
    )

    userprofile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    status = models.CharField(choices=STATUSES, default=PENDING, max_length=255)

