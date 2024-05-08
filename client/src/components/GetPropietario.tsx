import {getAllPropietario} from '../api/propietario.api'
import {useState, useEffect} from 'react'
import axios from 'axios'

export function GetPropietario() {
    interface Dueño {
        id_propietario: number,
        id_usuario: number,
        id_mascota: number,
        usuarioNombre: String,
        usuarioApellido: String,
        mascotaNombre: String,
    }

    const[propietario, setPropietario] = useState<Dueño[]>([]);

    useEffect(() => {
        async function loadPropietario() {
            const res = await getAllPropietario();
            const propietariosData: Dueño[] = [];

            for(const propietario of res.data){
                const usuarioRes = await obtenerDetalleUsuario(propietario.id_usuario);
                propietariosData.push({
                    ...propietario,
                    usuarioNombre: usuarioRes.nombre_usuario,
                    usuarioApellido: usuarioRes.apellido_usuario,
                });
            }


            setPropietario(propietariosData);
        }
        loadPropietario();
    },[]);

    async function obtenerDetalleUsuario(idUsuario:number) {

        const res = await axios.get(`http://127.0.0.1:8000/petwell/api/usuario/${idUsuario}/`)
        console.log(res.data)

        return res.data
    }

    

  return (
    <section>
        {propietario.map(propietario => (
            <article key={propietario.id_propietario}>
                <h3 className='text-30px font-bold'>Propietarios (Nino God)</h3>
                <p>Usuario: {propietario.usuarioNombre} {propietario.usuarioApellido}</p>
                <p>Mascota: {propietario.id_mascota}</p>
            </article>
        ))}
    </section>
  )
}
