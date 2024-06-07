import "../css/login.css"

import React,{useState} from 'react'

import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Login() {
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  const[response,setresponse]=useState("")
  
  let navigate= useNavigate()
   function handlesubmit(e) {
    e.preventDefault();
    const configuration={
      method:"POST",
      headers:{
        "content-type":"application/json",
      },
      body: JSON.stringify({
        username:username,
        password:password,
      })
    }
    fetch("/login",configuration)
    .then((res)=>
    {
      if (res.ok){
        res.json().then((data)=>{
          // console.log(data);
         
          // localStorage.setItem('user',JSON.stringify(data.user));
          // localStorage.setItem('token',(data.token));})
           localStorage.setItem('user',JSON.stringify(data.user));
        localStorage.setItem('token',(data.token));
        if (data.user.role==="admin") {
          navigate("/admin")
        } 
        else if (data.user.role==="superadmin"){
          navigate("/superadmin")
            
        }
        else {
          navigate("/account")
        }
       })
        // localStorage.setItem('user',JSON.stringify(data.user));
        // localStorage.setItem('token',(data.token));})
      } else{
        res.json().then((error)=>setresponse(error.errors))
      }
    })
   e.target.reset();
  } 


  const handleBackButtonClick = () => {
     navigate("/");
  };
  return (
    <div className="form_container">
      <form onSubmit={handlesubmit}>
        <button
          onClick={handleBackButtonClick}
          style={{
            background: "black",
            color: "white",
            padding: "5px 10px 5px 10px",
            fontSize: "large",
            marginLeft:"0px"
          }}
        >
         < BiArrowBack/>
          <i className="fa fa-arrow-left"></i> Back
        </button>
        <h4>Login</h4>
        {response === "" ? null : <p>!! {response}</p>}
        <div class="form-group">
          <label for="exampleInput">Username</label>
          <input
            type="text"
            class="form-control"
            id="exampleInput"
            placeholder="username"
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
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <small id="emailHelp" class="form-text text-muted">
          Dont have an account? <Link to="/signup">Sign Up</Link>
        </small>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login