# Generated by Django 2.2 on 2020-03-22 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0020_auto_20200314_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='gig',
            name='type',
            field=models.CharField(choices=[('Project', 'Project'), ('Essay', 'Essay'), ('Home work', 'Home work')], default='Home work', max_length=255),
        ),
    ]
