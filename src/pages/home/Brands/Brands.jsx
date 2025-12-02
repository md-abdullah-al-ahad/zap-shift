import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import start_people from "../../../assets/brands/start_people.png";

const brandLogos = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  start_people,
];

const Brands = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={4}
      spaceBetween={30}
      grabCursor={true}
      modules={[Autoplay]}
      freeMode={{
        enabled: true,
        momentum: false, // NO momentum, NO snapping
      }}
      speed={9000} // SLOW + ULTRA SMOOTH
      autoplay={{
        delay: 0, // no pausing
        disableOnInteraction: false,
      }}
      allowTouchMove={false} // keeps movement consistent
    >
      {brandLogos.map((logo, index) => (
        <SwiperSlide key={index}>
          <img src={logo} alt="brand" style={{ width: "100px" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
