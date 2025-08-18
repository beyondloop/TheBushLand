import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, ArrowUp, Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import ShoppingCartDrawer from "./ShoppingCart";
import { useCart } from "../context/CartContext";

const Header = () => {
  const navLinks = [
    "Plants",
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
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems, removeItem } = useCart(); // 👈 from context

  // Scroll button
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* Banner */}
        <div className="bg-green-700 text-white text-sm text-center py-2 px-4 flex justify-center gap-[200px]">
          <span>🌱 Monsoon Sale – Flat 20% off on selected plants!</span>
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between py-4 px-4 md:px-10">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-green-700 cursor-pointer"
            onClick={handleLogoClick}
          >
            The Bush.
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-700 hover:text-green-700 transition font-bold"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Search + Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-50">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search plants..."
                className="bg-transparent outline-none px-2 text-sm"
              />
            </div>

            {/* Cart icon */}
            <div className="relative">
              <ShoppingCart
                className="cursor-pointer text-gray-700 hover:text-green-700"
                onClick={() => setIsCartOpen(true)}
              />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              )}
            </div>

            <User className="cursor-pointer text-gray-700 hover:text-green-700" />

            {/* Hamburger */}
            <button
              className="lg:hidden text-gray-700 hover:text-green-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href="#"
                className="block px-4 py-3 text-sm text-gray-700 hover:text-green-700 border-b"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* ShoppingCart Drawer */}
      <ShoppingCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        removeItem={removeItem}
      />

      {/* Scroll button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-700 text-white p-3 rounded-full shadow-lg hover:bg-green-800 transition z-10"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default Header;
