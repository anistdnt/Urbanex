import React, { useState } from 'react'


const CartProduct = ({ data }) => {

  const [quantity,setQuantity] = useState(1)
  
  const increment = ()=>{
    setQuantity(quantity+1)
  }
  const decrement = ()=>{
    if(quantity>1) setQuantity(quantity-1)
  }

  return (
    <div>
      <div className='w-full text-lg p-3 mt-6 flex items-center justify-around mb-6'>
        <div id="product-image">
          <img src={data.product.image} alt="product-img" className='h-[150px] w-[130px]' />
        </div>
        <div id="product-info" className=' flex flex-col ml-4 gap-4 w-[50%]'>
          <div id="product-desc" className=' h-full max-w-[80%] font-medium text-xl'>
            {data.product.name}
          </div>
          <div id="size" className=' h-full'><span className='font-semibold'>Size: </span>{data.size}</div>
          <div id="quantity" className=' h-full'><span className='font-semibold flex flex-row items-center justify-between w-[150px]'>Quantity: <div className='flex flex-row items-center justify-between w-[50px]'><span className='hover:cursor-pointer' onClick={increment}>+</span> <span>{quantity}</span> <span className='hover:cursor-pointer' onClick={decrement}>-</span></div></span></div> 
          <div id="remove" className=' h-full'><i class="fa-regular fa-trash-can text-xl"></i></div>
        </div>
        <div id="price" className=' h-full text-3xl pb-36'>${data.product.new_price*quantity}</div>
      </div>
      <div className='flex justify-center'>
      <hr className='w-[90%] h-[1px]'/>
      </div>
      </div>
  )
}

export default CartProduct
