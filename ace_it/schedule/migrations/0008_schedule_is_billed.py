# Generated by Django 2.2 on 2020-04-05 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0007_schedule_requested_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='schedule',
            name='is_billed',
            field=models.BooleanField(default=False),
        ),
    ]