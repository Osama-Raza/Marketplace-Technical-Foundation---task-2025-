import React from 'react'

function Listhero() {
  return (
    <div className='w-full'>
        <div className='flex flex-col w-[100%] 2xl:w-[1536px] my-5 sm:flex-row'>
            {/* ============= Image ================ */}

            <div className='w-[50%] '>
                <img src="../listchair.jpg" alt="chair" className='h-[90vh] w-[85%]'/>
            </div>
            <div className='w-[40%] my-10 mx-4'>
                <p className='text-[#2a254b] font-normal text-4xl'>The Dandy Chair</p>
                <p className='text-[#12131a] font-normal text-2xl my-2'>£250 </p>

                <p className='text-[#2a254b] font-normal text-[16px] mt-12'>Description </p>
                <p className='text-[#505977] font-normal text-[16px] mt-3'>
                A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.

                 </p>
                 <ul className='my-3 list-disc mx-10'>
                    <li className='text-[#505977] font-normal text-[16px]'>Premium material</li>
                    <li className='text-[#505977] font-normal text-[16px]'>Handmade upholstery</li>
                    <li className='text-[#505977] font-normal text-[16px]'>Quality timeless classic</li>
                 </ul>

                 <p className='text-[#2a254b] font-normal text-[16px] mt-6'>Dimensions </p>
                 <div className='flex space-x-6 my-3' >
                    <p className='text-[#2a254b] font-normal text-[17px] my-2'> Height</p>
                    <p className='text-[#2a254b] font-normal text-[17px] my-2'> Width </p>
                    <p className='text-[#2a254b] font-normal text-[17px] my-2'> Depth</p>
                 </div>

                 <div className='flex space-x-6 my-3' >
                    <p className='text-[#505977] font-normal text-[16px] '> 110cm</p>
                    <p className='text-[#505977] font-normal text-[16px] '> 75cm </p>
                    <p className='text-[#505977] font-normal text-[16px] '> 50cm</p>
                 </div>

                
            </div>

        </div>
      
    </div>
  )
}

export default Listhero
