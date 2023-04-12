import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";

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
          <h1>Cart ({totalUniqueItems})</h1>
    
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <img src={item.img} className="h-48"/>
               Quantity: {item.quantity} x Name: {item.title} &mdash; Price: {item.price} &nbsp;
                
                 
              
                
    <Button gradientDuoTone="pinkToOrange"  onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >             
      -</Button>
      <Button gradientDuoTone="purpleToBlue"  onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >             
      ADD  +</Button>
      
             
                <button   gradientDuoTone="pinkToOrange" onClick={() => removeItem(item.id)}>&times:REMOVE</button>
                
              </li>
              
            ))}
            <Card href="#">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  flex justify-center ">
  TOTAL PRICE: {cartTotal}
  </h5>
  <div className="m-2 w-2/2  flex justify-center"> <Button  onClick={()=> emptyCart()} > CLEAR CART ITEMS</Button></div>
  
</Card>
           
                
            
          </ul>
        </>
      
  );
}

export default Cart;
