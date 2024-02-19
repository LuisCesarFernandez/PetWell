import axios, {AxiosResponse} from 'axios'

export interface User {
    nombre_usuario: string;
    apellido_usuario: string;
    telefono: string;
    direccion: string;
    dni: string;
    contraseña: string;
}


const usuarioApi = axios.create({
    baseURL:'http://127.0.0.1:8000/petwell/api/usuario/',
})

export const getAllUsuarios = () => usuarioApi.get("/");

export const createUsuario = (usuario: User): Promise<AxiosResponse<User>> => usuarioApi.post("", usuario);