// src/components/Bestsellers.jsx
import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bestsellers = [
  {
    id: 1,
    title: "Peace Lily Plant",
    image: "src/Image/peacelily.avif",
    discount: "25% OFF",
    rating: 4.81,
    reviews: 385,
    price: 299,
    oldPrice: 399,
    slug: "peace-lily",
  },
  {
    id: 2,
    title: "Jade Plant Mini",
    image: "src/Image/jade.avif",
    discount: "7% OFF",
    rating: 4.83,
    reviews: 380,
    price: 279,
    oldPrice: 299,
    slug: "jade-plant-mini",
  },
  {
    id: 3,
    title: "Bamboo Palm Plant",
    image: "src/Image/areca palm.avif",
    discount: "40% OFF",
    rating: 4.82,
    reviews: 171,
    price: 299,
    oldPrice: 499,
    slug: "bamboo-palm",
  },
  {
    id: 4,
    title: "Snake Plant - Golden Hahnii",
    image: "src/Image/snake.avif",
    discount: null,
    rating: 4.85,
    reviews: 164,
    price: 299,
    oldPrice: 599,
    slug: "snake-plant",
  },
];

const Bestsellers = () => {
  const navigate = useNavigate();

  const handleViewProduct = (product) => {
    // Pass the full product data via state
    navigate(`/product/${product.slug}`, { state: product });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center mb-8">Bestsellers</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestsellers.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
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
                <h3 className="font-medium text-gray-800">{item.title}</h3>
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

              <button
                onClick={() => handleViewProduct(item)}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 mt-4 rounded"
              >
                View Product
              </button>
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

export default Bestsellers;
