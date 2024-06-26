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

    class Meta:
        db_table = 'propietario'

    def __str__(self):
        return self.id_usuario.nombre_usuario + self.id_mascota.nombre_mascota
    
class Veterinario(models.Model):
    id_veterinario = models.AutoField(primary_key=True)
    nombre_vet = models.CharField(max_length=50)
    apellido_vet = models.CharField(max_length=70)
    almamater = models.CharField(max_length=70)
    telefono = models.CharField(max_length=9)

    class Meta:
        db_table = 'veterinario'

class Vacunacion(models.Model):
    id_vacuna = models.AutoField(primary_key=True)
    fecha = models.DateField()
    tipo_vacuna = models.CharField(max_length=50)
    id_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)
    id_veterinario = models.ForeignKey(Veterinario, on_delete=models.CASCADE)

    class Meta:
        db_table = 'vacunacion'

class HistorialMedico(models.Model):
    id_historial = models.AutoField(primary_key=True)
    fecha = models.DateField()
    diagnostico = models.CharField(max_length=255)
    tratamiento = models.TextField
    observaciones = models.TextField
    id_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)
    id_veterinario = models.ForeignKey(Veterinario, on_delete=models.CASCADE)

    class Meta:
        db_table = 'historial_medico'

class Cita(models.Model):
    id_cita = models.AutoField(primary_key=True)
    fecha = models.DateField()
    hora = models.TimeField()
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)
    id_veterinario = models.ForeignKey(Veterinario, on_delete=models.CASCADE)

    class Meta:
        db_table = 'cita'