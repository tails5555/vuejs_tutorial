from django.db import models
from musicians.models import Musician

class Lyric(models.Model) :
    id = models.AutoField(primary_key=True)
    musician = models.OneToOneField(Musician, on_delete=models.CASCADE)
    context = models.TextField(null=False)