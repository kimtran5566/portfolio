import React from 'react'
interface ItemC {
    name: string;
    src:string;
    alt:string;
    id: string;
}

const ItemCategory: React.FC<ItemC> = ({name,src, alt, id}) => {
  return (   
    <div className='w-full h-full'>
      <div>
        <img className='block w-[83.21px] h-[87.92px] mx-auto' src={src} alt={alt} id={id}/>              
      </div>
        <p className='block w-[107px] h-[40px] text-center text-sm'>{name}</p>
    </div>
  )
}

export default ItemCategory;