'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import './SwiperBanner.css'

export const SwiperBanner = () => {
  return (
    <>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay
      loop={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div
          className="
            aspect-[25/8]
            "
        >
          <Image src="/banner-example1.png" style={{objectFit: 'cover'}} fill alt='banner-example' />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="
            aspect-[25/8]
            "
        >
          <Image src="/banner-example3.png" style={{objectFit: 'cover'}} fill alt='banner-example' />
        </div>
      </SwiperSlide>


    </Swiper>
    </>
  );
};

