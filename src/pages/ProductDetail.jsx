import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product?.id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center">Product not found</h1>
        <Link to="/" className="bg-primary text-white px-10 py-4 rounded-full hover:bg-primary-hover font-bold transition-all shadow-xl active:scale-95 leading-none">
          Return to Home
        </Link>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % (product.images?.length || 1));
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1));
  
  const images = product.images || [product.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=400&h=500&fit=crop"];
  const coverImage = images[currentImage] || images[0];

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    navigate('/login');
  };

  const isLuxe = product.category === "Jewar Collection";

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white pt-24 pb-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <nav className="mb-10">
          <ol className="flex items-center text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-gray-400">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <ChevronRight size={12} className="mx-2 opacity-30" />
            <li><Link to={`/category/${product.category}`} className="hover:text-primary transition-colors">{product.category}</Link></li>
            <ChevronRight size={12} className="mx-2 opacity-30" />
            <li className="text-gray-900 truncate max-w-[150px]">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          
          {/* Images Section */}
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="relative bg-[#F9F9F9] rounded-[2.5rem] overflow-hidden group aspect-[4/5] shadow-sm">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  src={coverImage} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {images.length > 1 && (
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                  <button 
                    onClick={prevImage} 
                    className="pointer-events-auto bg-white/90 backdrop-blur hover:bg-white p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronLeft size={20} className="text-gray-900" />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="pointer-events-auto bg-white/90 backdrop-blur hover:bg-white p-4 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                  >
                    <ChevronRight size={20} className="text-gray-900" />
                  </button>
                </div>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? 'w-8 bg-primary' : 'w-1.5 bg-gray-300'}`} />
                ))}
              </div>
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4 px-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 ${
                      i === currentImage 
                        ? 'ring-2 ring-primary ring-offset-4' 
                        : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[11px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full ${isLuxe ? 'bg-amber-100 text-amber-600' : 'bg-primary/10 text-primary'}`}>
                  {product.category}
                </span>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Share2 size={18} />
                </button>
              </div>

              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6 ${isLuxe ? 'font-serif italic' : ''}`}>
                {product.name}
              </h1>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="flex bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} />
                  ))}
                  <span className="ml-2 text-[10px] font-black text-gray-900 leading-none flex items-center">4.8</span>
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest border-l border-gray-200 pl-6">
                  128 Verified Reviews
                </span>
              </div>

              <div className="text-4xl font-black text-gray-900 mb-8 flex items-baseline gap-2">
                {product.price}
                <span className="text-base font-medium text-gray-400 line-through">₹{(parseFloat(product.price.replace('₹','')) * 1.5).toFixed(0)}</span>
              </div>

              <p className="text-gray-500 leading-relaxed mb-10 text-lg font-medium max-w-xl">
                {product.desc}
              </p>

              {/* Actions */}
              <div className="flex flex-col gap-4 mb-14">
                <button 
                  onClick={handleAddToCart}
                  className="w-full bg-primary text-white py-5 px-8 rounded-3xl font-black text-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <ShoppingBag size={22} strokeWidth={2.5} />
                  Add to Cart
                </button>
                
                <div className="flex gap-4">
                  <button 
                     onClick={handleBuyNow}
                     className="flex-1 bg-gray-900 text-white py-5 px-6 rounded-3xl font-black hover:bg-black hover:shadow-2xl transition-all text-center active:scale-[0.98]"
                  >
                    Buy it Now
                  </button>
                  <button className="w-16 flex items-center justify-center border border-gray-200 rounded-3xl text-gray-400 hover:text-red-500 hover:border-red-100 hover:bg-red-50 transition-all active:scale-[0.98]">
                    <Heart size={22} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              {/* USP List */}
              <div className="grid grid-cols-3 gap-4 mb-14">
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                   <Truck size={20} className="text-primary mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Free Delhi</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                   <ShieldCheck size={20} className="text-primary mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Secure Pay</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                   <RotateCcw size={20} className="text-primary mb-2" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-gray-900">Easy Return</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="border-t border-gray-100 pt-10">
                <div className="flex items-center gap-2 mb-6 text-gray-900 font-black uppercase tracking-[0.2em] text-xs">
                  Details & Specs
                </div>
                <div className="space-y-1">
                  {Object.entries(product.specs || {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-4 border-b border-gray-50 last:border-0 group">
                      <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{key}</span>
                      <span className="font-black text-gray-900 text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32 border-t border-gray-100 pt-20">
            <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 gap-4">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">You May Also Like</h2>
              <Link to={`/category/${product.category}`} className="text-xs font-black uppercase tracking-widest text-primary hover:underline">Explore More</Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
