import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Banner1 from "./Banner1";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";

export const Slider = () => {
  return (
    <>
      <div className="h-[90vh]">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Banner1></Banner1>
          </SwiperSlide>
          <SwiperSlide>
            <Banner2></Banner2>
          </SwiperSlide>
          <SwiperSlide>
            <Banner3></Banner3>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
