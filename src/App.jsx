import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Exp from './Components/Exp'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'




function App() {
 useEffect(() => {
  Aos.init()
 },[])
  return (
    <>
    
    <Navbar></Navbar>
    <Home></Home>
    <Exp></Exp>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    
    
    </>
   
  )
}

export default App
