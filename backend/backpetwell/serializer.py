from rest_framework import serializers
from .models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class MascotaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mascota
        fields = '__all__'

class PropietarioSerializer(serializers.ModelSerializer):   
    class Meta:
        model = PropietarioMascota
        fields = '__all__'