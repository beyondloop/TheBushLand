import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: "src/Image/indoor.webp",
    alt: "Indoor Plants Sale",
  },
    {
    id: 2,
    img: "src/Image/outdoor_1.jpg",
    alt: "Outdoor Plants Sale",
  },
  {
    id: 3,
    img: "src/Image/pots.webp",
    alt: "New Pots Collection",
  },
  {
    id: 4,
    img: "src/Image/outdoor.avif",
    alt: "Gardening Tools Offer",
  },
];

const HeroSlider = () => {
  return (
    <div className="w-full bg-[#02231A] h-[300px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-[300px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
