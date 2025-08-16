// src/components/IndoorPlants.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import products from "../Constant/productData";
import ViewProductButton from "../Constant/ViewProductButton"; // ✅ common button

// pick indoor plants slice from productData (adjust slice as needed)
const indoorPlants = products.slice(4, 12); 

const IndoorPlants = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Indoor Plants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {indoorPlants.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Image & Discount */}
            <div className="relative">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              {item.offers && item.offers.length > 0 && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.offers[0]}
                </span>
              )}
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs flex items-center space-x-1">
                <span>{item.rating.toFixed(2)}</span>
                <FaStar className="text-green-600 text-xs" />
                <span>|</span>
                <span>{item.reviewsCount}</span>
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="text-center">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <div className="mt-2">
                  <span className="text-green-700 font-semibold">
                    ₹ {item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ₹ {item.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* ✅ Common ViewProductButton */}
              <ViewProductButton product={item} />
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-8 flex justify-center">
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default IndoorPlants;
