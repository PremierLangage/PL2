# Generated by Django 4.0.4 on 2022-05-03 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pl_user', '0002_user_avatar'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='full_name',
            new_name='first_name',
        ),
        migrations.AddField(
            model_name='user',
            name='last_name',
            field=models.CharField(max_length=20000, null=True),
        ),
    ]
