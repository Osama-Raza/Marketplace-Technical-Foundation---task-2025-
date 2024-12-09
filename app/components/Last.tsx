import React from 'react'

function Last() {
    return (
        <div className='w-full p-5'>
            <div className='flex flex-col sm:flex-row p-5 w-[100%]  2xl:w-[1536px] '>
               {/*left section==============  */}
                <div className='p-3 w-[100%]'>
                    <p className='text-[#2a254b] font-normal text-2xl'>
                        From a studio in London to a global brand with
                        over 400 outlets
                    </p>

                    <p className='text-[#2a254b] font-normal text-sm mt-3'>
                        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
                     </p>
                     <p className='text-[#2a254b] font-normal text-sm mt-3'>
                     Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the
                     London interior design community.
                        </p>
                          {/* ---------- Button =============== */}
            <div className=' mt-20'>
                        <a href="#" className='text-[#2a254b] font-normal text-xl px-4 py-2  mt-4 text-center bg-[#f9f9f9]'>Get in touch</a>
            </div>
            </div>
{/* right section */}
            <div className='p-3 w-[100%] '>

                <img src="../decor.jpg" alt="decore" className='h-[26.7rem] w-[100%]'/>

         </div>

            </div>
         </div>

                

      )
            
}
        
    
export default Last
