import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { categories } from "../data/categories.js"

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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.32, 0.72, 0, 1] }
  }
};

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section className="w-full py-20 px-3 md:px-12 max-w-[1900px] mx-auto overflow-hidden bg-white">
      {/* Editorial Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8"
      >
        <div className="space-y-4 max-w-3xl">
           <div className="flex items-center gap-3">
             <span className="h-0.5 w-12 bg-primary rounded-full" />
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Collections 2026</span>
           </div>
           <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[0.9]">
             Curated <br /> <span className="text-primary italic font-serif">Aesthetics.</span>
           </h2>
           <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
             From personalized treasures to bespoke stationery, discover our world of thoughtful design.
           </p>
        </div>
        
        <motion.button 
          whileHover={{ x: 10 }}
          onClick={() => navigate('/products')}
          className="flex items-center gap-4 py-5 px-10 cursor-pointer bg-primary text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-full shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-500 group"
        >
          View Full Catalog
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>

      {/* Bento Grid Gallery */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 lg:grid-rows-3"
      >
        {[...categories].sort((a,b) => (b.isSpecial ? 1 : 0) - (a.isSpecial ? 1 : 0)).map((cat, index) => {
          const isLuxe = cat.isSpecial;
          
          // Custom Bento spans based on category
          let gridClass = "col-span-1 row-span-1 h-[300px] md:h-auto";
          if (cat.name === "Jewar Collection") gridClass = "col-span-2 row-span-2 h-[450px] md:h-[600px]";
          if (cat.name === "Kids") gridClass = "col-span-2 md:col-span-2 row-span-1 h-[300px]";
          if (cat.name === "Bundles") gridClass = "col-span-2 md:col-span-2 row-span-1 h-[250px] md:h-[300px]";
          
          return (
          <motion.div
            key={index}
            variants={itemVariants}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
            className={`group cursor-pointer relative overflow-hidden rounded-[2.5rem] bg-gray-50 ${gridClass}`}
          >
            {/* Background Image with Zoom */}
            <motion.div className="absolute inset-0 z-0">
               <motion.img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform scale-100 transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
            </motion.div>
            
            {/* Luxe Aura Decor */}
            {isLuxe && (
              <div className="absolute inset-4 border border-amber-400/30 rounded-[2rem] pointer-events-none z-10 animate-pulse-slow" />
            )}

            {/* Overlaid Label Design */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
               <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                 <AnimatePresence>
                   {isLuxe && (
                     <motion.div 
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       className="flex items-center gap-2 mb-4"
                     >
                       <div className="w-8 h-[1px] bg-amber-500" />
                       <Sparkles size={12} className="text-amber-500" />
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-500">Premium Luxe</span>
                     </motion.div>
                   )}
                 </AnimatePresence>
                 
                 <h3 className={`font-black tracking-tighter leading-none mb-4 ${
                   cat.name === "Jewar Collection" ? "text-4xl md:text-6xl text-white italic font-serif" : "text-2xl md:text-4xl text-white"
                 }`}>
                   {cat.name}
                 </h3>
                 
                 <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Shop Collection</span>
                    <ArrowRight size={14} className="text-white" />
                 </div>
               </div>
            </div>

            {/* Glass Blur hover backdrop */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </motion.div>
        )})}
      </motion.div>
    </section>
  )
}
