import React, { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function CartDrawer({ isCartOpen, setIsCartOpen }) {
  const navigate = useNavigate();

  // Static cart mockup for UI purposes
  const cart = [
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 }
  ];
  
  const cartTotal = cart.reduce((total, item) => {
      const priceStr = item.price.replace(/[^0-9.-]+/g, "");
      const price = parseFloat(priceStr) || 0;
      return total + price * item.quantity;
  }, 0);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <>
      {/* Overlay Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] md:w-[450px] bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={22} className="text-gray-900" />
            <h2 className="text-xl font-bold text-gray-900 tracking-tight">Your Cart</h2>
            <span className="bg-gray-100 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-full">{cart.reduce((t, c) => t + c.quantity, 0)}</span>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto w-full">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center text-gray-500">
              <ShoppingBag size={64} className="mb-6 text-gray-200 stroke-[1.5]" />
              <p className="text-lg font-medium text-gray-900 mb-2">Your cart is empty.</p>
              <p className="text-sm mb-8 max-w-[250px]">Looks like you haven't added anything to your cart yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-gray-900 text-white font-semibold py-3.5 px-8 rounded-full hover:bg-primary transition-all shadow-lg"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <div className="p-6 space-y-6">
              {cart.map((item) => {
                const imageSrc = item?.images?.[0] || item?.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=150&h=150&fit=crop";
                
                return (
                  <div key={item.id} className="flex gap-4">
                    {/* Item Image */}
                    <div className="w-24 h-28 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100">
                      <img src={imageSrc} alt={item.name} className="w-full h-full object-cover" />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-1 py-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-semibold text-gray-900 text-sm leading-snug line-clamp-2">{item.name}</h3>
                        <button 
                          className="text-gray-400 hover:text-red-500 transition-colors p-1 -mr-1"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
                          <button 
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition-all"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-gray-900">{item.quantity}</span>
                          <button 
                            className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-full transition-all"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-bold text-gray-900">{item.price}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {cart.length > 0 && (
          <div className="border-t border-gray-100 p-6 bg-gray-50/50">
            <div className="flex items-center justify-between font-bold text-xl text-gray-900 mb-6">
              <span>Subtotal</span>
              <span>₹{cartTotal.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 text-center mb-4">Shipping & taxes calculated at checkout</p>
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 text-lg active:scale-[0.98]"
            >
              Checkout <ShoppingBag size={20} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
