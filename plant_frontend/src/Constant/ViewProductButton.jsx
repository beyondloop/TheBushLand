// src/components/ViewProductButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProductButton = ({ product }) => {
  const navigate = useNavigate();

  const handleViewProduct = () => {
    // Navigate to product page with product data
    navigate(`/product/${product.name}`, { state: product });
  };

  return (
    <button
      onClick={handleViewProduct}
      className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 mt-4 rounded w-full"
    >
      View Product
    </button>
  );
};

export default ViewProductButton;
