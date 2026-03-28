import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductList from '../components/Product';
import ProductCard from '../components/ProductCard';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CategoryPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const categoryName = decodeURIComponent(name);
  const category = categories.find(cat => cat.name === categoryName);
  const [selectedSub, setSelectedSub] = useState('');

  const isLuxe = category?.isSpecial;

  if (!category) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50 font-sans">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 text-center tracking-tighter">Category not found</h1>
        <Link to="/" className="bg-primary text-white px-10 py-4 rounded-3xl font-black uppercase tracking-widest text-xs transition-all shadow-xl hover:-translate-y-1">
          Return to Home
        </Link>
      </div>
    );
  }

  const categoryProducts = products.filter(p => p.category === categoryName);
  const filteredProducts = selectedSub ? categoryProducts.filter(p => p.subCategory === selectedSub) : categoryProducts;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className={`min-h-screen ${isLuxe ? 'bg-[#FCF9F6]' : 'bg-white'}`}
    >
      {/* Editorial Cinematic Header */}
      <section className="relative w-full pt-32 pb-24 md:pt-48 md:pb-36 bg-black overflow-hidden border-b border-white/5">
        <AnimatePresence mode="wait">
          <motion.div
            key={categoryName}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-full object-cover opacity-40 grayscale-[0.3]" 
            />
            <div className={`absolute inset-0 ${isLuxe ? 'bg-gradient-to-t from-black via-black/40 to-transparent' : 'bg-gradient-to-t from-black via-black/20 to-transparent'}`} />
            {isLuxe && <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.15),transparent_70%)]" />}
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-[1900px] mx-auto px-6 md:px-20 text-center md:text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          >
             <div className="flex flex-col items-center md:items-start gap-4 mb-8">
                <div className="flex items-center gap-3">
                   <span className="h-[1px] w-12 bg-white/30 rounded-full" />
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/50">{isLuxe ? 'Private Suite' : 'Modern Essentials'}</span>
                </div>
                {isLuxe && (
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md"
                  >
                    <Sparkles size={10} className="text-amber-400" fill="currentColor" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-amber-400">Heritage Selection</span>
                  </motion.div>
                )}
             </div>

             <h1 className={`text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.85] mb-8 ${isLuxe ? 'italic font-serif' : ''}`}>
               {category.name}
             </h1>
             
             <p className="text-white/60 text-lg md:text-2xl font-light max-w-2xl leading-relaxed tracking-tight mb-12">
               Discover our curated selection of {isLuxe ? 'masterfully crafted' : 'premium'} {category.name.toLowerCase()} that bring {isLuxe ? 'eternal' : 'daily'} joy.
             </p>
          </motion.div>
        </div>
      </section>

      {/* Modern Filter Dock & Results */}
      <main className="max-w-[1900px] mx-auto px-6 md:px-20 py-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
           {/* Sophisticated Filter Pills */}
           <div className="sticky top-24 z-30 w-full lg:w-auto">
              <div className="flex flex-row items-center gap-3 overflow-x-auto no-scrollbar py-2 -mx-6 px-6 lg:mx-0 lg:px-0">
                <button
                  onClick={() => setSelectedSub('')}
                  className={`whitespace-nowrap px-8 py-3.5 rounded-2xl cursor-pointer text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${
                    selectedSub === '' 
                      ? (isLuxe ? 'bg-amber-900 text-white shadow-amber-900/20' : 'bg-gray-900 text-white shadow-black/10') 
                      : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  All Items
                </button>
                {category.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSub(item)}
                    className={`whitespace-nowrap px-8 py-3.5 rounded-2xl cursor-pointer text-[10px] font-black uppercase tracking-widest transition-all shadow-sm ${
                      selectedSub === item 
                        ? (isLuxe ? 'bg-amber-900 text-white shadow-amber-900/20' : 'bg-gray-900 text-white shadow-black/10') 
                        : 'bg-white text-gray-500 border border-gray-100 hover:border-gray-200 hover:text-gray-900'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
           </div>

           {/* Results Header */}
           <div className="w-full lg:w-auto flex items-center gap-4 lg:pt-3">
              <span className="h-[1px] w-8 bg-gray-100 hidden lg:block" />
              <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">
                Found {filteredProducts.length} curated items
              </h2>
           </div>
        </div>

        {/* Dynamic Products Grid */}
        <div className="mt-20">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProducts.length > 0 ? (
              <motion.div 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
                    key={product.id}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 bg-gray-50 rounded-[3rem] border border-gray-100/50"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-xl mb-8">
                   <Sparkles size={24} className="text-gray-200" />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4 tracking-tighter">Collection curated shortly</h3>
                <p className="text-gray-500 mb-12 text-center max-w-sm px-6 font-medium leading-relaxed">We're currently reframing this collection. Check back soon for new aesthetic drops.</p>
                <button 
                  onClick={() => setSelectedSub('')}
                  className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] shadow-2xl hover:bg-primary transition-all active:scale-95"
                >
                  Explore Other Stories
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}
