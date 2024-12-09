import React from 'react'
import Ceramics from '../components/Ceramics'
import Creamics2 from '../components/Creamics2'
import Footer from '../components/Footer'
import Tophead from '../components/Tophead'
import Lowerhead from '../components/Lowerhead'
import Link from 'next/link'

function page() {
  return (
    <div>
      <Tophead />
      <Lowerhead />
      <div className="text-center space-x-8 ">
      <Link rel="stylesheet" className='text-[#726e8d] hover:scale-105 w-[95%] mx-auto gap-5 my-2' href="/"> Home </Link>
      <Link rel="stylesheet" className='text-[#726e8d] w-[95%] hover:scale-105 mx-auto gap-5 my-2' href="/home2"> Home-2 </Link>
      <Link rel="stylesheet" className='text-[#726e8d] w-[95%] mx-auto hover:scale-105 gap-5 my-2' href="/listing">Product Listing </Link>
      <Link rel="stylesheet" className='text-[#726e8d] w-[95%] hover:scale-105 mx-auto gap-5 my-2' href="/products"> Products </Link>
      <Link rel="stylesheet" className='text-[#726e8d] w-[95%] mx-auto gap-5 hover:scale-105 my-2' href="/about"> About us </Link>
      <Link rel="stylesheet" className='text-[#726e8d] w-[95%] mx-auto gap-5 hover:scale-105 my-2' href="/cart"> Cart </Link>
      </div>
      <Ceramics />
      <Creamics2 />
      <Ceramics />
      <Footer />
    </div>
  )
}

export default page
