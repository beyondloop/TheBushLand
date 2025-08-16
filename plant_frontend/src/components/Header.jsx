import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, ArrowUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navLinks = [
    "Plants",
    "Indoor Plants",
    "Pots & Planters",
    "Seeds",
    "Gardening",
    "Plant Care",
    "Gifts",
    "Candles & Fragnances",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  // Show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle logo click
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Handle scroll-to-top button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Top Offer Banner */}
        <div className="bg-green-700 text-white text-sm text-center py-1 px-4">
          🌱 Monsoon Sale – Flat 20% off on selected plants!
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-3 px-4 md:px-10">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-green-700 cursor-pointer"
            onClick={handleLogoClick}
          >
            The Bush.
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-700 hover:text-green-700 transition"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search plants..."
                className="bg-transparent outline-none px-2 text-sm"
              />
            </div>
            <ShoppingCart className="cursor-pointer text-gray-700 hover:text-green-700" />
            <User className="cursor-pointer text-gray-700 hover:text-green-700" />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex lg:hidden overflow-x-auto no-scrollbar border-t border-gray-200">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="px-4 py-2 text-sm whitespace-nowrap text-gray-700 hover:text-green-700"
            >
              {link}
            </a>
          ))}
        </div>
      </header>

      {/* Scroll-to-top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;
