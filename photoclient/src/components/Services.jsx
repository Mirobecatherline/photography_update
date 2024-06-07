import "../css/service.css"

import React from 'react'

// import me from '../assets/me3.jpeg'
// import me1 from '../assets/me1.jpeg'
// import me2 from '../assets/m2.jpeg'

function Services() {
  return (
    <div className="container_section" id="services">
      <h2>Our Services</h2>
      <div className="service_container">
        <article>
          <div className="service_image">
            {/* <img src={me} alt='image'/> */}
          </div>
          <div className="explanation">
            <h4>Event shoots</h4>
            <p>
              We specialize in event photography, capturing the essence of each
              occasion through creative and technical expertise. Trust us to
              deliver stunning images that tell the story of your special day.
            </p>
            <button className="service_btn">Contact Us</button>
          </div>
        </article>

        <article>
          <div className="service_image">
            {/* <img src={me1} alt='image'/> */}
          </div>
          <div className="explanation">
            <h4>outdoor shoots</h4>
            <p>
              Our outdoor photography captures the natural beauty of the world,
              creating artistic and captivating images. From landscapes to
              outdoor activities, trust us to deliver breathtaking results.
            </p>
            <button className="service_btn">Contact Us</button>
          </div>
        </article>

        <article>
          <div className="service_image">
            {/* <img src={me2} alt='image'/> */}
          </div>
          <div className="explanation">
            <h4>Indoor shoots</h4>
            <p>
              Our indoor photography services are designed to capture the
              essence of any setting, from elegant interiors to cozy spaces.With our indoor photography
              services, you can trust us to showcase the unique beauty of your
              space or subject in a captivating way.
            </p>
            <button className="service_btn">Contact Us</button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Services