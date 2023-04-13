import { Card,Badge } from "flowbite-react";
import React from 'react'
import { CartProvider, useCart } from "react-use-cart";
export default function Foodcard(props) {
  const { addItem } = useCart();
  return (
    
  
  <div className="mr-2 ml-1.5 mb-3 ">
  <Card className="card bg-gradient-to-r from-gray-200 to-red-200" >
    
  <a href="#">
        <img className="min-w-full" src={props.image} alt="" style={{minHeight:"300px",maxHeight:"300px"}} />
    </a>
    <h6 className="text-2xl font-bold tracking-tight text-orange-900 dark:text-white">
     {props.name}
    </h6>
   
    <p className="font-serif font-bold  text-gray-700 dark:text-gray-400">
     RATING : {props.rating} stars
    </p>
    <p className="font-serif font-bold  text-gray-700 dark:text-gray-400">
     PRICE: ₹{props.price}/-
    </p>
    <button
            name="Add to cart"
            class="bg-gray-300 hover:bg-red-500 text-gray-700 hover:text-white font-light text-base py-2 ml-14 px-4 w-1/2  rounded-full"
            onClick={() => addItem(props.element)}
          >
            ADD TO CART
          </button>
  </Card>
  </div>

    
  )
}
