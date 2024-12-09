import React from 'react'

function Footer() {
  return (
    <div className='w-full p-2'>

        <div className='grid grid-cols-2  sm:grid-cols-4  p-2 w-[100%] 2xl:w-[1536px] mx-auto  bg-[#2a254b] '>
            {/* column 1 Menu ================ */}
            <ul className='    sm:list-none py-10 px-20 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-1'>Menu</li>
                <li className='text-white font-normal text-sm py-1'>New arrivals</li>
                <li className='text-white font-normal text-sm py-1'>Best sellers</li>
                <li className='text-white font-normal text-sm py-1'>Recently viewed</li>
                <li className='text-white font-normal text-sm py-1'>Popular this week</li>
                <li className='text-white font-normal text-sm py-1'>All products</li>
                
                </ul>
 {/* column 2 Catogries ================ */}
                <ul className='list-none py-10 px-20 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-1'>Catogeries</li>
                <li className='text-white font-normal text-sm py-1'>Crokery</li>
                <li className='text-white font-normal text-sm py-1'>Furniture</li>
                <li className='text-white font-normal text-sm py-1'>Homeware</li>
                <li className='text-white font-normal text-sm py-1'>Plant pots</li>
                <li className='text-white font-normal text-sm py-1'>Chairs</li>
                <li className='text-white font-normal text-sm py-1'>Crokery</li>
                
                </ul>
        {/* column 3 Company ================ */}         
                <ul className='list-none py-10 px-20 cursor-pointer'>
                <li className='text-white font-normal text-[16px] py-1'>Our company</li>
                <li className='text-white font-normal text-sm py-1'>About us</li>
                <li className='text-white font-normal text-sm py-1'>Vacancies</li>
                <li className='text-white font-normal text-sm py-1'>Contact us</li>
                <li className='text-white font-normal text-sm py-1'> Privacy</li>
                <li className='text-white font-normal text-sm py-1'>Return policy</li>
                
                </ul>

          {/* column 4 email ================ */}       
                <div className='  sm:flex-row mx-auto justify-center mt-8 '>
                <p className='text-white font-medium text-[16px] py-10 px-20'>
                Join our mailing list
                </p>
            <input type="email" placeholder='your@email.com' className='bg-slate-100 py-2 px-3 outline-none text-white font-normal' />
            <a href="osanasalim229@gmail.com" target='_blank' className='bg-[#ffffff] font-normal text-sm px-4 py-3  mt-4 text-center text-[#2a254b]'>Sign up</a>
            </div>



        </div>
      
    </div>
  )
}

export default Footer
