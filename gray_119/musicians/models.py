from django.db import models

class Label(models.Model) :
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=20, null=False, default='')

class Musician(models.Model) :
    id = models.AutoField(primary_key=True)
    aka_name = models.CharField(max_length=20, null=False, default='')
    main_name = models.CharField(max_length=10, null=False, default='')
    main_label = models.ForeignKey(Label, on_delete=models.CASCADE)
    birthday = models.DateField()
    votes = models.IntegerField(null=False, default=0)

class Profile(models.Model) :
    musician = models.OneToOneField(Musician, on_delete=models.CASCADE)
    img_file = models.ImageField(upload_to='musician/main', default='musician/main/default_image.jpg')