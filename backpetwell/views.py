from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *
from .models import Usuario

# Create your views here.
class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class MascotaView(viewsets.ModelViewSet):
    serializer_class = MascotaSerializer
    queryset = Mascota.objects.all()

class PropietarioView(viewsets.ModelViewSet):
    serializer_class = PropietarioSerializer
    queryset = PropietarioMascota.objects.all()