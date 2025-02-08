

import { sanityFetch } from "@/sanity/lib/live"
import { getProduct } from "@/sanity/lib/sanityFetch"

import Image from "next/image"
import Link from "next/link"

export type Product = {
    _id: string , 
    name: string,
    price: number,
    imageUrl: string,
    description: string, 
    slug: {
        _type : "slug"
        current: string
    }   
  };
  export default async function Home (){

    let prductsArray: Product[] = [];
    
      const response = await sanityFetch({query : getProduct})
    
      prductsArray = response.data || []
      const handleAddToCart = (product : any) => {
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]' )
        const updatedCart = [...existingCart , product]
        localStorage.setItem('cart' ,JSON.stringify(updatedCart))
    
        alert (`${product.name} ${handleAddToCart} has been added to cart successfully`)
        
    
        // }
      
        return (
          <div className="w-full p-2">
            <div className='p-2 w-[100%] 2xl:w-[1536px] mx-auto'>
            <h1 className="text-center text-2xl font-bold">Products from sanity</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4
            ">
            {
              prductsArray.map((product) => (
                <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300  "
                key={product._id}>
                     <Link href={`/product/${product.slug?.current || ''}`}>  
                     {product?.imageUrl && (
                <Image
                src={product.imageUrl} 
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
                
               />
                     )}
               <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
               <p className="text-lg font-semibold mt-4">Rs.{product.price}</p>
             
                    </Link>
            </div>
              ))
            }
            </div>
            </div>
          </div>
        )
      }
  


    }
