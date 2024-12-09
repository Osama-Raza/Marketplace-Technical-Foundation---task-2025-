import React from 'react'

function Mail() {
  return (
    <div  className='w-full p-2'>
        <div className='p-2 w-[80%] 2xl:w-[1536px] mx-auto bg-slate-100'>
            <h1 className='text-[#2a254b] font-normal text-center text-4xl'>
            Join the club and get the benefits
            </h1>
            <p className='text-[#2a254b] font-normal text-center text-lg mt-4'>
            Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more
            </p>
<div className='flex flex-col  sm:flex-row mx-auto justify-center mt-8 '>
            <input type="mail" placeholder='your@email.com' className='  px-3 outline-none text-[#2a254b] font-normal' />
            <a href="osanasalim229@gmail.com" target='_blank' className='text-[#ffffff] font-normal text-sm px-4 py-4  mt-4 text-center bg-[#2a254b]'>View collection</a>
            </div>


        </div>
      
    </div>
  )
}

export default Mail
