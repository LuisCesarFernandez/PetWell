import { getAllMascota } from '../api/mascota.api'
import { useState, useEffect } from 'react'

export function GetMascota() {

    interface Pet {
        id_mascota: number;
        nombre_mascota: string;
        especie: string;
        raza: string;
        genero: string;
        edad: string;
    }

    const [mascota, setMascota] = useState<Pet[]>([]);

    useEffect(() => {
        async function loadMascota() {
            const res = await getAllMascota();
            setMascota(res.data)
        }
        loadMascota();
    }, [])

    return (
        <div>
            {mascota.map(mascota => (
                <div key={mascota.id_mascota}>
                    <h1>Chika God</h1>
                    <p>{mascota.nombre_mascota}</p>
                    <p>{mascota.especie}</p>
                    <p>{mascota.raza}</p>
                    <p>{mascota.genero}</p>
                    <p>{mascota.edad}</p>
                </div>
            ))}
        </div>
    )
}