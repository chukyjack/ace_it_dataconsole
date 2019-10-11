# Generated by Django 2.2.5 on 2019-09-27 05:21

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0004_auto_20190927_0520'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='tutor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tutor', to=settings.AUTH_USER_MODEL),
        ),
    ]
