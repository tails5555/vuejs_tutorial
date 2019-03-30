from rest_framework import serializers
from .models import Music, Genre

class MusicSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Music
        fields = ('id', 'title', 'singer', 'year', 'genre',)

class GenreSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Genre
        fields = ('id', 'name',)