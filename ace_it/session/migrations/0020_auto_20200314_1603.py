# Generated by Django 2.2 on 2020-03-14 16:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0019_gigfile'),
    ]

    operations = [
        migrations.RenameField(
            model_name='gigfile',
            old_name='files',
            new_name='file',
        ),
        migrations.RemoveField(
            model_name='gig',
            name='files',
        ),
    ]
