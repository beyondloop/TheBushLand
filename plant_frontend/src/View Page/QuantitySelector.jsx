// src/components/QuantitySelector.jsx
import React from "react";

export default function QuantitySelector({ quantity, setQuantity }) {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-28">
      <button
        className="px-3 py-2 text-lg font-bold hover:bg-gray-100"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        -
      </button>
      <span className="flex-1 text-center">{quantity}</span>
      <button
        className="px-3 py-2 text-lg font-bold hover:bg-gray-100"
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </div>
  );
}
