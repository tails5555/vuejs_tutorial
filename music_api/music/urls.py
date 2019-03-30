from django.urls import path, include
from .views import MusicViewSet, GenreViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('music', MusicViewSet)
router.register('genre', GenreViewSet)

urlpatterns = [
    path('', include(router.urls)),
]