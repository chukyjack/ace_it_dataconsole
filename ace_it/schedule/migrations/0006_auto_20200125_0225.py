# Generated by Django 2.2 on 2020-01-25 02:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule', '0005_auto_20200125_0223'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='type',
            field=models.PositiveIntegerField(blank=True, choices=[(1, 'Online'), (2, 'Offline')], null=True),
        ),
    ]