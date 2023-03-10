import { Navbar } from "flowbite-react"
import { Button } from "flowbite-react"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
export default function Navbar1()
{let Navigate=useNavigate();
    return(
        <>
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
    <img
      src="LOGO.png"
      className="mr-3 h-6 sm:h-9"
      
    />
    <span className="self-right whitespace-nowrap text-x1 font-bold dark:text-black">
       FOOD CAVES
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2" >
    <Button style={{marginRight:"15px"}} >
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
      <Link to="/home">
      Home
      </Link>
    </Navbar.Link>
    
    <Navbar.Link>
    <Link to="/OURMENU"> Our Menu</Link>
    
    </Navbar.Link>
    
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
    <Navbar.Link>
    <Link to="/About"> About</Link>
     
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
</>
    )
}