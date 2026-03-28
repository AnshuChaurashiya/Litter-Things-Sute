import React, { useEffect } from "react";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

export default function CartDrawer({ isCartOpen, setIsCartOpen }) {
  const navigate = useNavigate();

  // Static cart mockup for UI purposes (Frontend Only)
  // Ensures we have at least 2 items if products data is available
  const cart = products.length >= 2 
    ? [
        { ...products[0], quantity: 1 },
        { ...products[1], quantity: 2 }
      ]
    : [];
  
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

  // Handle Backdrop click (common UI pattern)
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsCartOpen(false);
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate("/login"); // Directing to login as requested for "frontend only" flow or "/checkout"
  };

  return (
    <>
      {/* Overlay Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] transition-all duration-500 ease-in-out ${
          isCartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleBackdropClick}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingBag size={20} className="text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 tracking-tight">Your Cart</h2>
              <p className="text-xs text-gray-500 font-medium">{cart.length} unique items</p>
            </div>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-2.5 bg-gray-50 text-gray-400 hover:text-gray-900 border border-gray-100 rounded-full transition-all hover:scale-110 active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
          {!cart || cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-8 text-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag size={40} className="text-gray-200" />
              </div>
              <p className="text-xl font-bold text-gray-900 mb-2">Your cart is empty.</p>
              <p className="text-gray-500 mb-10 max-w-[280px] leading-relaxed">It looks like you haven't discovered anything cute to add yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="bg-gray-900 text-white font-bold py-4 px-10 rounded-2xl hover:bg-primary transition-all shadow-xl active:scale-95"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="p-8 space-y-8">
              {cart.map((item) => {
                const imageSrc = item?.images?.[0] || item?.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=150&h=150&fit=crop";
                
                return (
                  <div key={item.id} className="flex gap-6 group">
                    {/* Item Image */}
                    <div className="w-24 h-32 bg-gray-50 rounded-2xl overflow-hidden shrink-0 border border-gray-100 relative shadow-sm group-hover:shadow-md transition-shadow">
                      <img src={imageSrc} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col flex-1 py-1">
                      <div className="flex justify-between items-start gap-4">
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={() => setIsCartOpen(false)}
                          className="font-bold text-gray-900 text-[15px] leading-snug hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                        <button 
                          className="text-gray-400 hover:text-red-500 transition-all p-1.5 hover:bg-red-50 rounded-xl"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">{item.category}</p>
                      
                      <div className="flex items-center justify-between mt-auto pt-5">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                          <button 
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg transition-all shadow-sm active:scale-90"
                          >
                            <Minus size={14} strokeWidth={2.5} />
                          </button>
                          <span className="w-10 text-center text-sm font-black text-gray-900">{item.quantity}</span>
                          <button 
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg transition-all shadow-sm active:scale-90"
                          >
                            <Plus size={14} strokeWidth={2.5} />
                          </button>
                        </div>
                        <p className="font-black text-gray-900 text-lg">{item.price}</p>
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
          <div className="border-t border-gray-100 p-8 bg-gray-50/30 backdrop-blur-md">
            <div className="space-y-4 mb-8">
               <div className="flex items-center justify-between text-gray-500 text-sm font-medium">
                <span>Subtotal</span>
                <span className="text-gray-900">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-gray-500 text-sm font-medium">
                <span>Shipping</span>
                <span className="text-emerald-500 font-bold uppercase text-[10px] tracking-widest">Calculated at next step</span>
              </div>
              <div className="pt-4 border-t border-dashed border-gray-200 flex items-center justify-between font-black text-2xl text-gray-900">
                <span>Total</span>
                <span className="text-primary">₹{cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              onClick={handleCheckout}
              className="w-full bg-primary hover:bg-primary-hover text-white font-black py-4.5 rounded-[1.25rem] transition-all shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 text-lg active:scale-[0.98] group"
            >
              Secure Checkout <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">100% secure payment guaranteed</p>
          </div>
        )}
      </div>
    </>
  );
}
