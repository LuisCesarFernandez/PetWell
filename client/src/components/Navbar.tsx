import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <>
            <nav>
                <li>
                    <ul>
                        <Link to="/listar-usuario">PetWell</Link>
                    </ul>
                    <ul>Sedes</ul>
                    <ul>Sacar Cita</ul>
                    <ul>Configuración de su cuenta</ul>
                    <div>
                        <div>
                            <button className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded'>Registrar</button>
                        </div>

                        <div>
                            <button className='bg-green-400 hover:bg-green-600 py-1 px-2 rounded'>Ingresar</button>
                        </div>
                    </div>
                </li>
            </nav>
        </>
    )
}