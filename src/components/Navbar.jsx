import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import { Searchbar } from "./Searchbar";
export default function Navbar1()
{let Navigate=useNavigate();
    return(
        <>
        <Navbar 
        fluid={true}
  rounded={true}
  className="sticky top-0 z-5 bg-stone-300 font-serif	"
>
  <Navbar.Brand href="https://flowbite.com/" >
    <img
      src="LOGO.png"
      className="mr-3 h-10 sm:h-9 "
      
    />
    <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-black ">
       FOOD CAVES
    </span>
  </Navbar.Brand>
  
  <div className="flex md:order-2  pt-5 " >
  <Searchbar ></Searchbar>
    <Button style={{marginRight:"10px"}} >
    <div onClick={()=>{Navigate("/SIGNUP")}} > SIGN UP</div>
    </Button> 
    <Button>
     <div onClick={()=>{Navigate("/LOGIN")}}> LOG IN</div>
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      <Link to="/home" className="text-lg ">
      Home
      </Link>
    </Navbar.Link>
    
    <Navbar.Link>
    <Link to="/OURMENU"className="text-lg "> Our Menu</Link>
    
    </Navbar.Link>
    
    <Navbar.Link href="/navbars">
    <Link to="/OURMENU"className="text-lg "> Contact</Link>
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/About" className="text-lg "> About</Link>
   
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</>
    )
}