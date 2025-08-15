// src/components/IndoorPlants.jsx
import React from "react";
import { FaStar } from "react-icons/fa";

const indoorPlants = [
  {
    id: 1,
    name: "Spider Plant",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 120,
    img: "src/Image/spider.avif",
    discount: "25% OFF",
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 1299,
    oldPrice: 1499,
    rating: 4.7,
    reviews: 98,
    img: "src/Image/fiddlefig.avif",
    discount: "13% OFF",
  },
  {
    id: 3,
    name: "ZZ Plant",
    price: 799,
    oldPrice: null,
    rating: 4.9,
    reviews: 150,
    img: "src/Image/zz.avif",
    discount: null,
  },
  {
    id: 4,
    name: "Parlor Palm",
    price: 499,
    oldPrice: 599,
    rating: 4.6,
    reviews: 80,
    img: "src/Image/areca palm.avif",
    discount: "17% OFF",
  },
  {
    id: 5,
    name: "Rubber Plant",
    price: 599,
    oldPrice: 799,
    rating: 4.85,
    reviews: 105,
    img: "src/Image/rubber.avif",
    discount: "25% OFF",
  },
   {
    id: 6,
    name: "ZZ Plant",
    price: 599,
    oldPrice: 799,
    rating: 4.85,
    reviews: 105,
    img: "src/Image/zz.avif",
    discount: "25% OFF",
  },
    {
    id: 7,
    name: "PEACE LILY",
    price: 599,
    oldPrice: 799,
    rating: 4.85,
    reviews: 105,
    img: "src/Image/peacelily.avif",
    discount: "25% OFF",
  },
    {
    id: 8,
    name: "TRADESCANTIA",
    price: 599,
    oldPrice: 799,
    rating: 4.85,
    reviews: 105,
    img: "src/Image/transcandia.avif",
    discount: "25% OFF",
  },
];

const IndoorPlants = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Indoor Plants</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {indoorPlants.map((plant) => (
          <div
            key={plant.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Image & Discount */}
            <div className="relative">
              <img
                src={plant.img}
                alt={plant.name}
                className="w-full h-64 object-cover"
              />
              {plant.discount && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {plant.discount}
                </span>
              )}
              {/* Rating */}
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs flex items-center space-x-1">
                <span>{plant.rating.toFixed(2)}</span>
                <FaStar className="text-green-600 text-xs" />
                <span>|</span>
                <span>{plant.reviews}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="text-center">
                <h3 className="font-medium text-gray-800">{plant.name}</h3>
                <div className="mt-2">
                  <span className="text-green-700 font-semibold">
                    ₹ {plant.price}
                  </span>
                  {plant.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ₹ {plant.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 mt-4 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 rounded-full bg-green-600 text-white rounded hover:bg-green-700 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default IndoorPlants;
