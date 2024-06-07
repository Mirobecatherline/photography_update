import "../css/sidenav.css"

import { AiOutlineClose } from "react-icons/ai";
import React from 'react'
import { useNavigate } from "react-router-dom";

function Sidenav({currentuser ,toggleSideNav}) {
  let navigate= useNavigate()
  return (
    <div className="sidenav_container">
      <div className="nav-toggle" onClick={toggleSideNav}>
        <AiOutlineClose className="close-icon" />
      </div>
      <div className="profile_pic">
        <img
          src="data:image/jpeg;base64,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"
          alt="me"
        />
      </div>
      <div className="sidenav_content">
        <p>Name:{currentuser.name}</p>
        <p>Email:{currentuser.email}</p>
        <p>PictureNO:</p>
        {currentuser.approved ? (
          <p>Status: Approved</p>
        ) : (
          <p>Status: Not-approved</p>
        )}
        <button
          className="logoutbutton"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
}

export default Sidenav