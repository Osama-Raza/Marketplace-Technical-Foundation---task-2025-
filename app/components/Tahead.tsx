import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping   } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


function Tahead() {
  return (
    <div className='w-full py-4 '>
        
    <div className='flex justify-between w-[90%] 2xl:w-[1536px] mx-auto'>
 <img src="../Avion.png" alt="" /> 
<ul className='hidden sm:flex justify-end text-[#726e8d] w-[95%] mx-auto gap-5 list-none  cursor-pointer'>

    <li>About us</li>
    <li>Contact</li>
    <li>Blog</li>

 {/* icons */}
    <CiSearch className='text-[#2a254b] cursor-pointer my-1' />
    <FaCartShopping className='text-[#2a254b] cursor-pointer my-1' />
    <FaUserCircle className='text-[#2a254b] cursor-pointer my-1' />
    
    </ul>
    {/* icons */}
   
    </div>
</div>
  )
}

export default Tahead
