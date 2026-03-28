import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Filter } from 'lucide-react';

const ShopByPrice = () => {
  const tiers = [
    { 
      label: "Budget Essentials", 
      price: "Under ₹499", 
      img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c", 
      accent: "from-emerald-900 via-emerald-900/40 to-transparent",
      text: "text-emerald-300"
    },
    { 
      label: "Style Staples", 
      price: "Under ₹999", 
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop",
      accent: "from-amber-900 via-amber-900/40 to-transparent",
      text: "text-amber-300"
    },
    { 
      label: "Premium Luxe", 
      price: "Over ₹999", 
      img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop",
      accent: "from-rose-900 via-rose-900/40 to-transparent",
      text: "text-rose-300"
    }
  ];

  return (
    <section className="py-32 px-4 md:px-12 max-w-[1900px] mx-auto overflow-hidden bg-gray-50 rounded-[4rem] my-20">
      <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
        <div className="space-y-4 max-w-2xl">
           <div className="flex items-center gap-3">
             <span className="h-0.5 w-12 bg-primary rounded-full" />
             <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary">Budget Friendly</span>
           </div>
           <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 leading-[0.85]">
             Shop By <br /> <span className="text-primary italic font-serif">Price.</span>
           </h2>
           <p className="text-gray-500 text-lg md:text-2xl font-medium leading-relaxed max-w-xl">
             Discover curated segments designed for every budget, from daily icons to heritage luxe.
           </p>
        </div>
        
        <div className="flex items-center gap-6">
           <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-50 bg-gray-200 overflow-hidden">
                   <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                </div>
              ))}
           </div>
           <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">10k+ Shoppers</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 lg:grid-rows-1">
        {tiers.map((tier, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="group relative h-[500px] md:h-[600px] overflow-hidden rounded-[3rem] bg-gray-200"
          >
            <Link to="/products" className="block w-full h-full">
              <img 
                src={tier.img} 
                alt={tier.price} 
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[2000ms]" 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${tier.accent} transition-opacity duration-700 opacity-80 group-hover:opacity-100`} />
              
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <motion.div 
                       initial={{ opacity: 0, x: -10 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       className="flex items-center gap-2 mb-4"
                    >
                      <Sparkles size={12} className={tier.text} fill="currentColor" />
                      <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${tier.text}`}>{tier.label}</span>
                    </motion.div>
                    
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none mb-6">{tier.price}</h3>
                    
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                       <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">Browse Tiers</span>
                       <ArrowRight size={16} className="text-white" />
                    </div>
                 </div>
              </div>
              
              {/* Glass spotlight */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-opacity duration-700 pointer-events-none" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShopByPrice;
