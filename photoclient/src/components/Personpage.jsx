import "../css/personpage.css"

import {useEffect, useState} from "react"

import Content from './Content'
import React from 'react'
import Sidenav from './Sidenav'
import Topnav from './Topnav'

function Personpage() {
  const [currentuser, setcurrentuser] = useState([]);
  const [showsidenav, setshowsidenav] = useState(false)
  const toggleSideNav = () => {
    setshowsidenav(!showsidenav);
  };


  useEffect(() => {
    const currentuser = JSON.parse(localStorage.getItem('user'));
    if (currentuser) {
     setcurrentuser(currentuser);
    }
  }, []);
  console.log(currentuser)

    const [screenSize, setScreenSize] = useState(undefined);
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (screenSize <= 900) {
        setshowsidenav(false);
      } else {
        setshowsidenav(true);
      }
    }, [screenSize]);
  return (
    <div className="body">
      {showsidenav ? (
        <div className="largewidth">
          <Sidenav currentuser={currentuser} toggleSideNav={toggleSideNav} />
        </div>
      ) : (
        <div className="smallwidth">
          <Sidenav currentuser={currentuser} toggleSideNav={toggleSideNav} />
        </div>
      )}

      <div className={showsidenav ? "content" : "content1"}>
        <div className="topnav">
          <Topnav toggleSideNav={toggleSideNav} />
        </div>
        <Content currentuser={currentuser} />
      </div>
    </div>
  );
}

export default Personpage