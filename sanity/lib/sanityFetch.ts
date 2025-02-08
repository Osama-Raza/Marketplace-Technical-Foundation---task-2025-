import { defineQuery } from "next-sanity";



export const  getProduct = defineQuery(
      `*[_type == "product"][0..3]{
        _id,
        category,
        name,
        price,
        quantity,
        "imageUrl": image.asset->url,
        description,

    }`);

   


