import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import data from '../../../data/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper';

import './styles.scss';

export default function SwiperShow() {
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        centeredSlides={true}
        loop={true}
        className='mySwiper relative h-96 '
      >
        {data.carousel.map((x,index) => (
          <SwiperSlide key={index} className='' >
            <img src={x.img} alt='' className=' w-full h-72 ' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
