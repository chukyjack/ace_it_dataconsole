# Generated by Django 2.2 on 2020-01-26 23:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('schedule', '0006_auto_20200125_0225'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='requested_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='requested_by', to=settings.AUTH_USER_MODEL),
        ),
    ]
