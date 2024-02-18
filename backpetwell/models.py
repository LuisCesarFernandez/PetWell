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
