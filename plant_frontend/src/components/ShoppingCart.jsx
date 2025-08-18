// src/components/ShoppingCart.jsx
import React from "react";
import { X } from "lucide-react";

const ShoppingCart = ({ isOpen, onClose, cartItems, removeItem }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Side Drawer */}
      <div
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity}
                  </p>
                  <p className="text-sm font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="absolute bottom-0 w-full p-4 border-t bg-white">
            <div className="flex justify-between mb-3">
              <span className="font-medium">Total:</span>
              <span className="font-semibold">₹{total}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
