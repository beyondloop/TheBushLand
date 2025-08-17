// src/components/IndoorPlants.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import products from "../Constant/productData";
import ViewProductButton from "../Constant/ViewProductButton";
import { Link } from "react-router-dom";

// filter indoor plants
const indoorPlants = products.filter((p) => p.category === "Indoor");

const IndoorPlants = ({ limit }) => {
  const displayProducts = limit ? indoorPlants.slice(0, limit) : indoorPlants;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Indoor Plants</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              {item.discount && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs flex items-center space-x-1">
                <span>{item.rating.toFixed(2)}</span>
                <FaStar className="text-green-600 text-xs" />
                <span>|</span>
                <span>{item.reviews}</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-between p-4">
              <div className="text-center">
                <h3 className="font-medium text-gray-800">{item.name}</h3>
                <div className="mt-2">
                  <span className="text-green-700 font-semibold">
                    ₹ {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ₹ {item.oldPrice}
                    </span>
                  )}
                </div>
              </div>

              <ViewProductButton product={item} />
            </div>
          </div>
        ))}
      </div>

      {/* Show View All button only when limited */}
      {limit && (
        <div className="mt-8 flex justify-center">
          <Link
            to="/indoor-plants"
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
          >
            View All
          </Link>
        </div>
      )}
    </section>
  );
};

export default IndoorPlants;
