import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const LatestArrivals = ({ products }) => {
  return (
    <section className="py-32 px-4 md:px-12 max-w-[1900px] mx-auto overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="space-y-4 max-w-2xl">
           <div className="flex items-center gap-3">
             <span className="h-0.5 w-12 bg-primary rounded-full" />
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Just In</span>
           </div>
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.85]">
             New <br /> <span className="text-primary italic font-serif">Aesthetics.</span>
           </h2>
           <p className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed max-w-xl">
             The latest drops from our design studio, curated for the modern minimalist.
           </p>
        </div>
        <Link to="/products" className="group flex items-center gap-4 py-5 px-10 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-primary transition-all duration-500 shadow-2xl">
          Discover All New
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {products.map((product, index) => {
          const imageSrc = product?.images?.[0] || product?.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=400&h=500&fit=crop";
          
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="group relative"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-50 mb-6 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] transition-all duration-700">
                  <motion.img 
                    src={imageSrc} 
                    alt={product.name} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 z-10">
                     <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg">
                       <Sparkles size={10} className="text-primary" fill="currentColor" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">New Drop</span>
                     </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                
                <div className="px-4 mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-gray-400">{product.category}</span>
                    <span className="text-lg font-medium tracking-tighter text-gray-900">{product.price}</span>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 tracking-tighter leading-none group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
};

export default LatestArrivals;
