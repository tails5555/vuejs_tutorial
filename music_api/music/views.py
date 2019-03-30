from .serializers import MusicSerializer, GenreSerializer
from .models import Music, Genre

import json

from django.core import serializers
from django.http import HttpResponse

from rest_framework.decorators import list_route
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

    @list_route(methods = ['put'])
    def give_heart(self, request, pk=None) :
        id = request.GET.get('id')
        if int(id) > 0 :
            music = Music.objects.get(id=int(id))
            if music is not None :
                music.hearts += 1
                music.save()
                obj_json = serializers.serialize('json', [music, ])
                struct = json.loads(obj_json)
                data = json.dumps(struct[0])
                return HttpResponse(data, content_type='application/json')
            else :
                return HttpResponse(status=400)
        else :
            return HttpResponse(status=400)

class GenreViewSet(viewsets.ModelViewSet) :
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

