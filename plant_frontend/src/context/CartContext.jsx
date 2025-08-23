import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [popup, setPopup] = useState(false); // ✅ popup state

  // ✅ Add to Cart (checks id + size)
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existing) {
        // if same product + same size → increase qty
        return prev.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // if same product but different size → add as new entry
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // ✅ show popup
    setPopup(true);
    setTimeout(() => setPopup(false), 2000);
  };

  // ✅ Decrease qty (id + size based)
  const decreaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id === id && item.size === size) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 }; // step down
          }
          return []; // remove completely if qty = 1
        }
        return item;
      })
    );
  };

  // ✅ Increase qty (id + size based)
  const increaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ✅ Remove item (id + size based)
  const removeItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, decreaseQty, increaseQty, removeItem }}
    >
      {children}

      {/* ✅ Popup */}
      {popup && (
        <div className="fixed bottom-6 right-6 w-72 md:w-80 bg-yellow-700 text-white px-6 py-6 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-400 animate-popup">
          {/* Check Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <h4 className="font-semibold text-white text-sm md:text-base">
              Product added successfully!
            </h4>
            <p className="text-green-100 text-xs md:text-sm">
              Check your cart to review your items.
            </p>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
};

// ✅ custom hook
export const useCart = () => useContext(CartContext);
