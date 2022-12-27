import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Link } from 'react-router-dom';

export default function SwiperSlider({ data, showNumber, title, showLink }) {
  return (
    <>
      <Link to={`/category/${title}`}>
        <h3 className=' text-2xl font-semibold capitalize py-4'>{title} </h3>
      </Link>
      <Swiper
        breakpoints={{
          300: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: showNumber ?showNumber :3 },
        }}
        spaceBetween={30}
        className='mySwiper w-full'
      >
        {data.map((x, index) => (
          <SwiperSlide key={index}>
            <Link to={`/detiles/${x.id}`}>
              <img src={x.thumbnail} alt='' className=' w-full h-[200px]' />{' '}
            </Link>
            {showLink && (
              <Link to={`/category/${title}`}>
                <p className='p-2 text-[#3194bb] hover:text-red-400 hover:underline '>
                  see more in {title}
                </p>
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
