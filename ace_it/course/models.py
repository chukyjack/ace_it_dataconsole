from django.db import models

# Create your models here.


class Course(models.Model):
    name = models.CharField(max_length=250)
    level = models.PositiveIntegerField()

    def __str__(self):
        return self.name
