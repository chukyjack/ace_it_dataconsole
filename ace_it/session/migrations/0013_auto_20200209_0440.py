# Generated by Django 2.2 on 2020-02-09 04:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('session', '0012_auto_20200205_0621'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='session',
            name='interested_tutors',
        ),
        migrations.AddField(
            model_name='session',
            name='level',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.CreateModel(
            name='SessionInterest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('session', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='session.Session')),
                ('tutor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'session_interest',
                'unique_together': {('tutor', 'session')},
            },
        ),
    ]
