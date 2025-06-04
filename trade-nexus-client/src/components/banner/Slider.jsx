import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Banner1 from './Banner1';
import Banner2 from './Banner2';
import Banner3 from './Banner3';

export const Slider = () => {
  return (
    <>
      <div className='h-[90vh]'>
        <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slides here */}
        <SwiperSlide><Banner1></Banner1></SwiperSlide>
        <SwiperSlide><Banner2></Banner2></SwiperSlide>
        <SwiperSlide><Banner3></Banner3></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
