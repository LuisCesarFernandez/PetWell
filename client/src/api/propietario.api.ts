import axios, { AxiosResponse } from "axios";

interface Propietario {
  id_usuario: number;
  id_mascota: number;
}

const apiPropietario = axios.create({
  baseURL: "http://127.0.0.1:8000/petwell/api/propietario/",
});

export const getAllPropietario = () => apiPropietario.get("/");

export const postPropietario = (
  propietario: Propietario
): Promise<AxiosResponse<Propietario>> => apiPropietario.post("/", propietario);
