# Generated by Django 2.2 on 2020-02-04 02:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0002_timeslot_owner'),
    ]

    operations = [
        migrations.AddField(
            model_name='timeslot',
            name='day',
            field=models.CharField(choices=[('SUNDAY', 'SUNDAY'), ('MONDAY', 'MONDAY'), ('TUESDAY', 'TUESDAY'), ('WEDNESDAY', 'WEDNESDAY'), ('THURSDAY', 'THURSDAY'), ('FRIDAY', 'FRIDAY'), ('SATURDAY', 'SATURDAY')], max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='timeslot',
            name='end_time',
            field=models.TimeField(),
        ),
        migrations.AlterField(
            model_name='timeslot',
            name='start_time',
            field=models.TimeField(),
        ),
    ]
