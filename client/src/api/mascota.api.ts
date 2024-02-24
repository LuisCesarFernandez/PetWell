import axios, { AxiosResponse } from "axios";

export interface Pet {
  nombre_mascota: string;
  especie: string;
  raza: string;
  genero: string;
  edad: string;
}

const mascotaApi = axios.create({
  baseURL: "http://127.0.0.1:8000/petwell/api/mascota/",
});

export const getAllMascota = () => mascotaApi.get("/");

export const createMascota = (mascota:Pet):Promise<AxiosResponse<Pet>> => mascotaApi.post("/", mascota);
