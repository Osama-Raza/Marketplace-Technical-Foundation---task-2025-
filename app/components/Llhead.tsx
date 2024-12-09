import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaCartShopping   } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function Llhead() {
  return (
    <div className='w-full py-4 '>
        
        <div className='flex justify-between w-[90%] 2xl:w-[1536px] mx-auto'>
     <img src="../Avion.png" alt="" /> 
    <ul className='hidden sm:flex justify-center text-[#726e8d] w-[95%] mx-auto gap-5 list-none  cursor-pointer'>
    
        <li>Plant Pots</li>
        <li>Ceramics</li>
        <li>Tables</li>
        <li>Chairs</li>
        <li>Crockery</li>
        <li>Tableware</li>
        <li>Cutlery</li>
        </ul>
        {/* icons */}
        <div className='flex gap-3 text-[#2a254b] cursor-pointer'>
        <CiSearch />
        <FaCartShopping />
        <FaUserCircle />
        </div>
        </div>
    </div>
  )
}

export default Llhead
