import {getAllUsuarios} from '../api/usuario.api'
import { useEffect, useState } from 'react'

export function GetUsuario() {

    interface User {
        id_usuario: number;
        nombre_usuario: string;
        apellido_usuario: string;
        telefono: string;
        direccion: string;
        dni: string;
    }

    const [usuarios, setUsuario] = useState<User[]>([]);

    useEffect(() => {
        async function loadUsuario() {
            const res = await getAllUsuarios();
            setUsuario(res.data)
        }
        loadUsuario();
    }, []);

    return (
      <div>
        {usuarios.map(usuario => (
        <div key={usuario.id_usuario}>
            <h1>Mitsuri God</h1>
            <p>{usuario.nombre_usuario}</p>
            <p>{usuario.apellido_usuario}</p>
            <p>{usuario.telefono}</p>
            <p>{usuario.direccion}</p>
            <p>{usuario.dni}</p>
        </div>))}
      </div>
    )
  }