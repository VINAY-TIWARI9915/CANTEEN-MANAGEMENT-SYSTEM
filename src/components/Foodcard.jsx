import { Card,Badge } from "flowbite-react";
import React from 'react'
export default function Foodcard(props) {
  return (
    
  
  <div className="">
  <Card className="card" >
    
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
  </Card>
  </div>

    
  )
}
