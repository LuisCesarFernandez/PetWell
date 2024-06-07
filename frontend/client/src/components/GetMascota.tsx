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
        <div className='w-[90%] max-w-[1400px] my-5 mx-auto md:grid md:grid-cols-3 md:gap-3.75'>
            {mascota.map(mascota => (
                <article key={mascota.id_mascota} className='mb-2 md:mb-0 md:flex mb:flex-col rounded-t-lg bg-white p-2'>
                    <div>
                        <p>{mascota.nombre_mascota}</p>
                        <p>{mascota.especie}</p>
                        <p>{mascota.raza}</p>
                        <p>{mascota.genero}</p>
                        <p>{mascota.edad}</p>
                    </div>
                </article>
            ))}
        </div>
    )
}