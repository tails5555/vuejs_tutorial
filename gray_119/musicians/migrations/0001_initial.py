# Generated by Django 2.1.2 on 2019-02-07 08:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Label',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='LabelPhoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_file', models.ImageField(default='label/main/default_image.jpg', upload_to='label/main')),
                ('label', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='musicians.Label')),
            ],
        ),
        migrations.CreateModel(
            name='Musician',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('aka_name', models.CharField(default='', max_length=20)),
                ('main_name', models.CharField(default='', max_length=10)),
                ('birthday', models.DateField()),
                ('main_label', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='musicians.Label')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img_file', models.ImageField(default='musician/main/default_image.jpg', upload_to='musician/main')),
                ('musician', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='musicians.Label')),
            ],
        ),
    ]
