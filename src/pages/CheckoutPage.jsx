// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ChevronLeft, CheckCircle2 } from 'lucide-react';
// import { products } from '../data/products';

// export default function CheckoutPage() {
//   const navigate = useNavigate();
//   const [isSuccess, setIsSuccess] = useState(false);

//   // Static cart mockup for UI purposes
//   const cart = [
//     { ...products[0], quantity: 1 },
//     { ...products[1], quantity: 2 }
//   ];
  
//   const cartTotal = cart.reduce((total, item) => {
//       const priceStr = item.price.replace(/[^0-9.-]+/g, "");
//       const price = parseFloat(priceStr) || 0;
//       return total + price * item.quantity;
//   }, 0);

//   const shipping = 99;
//   const grandTotal = cartTotal > 999 ? cartTotal : cartTotal + shipping; // Free shipping over 999

//   const handlePlaceOrder = (e) => {
//     e.preventDefault();
//     setIsSuccess(true);
//     // In a real app, you would make an API call here.
//   };

//   if (isSuccess) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-20 text-center">
//         <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-8 mx-auto self-center">
//            <CheckCircle2 size={48} />
//         </div>
//         <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">Order Confirmed!</h1>
//         <p className="text-xl text-gray-500 max-w-lg mb-12">Thank you for shopping with LittleThingsCute. Your order #LTC-{Math.floor(1000 + Math.random() * 9000)} is being processed.</p>
//         <Link to="/" className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl hover:shadow-2xl">
//           Continue Shopping
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 pt-10 pb-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Header */}
//         <div className="flex items-center justify-between mb-10">
//            <Link to="/" className="flex items-center text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
//               <ChevronLeft size={16} className="mr-1" /> Back to store
//            </Link>
//            <h1 className="text-2xl font-bold text-gray-900 tracking-tight text-center md:text-left">Secure Checkout</h1>
//            <div className="w-24 hidden md:block"></div> {/* spacer */}
//         </div>

//         <div className="grid lg:grid-cols-12 gap-12 items-start">
          
//           {/* Left Column - Forms */}
//           <div className="lg:col-span-7 space-y-8">
//             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
//                <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
//                <div className="space-y-4">
//                  <div>
//                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Email Address</label>
//                    <input type="email" placeholder="you@example.com" className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3.5 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all font-medium" />
//                  </div>
//                  <div className="flex items-center gap-2">
//                    <input type="checkbox" id="newsletter" className="w-4 h-4 text-primary rounded border border-gray-300 focus:ring-primary" />
//                    <label htmlFor="newsletter" className="text-sm text-gray-600">Email me with news and offers</label>
//                  </div>
//                </div>
//             </div>

//             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
//                <h2 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h2>
//                <div className="space-y-4">
//                  <div className="grid grid-cols-2 gap-4">
//                    <div>
//                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">First Name</label>
//                      <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                    </div>
//                    <div>
//                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Last Name</label>
//                      <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                    </div>
//                  </div>
//                  <div>
//                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Address</label>
//                    <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                  </div>
//                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                    <div className="md:col-span-2">
//                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">City</label>
//                      <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                    </div>
//                    <div>
//                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">PIN Code</label>
//                      <input type="text" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                    </div>
//                  </div>
//                  <div>
//                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Phone</label>
//                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 px-4 py-3.5 rounded-xl outline-none" />
//                  </div>
//                </div>
//             </div>

//             <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
//                <h2 className="text-xl font-bold text-gray-900 mb-6">Payment Method</h2>
//                <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-200">
//                   <div className="p-4 flex items-center gap-3 bg-primary/5 cursor-pointer">
//                     <input type="radio" id="card" name="payment" defaultChecked className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
//                     <label htmlFor="card" className="font-semibold text-gray-900 flex-1 cursor-pointer">Credit / Debit Card</label>
//                   </div>
//                   <div className="p-4 flex items-center gap-3 cursor-pointer">
//                     <input type="radio" id="upi" name="payment" className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
//                     <label htmlFor="upi" className="font-medium text-gray-700 flex-1 cursor-pointer">UPI (GPay, PhonePe)</label>
//                   </div>
//                   <div className="p-4 flex items-center gap-3 cursor-pointer">
//                     <input type="radio" id="cod" name="payment" className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
//                     <label htmlFor="cod" className="font-medium text-gray-700 flex-1 cursor-pointer">Cash on Delivery</label>
//                   </div>
//                </div>
//             </div>

//             <button 
//               onClick={handlePlaceOrder}
//               className="w-full bg-primary hover:bg-primary-hover text-white text-lg font-bold py-5 rounded-2xl shadow-xl hover:-translate-y-1 transition-all active:scale-[0.98]"
//             >
//               Pay ₹{grandTotal.toFixed(2)}
//             </button>
//           </div>

//           {/* Right Column - Order Summary */}
//           <div className="lg:col-span-5 hidden md:block">
//              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-32">
//                 <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                
//                 <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
//                    {cart.map((item) => (
//                       <div key={item.id} className="flex gap-4">
//                          <div className="relative w-16 h-20 rounded-xl bg-gray-50 overflow-hidden shrink-0 border border-gray-100">
//                             <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold z-10">{item.quantity}</span>
//                             <img src={item?.images?.[0] || item?.img} alt={item.name} className="w-full h-full object-cover" />
//                          </div>
//                          <div className="flex-1 py-1">
//                             <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
//                             <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
//                          </div>
//                          <div className="font-bold text-gray-900 text-sm py-1">
//                             {item.price}
//                          </div>
//                       </div>
//                    ))}
//                 </div>

//                 <div className="border-t border-gray-100 pt-6 space-y-3">
//                    <div className="flex justify-between text-gray-500">
//                      <span>Subtotal</span>
//                      <span className="font-medium text-gray-900">₹{cartTotal.toFixed(2)}</span>
//                    </div>
//                    <div className="flex justify-between text-gray-500">
//                      <span>Shipping</span>
//                      <span className="font-medium text-gray-900">{cartTotal > 999 ? 'Free' : `₹${shipping}`}</span>
//                    </div>
                   
//                    <div className="pt-4 mt-4 border-t border-gray-100 flex justify-between items-center">
//                      <span className="text-lg font-bold text-gray-900">Total</span>
//                      <div className="flex flex-col items-end">
//                        <span className="text-xl font-black text-gray-900 tracking-tight">₹{grandTotal.toFixed(2)}</span>
//                        <span className="text-xs text-gray-400">Includes taxes</span>
//                      </div>
//                    </div>
//                 </div>
//              </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }
