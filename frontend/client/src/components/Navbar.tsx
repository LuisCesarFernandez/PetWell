import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <nav className='bg-blue-300 py-5'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex items-center'>
                    <Link className='text-black font-bold mr-2' to="/home">PetWell</Link>
                    <ul className='ml-6 space-x-4 flex'>
                        <Link to="listar-usuario">Nuestros Clientes</Link>
                        <Link to="listar-mascota">Pacientes Registrados</Link>
                        <li>Centro de Adopción</li>
                    </ul>
                </div>

                <div className='flex items-center'>
                    <div>
                        <Link to="registrar-usuario" className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded mr-4'>Registrarse</Link>
                    </div>

                    <div>
                        <Link to="/registrar-mascota" className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded'>Registrar Mascota</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}