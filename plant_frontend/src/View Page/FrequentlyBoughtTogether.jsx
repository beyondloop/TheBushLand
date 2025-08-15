// src/components/FrequentlyBoughtTogether.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function FrequentlyBoughtTogether({ items }) {
  if (!items || items.length === 0) return null; // hide if no products

  return (
    <div className="mt-8 border border-gray-200 rounded-lg p-5 bg-white">
      <h2 className="text-lg font-semibold mb-4">Frequently Bought Together</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Cards */}
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border border-gray-200 rounded-lg p-3 w-full md:w-1/3"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded-md"
            />
            <div className="flex-1">
              <Link
                to={`/product/${item.id}`}
                className="font-medium text-sm hover:text-green-600"
              >
                {item.name}
              </Link>
              <p className="text-green-700 font-semibold text-sm mt-1">
                ₹{item.price}
              </p>
            </div>
            <input type="checkbox" className="w-5 h-5 accent-green-600" />
          </div>
        ))}
      </div>

      {/* Add All to Cart Button */}
      <div className="mt-5">
        <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-3 rounded-md font-semibold">
          Add Selected to Cart
        </button>
      </div>
    </div>
  );
}
