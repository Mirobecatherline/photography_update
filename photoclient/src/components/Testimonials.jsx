import "../css/testimonials.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import React from 'react'
import me from '../assets/me3.jpg'

const data = [
  {
    id: 1,
    image: me,
    review:
      "Varsity Africa truly exceeded our expectations with their event photography services. I highly recommend Varsity Africa for any event photography needs.",
    name: "John Karanja",
  },
  {
    id: 2,
    image: me,
    review:
      "Their photographers have an incredible eye for detail and are able to capture the essence of each location in a way that is both artistic and inspiring.",
    name: "Sarah Kerubo",
  },
  {
    id: 3,
    image: me,
    review:
      "he resulting images were simply stunning, showcasing the beauty of my products in a way that has increased sales and engagement on my website.",
    name: "Jane wairimo",
  },
];
function Testimonials() {
  return (
    <div className="testimonial_top">
      
      <h2 className="heading" >Testimonials</h2>
    <section id='testimonials' className="container_section testimonial_section">
   
    
    <Swiper className="container testimonial_container"   
     // install Swiper modules
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}
    >
      {data.map((data)=>{
        return  (
      <SwiperSlide className="testimonial" key={data.index}>
        <div className="clientimage">
          {/* <img src={data.image} alt="clentimage1" className="clientimage1" /> */}
          <h5 className='client_name'>{data.name}</h5>
          <small className="client_review">
            {data.review}
          </small>
        </div>
      </SwiperSlide>
        )
      })}
    
    </Swiper>
    </section>
    </div>
  )
}

export default Testimonials