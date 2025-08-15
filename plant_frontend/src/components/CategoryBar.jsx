import React from "react";
import { Leaf, Flower, Droplet, Sprout, ShoppingBag, Gift } from "lucide-react";

const categories = [
  { name: "Plants", icon: <Leaf className="w-6 h-6" /> },
  { name: "Indoor Plants", icon: <Flower className="w-6 h-6" /> },
  { name: "Pots & Planters", icon: <ShoppingBag className="w-6 h-6" /> },
  { name: "Seeds", icon: <Sprout className="w-6 h-6" /> },
  { name: "Fertilizers", icon: <Droplet className="w-6 h-6" /> },
  { name: "Gifts", icon: <Gift className="w-6 h-6" /> },
];

const CategoryBar = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-200 overflow-x-auto">
      <div className="flex md:grid md:grid-cols-6 gap-6 px-4 py-3 md:py-4 min-w-max md:min-w-full">
        {categories.map((category, index) => (
          <button
            key={index}
            className="flex flex-col items-center justify-center min-w-[80px] text-gray-700 hover:text-green-700 transition"
          >
            <div className="mb-1">{category.icon}</div>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
