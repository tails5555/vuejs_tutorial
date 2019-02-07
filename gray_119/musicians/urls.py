from django.urls import path, include
from .views import LabelViewSet, MusicianViewSet, ProfileViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('label', LabelViewSet)
router.register('musician', MusicianViewSet)
router.register('profile', ProfileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]