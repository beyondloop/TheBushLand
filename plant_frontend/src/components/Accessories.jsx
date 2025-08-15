import React from "react";
import { FaStar } from "react-icons/fa";

const accessories = [
  {
    id: 1,
    name: "Ceramic Pot",
    price: 249,
    oldPrice: 299,
    rating: 4.7,
    reviews: 65,
    img: "src/Image/ceramic pots.avif",
    discount: "17% OFF",
  },
  {
    id: 2,
    name: "Watering Can",
    price: 399,
    oldPrice: 499,
    rating: 4.8,
    reviews: 80,
    img: "src/Image/watering can.avif",
    discount: "20% OFF",
  },
  {
    id: 3,
    name: "Gardening Tools Set",
    price: 699,
    oldPrice: null,
    rating: 4.9,
    reviews: 50,
    img: "src/Image/tools.avif",
    discount: null,
  },
  {
    id: 4,
    name: "Fertilizer Pack",
    price: 199,
    oldPrice: 249,
    rating: 4.6,
    reviews: 45,
    img: "src/Image/fertilizer.avif",
    discount: "20% OFF",
  },
];

const Accessories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Accessories</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Image & Discount */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              {item.discount && (
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.discount}
                </span>
              )}
              {/* Rating */}
              <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded text-xs flex items-center space-x-1">
                <span>{item.rating.toFixed(2)}</span>
                <FaStar className="text-green-600 text-xs" />
                <span>|</span>
                <span>{item.reviews}</span>
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
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      ₹ {item.oldPrice}
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
        <button className="px-6 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
          View All
        </button>
      </div>
    </section>
  );
};

export default Accessories;
