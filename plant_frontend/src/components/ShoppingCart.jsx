// src/components/ShoppingCart.jsx
import React from "react";
import { X, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext"; // import your cart context

const ShoppingCart = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, removeItem, decreaseQty, increaseQty } = useCart(); // ✅ use context

  // ✅ Total respects size variations
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
        className={`fixed right-0 top-0 h-full w-[380px] bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">
            SHOPPING CART ({cartItems.length})
          </h2>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="px-4 space-y-4 overflow-y-auto flex-1">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${item.size || "default"}-${index}`}
                className="flex items-center gap-3 border-b pb-3"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-sm line-clamp-1">
                    {item.name}
                  </h3>

                  {item.variant && (
                    <p className="text-xs text-gray-500">
                      Color: {item.variant}
                    </p>
                  )}

                  {item.size && (
                    <p className="text-xs text-gray-500">Size: {item.size}</p>
                  )}

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => decreaseQty(item.id, item.size)} // ✅ fixed
                      className="border px-2 rounded text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      onClick={() => increaseQty(item.id, item.size)} // ✅ fixed
                      className="border px-2 rounded text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-semibold text-green-600">
                      ₹{item.price * item.quantity}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ₹{item.originalPrice * item.quantity}
                      </span>
                    )}
                  </div>
                </div>

                {/* Remove */}
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t bg-white">
            <div className="flex justify-between mb-3 font-semibold">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700">
              Checkout - ₹{total}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
