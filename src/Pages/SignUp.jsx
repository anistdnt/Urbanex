import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [Password, setPassword] = useState('')

  
  return (
    <div>
      <div id='container' className='bg-blue-100 pb-28 h-auto flex items-center justify-center'>
      <div id="login" className=' mt-[80px] bg-white h-[550px] w-[320px]'>
        <h2 className='text-2xl pt-4 pl-4 font-semibold'>Create an account</h2>
        <form id="input-section" className='flex flex-col mt-4'>
        <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Name</span>
            <input type="text" placeholder='Enter Your Name' className='p-2 focus:outline-none focus:border-sky-500 border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Email</span>
            <input type="email" placeholder='Enter your email' className='p-2 focus:outline-none focus:border-sky-500 border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Password</span>
            <div className=''>
            <input type="text" 
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Atleast 6 characters' 
            className='p-2 focus:outline-none focus:border-sky-500 border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' />
            </div>
          </div>
          <div className="button w-full flex items-center justify-center pt-12 pb-12">
            <button className=' w-[90%] text-white rounded-xl py-2 bg-pink-600'>Create Account</button>
          </div>

        </form>
        <span className='pl-4'>
          Already have an account <Link to='/login' className='text-pink-600 font-semibold'>Log In</Link>
        </span>
      </div>
    </div>
    </div>
  )
}

export default SignUp
