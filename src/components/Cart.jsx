import React, { useState } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { MdAddCircle, MdRemoveCircle} from 'react-icons/md';
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'; 


function Cart() {
  let Navigate=useNavigate();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal
      } = useCart();
    
      if (isEmpty) return  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  flex justify-center ">
    YOUR CART IS EMPTY
      </h5>
    
  const [show, setShow] = useState(false);
  return (
    <>
        
    <div className="bg-gray-100 mr-96 ml-4 font-serif text-2xl text-purple-700 opacity-90">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  flex justify-center ">
    NO. OF ITEMS IN YOUR CART :{totalUniqueItems}
  </h5>
    
          <ul>
          
            {items.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between">
                <img src={item.img} className="mb-5 mt-3 ml-5 border-double border-8 border-gray-900 " style={{width:250, height:200}}/>
                <p className="pt-10">{item.name}  &nbsp;</p>
                <p className="pt-10">Price: ₹{item.price} &nbsp;</p>
               <p className="pt-10">Quantity: {item.quantity} </p>
               
               
              
                
    <Button  className="bg-red-600 m-4" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >             
      <MdRemoveCircle color="white" size='1.5rem'></MdRemoveCircle></Button>
      <Button className="bg-green-400 m-3" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >             
      <MdAddCircle color="white" size='1.5rem' ></MdAddCircle></Button>
      
             
                {/* <button   gradientDuoTone="pinkToOrange" onClick={() => removeItem(item.id)}>&times:REMOVE</button> */}
                </div>
              </li>
              
            ))}
            <Card href="#">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white  flex justify-center ">
  TOTAL PRICE: {cartTotal}
  </h5>
  <div className="m-2 w-2/2  flex justify-center"> <Button className="bg-red-400"  onClick={()=> emptyCart()} > CLEAR CART ITEMS</Button>
  
  <Button variant="success" className="ml-5 bg-green-400">
     <div onClick={()=>{Navigate("/Buying")}}>BUY NOW</div>
    </Button></div>
</Card>
           
                
            
          </ul></div>
        </>
      
  );
}

export default Cart;

