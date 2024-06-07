import { Route, Routes } from "react-router-dom";

import About from "./components/About";
import Admin from "./components/Admin";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Landingpage from "./components/Landingpage";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Personpage from "./components/Personpage";
import Portfolio from "./components/Portfolio";
import Protectedroute from "./components/Protectedroute";
import Protectedroutradmin from "./components/Protectedroutradmin";
import React from "react";
import Services from "./components/Services";
import Signup from "./components/Signup";
import Superadmin from "./components/Superadmin";
import Testimonials from "./components/Testimonials";

function App() {
  // const currentuser = JSON.parse(localStorage.getItem('user')).role;
  return (
    <div>
      {/* <Header/>
      <Home/>
      <Nav/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/> */}
      <Routes>  
        <Route exact path="/" element={<Landingpage/>} />
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/signup" element={<Signup/>} /> 
        <Route exact path="/account" element={<Protectedroute>
          <Personpage/>
        </Protectedroute>} /> 
        <Route exact path="/admin" element={<Protectedroutradmin>
          <Admin/>
        </Protectedroutradmin>} /> 
        <Route exact path="/superadmin" element={<Protectedroute>
          <Superadmin/>
        </Protectedroute>} /> 
      </Routes>
    </div>
  );
}

export default App;
