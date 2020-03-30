# Generated by Django 2.2 on 2020-02-09 04:40

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0013_auto_20200209_0440'),
        ('common', '0012_timeslot'),
    ]

    operations = [
        migrations.CreateModel(
            name='PreferredAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField(null=True)),
                ('end_time', models.TimeField(null=True)),
                ('day', models.CharField(choices=[('SUNDAY', 'SUNDAY'), ('MONDAY', 'MONDAY'), ('TUESDAY', 'TUESDAY'), ('WEDNESDAY', 'WEDNESDAY'), ('THURSDAY', 'THURSDAY'), ('FRIDAY', 'FRIDAY'), ('SATURDAY', 'SATURDAY')], max_length=255, null=True)),
                ('session_interest', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='session.SessionInterest')),
            ],
            options={
                'db_table': 'preffered_availability',
            },
        ),
        migrations.CreateModel(
            name='StudentsAvailability',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('start_time', models.TimeField(null=True)),
                ('end_time', models.TimeField(null=True)),
                ('day', models.CharField(choices=[('SUNDAY', 'SUNDAY'), ('MONDAY', 'MONDAY'), ('TUESDAY', 'TUESDAY'), ('WEDNESDAY', 'WEDNESDAY'), ('THURSDAY', 'THURSDAY'), ('FRIDAY', 'FRIDAY'), ('SATURDAY', 'SATURDAY')], max_length=255, null=True)),
                ('session', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='session.Session')),
            ],
            options={
                'db_table': 'students_availability',
            },
        ),
        migrations.DeleteModel(
            name='Timeslot',
        ),
    ]