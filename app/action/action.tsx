"use client"
import React, {useState , useEffect} from "react";
import { Product } from "@/types/products";
 export default function ActionCart() {
    const [cartItems , setCartItems] = useState<Product[]>([])
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]') as Product[]
        setCartItems(cart)
    } , [])
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4"> Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-2xl text-slate-200 text-center ">Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item , index) =>
                    (
                        <div key={index} className="border-b p-2">
                            <h2 className="text-lg font-semibold">{item.name}</h2>
                        </div>
                    )
                    
                    )}
                </div>
            )}
 
    </div>
 )
}