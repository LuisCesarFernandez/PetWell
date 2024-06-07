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
      <div className='w-[90%] max-w-[1400px] my-5 mx-auto md:grid md:grid-cols-3 md:gap-3.75'>
        {usuarios.map(usuario => (
          <article key={usuario.id_usuario} className='mb-2 md:mb-0 md:flex md:flex-col rounded-t-lg bg-white'>
              <div className='p-3'>
                <p>{usuario.nombre_usuario}</p>
                <p>{usuario.apellido_usuario}</p>
                <p>{usuario.telefono}</p>
                <p>{usuario.direccion}</p>
                <p>{usuario.dni}</p>
              </div>
          </article>))}
      </div>
    )
  }