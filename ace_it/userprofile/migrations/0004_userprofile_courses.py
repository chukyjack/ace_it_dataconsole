# Generated by Django 2.2 on 2020-01-24 03:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course', '0001_initial'),
        ('userprofile', '0003_userprofile_phone_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='courses',
            field=models.ManyToManyField(to='course.Course'),
        ),
    ]