from django.urls import path, include
from .views import LyricViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('lyric', LyricViewSet)

urlpatterns = [
    path('', include(router.urls)),
]