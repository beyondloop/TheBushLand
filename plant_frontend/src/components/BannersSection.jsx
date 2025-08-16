import React from "react";

const banners = [
  {
    id: 1,
    img: "src/Image/summersale.avif",
    alt: "Summer Sale",
    title: "Summer Plant Sale",
    subtitle: "Up to 50% Off",
    button: "Shop Now",
  },
  {
    id: 2,
    img: "src/Image/indoorcollection.avif",
    alt: "Indoor Plants",
    title: "Indoor Plant Collection",
    subtitle: "Freshen Up Your Home",
    button: "Explore",
  },
];

const BannersSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={banner.img}
              alt={banner.alt}
              className="w-full h-48 md:h-60 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-4">
              <h3 className="text-xl md:text-2xl font-bold">{banner.title}</h3>
              <p className="text-sm md:text-base mt-1">{banner.subtitle}</p>
              <button className="mt-3 px-4 py-1 bg-green-600 rounded text-sm hover:bg-green-700">
                {banner.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BannersSection;
