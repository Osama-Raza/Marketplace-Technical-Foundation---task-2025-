import { client } from "@/sanity/lib/client";

import { groq } from "next-sanity";
import Image from "next/image";

import { Product } from "@/app/components/Sanitydata";






interface ProductProps {
    params : Promise<{slug : string}>
}
async function dynamicProduct(slug : string) : Promise<Product> {
    console.log (slug , 'slug value')
 return client.fetch (
    groq `*[_type == "product" && slug.current == slug][0] {
    _id,
    name,
    image,
    price,
   }` , {slug}
 )     
}
export default async function productPage( {params}: ProductProps ) {
    const {slug} = await params
    console.log(slug , 'this is slug')
    if (!slug){
        return <p>No products selected</p>
    }
    const prodct = await dynamicProduct(slug)
    console.log(prodct, 'this is  descption')
        return(
        <div className="w-full p-2">
            <div className="grid grid-cols-1  md:grid-cols-2  gap-10 mt-4">
                <div className="shadow-lg">
                    {prodct?.imageUrl && (
                    <Image 
                        src={prodct.imageUrl}
                        alt={prodct.name}
                        width={500}
                        height={500}
                        />
                    )}
                
                        </div>
                        <div className="flex flex-col gap-6">
                            {/* {prodct?.name ? (
                            <h1 className="font-bold text-xl" >{prodct.name}</h1>
                            ): (
                                <p>Loading........</p>
                            )}  */}

                            <p>{prodct?.description}</p>
                            
                            <p>{prodct?.price}</p>
                        </div>

            </div>
        </div>
    )
}

