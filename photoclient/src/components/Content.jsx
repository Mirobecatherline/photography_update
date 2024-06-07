import '../css/content.css'

import React from 'react'
import { json } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

function Content({currentuser}) {
  const [images,setImages]=useState([])
  useEffect(()=>{
    fetch("/user_images",{
      headers:{
        "Authorization":localStorage.getItem('token'),
      }
    })
      .then((res)=>res.json())
      .then((data)=>setImages(data))
    
  },[])
  console.log(images)
  return (
    <div className="container">
      <div className="image-list">
        {images.map((image) => {
          return (
            <div className="image-container">
              <img src={image.image_url} alt="userimage" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Content