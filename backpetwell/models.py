from django.db import models

# Create your models here.

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nombre_usuario = models.CharField(max_length=50)
    apellido_usuario = models.CharField(max_length=100)
    telefono = models.CharField(max_length=9)
    direccion = models.CharField(max_length=100)
    dni = models.CharField(max_length=8)
    contraseña = models.CharField(max_length=30)

    class Meta:
        db_table = 'usuario'

class Mascota(models.Model):
    id_mascota = models.AutoField(primary_key=True)
    nombre_mascota = models.CharField(max_length=100)
    especie = models.CharField(max_length=20)
    raza = models.CharField(max_length=35)
    genero = models.CharField(max_length=10)
    edad = models.CharField(max_length=3)
    vacunas = models.BooleanField

    class Meta:
        db_table = 'mascota'

class PropietarioMascota(models.Model):
    id_propietario = models.AutoField(primary_key=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)