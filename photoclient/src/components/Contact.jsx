import '../css/contact.css'

import{BsWhatsapp} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import React from 'react'
import {RiMessengerLine} from "react-icons/ri"
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5krwgvn', 'template_gd4wtzr', form.current, 'Yjd6tQG_0qJpZpKXc')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id="contact" className="container_section contactsection">
      <h2>Contact Us</h2>
      <div className="container contact_container">
        <div className="contact_platform">
          <article className="contact_article">
            <div className="contact_icon">
              <HiOutlineMail />
            </div>
            <div className="contact_platform_email">Email</div>
            <h5 style={{ fontSize: "60%" }}>service@versityelectronics.com</h5>
            <div>
              <a href="mailto:catemirobe@gamil.com" target="_blank">
                send a message
              </a>
            </div>
          </article>
          <article className="contact_article">
            <div className="contact_icon">
              <RiMessengerLine />
            </div>
            <div className="contact_platform_messager">Messenger</div>
            <div className="link">VarsityAfrica</div>
            <div>
              <a href="https://m.me/catherine.myrobz.5" target="_blank">
                send a message
              </a>
            </div>
          </article>
          <article className="contact_article">
            <div className="contact_icon">
              <BsWhatsapp />
            </div>
            <div className="contact_platform_whatsapp">WhatsApp</div>
            <div className="link">0721969149</div>
            <div>
              <a href="https://wa.me/721969149" target="_blank">
                send a message
              </a>
            </div>
          </article>
        </div>
        <div className="contact_form">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="YourFullName"
              required
            />
            <input type="email" name="email" placeholder="YourEmail" required />
            <textarea
              name="message"
              id=""
              rows="7"
              placeholder="yourMessage"
              required
            ></textarea>
            <button className="btn btn-primary">send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Contact