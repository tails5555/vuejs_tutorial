from .serializers import LyricSerializer
from .models import Lyric

from rest_framework import viewsets
from rest_framework.filters import SearchFilter

class LyricViewSet(viewsets.ModelViewSet) :
    queryset = Lyric.objects.all()
    serializer_class = LyricSerializer
    filter_backends = (SearchFilter, )
    search_fields = ('context', )