# Generated by Django 5.0.2 on 2024-03-25 21:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backpetwell', '0002_mascota_propietariomascota'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='propietariomascota',
            table='propietario',
        ),
    ]