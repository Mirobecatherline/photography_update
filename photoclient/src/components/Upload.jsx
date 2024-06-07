import "../css/upload.css"

import React from 'react'
import { useState } from 'react';

function Upload() {
  const [images, setImages] = useState([]);
  const [userid, setuserid]= useState([])
  const [comment, setcomment] = useState('')
  // // Handle file input change
  // let imageurl=[]
// console.log(images)
// for (const file of images) {
//   imageurl.push(URL.createObjectURL(file))
// }
//   console.log(imageurl)
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('user_id',userid);
// console.log(images)
    for (const file of images) {
      formData.append('images', file);
    }
   
// console.log(formData)
    // Send the files to the API using fetch
    fetch('/images', {
      method: 'POST',
      body:
      formData  
    })
      .then((response) => {
        if (response.ok) {
          setcomment('submitted!!')
          return response.json();
        } else {
          setcomment("not submitted");
         
      }})
     event.target.reset(); 
  };
  
  return (
    <div className="upload">
      <form onSubmit={handleFormSubmit}>
        <input
          type="file"
          multiple
          onChange={(e) => {
            setImages(e.target.files);
          }}
        />
        <input
          type="text"
          placeholder="user_id"
          onChange={(e) => {
            setuserid(e.target.value);
          }}
        />
        <button type="submit">Upload Images</button>
        <div style={{ background: "white" }}>
          <p
            style={
              comment === "submitted!!"
                ? { color: "green", background: "white" }
                : { color: "red", background: "white" }
            }
          >
            {comment}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Upload