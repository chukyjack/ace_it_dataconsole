# Generated by Django 2.2 on 2020-02-09 04:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0013_auto_20200209_0440'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sessioninterest',
            name='session',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='session_interest', to='session.Session'),
        ),
        migrations.AlterField(
            model_name='sessioninterest',
            name='tutor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='session_interest', to=settings.AUTH_USER_MODEL),
        ),
    ]
