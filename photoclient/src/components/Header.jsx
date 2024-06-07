import "../css/header.css"

import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineMenu} from "react-icons/ai"
import {BiLogInCircle} from "react-icons/bi";
import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from "react"

function Header() {
  
  const [showmenu,setshowmenu]=useState(false)

  
  return (
    <div className=" header_container ">
      <div className="header_logo">
        <div onClick={(e) => setshowmenu(!showmenu)} className="menu">
          <AiOutlineMenu />
        </div>
        <h2>Varsity</h2>
      </div>

      {showmenu ? (
        <div className="sidenav">
          <ul>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                borderRadius: "15px",
                alignItems: "center",
                background: "white",
                margin: "0px 0px 20px 0px",
              }}
            >
              <BiLogInCircle />
              <li>
                <Link to="/login">Login</Link>
              </li>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                borderRadius: "15px",
                alignItems: "center",
                background: "white",
              }}
            >
              <BiLogInCircle />
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </div>
          </ul>
          <div onClick={() => setshowmenu(false)} className="close">
            <div>
              <AiOutlineClose
                style={{
                  background: "white",
                  margin: "5px",
                  borderRadius: "50%",
                  color: "black",
                }}
              />
            </div>
          </div>
        </div>
      ) : null}

      <div className="navlist">
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <div class="dropdown">
              <button>Account</button>
              <div class="dropdown-content">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header