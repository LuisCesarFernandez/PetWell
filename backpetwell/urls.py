from django.urls import path, include
from rest_framework import routers
from backpetwell import views

router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioView, 'usuario')

urlpatterns = [
    path("api/", include(router.urls))
]