import { useForm } from 'react-hook-form'
import { Pet, createMascota } from '../api/mascota.api'
import { Label } from '../components/Label'

export function Mascota() {

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = handleSubmit(async data => {

    const mascotaData: Pet = {
      nombre_mascota: data.nombre,
      especie: data.especie,
      raza: data.raza,
      genero: data.genero,
      edad: data.edad,
    }

    const res = await createMascota(mascotaData);

    console.log(res)

    reset()
  })

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registre a su mascota
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <Label htmlFor='nombre'>
                Nombre de la Mascota
              </Label>
              <div className="mt-2">
                <input
                  id="nombre"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("nombre", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='especie'>
                Especie de la mascota
              </Label>
              <div className="mt-2">
                <input
                  id="especie"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("especie", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='raza'>
                Raza de la Mascota
              </Label>
              <div className="mt-2">
                <input
                  id="raza"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("raza", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='genero'>
                Genero de la Mascota
              </Label>
              <div className="mt-2">
                <input
                  id="genero"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("genero", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='edad'>
                Edad de la Mascota
              </Label>
              <div className="mt-2">
                <input
                  id="edad"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("edad", { required: true })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
