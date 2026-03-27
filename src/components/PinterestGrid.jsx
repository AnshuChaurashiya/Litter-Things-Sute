import React from 'react';
import { ShoppingBag, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PinterestGrid({ products, title }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="w-full">
      {title && (
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10  gap-4">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">{title}</h2>
          <Link to="/products/all/all" className="text-gray-500 font-semibold hover:text-primary transition-colors text-lg inline-flex items-center gap-2">
            View Collection &rarr;
          </Link>
        </div>
      )}
      
       <div className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {products.map((product) => {
          const imageSrc = product?.images?.[0] || product?.img || "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=600&fit=crop";

          return (
          <div 
            key={product.id} 
            className="break-inside-avoid relative group rounded-3xl overflow-hidden bg-white border border-gray-100/60 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
             <Link to={`/product/${product.id}`} className="block relative w-full h-full bg-gray-50">
              <img 
                src={imageSrc} 
                alt={product.name} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              
              {/* Overlay Gradients */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" /> */}
            </Link>

            {/* Hover Actions (Desktop) */}
            <div className="absolute top-4 right-4 cursor-pointer flex flex-col gap-2 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10 hidden lg:flex pointer-events-none">
              <button className="bg-white/90 backdrop-blur text-gray-800 p-2.5 rounded-full hover:bg-red-500 hover:text-white pointer-events-auto transition-colors shadow-lg">
                <Heart size={18} />
              </button>
            </div>
            
            {/* Details floating over bottom */}
            <div className="absolute bottom-5 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none hidden lg:block">
              <h3 className="text-white font-bold text-xl leading-tight mb-1">{product.name}</h3>
              <p className="text-gray-200 font-medium">{product.price}</p>
            </div>
            
            {/* Quick Add Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 hidden lg:block w-full">
               <button className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 rounded-2xl shadow-xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2 pointer-events-auto">
                 <ShoppingBag size={18} />
                 Quick Add
               </button>
            </div>

            {/* Mobile Persistent Info */}
            <div className="lg:hidden p-4 bg-white relative z-10">
               <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">{product.name}</h3>
               <p className="font-black text-gray-900 text-lg mt-1">{product.price}</p>
               <button className="w-full mt-3 bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-xl border border-gray-200 active:bg-gray-100 flex items-center justify-center gap-2 text-sm transition-colors cursor-pointer relative z-20">
                 <ShoppingBag size={14} /> Add
               </button>
            </div>
            
            {/* Corner Badges */}
            <div className="absolute top-4 left-4 lg:hidden pointer-events-none">
              <span className="bg-white/95 backdrop-blur-sm text-gray-900 font-bold px-2.5 py-1 rounded-lg text-xs shadow-sm">
                New
              </span>
            </div>
          </div>
        )})}
      </div>
    </div>
  );
}
