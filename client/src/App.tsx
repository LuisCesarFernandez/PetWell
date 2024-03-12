import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Usuario } from './pages/Usuario'
import { Mascota } from './pages/Mascota'
import { ListUsuario } from './pages/ListUsuario'
import { ListMascota } from './pages/ListMascota'
import {Home} from './pages/Home'
import {Navbar} from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/registrar-usuario' element={<Usuario />} />
        <Route path='/listar-usuario' element={<ListUsuario />} />
        <Route path='/listar-mascota' element={<ListMascota />} />
        <Route path='/registrar-Mascota' element={<Mascota />} />
      </Routes>
    </Router>
  )
}

export default App
