
import Hero from "./components/Hero";
import Info from "./components/Info";
import Ceramics from "./components/Ceramics"
import Popular from "./components/Popular"
import Mail from "./components/Mail";
import Last from "./components/Last";
import Tophead from "./components/Tophead";
import Lowerhead from "./components/Lowerhead";
import Footer from "./components/Footer";
import Link from "next/link";
import Products from "./components/Sanitydata";

export default function Home() {

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
      <Hero />
      <Products />
      <Info />
      <Ceramics />
      <Popular />
      <Mail />
      <Last />
      <Footer />
      
    
   </div>
  );
}
