import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    img: "src/Image/IndoorPlants.jpg",
    alt: "Indoor Plants Sale",
  },
  {
    id: 2,
    img: "src/Image/OutdoorPlants.jpg",
    alt: "Outdoor Plants Sale",
  },
  {
    id: 3,
    img: "src/Image/CeramicPot.jpeg",
    alt: "New Pots Collection",
  },
  {
    id: 4,
    img: "src/Image/GardenTools.jpg",
    alt: "Gardening Tools Offer",
  },
];

const HeroSlider = () => {
  return (
<div className="w-full bg-[#02231A] h-[250px] md:h-[400px] lg:h-[500px] object-fit">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
