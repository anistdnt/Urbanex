import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [Password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const toggleEye = ()=>{
    setShowPassword(!showPassword)
  }

  return (
    <div id='container' className='bg-blue-100 pb-28 h-auto flex items-center justify-center'>
      <div id="login" className=' mt-[80px] bg-white h-[450px] w-[320px]'>
        <h2 className='text-2xl pt-4 pl-4 font-semibold'>Sign In</h2>
        <form id="input-section" className='flex flex-col mt-4'>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Email</span>
            <input type="email" placeholder='you@example.com' className='p-2 focus:outline-none focus:border-sky-500 border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' /></div>
          <div id="input" className='flex flex-col p-3 gap-2'>
            <span>Password</span>
            <div className='relative'>
            <input type={showPassword ? "text" : "password"} 
            value={Password}
            onChange={(e)=>{setPassword(e.target.value)}}
            placeholder='Enter Your Password' 
            className='p-2 focus:outline-none focus:border-sky-500 border-gray-300 w-full border-[1px] focus:border-2 rounded-lg' />
            <i onClick={toggleEye}
            className={showPassword ? "fa-solid fa-eye-slash absolute inset-y-0 right-0 px-3 mt-3 text-gray-600" : "fa-solid fa-eye absolute inset-y-0 right-0 px-3 mt-3 text-gray-600"}></i>
            </div>
          </div>
          <div className="button w-full flex items-center justify-center pt-12 pb-12">
            <button type='submit' className=' w-[90%] text-white rounded-xl py-2 bg-pink-600'>Log In</button>
          </div>

        </form>
        <span className='pl-4'>
          Don't have account <Link to='/signup' className='text-pink-600 font-semibold'>Sign Up</Link>
        </span>
      </div>
    </div>
  )
}

export default Login
