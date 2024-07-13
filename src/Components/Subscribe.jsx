import React from 'react'

const Subscribe = () => {
    return (
        <div className='flex items-center justify-center font-poppins pb-28'>
            <div id="container" className=' bg-gradient-to-b from-violet-200 to-white-200 rounded-xl w-[80%] h-auto flex flex-col gap-10 pt-24 pb-24 items-center justify-center'>
                <div id="text" className='flex flex-col items-center justify-center gap-4'>
                    <h1 className='text-5xl'>Get Exclusive offers on Email</h1>
                    <p>Stay connected and get latest updates</p>
                </div>
                <form id="input" className=' w-[50%] flex items-center justify-between'>
                    <input className='rounded-full p-3 px-5 w-[75%]
                    ' type="email" placeholder='Enter your Email' />
                    <button className=' py-3 px-4 rounded-full bg-black text-white '>Connect</button>
                </form>
            </div>
        </div>
    )
}

export default Subscribe
