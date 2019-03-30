from django.urls import path, include
from .views import MusicViewSet, GenreViewSet, MusicPageViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('music', MusicViewSet)
router.register('genre', GenreViewSet)
router.register('music_page', MusicPageViewSet)
urlpatterns = [
    path('', include(router.urls)),
]