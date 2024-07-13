import React from 'react'
import star from '../Assets/star_icon.png'
import star_fade from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
  const product = props.product
  return (
    <div className='h-[470px] flex flex-row font-poppins mt-10 mb-10'>
      <div id="left" className='flex flex-row h-full w-1/2 items-center justify-end'>
        <div id="side-image" className=' h-full w-[22%] flex flex-col items-end justify-between gap-2'>
          <img src={product.image} alt="" className='h-[23%] w-[60%]' />
          <img src={product.image} alt="" className='h-[23%] w-[60%]' />
          <img src={product.image} alt="" className='h-[23%] w-[60%]' />
          <img src={product.image} alt="" className='h-[23%] w-[60%]' />
        </div>
        <div id="main-image" className=' h-full w-[70%] flex items-center justify-start pl-4'>
          <img src={product.image} alt="" className='h-full w-[85%]' />
        </div>
      </div>
      <div id="right" className=' h-full w-1/2'>
        <div className='w-[85%]'>
          <h1 className='text-3xl font-medium'>{product.name}</h1>
          <div id="stars" className='flex flex-row justify-start gap-1 w-40 mt-4'>
            <img src={star} className='h-3' alt="" />
            <img src={star} className='h-3' alt="" />
            <img src={star} className='h-3' alt="" />
            <img src={star} className='h-3' alt="" />
            <img src={star_fade} className='h-3' alt="" />
          </div>
          <div id="price" className='mt-8 flex flex-row justify-between w-32'>
            <p className='text-xl text-slate-600 line-through'>${product.old_price}</p>
            <p className='text-xl font-medium text-red-600'>${product.new_price}</p>
          </div>
          <div className='mt-10'>
            <p className='text-xl text-gray-600 font-medium'>Select Size</p>
            <div id="size" className='flex flex-row items-center justify-between w-[300px] h-auto mt-6 mb-6'>
              <div className='bg-slate-300 h-10 w-10 flex rounded-md items-center justify-center'>S</div>
              <div className='bg-slate-300 h-10 w-10 flex rounded-md items-center justify-center'>M</div>
              <div className='bg-slate-300 h-10 w-10 flex rounded-md items-center justify-center'>L</div>
              <div className='bg-slate-300 h-10 w-10 flex rounded-md items-center justify-center'>XL</div>
              <div className='bg-slate-300 h-10 w-10 flex rounded-md items-center justify-center'>XXL</div>
            </div>
          </div>
          <div id="buttons" className='w-[300px] h-auto flex flex-col gap-4'>
            <button className='bg-orange-400 h-12 px-6 rounded-md text-white font-medium shadow-lg active:scale-95'>Buy Now</button>
            <button className='bg-orange-600 h-12 px-6 rounded-md text-white font-medium shadow-lg active:scale-95'>Add to Cart</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
