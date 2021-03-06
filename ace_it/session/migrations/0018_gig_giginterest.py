# Generated by Django 2.2 on 2020-03-07 23:58

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('session', '0017_auto_20200211_0018'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gig',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField(null=True)),
                ('files', models.FileField(blank=True, null=True, upload_to='')),
                ('status', models.CharField(choices=[('New', 'New'), ('Assigned', 'Assigned'), ('Completed', 'Completed')], default='New', max_length=255)),
                ('pay', models.PositiveIntegerField(null=True)),
                ('deadline', models.DateTimeField(blank=True, null=True)),
                ('owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'gig',
            },
        ),
        migrations.CreateModel(
            name='GigInterest',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('gig', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gig_interest', to='session.Gig')),
                ('tutor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gig_interest', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'gig_interest',
                'unique_together': {('tutor', 'gig')},
            },
        ),
    ]
