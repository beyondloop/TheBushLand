// src/pages/ProductPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ProductGallery from "../View Page/ProductGallery";
import ProductInfo from "../View Page/ProductInfo";
import FrequentlyBoughtTogether from "../View Page/FrequentlyBoughtTogether";
import ProductTabs from "../Accordion/ProductTabs";
import products from "../Constant/productData";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-500">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <ProductGallery images={product.image} />
        <ProductInfo product={product} />
      </div>

      {/* Frequently Bought Together */}
      <FrequentlyBoughtTogether items={product.frequentlyBoughtTogether} />

      {/* Product Tabs */}
      <ProductTabs details={product.details} />
    </div>
  );
}
