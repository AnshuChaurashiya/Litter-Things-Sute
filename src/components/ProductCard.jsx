import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Plus, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ProductCard({ product }) {
  // Ensure we have a valid image fallback
  const defaultImage = "https://images.unsplash.com/photo-1572904589255-66774fca5e32?auto=format&fit=crop&q=80&w=400";
  const imageSrc = product.images?.[0] || product.img || defaultImage;

  const handleQuickAdd = (e) => {
    e.preventDefault(); // prevent triggering Link
    alert(`${product.name} added to cart!`);
  };

  const isLuxe = product.category === "Jewar Collection";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col bg-white rounded-[2rem] transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative border border-gray-100 overflow-hidden"
    >
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden bg-gray-50">
        <img 
          src={imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.discount && (
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-xl animate-pulse">
              Sale
            </div>
          )}
          {(product.isNew || Math.random() > 0.8) && !product.discount && (
            <div className={`px-3 py-1 rounded-full text-[9px] font-black tracking-widest uppercase shadow-xl ${isLuxe ? 'bg-amber-500 text-white' : 'bg-gray-900 text-white'}`}>
              New
            </div>
          )}
        </div>

        {/* Floating Wishlist Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-xl text-gray-400 hover:text-red-500 transition-all z-10 hover:bg-white border border-white/20"
          aria-label="Add to wishlist"
        >
          <Heart size={18} strokeWidth={2.5} />
        </motion.button>

        {/* Hover Actions Desktop */}
        <div className="absolute inset-x-6 bottom-6 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
          <button 
            onClick={handleQuickAdd}
            className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all border transform active:scale-95 ${
              isLuxe 
                ? 'bg-amber-900 text-white border-amber-800 hover:bg-black' 
                : 'bg-white text-gray-900 border-gray-100 hover:bg-gray-900 hover:text-white'
            }`}
          >
            <ShoppingBag size={14} strokeWidth={2.5} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow bg-white">
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${isLuxe ? 'bg-amber-50 text-amber-600' : 'bg-primary/5 text-primary'}`}>
            {product.category || "Gift"}
          </span>
          <div className="flex bg-gray-50 px-2 py-0.5 rounded-full items-center gap-1 ml-auto">
            <Star size={8} className="fill-yellow-400 text-yellow-400" />
            <span className="text-[9px] font-black text-gray-400">4.9</span>
          </div>
        </div>
        
        <Link to={`/product/${product.id}`} className="flex-grow">
          <h3 className={`font-black text-gray-900 text-sm md:text-base mb-4 line-clamp-1 leading-tight group-hover:text-primary transition-colors tracking-tight ${isLuxe ? 'font-serif italic' : ''}`}>
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-end justify-between mt-auto">
          <div className="flex flex-col">
            <AnimatePresence>
              {product.oldPrice && (
                <span className="text-[10px] text-gray-400 line-through mb-1 font-bold tracking-widest">{product.oldPrice}</span>
              )}
            </AnimatePresence>
            <span className={`text-lg md:text-xl font-black text-gray-900 tracking-tighter ${isLuxe ? 'text-amber-700' : ''}`}>
              {product.price}
            </span>
          </div>
          
          {/* Mobile Cart Button */}
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={handleQuickAdd}
            className={`lg:hidden p-3 rounded-2xl transition-all shadow-sm border ${
              isLuxe ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-gray-50 text-gray-900 border-gray-100'
            }`}
          >
            <Plus size={20} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>

    </motion.div>
  );
}

export default ProductCard;
