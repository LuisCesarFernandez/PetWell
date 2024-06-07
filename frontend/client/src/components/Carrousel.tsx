import {Item} from './ImgCrarrusel'
export function Carrousel() {
  const ItemCarrusel = [...Item, ...Item]   
  return (
    <>
        {ItemCarrusel.map((item, index) => (
            <div className='rounded-lg m-4 overflow-hidden flex-shrink-0' key={index}>
                <img src={item.img} className='h-[250px] w-[350px]' alt="" />
            </div>
        ))}
    </>
  )
}