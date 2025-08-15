import React from "react";

const BannersSection = () => {
  return (
    <section className="py-8 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Banner */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="src/Image/summersale.avif"
            alt="Summer Sale"
            className="w-full h-48 md:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-4">
            <h3 className="text-xl md:text-2xl font-bold">Summer Plant Sale</h3>
            <p className="text-sm md:text-base mt-1">Up to 50% Off</p>
            <button className="mt-3 px-4 py-1 bg-green-600 rounded text-sm hover:bg-green-700">
              Shop Now
            </button>
          </div>
        </div>

        {/* Second Banner */}
        <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img
            src="src/Image/indoorcollection.avif"
            alt="Indoor Plants"
            className="w-full h-48 md:h-60 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center text-center text-white p-4">
            <h3 className="text-xl md:text-2xl font-bold">Indoor Plant Collection</h3>
            <p className="text-sm md:text-base mt-1">Freshen Up Your Home</p>
            <button className="mt-3 px-4 py-1 bg-green-600 rounded text-sm hover:bg-green-700">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannersSection;
