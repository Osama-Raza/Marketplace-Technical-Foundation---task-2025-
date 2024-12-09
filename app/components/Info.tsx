import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { PiPlantThin } from "react-icons/pi";

function Info() {
  return (
//  =============== container div ===========

    <div className='w-full p-2 mt-5'>
        <div className=' p-2 w-[80%] text-center   mx-auto 2xl:w-[1536px] '>
            <h3 className='text-[#2a154b] font-normal '>What makes our brand different</h3>

{/* ============ Content div =============== */}
<div className=' flex flex-col   sm:flex-row  my-8 gap-8 text-start '>

    {/* content 1 =========== */}
    <div className='cursor-pointer'>
    <TbTruckDelivery className='text-[#2a254b] my-3'/>
        <p className='font-medium text-[#2a254b] my-1 text-sm'>Next day as standard</p>
        <p className='text-[#2a254b] font-normal text-xs'>Order before 3pm and get your order
        the next day as standard</p>
    </div>

     {/* content 2 =========== */}
     <div className='cursor-pointer'>
     <FaRegCheckCircle className='text-[#2a254b] my-3'/>
     <p className='font-medium text-[#2a254b] text-sm my-1'>Made by true artisans</p>
        <p className='text-[#2a254b] font-normal text-xs'>Handmade crafted goods made with
        real passion and craftmanship</p>
    </div>

     {/* content 3 =========== */}
     <div className='cursor-pointer'>
     <CiCreditCard1 className='text-[#2a254b] my-3' />
     <p className='font-medium text-[#2a254b] text-sm my-1'>Unbeatable prices</p>
        <p className='text-[#2a254b] font-normal text-xs'>For our materials and quality you won’t find better prices anywhere

        </p>
    </div>

     {/* content 4 =========== */}
     <div className='cursor-pointer'>
     <PiPlantThin className='text-[#2a254b] my-3'/>
     <p className='font-medium text-[#2a254b] text-sm my-1'>Recycled packaging</p>
        <p className='text-[#2a254b] font-normal text-xs'>We use 100% recycled packaging to ensure our footprint is manageable

        </p>
    </div>


</div>


        </div>
      
    </div>
  )
}

export default Info
