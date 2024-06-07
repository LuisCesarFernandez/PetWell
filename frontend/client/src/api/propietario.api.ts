import axios, { AxiosResponse } from "axios";

export interface Propiet {
  id_usuario: number;
  id_mascota: number;
}

const apiPropietario = axios.create({
  baseURL: "http://127.0.0.1:8000/petwell/api/propietario/",
});

export const getAllPropietario = () => apiPropietario.get("/");

export const postPropietario = (
  propietario: Propiet
): Promise<AxiosResponse<Propiet>> => apiPropietario.post("/", propietario);
