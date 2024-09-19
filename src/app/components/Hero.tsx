"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Carousel = () => {
  return (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className="bg-blue-500 w-full h-[24rem] flex items-center justify-center">
              <h1 className="text-white text-2xl">Slide 1</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-red-500 w-full h-[24rem] flex items-center justify-center">
              <h1 className="text-white text-2xl">Slide 2</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-yellow-500 w-full h-[24rem] flex items-center justify-center">
              <h1 className="text-white text-2xl">Slide 3</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 w-full h-[24rem] flex items-center justify-center">
              <h1 className="text-white text-2xl">Slide 4</h1>
            </div>
          </SwiperSlide>
        </Swiper>
  );
};

export default Carousel;
