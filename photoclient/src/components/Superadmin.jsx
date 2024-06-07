import "../css/superadmin.css"

import React, { useEffect, useState } from "react";

import { BiArrowBack } from "react-icons/bi";
import { MDBDataTable } from "mdbreact";
import { useNavigate } from "react-router-dom";

function Superadmin() {

   const [users, setusers] = useState([]);
   const [activeuser, setactiveuser] = useState("");
   const loadData = () => {
     fetch("/users", {
       headers: {
         Authorization: localStorage.getItem("token"),
       },
     })
       .then((r) => r.json())
       .then((data) => {
         setusers(data);
         console.log(users);
       })
       .catch((e) => console.log(e));
   };

   useEffect(() => {
     // setInterval(loadData,5000)
     loadData();
   });
   const [searchinput, setsearchinput] = useState("");
 

   const data = {
     columns: [
       {
         label: "ID",
         field: "id",
         sort: "asc",
         width: 150,
       },
       {
         label: "Name",
         field: "name",
         sort: "asc",
         width: 270,
       },
       {
         label: "Username",
         field: "username",
         sort: "asc",
         width: 200,
       },
       {
         label: "Role",
         field: "role",
         sort: "asc",
         width: 100,
       },
       {
         label: "Status",
         field: "status",
         sort: "asc",
         width: 150,
       },
     ],
     rows: users,
   };

   let navigate = useNavigate();
  
     

  const[name,setname]=useState("")
  const[email,setemail]=useState("")
  const[username,setusername]=useState("")
  const[password,setpassword]=useState("")
  const[password_confirmation,setpassordcornfirmation]=useState("")
  const[response,setresponse]=useState("")
  
  // let navigate= useNavigate()
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
        role:"admin",
        password:password,
        password_confirmation:password_confirmation,
      })
    }
    fetch("/signup",configuration)
    .then((res)=>
    {
      if (res.ok){
       console.log("sucess")
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
    <div className="container">
      {/* <h3 style={{ textAlign: "center", fontStyle: "italic" }}>
        Superadmin dashboard
      </h3> */}

      <button
        onClick={handleBackButtonClick}
        style={{
          background: "black",
          color: "white",
          padding: "5px 10px 5px 10px",
          fontSize: "large",
          margin: "10px",
        }}
      >
        <BiArrowBack />
        <i className="fa fa-arrow-left"></i> Back
      </button>

      <div className="add">
        <div className="row">
          <div className="row">
            <div className="col-sm-6">
              <button
                variant="primary"
                type="button"
                className="btn btn-primary col-sm-6"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add Admin
              </button>
            </div>
            <div className="col-sm-6">
              <button
                variant="primary"
                type="button"
                className="btn btn-primary col-sm-6"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                View Users
              </button>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              width: "90%",
              maxWidth: "none",
              lineHeight: 2,
              padding: 20,
            }}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  View users
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                className="modal-body"
                style={{
                  padding: "5px 10px 5px 10px",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <MDBDataTable paging={true} data={data} />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add an admin
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handlesubmit}>
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
                    <label for="exampleInputPassword1">
                      Password_confirmation
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password_confirmation"
                      required
                      onChange={(e) => setpassordcornfirmation(e.target.value)}
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superadmin