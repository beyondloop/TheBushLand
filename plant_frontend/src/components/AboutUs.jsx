// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f5f0e8] py-10 px-6 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
        About The Bush.
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
        The Bush is India’s No.1 online plant store and gardening products destination, trusted by millions of plant lovers. 
        Shop a wide range of <span className="font-semibold text-green-800">indoor plants, flowering plants, succulents</span>, 
        and <span className="font-semibold text-green-800">air-purifying greens</span> delivered right to your doorstep. 
        We also offer a complete range of gardening products, including premium 
        <span className="font-semibold text-green-800"> seeds</span>, organic 
        <span className="font-semibold text-green-800"> fertilizers</span>, stylish 
        <span className="font-semibold text-green-800"> planters</span>, and essential 
        <span className="font-semibold text-green-800"> gardening tools</span> to help your garden thrive. 
        Whether you’re a beginner or a seasoned gardener, The Bush has everything you need to grow. 
        Start your plant journey with The Bush – where every leaf begins a new story.
      </p>
    </div>
  );
};

export default AboutUs;
