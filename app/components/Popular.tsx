import React from 'react'

function Popular() {
  return (
    //  ============= Container div
    <div className='w-full p-2 cursor-pointer '>
         <div className='p-2 w-[80%] 2xl:w-[1536px] mx-auto'>
            <p className='text-3xl font-normal text-[#2a254b] text-start'>Our popular products</p>
{/* ============= Products =============== */}
            <div className='grid grid-cols-2  sm:grid-cols-2  md:grid-cols-4 gap-4 space-x-8 mt-6'>
{/* ============ Product 1 ================= */}


            <div>
                <img src="../sofa.jpg" alt="chair" className='h-[17rem] w-[19rem] hover:scale-105'/>
                <h4 className='text-[#2a254b] font-normal text-xl mt-4'>The Poplar suede sofa</h4>
                <p  className='text-[#2a254b] font-normal text-lg'>£980</p>
            </div>

            {/* ============ Product 2 ================= */}

            <div>
                <img src="../chair.jpg" alt="chair" className='h-[17rem] w-[19rem] hover:scale-105' />
                <h4 className='text-[#2a254b] font-normal text-xl mt-4'>The Dandy chair</h4>
                <p  className='text-[#2a254b] font-normal text-lg'>£250</p>
            </div>

            {/* ============ Product 3 ================= */}

            <div>
                <img src="../wood.jpg" alt="chair" className='h-[17rem] w-[19rem] hover:scale-105' />
                <h4 className='text-[#2a254b] font-normal text-xl  mt-4'>The Dandy chair</h4>
                <p  className='text-[#2a254b] font-normal text-lg'>£250</p>
            </div>
            {/* </div> */}
            
            </div>
            {/* ---------- Button =============== */}
            <div className='text-center mt-4'>
            <a href="#" className='text-[#2a254b] font-normal text-xl px-4 py-2  mt-4 text-center bg-[#f9f9f9]'>View collection</a>
            </div>
</div>
      
    </div>
  )
}

export default Popular
