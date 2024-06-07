import { useForm } from 'react-hook-form'
import { createUsuario, User } from '../api/usuario.api'
import {Label} from '../components/Label'

export function Usuario() {

  const { register, handleSubmit, reset } = useForm()
  
  const onSubmit = handleSubmit(async data => {

    const usuarioData: User = {
      nombre_usuario: data.nombre,
      apellido_usuario: data.apellido,
      telefono: data.telefono,
      direccion: data.direccion,
      dni: data.dni,
      contraseña: data.contraseña,
    }

    const res = await createUsuario(usuarioData);
    console.log(res)

    reset();

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
            Registro de Usuario
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="nombre">
                Nombre
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
              <Label htmlFor='apellido'>
                Apellido
              </Label>
              <div className="mt-2">
                <input
                  id="apellido"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("apellido", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='telefono'>
                Teléfono
              </Label>
              <div className="mt-2">
                <input
                  id="telefono"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("telefono", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='direccion'>
                Dirección
              </Label>
              <div className="mt-2">
                <input
                  id="direccion"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("direccion", { required: true })}
                />
              </div>
            </div>

            <div>
              <Label htmlFor='dni'>
                DNI
              </Label>
              <div className="mt-2">
                <input
                  id="dni"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("dni", { required: true })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="contraseña" className="block text-sm font-medium leading-6 text-gray-900">
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="contraseña"
                  type="password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                  {...register("contraseña", { required: true })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 px-3"
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

