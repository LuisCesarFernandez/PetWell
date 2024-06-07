# Generated by Django 5.0.2 on 2024-05-15 02:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backpetwell', '0003_alter_propietariomascota_table'),
    ]

    operations = [
        migrations.CreateModel(
            name='Veterinario',
            fields=[
                ('id_veterinario', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_vet', models.CharField(max_length=50)),
                ('apellido_vet', models.CharField(max_length=70)),
                ('almamater', models.CharField(max_length=70)),
                ('telefono', models.CharField(max_length=9)),
            ],
        ),
        migrations.CreateModel(
            name='Vacunacion',
            fields=[
                ('id_vacuna', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('tipo_vacuna', models.CharField(max_length=50)),
                ('id_mascota', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.mascota')),
                ('id_veterinario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.veterinario')),
            ],
        ),
        migrations.CreateModel(
            name='HistorialMedico',
            fields=[
                ('id_historial', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('diagnostico', models.CharField(max_length=255)),
                ('id_mascota', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.mascota')),
                ('id_veterinario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.veterinario')),
            ],
        ),
        migrations.CreateModel(
            name='Cita',
            fields=[
                ('id_cita', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateField()),
                ('hora', models.TimeField()),
                ('id_mascota', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.mascota')),
                ('id_usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.usuario')),
                ('id_veterinario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backpetwell.veterinario')),
            ],
        ),
    ]