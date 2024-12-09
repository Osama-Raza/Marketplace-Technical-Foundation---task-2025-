import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

function Thlisting() {
  return (
     //  ============ Container Div ===============
     <div className='w-full p-2'>
     <div className='p-2 w-[100%] 2xl:w-[1536px] mx-auto bg-[#2a254b] flex justify-between  h-8'>

        {/* Content ============ */}
        <div className='text-white flex font-normal mx-auto text-sm'>
        <TbTruckDelivery className='text-sm font-normal mx-2'/>
        Free delivery on all orders over £50 with code easter checkout
        </div>
        <RxCross2 className='text-sm font-normal text-white cursor-pointer'  />


     </div>
     </div>
  )
}

export default Thlisting
