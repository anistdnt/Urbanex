import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrums = (props) => {
    const Product = props.product
  return (
    <div className='flex flex-row items-center gap-2'>
      Home <img src={arrow_icon} alt="" className='h-3 mt-1'/> Shop <img src={arrow_icon} alt="" className='h-3 mt-1'/> {Product.category} <img src={arrow_icon} alt="" className='h-3 mt-1'/> {Product.name}
    </div>
  )
}

export default Breadcrums
