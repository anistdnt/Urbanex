import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../Components/CartProduct'

const Cart = () => {
  const { wishList } = useSelector((state) => state.cart)

  return (
    <div className='flex flex-col items-center min-h-[400px] font-poppins bg-orange-100'>
      <div id="product-list" className='w-[95%] min-h-[200px] mt-6 mb-6 flex flex-row justify-between'>
        {
          wishList.length === 0 ?
            <div className='h-[200px] w-[70%] text-3xl font-semibold text-gray-500 flex items-center justify-center rounded-xl bg-white'> Cart is empty</div> : 
            <div id="products" className=' w-[70%] max-h-[550px] h-auto rounded-xl bg-white overflow-x-hidden overflow-scroll'>
              {
                wishList.map((item) => {
                  return <CartProduct data={item} />
                })
              }
            </div>}
        <div id="totalPrice-calc" className='w-[27%] h-[200px] bg-white'>
          This is calculation part

        </div>
      </div>
    </div>
  )
}

export default Cart
