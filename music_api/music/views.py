from .serializers import MusicSerializer, GenreSerializer
from .models import Music, Genre

from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

class MusicViewSet(viewsets.ModelViewSet) :
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter, OrderingFilter)
    filter_fields = ('genre', )
    search_fields = ('title', 'singer', )
    ordering_fields = ('title', 'singer', 'year', )

class GenreViewSet(viewsets.ModelViewSet) :
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

