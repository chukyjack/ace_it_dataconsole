# Generated by Django 2.2 on 2020-02-11 00:18

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('session', '0016_sessioncontract_session'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='sessioncontract',
            unique_together={('tutor', 'student', 'session')},
        ),
    ]
