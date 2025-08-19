// src/components/ProductInfo.jsx
import React, { useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { Star, MapPin } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Medium"); // ✅ default size
  const { addToCart } = useCart();

  // handle Add to Cart
  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize }, quantity); // include size
  };

const sizeOptions = ["S", "M", "L"]; // ✅ define sizes as const

  return (
    <div className="w-full md:w-1/2 md:pl-10">
      {/* Title */}
      <h1 className="text-2xl font-semibold">{product.name}</h1>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-1">
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < product.rating ? "currentColor" : "none"}
              stroke="currentColor"
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          ({product.reviewsCount} Reviews)
        </span>
      </div>

      {/* Price */}
      <div className="mt-3">
        <span className="text-2xl font-bold text-green-700">
          ₹{product.price}
        </span>
        {product.oldPrice && (
          <span className="text-gray-500 line-through ml-3">
            ₹{product.oldPrice}
          </span>
        )}
      </div>

      {/* Variant Options */}
      {product.variants && (
        <div className="mt-4">
          <span className="block text-sm font-medium mb-2">Color:</span>
          <div className="flex gap-2">
            {product.variants.map((variant, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded-md ${
                  product.selectedVariant === variant
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300"
                }`}
              >
                {variant}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div className="mt-4">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>

      {/* ✅ Size Options */}

<div className="mt-4">
  <span className="block text-sm font-medium mb-2">Size:</span>
  <div className="flex gap-3">
    {sizeOptions.map((size) => (
      <button
        key={size}
        onClick={() => setSelectedSize(size)}
        className={`w-10 h-10 flex items-center justify-center rounded-full border font-semibold transition-all ${
          selectedSize === size
            ? "border-green-500 bg-green-50 text-green-700"
            : "border-gray-300 text-gray-700 hover:bg-gray-100"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
</div>


      {/* Add to Cart / Buy Now */}
      <div className="flex gap-3">
        <button
          onClick={handleAddToCart}
          className="mt-5 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold"
        >
          Add to Cart
        </button>
        <button className="mt-5 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md font-semibold">
          Buy Now
        </button>
      </div>

      {/* Pincode Check */}
      <div className="flex items-center gap-2 mt-5">
        <MapPin size={20} className="text-gray-500" />
        <input
          type="text"
          placeholder="Enter Pincode"
          className="border rounded-md px-3 py-2 w-40"
        />
        <button className="text-green-700 font-semibold">Check</button>
      </div>

      {/* Offers */}
      {product.offers && (
        <div className="mt-6 border border-yellow-400 bg-yellow-50 p-4 rounded-md">
          <h4 className="font-semibold mb-2">Available Offers</h4>
          <ul className="list-disc pl-5 text-sm text-gray-700">
            {product.offers.map((offer, idx) => (
              <li key={idx}>{offer}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
