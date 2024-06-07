import "../css/landingpage.css"

import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Nav from './Nav'
import Portfolio from './Portfolio'
import React from 'react'
import Services from './Services'
import Testimonials from './Testimonials'

function Landingpage() {
  return (
    <div>
      <Header/>
      <Home/>
      <Nav/>
      <About/>
      <Services/>
      {/* <Portfolio/> */}
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Landingpage