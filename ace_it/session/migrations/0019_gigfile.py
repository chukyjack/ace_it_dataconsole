# Generated by Django 2.2 on 2020-03-08 07:10

from django.db import migrations, models
import django.db.models.deletion
import session.models


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0018_gig_giginterest'),
    ]

    operations = [
        migrations.CreateModel(
            name='GigFile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('files', models.FileField(blank=True, null=True, upload_to=session.models.user_gig_directory_path)),
                ('gig', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='gig_file', to='session.Gig')),
            ],
        ),
    ]
