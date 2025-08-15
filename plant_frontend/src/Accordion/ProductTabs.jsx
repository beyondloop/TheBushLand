// src/components/ProductTabs.jsx
import React, { useState } from "react";

export default function ProductTabs({ details }) {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About the Product", content: details.about },
    { id: "box", label: "What's in the Box", content: details.whatsInBox },
    { id: "care", label: "Care Tips", content: details.careTips },
    { id: "faq", label: "FAQs", content: details.faqs }
  ];

  return (
    <div className="mt-10 bg-white border border-gray-200 rounded-lg">
      {/* Tab Buttons */}
      <div className="flex border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-sm font-medium whitespace-nowrap ${
              activeTab === tab.id
                ? "text-green-700 border-b-2 border-green-700"
                : "text-gray-500 hover:text-green-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5 text-sm text-gray-700 leading-relaxed">
        {tabs.find((tab) => tab.id === activeTab)?.content || "No details available."}
      </div>
    </div>
  );
}
