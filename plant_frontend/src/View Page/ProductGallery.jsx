// src/components/ProductGallery.jsx
import React, { useState } from "react";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full md:w-1/2">
      {/* Main Image */}
      <div className="border rounded-lg overflow-hidden">
        <img
          src={selectedImage}
          alt="Product"
          className="w-full h-[450px] object-contain"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-3">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            className={`w-20 h-20 object-contain border rounded-md cursor-pointer ${
              selectedImage === img ? "border-green-500" : "border-gray-300"
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}
