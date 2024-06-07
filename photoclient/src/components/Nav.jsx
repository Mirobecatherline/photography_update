import "../css/nav.css"

import {AiOutlineHome} from "react-icons/ai"
import {FiUser} from "react-icons/fi"
import {GiBookmarklet} from "react-icons/gi"
import React from 'react'
import {RiMessage2Fill} from "react-icons/ri"
import {RiServiceLine} from "react-icons/ri"
import {useState} from "react"

function Nav() {
  const [activenav,setactivenav]=useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setactivenav('#')} className={activenav==='#'?'active':''}><AiOutlineHome/></a>
     <a href="#about"onClick={()=>setactivenav('#about')} className={activenav==='#about'?'active':''}><FiUser/></a>
     <a href="#experience"onClick={()=>setactivenav('#testimonials')} className={activenav==='#testimonials'?'active':''}><GiBookmarklet/></a>
      <a href="#services"onClick={()=>setactivenav('#services')} className={activenav==='#services'?'active':''}><RiServiceLine/></a>
      <a href="#contact"onClick={()=>setactivenav('#contact')} className={activenav==='#contact'?'active':''}><RiMessage2Fill/></a>
    
   </nav>
  )
}

export default Nav