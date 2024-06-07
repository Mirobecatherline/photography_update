import '../css/about.css'

import {BsFolder2Open} from "react-icons/bs"
import {FaAward} from "react-icons/fa"
import {HiOutlineUsers} from "react-icons/hi"
import React from 'react'
import me from"../assets/me1.jpg"

function About() {
  return (
    <section id="about" className="container_section">
      <h2>About</h2>
      <div className="about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={me} alt="me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ year working</small>
            </article>

            <article className="about_card">
              <HiOutlineUsers className="about_icon" />
              <h5>clients</h5>
              <small>50+clients</small>
            </article>

            <article className="about_card">
              <BsFolder2Open className="about_icon" />
              <h5>Projecs</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Welcome to Varsity Africa, a photography website that captures the
            beauty, diversity, and vibrancy of the African continent. Our
            mission is to showcase Africa's rich cultural heritage, its people,
            and its stunning landscapes through the lens of our passionate
            photographers. At Varsity Africa, we believe that photography has
            the power to tell stories, inspire change, and unite people across
            borders. Whether you are an avid traveler, a photography enthusiast,
            or simply curious about Africa, we invite you to explore our
            collection and join us on this visual journey of discovery. Kind
            Regards,
          </p>
          <button>
            {" "}
            <a href="#contact">Let's Talk</a>
          </button>
        </div>
      </div>
    </section>
  );
}
export default About