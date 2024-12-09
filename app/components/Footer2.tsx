import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram , FaSkype , FaTwitter , FaPinterest  } from "react-icons/fa";

function Footer2() {
  return (
    <div className='w-full p-2'>

        <div className='grid grid-cols-2  sm:flex  p-2 w-[100%] 2xl:w-[1536px] mx-auto  bg-[#2a254b] '>
{/* ========= Addres=============s */}
            <ul className='    sm:list-none py-10 px-20 cursor-pointer'>
            <h1 className='text-white font-normal text-4xl my-3'>Avion</h1>
            <li className='text-white font-normal text-[16px] py-1'>2 New York Street</li>
            <li className='text-white font-normal text-[16px] py-1'>New York City</li>
            <li className='text-white font-normal text-[16px] py-1'>United States of America</li>
            <li className='text-white font-normal text-[16px] py-1'>432 34</li>
{/* ====== Social links =============== */}
        
            </ul>
        <div className='py-10 px-20 '>
            <p className='text-white font-normal text-[16px] py-1 my-3'>Social Links</p>
            {/* ============ icons ============= */}
            <div className='flex justify-between text-white space-x-3 '>
            <CiLinkedin className='cursor-pointer'/>
            <FaFacebookSquare className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
            <FaSkype className='cursor-pointer'/>
            <FaTwitter className='cursor-pointer'/>
            <FaPinterest className='cursor-pointer'/>

            </div>
        </div>

          {/* column 1 Menu ================ */}
          <ul className='    sm:list-none py-10 px-20 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-2'>Menu</li>
                <li className='text-white font-normal text-sm py-1'>New arrivals</li>
                <li className='text-white font-normal text-sm py-1'>Best sellers</li>
                <li className='text-white font-normal text-sm py-1'>Recently viewed</li>
                <li className='text-white font-normal text-sm py-1'>Popular this week</li>
                <li className='text-white font-normal text-sm py-1'>All products</li>
                
                </ul>

            {/* column 2 Catogries ================ */}
            <ul className='list-none py-10 px-20 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-3'>Catogeries</li>
                <li className='text-white font-normal text-sm py-1'>Crokery</li>
                <li className='text-white font-normal text-sm py-1'>Furniture</li>
                <li className='text-white font-normal text-sm py-1'>Homeware</li>
                <li className='text-white font-normal text-sm py-1'>Plant pots</li>
                <li className='text-white font-normal text-sm py-1'>Chairs</li>
                <li className='text-white font-normal text-sm py-1'>Crokery</li>
                
                </ul>

                 {/* column 3 Company ================ */}         
                 <ul className='list-none py-10 px-18 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-3'>Our company</li>
                <li className='text-white font-normal text-sm py-1'>About us</li>
                <li className='text-white font-normal text-sm py-1'>Vacancies</li>
                <li className='text-white font-normal text-sm py-1'>Contact us</li>
                <li className='text-white font-normal text-sm py-1'> Privacy</li>
                <li className='text-white font-normal text-sm py-1'>Return policy</li>
                
                </ul>
  



        </div>    
        </div>
 
  )
}

export default Footer2
