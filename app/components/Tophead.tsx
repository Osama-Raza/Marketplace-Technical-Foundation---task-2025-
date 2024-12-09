import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping   } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
function Tophead() {
  return (
    //  ============ Container Div ===============
    <div className='w-full p-2'>
        <div className='p-2 w-[95%] 2xl:w-[1536px] mx-auto  flex justify-between  h-11 cursor-pointer'>
        
        <CiSearch /> 
        <img src="../Avion.png" alt="" /> 
    
       {/*  =========== Cart and user  icon =========== */}
        <div className='hidden md:flex gap-2'>
        <FaCartShopping />
        <FaUserCircle />
        </div>
        </div>

<hr className='w-[95%] border-[1px] mx-auto'/>
    </div>
  )
}

export default Tophead
