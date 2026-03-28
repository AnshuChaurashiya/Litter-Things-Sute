import React, { useState, useRef } from 'react';
import { ShoppingBag, Heart, ArrowRight, Star, Sparkles, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

export default function PinterestGrid({ products, title }) {
  if (!products || products.length === 0) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="w-full py-24 px-1 md:px-12 max-w-[1900px] mx-auto overflow-hidden bg-white">
      {title && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-20 px-4 md:px-0 gap-6"
        >
          <div className="space-y-4">
             <div className="flex items-center gap-3">
                <span className="h-0.5 w-10 bg-primary rounded-full" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Limited Curations</span>
             </div>
             <h2 className="text-5xl md:text-8xl font-black text-gray-900 tracking-tighter leading-[0.8]">{title}</h2>
          </div>
          <Link to="/products" className="group flex items-center gap-4 py-4 px-8 bg-gray-50 rounded-full text-gray-900 font-extrabold uppercase tracking-widest text-[10px] hover:bg-primary hover:text-white transition-all duration-500 shadow-sm">
            Explore All
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
      
       <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-4 space-y-2 md:space-y-4"
       >
        {products.map((product) => (
          <ProductTile key={product.id} product={product} />
        ))}
       </motion.div>
    </section>
  );
}

function ProductTile({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const imageSrc = product?.images?.[0] || product?.img || "https://images.unsplash.com/photo-1544816155-12df9643f363?w=400&h=600&fit=crop";
  const isLuxe = product.category === "Jewar Collection";

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const ySmooth = useSpring(yParallax, { stiffness: 100, damping: 30 });

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="break-inside-avoid relative group rounded-[2rem] overflow-hidden bg-white cursor-pointer"
    >
       <Link to={`/product/${product.id}`} className="block relative w-full h-full bg-gray-100 overflow-hidden">
        <motion.div style={{ y: ySmooth }} className="w-full">
          <img 
            src={imageSrc} 
            alt={product.name} 
            className="w-full h-auto object-cover transform scale-110 group-hover:scale-125 transition-transform duration-[1500ms] cubic-bezier(0.32,0.72,0,1)"
          />
        </motion.div>
        
        {/* Cinematic Backdrop Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0 md:opacity-20'}`} />
      </Link>

      {/* Floated Luxe Badge */}
      <AnimatePresence>
        {isLuxe && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute top-6 left-6 z-20"
          >
             <div className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-full shadow-[0_10px_30px_rgba(245,158,11,0.4)]">
               <Sparkles size={10} fill="currentColor" />
               <span className="text-[8px] font-black uppercase tracking-widest">Heritage Luxe</span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interaction Icons (Floating) */}
      <div className="absolute top-6 right-6 z-20 flex flex-col gap-3">
         <motion.button 
           whileTap={{ scale: 0.8 }}
           className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-opacity duration-500"
         >
           <Heart size={16} strokeWidth={2.5} />
         </motion.button>
      </div>

      {/* Editorial Content Overlay */}
      <div className="absolute inset-x-0 -bottom-2 z-20 p-6 md:p-10 flex flex-col justify-end pointer-events-none">
         <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
            <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-60 transition-opacity duration-500">
               <span className="w-6 h-[1px] bg-white" />
               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white underline decoration-amber-500 decoration-2 underline-offset-4">{product.category || "Curation"}</span>
            </div>
            
            <h3 className={`font-black text-white text-xl md:text-2xl tracking-tighter mb-4 leading-tight group-hover:text-white transition-colors duration-500 ${isLuxe ? 'italic font-serif' : ''}`}>
              {product.name}
            </h3>
            
            <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
               <div className="flex flex-col">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/50 mb-1">Investment</span>
                  <p className="font-black text-white text-2xl md:text-3xl tracking-tighter">{product.price}</p>
               </div>
               
               <motion.button 
                 whileTap={{ scale: 0.9 }}
                 className="pointer-events-auto w-12 h-12 rounded-2xl bg-white text-gray-900 flex items-center justify-center shadow-2xl hover:bg-primary hover:text-white transition-all"
               >
                 <Plus size={20} strokeWidth={3} />
               </motion.button>
            </div>
         </div>
      </div>

      {/* Glass Reveal on Hover */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
}
