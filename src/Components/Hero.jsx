import React from 'react'
import Hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className=' font-poppins h-auto w-full bg-gradient-to-b from-violet-200 to-white-200 flex flex-row gap-40 justify-center items-center pt-5 pb-32'>
      <div id="left-section" className='h-auto mt-24 flex flex-col items-center justify-center gap-12'>
        <div className=" text-5xl font-medium flex flex-col items-center justify-center gap-6">
        <h2>Live Urban</h2>
        <h2>Dress Urbanex</h2>
        </div>
        <button className=' text-white bg-green-500 w-[45%] p-3 flex items-center justify-center rounded-3xl'>Shop now <i class=" ml-4 fa-solid fa-arrow-right"></i></button>
      </div>
      <div id="right-section" className='h-auto'>
        <div id="image" className=' h-[350px] w-[350px]'>
          <img src={Hero_img} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Hero
