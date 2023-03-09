import { Carousel } from "flowbite-react"

function Carousel1() {
  return (
    <><div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel slideInterval={5000}>
      
   
      <img
        src="img3.jpg"
        alt="..."
      />
       <img
        src="c2.avif"
        alt="..."
      />
      
      
      <img
        src="5.jpg"
        alt="..."
      />
      <img
        src="img2.jpg"
        alt="..."
      />
      <img
        src="img4.webp"
        alt="..."
      />
      
    </Carousel>
  </div></>
  )
}

export default Carousel1
