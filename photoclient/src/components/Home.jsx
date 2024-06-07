import "../css/home.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import me from '../assets/me3.jpg'
import me1 from '../assets/me1.jpg'
import me2 from '../assets/me2.jpg'

function Home() {
  return (
    <div className=' home_body'>
   
        {/* <div className="home_text"> */}
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={me} alt="" /></SwiperSlide>
        <SwiperSlide><img src={me1}/></SwiperSlide>
        <SwiperSlide><img src={me2}/></SwiperSlide>
      </Swiper>
            {/* <h1 className='tagline'>"Every picture tells a story <br/> Every story needs a picture</h1>
            <button className="view_gallery">
                View Gallery
            </button> */}
        {/* </div> */}
        
    </div>
  )
}

export default Home