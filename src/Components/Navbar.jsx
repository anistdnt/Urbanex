import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    
    const [menu,setMenu] = useState("Shop")
    const handleClick = (name) => {
      setMenu(name);
    };
  return (
    <nav className=' top-0 left-0  right-0 sticky z-50 bg-white'>
        <div className=' font-poppins w-full h-[70px] shadow-lg flex items-center justify-between '>
            <div id='logo' className=' ml-4 flex items-center gap-4'>
            <i class="text-2xl fa-solid fa-truck-fast"></i>
            <Link to='/'><p onClick={() => handleClick("Shop")} className='text-2xl font-bold font'>Urbanex</p></Link>
            </div>
            <ul className='flex items-center justify-around gap-12'>
            <li className=''
                  onClick={() => handleClick("Shop")}>
                    <Link to='/' className=''>Shop </Link>{menu==="Shop" ? <hr className=' h-1 rounded-md w-[80%] border-none ml-1 bg-green-400' /> : <></>}
            </li>
            <li className=''
                  onClick={() => handleClick("Men")}>
                    <Link to="/men" className=''>Men</Link>{menu==="Men" ? <hr className=' h-1 rounded-md w-[80%] border-none ml-1 bg-green-400' /> : <></>}
            </li>
            <li className=''
                  onClick={() => handleClick("Women")}>
                    <Link to="/women" className=''>Women </Link>{menu==="Women" ? <hr className=' h-1 rounded-md w-[80%] border-none ml-1 bg-green-400' /> : <></>}
            </li>
            <li className=''
                  onClick={() => handleClick("Kids")}>
                    <Link to="/kids" className=''>Kids </Link>{menu==="Kids" ? <hr className=' h-1 rounded-md w-[80%] border-none ml-1 bg-green-400' /> : <></>}
            </li>
            </ul>
            <div id="login-cart" className='flex items-center gap-6 mr-6'>
            <Link to="/login"><button onClick={() => handleClick("")} id='login' className=' font-medium border-slate-500 border-2 px-3 py-1 rounded-3xl'>Login</button></Link>
              <div id="cart">
              <Link to="/cart"><i onClick={() => handleClick("")} class="fa-solid fa-cart-shopping text-2xl"></i></Link>
              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
