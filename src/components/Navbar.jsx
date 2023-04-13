import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { Searchbar } from "./Searchbar";
import {BsCart2} from "react-icons/bs";

export default function Navbar1()
{let Navigate=useNavigate();
    return(
        <>
      
        <Navbar 
        fluid={true}
  rounded={true}
  className="top-0 z-5 font-serif"
>
  <Navbar.Brand href="https://flowbite.com/" >
    <img
      src="images/foodie hunter.png"
      className="mr-3 h-10 sm:h-9 "
      
    />
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-black ">
       FOODIE
    </span>
  </Navbar.Brand>
  
  <div className="flex md:order-2  pt-5 " >
  <Searchbar ></Searchbar>
    <Button style={{marginRight:"10px",background:"black"}} >
    <div onClick={()=>{Navigate("/SIGNUP")}} > SIGN UP</div>
    </Button> 
    <Button style={{background:"black"}}>
     <div onClick={()=>{Navigate("/LOGIN")}}> LOG IN</div>
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link>
      <Link to="/home" className="text-lg hover:h-12 ">
      Home
      </Link>
    </Navbar.Link>
    
    <Navbar.Link>
    <Link to="/OURMENU"className="text-lg "> Our Menu</Link>
    
    </Navbar.Link>
    <Navbar.Link href="/cart">
      <div className="flex justify-between">
        <span>
          <Link to="/CART"className="text-lg mr-2 "> Cart  </Link>
        </span>
        <span>
        <BsCart2 size='1.5rem'></BsCart2>
        </span>
      </div>
    </Navbar.Link>
    
   
    <Navbar.Link>
      
      
    <Link to="/About" className="text-lg "> About Us</Link>
   
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>

</>
    )
}