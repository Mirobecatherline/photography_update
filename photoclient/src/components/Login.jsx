import "../css/login.css"

import React,{useState} from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


import { BiArrowBack } from "react-icons/bi";
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";

function Login() {
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  const[response,setresponse]=useState("")
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  let navigate= useNavigate()

  function google_auth(params) {
    signInWithPopup(auth, provider)
  .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    // localStorage.setItem('token',token);
  
    console.log(token );
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    localStorage.setItem('user',user);
    console.log(user )
    // navigate("/")
    // return result.user.getIdToken();
    fetch('/firebase_auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log('JWT Token:', data.token);
      // Store the JWT token and use it for subsequent requests
    })
  })
  // .then((token) => {
  //   // Send the ID token to the backend
  //   return fetch('/firebase_auth', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + token
  //     }
  //   });
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('JWT Token:', data.token);
  //   // Store the JWT token and use it for subsequent requests
  // })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    console.log(errorMessage);
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  
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
          console.log (data.user)
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

        <button type="submit" style={{margin:"0px"}} class="btn btn-primary">
          Submit
        </button>
      </form>
      <h5>or</h5>
        <button style={{margin:"0px"}} onClick={google_auth} class="btn btn-primary">
          Sign in wiith Google
            <FcGoogle size={22}/>
        </button>
    </div>
  );
}

export default Login