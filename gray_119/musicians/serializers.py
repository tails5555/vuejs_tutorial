from rest_framework import serializers
from .models import Label, Musician, Profile

class LabelSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Label
        fields = ('id', 'name', )

class MusicianSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Musician
        fields = ('id', 'aka_name', 'main_name', 'main_label', 'birthday', 'votes',)

class ProfileSerializer(serializers.ModelSerializer) :
    class Meta :
        model = Profile
        fields = ('musician', 'img_file', )