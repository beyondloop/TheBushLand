// src/components/AvailableOn.jsx
import React from "react";
import amazon from "../Image/Amazon.jpg"; // Adjust the path as necessary
import flipkart from "../Image/FlipkartLogo.jpg";
import blinkit from "../Image/BlinkitLogo.png";
import instamart from "../Image/SwiggyGenie.jpg";
import zepto from "../Image/ZeptoLogo.png";
import bigbasket from "../Image/BigBasket.jpeg";

const AvailableOn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white py-6 shadow rounded-lg">
      <div>
        <h2 className="text-lg font-semibold mb-2 text-gray-700">Also Available on:</h2>
        <div className="flex flex-wrap gap-6 items-center">
          <img src={amazon} alt="Amazon" className="h-8" />
          <img src={flipkart} alt="Flipkart" className="h-8" />
          <img src={blinkit} alt="Blinkit" className="h-8" />
          <img src={instamart} alt="Instamart" className="h-8" />
          <img src={zepto} alt="Zepto" className="h-8" />
          <img src={bigbasket} alt="Bigbasket" className="h-8" />
        </div>
      </div>
    </div>
  );
};

export default AvailableOn;

// after no-12  

//      <img
//         src="https://i.ibb.co/Q8wJ2tN/jackie.png"
//         alt="Brand Ambassador"
//         className="w-40 md:w-48"
//       />