import { Carousel } from "flowbite-react"

function Carousel1() {
  return (
    <><div className="h-56 sm:h-64 xl:h-40 2xl:h-96">
    <Carousel slideInterval={2000}>
      
   
      <img
        src="images/biryani/goan-fish-biryani.jpg"
        alt="..."
      />
       <img
        src="images/chinese/spring-rolls.jpg"
        alt="..."
      />
       <img
        src="images/vegetable/vegetable-curry.jpeg"
        alt="..."
      />
      
      
      <img
        src="images/chinese/szechuan-chicken.jpg"
        alt="..."
      />
      <img
        src="images/chicken/Handi-chicken.jpg"
        alt="..."
      />
     
      
    </Carousel>
  </div></>
  )
}

export default Carousel1
