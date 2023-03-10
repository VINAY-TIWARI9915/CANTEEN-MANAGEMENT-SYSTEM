import { Carousel } from 'flowbite-react'

import { useState } from 'react'
 

import Navbar1 from './components/Navbar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Home'
import Aboutpage from './components/About'
import OURMENU from './components/OURMENU'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar1></Navbar1>
    <Routes>
    <Route path="/home" element={<Homepage/>}></Route>
    <Route path="/OURMENU" element={<OURMENU/>}></Route>
    <Route path="/about" element={<Aboutpage/>}></Route>
    <Route path="/LOGIN" element={<Login/>}></Route>
    <Route path="/SIGNUP" element={<Signup/>}></Route>
    
    </Routes>
    </BrowserRouter>
   
   
    </>
 
  )
}

export default App
