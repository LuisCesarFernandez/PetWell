import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Usuario} from './pages/Usuario'
import {ListUsuario} from './pages/ListUsuario'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/registrar' element={<Usuario/>}/>
        <Route path='/listar-usuario' element={<ListUsuario/>}/>
      </Routes>
    </Router>
  )
}

export default App
