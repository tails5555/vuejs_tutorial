# Generated by Django 2.1.2 on 2019-02-07 09:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('musicians', '0002_auto_20190207_1814'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='labelphoto',
            name='label',
        ),
        migrations.DeleteModel(
            name='LabelPhoto',
        ),
    ]
