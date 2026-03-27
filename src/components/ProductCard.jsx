import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';

function ProductCard({ product }) {
  // Ensure we have a valid image fallback
  const defaultImage = "https://images.unsplash.com/photo-1572904589255-66774fca5e32?auto=format&fit=crop&q=80&w=400";
  const imageSrc = product.images?.[0] || product.img || defaultImage;

  const handleQuickAdd = (e) => {
    e.preventDefault(); // prevent triggering Link
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative border border-gray-100/50">
      
      {/* Image Container */}
      <Link to={`/product/${product.id}`} className="relative block aspect-[4/5] overflow-hidden rounded-t-2xl bg-gray-50">
        <img 
          src={imageSrc} 
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        {product.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase shadow-sm">
            Sale
          </div>
        )}
        {(product.isNew || Math.random() > 0.7) && !product.discount && (
          <div className="absolute top-3 left-3 bg-gray-900 text-white px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase shadow-sm">
            New
          </div>
        )}

        {/* Hover Actions Desktop */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 px-4">
          <button 
            onClick={handleQuickAdd}
            className="hidden lg:flex w-full items-center justify-center gap-2 bg-white/95 backdrop-blur-sm text-gray-900 font-semibold py-2.5 rounded-xl shadow-lg hover:bg-gray-900 hover:text-white transition-colors border border-gray-100 z-20"
          >
            <ShoppingBag size={18} />
            Quick Add
          </button>
        </div>
      </Link>

      {/* Floating Wishlist Button */}
      <button 
        className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md text-gray-400 hover:text-red-500 transition-all z-10 hover:scale-110"
        aria-label="Add to wishlist"
      >
        <Heart size={18} fill="currentColor" className="opacity-0 group-hover:opacity-20 transition-opacity absolute inset-2 text-red-500" />
        <Heart size={18} />
      </button>

      {/* Content */}
      <div className="p-4 md:p-5 flex flex-col flex-grow">
        <div className="text-xs font-medium text-gray-400 mb-1.5 uppercase tracking-wide">
          {product.category || "Gift"}
        </div>
        <Link to={`/product/${product.id}`} className="flex-grow">
          <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col">
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through mb-0.5">{product.oldPrice}</span>
            )}
            <span className="text-base md:text-lg font-bold text-gray-900">
              {product.price}
            </span>
          </div>
          
          {/* Mobile Cart Button */}
          <button 
            onClick={handleQuickAdd}
            className="lg:hidden p-2.5 bg-gray-50 text-gray-900 rounded-full hover:bg-primary hover:text-white transition-colors border border-gray-100 z-20"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default ProductCard;
