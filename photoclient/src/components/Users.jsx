import React ,{useEffect, useState}from 'react'

import {AiOutlineSearch} from "react-icons/ai"
import { MDBDataTable } from "mdbreact";

// import Modalmessage from "./Modalmessage";

function Users() {
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
  //     <tr>
  //       <th scope="col">#</th>
  //       <th scope="col">name</th>
  //       <th scope="col">username</th>
  //       <th scope="col">role</th>
  //       <th scope="col">status</th>
  //     </tr>

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
    rows:users

  };
  return (
    <div
      style={{
        padding: "5px 10px 5px 10px",
        width: "90%",
        margin: "auto",
      }}
    >
      <MDBDataTable paging={true} data={data} />
    </div>
    //     <div>
    //       {/*
    //        */}
    //       <div class="input-group">
    //         <div class="form-outline">
    //           <input type="search" id="form1" class="form-control"
    //           placeholder="Search by user"
    //           onChange={(e)=>setsearchinput(e.target.value) }
    //           />
    //           {/* <label class="form-label" for="form1">Search</label> */}
    //         </div>
    //         <button type="button" class="btn btn-primary">
    //         <AiOutlineSearch/>
    //           <i class="fas fa-search"></i>
    //         </button>
    //       </div>

    //       <table class="table table-striped">
    //   <thead>
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">name</th>
    //       <th scope="col">username</th>
    //       <th scope="col">role</th>
    //       <th scope="col">status</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {users.filter((val)=>{
    //       if(searchinput===""){
    //         return val
    //       }
    //       else if ((val.name.toLowerCase().includes(searchinput.toLowerCase()))||(val.role.toLowerCase().includes(searchinput.toLowerCase()))){
    //         return val
    //       }
    //       return false;
    //     }).map((user)=>{
    //       return (
    //         <tr key={user.id}>
    //       <td>{user.id}</td>
    //       <td>{user.name}</td>
    //       <td>{user.username}</td>
    //       <td>{user.role}</td>
    //       <td>{user.approved ?"approved" :"not approved" }</td>
    //       {/* <td>
    //       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
    //       onClick={()=>{
    //         setactiveuser(user)
    //       }}
    //       >
    //   View More
    // </button>
    //       </td> */}
    //     </tr>
    //       )
    //     })}
    //   </tbody>
    // </table>
    //     </div>
  );
}

export default Users