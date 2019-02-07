from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api/artist/', include('musicians.urls')),
    url(r'^api/music/', include('lyrics.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
