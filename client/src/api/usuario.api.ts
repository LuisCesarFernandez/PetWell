import axios from 'axios'

export const getAllUsuarios = () => {
    return axios.get('http://127.0.0.1:8000/petwell/api/usuario/')
}