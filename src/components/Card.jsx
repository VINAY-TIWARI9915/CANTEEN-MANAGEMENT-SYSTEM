import { Card } from "flowbite-react";
import "./app.css"
function Card1() {
    return (
    <>
   
   <div className="max-w-sm">
  <Card
    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
    imgSrc="https://flowbite.com/docs/images/products/product-1.png"
  >
    
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
      </h5>
  
    <div className="mt-2.5 mb-5 flex items-center">
      
      
      
    </div>
    <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">
        $599
      </span>
      <a
        href="#"
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </a>
    </div>
  </Card>
</div>
  </>
)
}
export default Card1();