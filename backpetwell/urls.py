from django.urls import path, include
from rest_framework import routers
from backpetwell import views

router = routers.DefaultRouter()
router.register(r'usuario', views.UsuarioView, 'usuario')
router.register(r'mascota',views.MascotaView, 'mascota')

urlpatterns = [
    path("api/", include(router.urls))
]