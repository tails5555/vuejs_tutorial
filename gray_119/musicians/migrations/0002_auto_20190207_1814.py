# Generated by Django 2.1.2 on 2019-02-07 09:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('musicians', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='musician',
            name='main_label',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='musicians.Label'),
        ),
    ]
