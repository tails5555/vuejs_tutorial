from .serializers import LabelSerializer, MusicianSerializer, ProfileSerializer
from .models import Label, Musician, Profile

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter

class LabelViewSet(viewsets.ModelViewSet) :
    queryset = Label.objects.all()
    serializer_class = LabelSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('name', )
    ordering_fields = ('name', )

class MusicianViewSet(viewsets.ModelViewSet) :
    queryset = Musician.objects.all()
    serializer_class = MusicianSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter,)
    filter_fields = ('main_label', )
    search_fields = ('aka_name', 'main_name', )
    ordering_fields = ('aka_name', 'birthday', )

class ProfileViewSet(viewsets.ModelViewSet) :
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('musician', )