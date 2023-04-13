import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { MdAddCircle, MdRemoveCircle} from 'react-icons/md';

function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal
      } = useCart();
    
      if (isEmpty) return <p>Your cart is empty</p>;
    
  const [show, setShow] = useState(false);
  return (
    <>
        
    <div className="bg-gray-100 mr-96 ml-4 font-serif text-2xl underline text-sky-700">
    <h1>Cart ({totalUniqueItems})</h1>
          <ul>
          
            {items.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between">
                <img src={item.img} className="mb-5 mt-3 ml-5" style={{width:250, height:200}}/>
                <p className="pt-10">{item.name} &mdash; Price: {item.price} &nbsp;</p>
               <p className="pt-10">Quantity: {item.quantity} </p>
               
               
              
                
    <Button  className="bg-slate-200 m-4" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >             
      <MdRemoveCircle color="black" size='1.5rem'></MdRemoveCircle></Button>
      <Button className="bg-slate-200 m-3" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >             
      <MdAddCircle color="black" size='1.5rem' ></MdAddCircle></Button>
      
             
                {/* <button   gradientDuoTone="pinkToOrange" onClick={() => removeItem(item.id)}>&times:REMOVE</button> */}
                </div>
              </li>
              
            ))}
            <Card href="#">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  flex justify-center ">
  TOTAL PRICE: {cartTotal}
  </h5>
  <div className="m-2 w-2/2  flex justify-center"> <Button  onClick={()=> emptyCart()} > CLEAR CART ITEMS</Button></div>
  
</Card>
           
                
            
          </ul></div>
        </>
      
  );
}

export default Cart;

