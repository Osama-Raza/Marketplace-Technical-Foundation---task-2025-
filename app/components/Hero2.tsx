import React from 'react'

function Hero2() {
  return (
    <div className='w-full py-2'>
    <div className='w-[80%] 2xl:w-[1536px] mx-auto flex flex-col sm:flex-row '>



    {/* <div className="grid grid-cols-12  items-center  "> */}


{/*  w-[1280px] h-[584px] */}

    <div className="   bg-[#2a254b] p-6 space-y-8  space-x-6  ">
        <div className=' w-[50%] h-[220px]  '>
            {/* w-[513px]  h-[56px]*/}
      <h2 className="text-white font-bold mt-2  ">It started with a small idea</h2>
      <p className='text-white text-lg'>
      A global brand with local beginnings, our story begain in a small studio in South London in early 2014
      </p>
     <br />
      <a  href='#' className="text-white text-[16px] font-normal border border-[#f9f9f9] space-y-3 px-4 py-2 mt-5" >
       View collection
      </a>
      </div>

       
    </div>

    {/* Right Picture */}
    <div className="w-[100%] sm:w-[50%]">
      <img
        src="../ysofa.jpg"
        alt="chair"
        className="w-full object-cover h-[448px]"
      />
    </div>


</div>
    </div>
  
// </div>
  )
}

export default Hero2
