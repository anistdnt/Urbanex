import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../Components/CartProduct'
import { getCartTotal } from '../Slices/CartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { wishList, totalPrice, totalQuantity } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCartTotal())
  }, [wishList])



  return (
    <div className='bg-orange-100 p-2'>
      <p className='font-medium'><Link to="/"><i class="fa-solid fa-circle-arrow-left text-lg mr-3 hover:cursor-pointer"></i></Link><span>Back to Shopping</span></p>
    <div className='flex flex-col items-center min-h-[400px] font-poppins'>
      <div id="product-list" className='w-[95%] min-h-[200px] mt-6 mb-6 flex flex-row justify-between'>
        {
          wishList.length === 0 ?
            <div className='h-[200px] w-[70%] text-3xl font-semibold text-gray-500 flex items-center justify-center rounded-xl bg-white shadow-[0_0_18px_rgb(182,179,179)]'> Cart is empty</div> :
            <div id="products" className=' w-[70%] max-h-[550px] h-auto rounded-xl bg-white overflow-x-hidden overflow-scroll shadow-[0_0_18px_rgb(182,179,179)]'>
              
              {
                wishList.map((item) => {
                  return <CartProduct data={item} />
                })
              }
            </div>}
        <div id="totalPrice-calc" className='w-[27%] p-4 h-[250px] bg-white rounded-xl shadow-[0_0_18px_rgb(182,179,179)]'>
          <p className='text-xl font-semibold text-gray-500'>Summary</p>

          <div className='mt-10 flex flex-col gap-4'>
            <p className='flex items-center justify-between font-medium'> <span>Total Quantity:</span><span>{totalQuantity}</span></p>
            <p className='flex items-center justify-between font-medium'> <span>Total Price :</span><span>{totalPrice}</span></p>
          </div>
          <div className='w-full flex items-center justify-center mt-10'>
            <button className='bg-pink-500 hover:bg-pink-600 active:scale-95 font-medium rounded-md w-[95%] text-white p-2'>Proceed to pay</button>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Cart
