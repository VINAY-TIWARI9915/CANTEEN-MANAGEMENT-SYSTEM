

import { useState } from 'react'
 

import Navbar1 from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Home'
import About1 from './components/About'
import OURMENU from './components/OURMENU'
import Login from './components/Login'
import Signup from './components/Signup'
import Cart from './components/Cart'
import { CartProvider, useCart } from "react-use-cart";
import Buying1 from './components/Buying'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar1></Navbar1>
    <Routes>
    <Route path="/" element={<Homepage/>}></Route>

    <Route path="/home" element={<Homepage/>}></Route>
    <Route path="/OURMENU" element={<CartProvider><OURMENU/></CartProvider>}></Route>
    <Route path="/Cart" element={<CartProvider><Cart/></CartProvider>}></Route>
    <Route path="/about" element={<About1/>}></Route>
    <Route path="/LOGIN" element={<Login/>}></Route>
    <Route path="/SIGNUP" element={<Signup/>}></Route>
    <Route path="/Buying" element={<Buying1/>}></Route>
    
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
   
   
   
    </>
 
  )
}

export default App
