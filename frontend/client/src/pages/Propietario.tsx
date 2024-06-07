import {useForm} from 'react-hook-form'
import {Label} from '../components/Label'
import {postPropietario, Propiet} from '../api/propietario.api'
export function Propietario() {
    const {register, handleSubmit, reset} = useForm()
    const onSubmit = handleSubmit(async data =>{
        const propietarioData: Propiet ={
            id_usuario: data.idusuario,
            id_mascota: data.idmascota,
        }

        const res = await postPropietario(propietarioData);
        console.log(res)

        reset();
    })
  return (
    <div>Propietario</div>
  )
}
