import "../css/footer.css"

import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <div><a href="#" className="footer_icon">Varsity</a></div>
      <div>
        <ul className="permalink">
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer_socials">
        <div><a href=""><AiFillFacebook/></a></div>
        <div><a href=""><AiOutlineInstagram/></a></div>
        <div><a href=""> <AiFillTwitterCircle/></a></div>
      </div>
      <div>
        <h5 className="copyright">&copy; Varsity.All rights reserved</h5>
      </div>  
    </footer>
  )
}

export default Footer