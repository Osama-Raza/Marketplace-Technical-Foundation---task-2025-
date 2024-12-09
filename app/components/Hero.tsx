import React from 'react'

function Hero() {
  return (
    //  ============ Container div ==================
    <div className='w-full py-2'>
        <div className='w-[80%] 2xl:w-[1536px] mx-auto flex'>



        <div className="grid grid-cols-12  items-center ">


{/*  w-[1280px] h-[584px] */}

        <div className="  sm:col-span-8 bg-[#2a254b] p-6 space-y-8 mx-auto ">
            <div className=' w-[80%] h-[220px]  '>
                {/* w-[513px] */}
          <h2 className="text-white font-bold mt-2 w-[250px] h-[56px]">The furniture brand for the  future, with timeless designs</h2>
         <br />
          <a  href='#' className="text-white text-[16px] font-normal border border-[#f9f9f9] space-y-3 px-4 py-2 mt-5" >
           View collection
          </a>
          </div>

            <p className=' h-[140px] text-white text-[16px]'>
            A new era in eco friendly furniture with Avelon, the French luxury retail brand
with nice fonts, tasteful colors and a beautiful way to display things digitally 
using modern web technologies.
            </p>

        </div>

        {/* Right Picture */}
        <div className="col-span-4 hidden sm:block">
          <img
            src="../chair.jpg"
            alt="chair"
            className="w-full object-cover h-[448px]"
          />
        </div>


</div>
        </div>
      
    </div>
  )
}

export default Hero
