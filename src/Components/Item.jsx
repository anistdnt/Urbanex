import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,name,image,new_price,old_price}) => {
  return (
    <div className=' h-[400px] hover:scale-105 w-[270px] rounded-2xl overflow-hidden shadow-lg mt-6'>
      <Link to={`/product/${id}`}><img onClick={window.scrollTo(0,0)} className='h-[70%] w-full' src={image} alt="" /></Link>
      <div id="about" className=' pt-4 pl-2 pr-2'>
      <p>{name}</p>
      <div className="price-section flex items-start pt-4">
        <p className='text-2xl'>${new_price}</p>
        <p className=' ml-6 text-slate-600 line-through'>${old_price}</p>
      </div>
      </div>
    </div>
  )
}

export default Item
