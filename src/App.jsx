import React from 'react'
import NavBar from './Components/NavBar'
import "./App.css"
import styled from 'styled-components'
import Theme from './global/styles/theme'
import Home from "./Pages/Home/Home"
import About from './Pages/About/About'
import Projects  from './Pages/Projects/Projects'
import Footer from './Pages/Footer/Footer'

const App = () => {
  
  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Projects/>
      <Footer/>
    </>
    
  )
}

export default App