import { BiArrowBack } from "react-icons/bi";
import React from 'react'
import Upload from './Upload'
import Users from './Users'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function Admin() {
    const [show,setshow]=useState(false)
    let navigate = useNavigate();
      const handleBackButtonClick = () => {
        navigate("/");
      };
  return (
    <div>
      <div
        style={{
          background: "black",
          display: "flex",
          justifyContent: "space-between",
          opacity: ".8",
          color: "white",
          padding: "5px 10px 5px 10px",
          fontSize: "large",
          margin: "10px",
          borderRadius:"20px"
        }}
      >
        <button
          onClick={handleBackButtonClick}
          style={{
            background: "white",
            color: "black",
            padding: "5px 10px 5px 10px",
            fontSize: "large",
            margin: "10px",
          }}
        >
          <BiArrowBack />
          <i className="fa fa-arrow-left"></i> Back
        </button>

        <button
          style={{
            background: "white",
            color: "black",
            padding: "5px 10px 5px 10px",
            fontSize: "large",
            margin: "10px",
          }}
          onClick={() => {
            setshow(!show);
          }}
        >
          {show ? "Upload_picture" : "Show_users"}{" "}
        </button>
      </div>
      {show ? <Users /> : <Upload />}
    </div>
  );
}

export default Admin