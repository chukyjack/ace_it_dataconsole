# Generated by Django 2.2 on 2020-06-20 21:28

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0022_sessionunit'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sessionunit',
            name='student',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='session_unit', to=settings.AUTH_USER_MODEL),
        ),
    ]
