from .serializers import LabelSerializer, MusicianSerializer, ProfileSerializer
from .models import Label, Musician, Profile

import json
from django.core import serializers
from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.decorators import list_route

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

    @list_route(methods = ['put'])
    def upvote(self, request, pk=None) :
        id = request.GET.get('id')
        if int(id) > 0 :
            musician = Musician.objects.get(id=int(id))
            if musician is not None :
                musician.votes += 1
                musician.save()
                obj_json = serializers.serialize('json', [musician, ])
                struct = json.loads(obj_json)
                data = json.dumps(struct[0])
                return HttpResponse(data, content_type='application/json')
            else :
                return HttpResponse(status=400)
        else :
            return HttpResponse(status=400)

class ProfileViewSet(viewsets.ModelViewSet) :
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = (DjangoFilterBackend, )
    filter_fields = ('musician', )