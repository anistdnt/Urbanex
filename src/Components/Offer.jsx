import React from 'react'
import Offer_img from '../Assets/offer.png'

const Offer = () => {
  return (
    <div className='flex items-center justify-center font-poppins'>
      <div id="container" className='pb-10 bg-gradient-to-b from-violet-200 to-white-200 rounded-xl w-[80%] flex items-center justify-around flex-row'>
        <div id="left" className='h-auto pt-12'>
          <div id="text" className='flex flex-col gap-4'>
          <h2 className='text-5xl font-medium'>Exclusive</h2>
          <h2 className='text-5xl font-medium'>Offers For You</h2>
          <p className='text-sm'>ONLY ON BEST SELLERS PRODUCT</p>
          </div>
          <button className=' mt-7 text-white bg-green-500 w-[45%] p-3 flex items-center justify-center rounded-3xl'>Check Now</button>
        </div>
        <div id="right" className='h-auto pt-10'>
          <div id="image">
          <img className='h-[350px] w-[300px]' src={Offer_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offer
