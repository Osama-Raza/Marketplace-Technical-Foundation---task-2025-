import React from 'react'

function Cart() {
  return (
    <div className='w-full p-5'>
        <div className='w-[80%] 2xl:w-[1536px] mx-auto '>
            <h1 className='text-[#2a254b] font-medium text-4xl my-6'>
                Your shopping cart
            </h1>

            {/*  =========== heading =========== */}
            <div className='hidden sm:flex justify-between mt-4'>
                <h6 className='font-medium text-sm text-[#2a254b]'>Product</h6>
                <h6 className='font-medium text-sm text-[#2a254b]'>Quantity</h6>
                <h6 className='font-medium text-sm text-[#2a254b]'>Total</h6>
            </div>
            <hr className='mt-4' />
            {/* ========== Desciption 1 =============== */}
            <div className='flex justify-between mt-4'>

            <div className='flex space-x-5 mt-4'>
                <img src="../white.jpg" alt="pot" className='w-[194px] h-[134px]' />
               
               <div className='flex flex-col'>
                <h4 className='font-medium text-[20px] mt-2 text-[#2a254b]'>Graystone vase</h4>
                <p className='font-medium text-sm text-[#2a254b] my-2'>A timeless ceramic vase with <br />
                a tri color grey glaze.</p>
                <p className='font-medium text-sm text-[#2a254b]'>£85</p>
                </div>
            </div>

            <p className='hidden  sm:block font-medium text-[16px] mt-3 text-[#2a254b]'>1</p>
            <p className='hidden sm:block font-medium text-[16px] mt-3 text-[#2a254b]'>£85</p>
            </div>

         {/* ========== Desciption 2 =============== */}
         <div className='flex justify-between mt-4'>

<div className='flex space-x-5 mt-4'>
    <img src="../listchair.jpg" alt="pot" className='w-[194px] h-[134px]' />
   
   <div className='flex flex-col'>
    <h4 className='font-medium text-[20px] mt-2 text-[#2a254b]'>basic white vase</h4>
    <p className='font-medium text-sm text-[#2a254b] my-2'>Beautifil and simple this is <br />
    one for the classics</p>
    <p className='font-medium text-sm text-[#2a254b]'>£125</p>
    </div>
</div>

<p className='hidden  sm:block font-medium text-[16px] mt-3 text-[#2a254b]'>1</p>
<p className='hidden sm:block font-medium text-[16px] mt-3 text-[#2a254b]'>£125</p>
</div>

<hr className='mt-4' />
        {/* ========= total =========== */}

        <div className='flex flex-col text-end'>
                <h4 className='text-[#4e4d93] font-normal text-[20px]'>Subtotal <span>
                    <h3 className='text-[#2a254b] font-normal text-[24px]'>£210</h3></span></h4>
                <p className='text-[#4e4d93] font-normal text-[14px]'>Taxes and shipping are calculated at checkout</p>
               <div className='mt-6'>
                <a href="#" className=' text-[#ffffff] font-normal  text-sm px-4 py-4  mt-4 w-[8rem]  bg-[#2a254b]'>Go to checkout</a>
        </div>
        </div>
       
       
        </div>
      
    </div>
  )
}

export default Cart
