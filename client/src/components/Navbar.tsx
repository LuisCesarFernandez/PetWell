import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className='bg-blue-300 py-5'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link className='text-black font-bold mr-2' to="/listar-usuario">PetWell</Link>
                    <ul className='ml-6 space-x-4 flex'>
                        <li>Sedes</li>
                        <li>Sacar Cita</li>
                        <li>Configuración de su cuenta</li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div>
                        <button className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded mr-4'>Registrar</button>
                    </div>

                    <div>
                        <button className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded'>Ingresar</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}