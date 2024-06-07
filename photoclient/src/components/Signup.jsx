import "../css/signup.css"

import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from "react"

function Signup() {
  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  const[password_confirmation,setpassordcornfirmation]=useState("")
  const[response,setresponse]=useState("")
  let navigate= useNavigate()
  const handleBackButtonClick = () => {
    navigate("/");
  };
  function handlesubmit(e) {
    e.preventDefault();
    const configuration={
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({
        name:name,
        email:email,
        username:username,
        password:password,
        password_confirmation:password_confirmation,
      })
    }
    fetch("/signup",configuration)
    .then((res)=>
    {
      if (res.ok){
        navigate("/login")
      } else{
        res.json().then((error)=>setresponse(error.errors))
      }
    })
   e.target.reset();

 
  } 
  return (
    <div className="signup_container">
      <form onSubmit={handlesubmit}>
        <button
          onClick={handleBackButtonClick}
          style={{
            background: "black",
            color: "white",
            padding: "5px 10px 5px 10px",
            fontSize: "large",
            marginLeft: "0px",
          }}
        >
          <BiArrowBack />
          <i className="fa fa-arrow-left"></i> Back
        </button>
        <h4>SignUp</h4>
        {response === "" ? null : <p>!! {response}</p>}

        <div class="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="name"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="username"
            required
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password_confirmation</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password_confirmation"
            required
            onChange={(e) => setpassordcornfirmation(e.target.value)}
          />
        </div>
        <small id="emailHelp" class="form-text text-muted">
          Already have an account? <Link to="/login">Login</Link>
        </small>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup