import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
        className="bg-primary/5 rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-primary/10 flex flex-col items-center text-center"
      >
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] animate-pulse delay-700"></div>
        
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="flex items-center gap-3 mb-8 relative z-10"
        >
          <Sparkles size={16} className="text-primary" />
          <h2 className="text-xs font-black tracking-[0.4em] text-primary uppercase">Our Philosophy</h2>
          <Sparkles size={16} className="text-primary" />
        </motion.div>

        <motion.h3 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter mb-10 relative z-10 leading-[0.95] max-w-4xl"
        >
          Small Things, <span className="text-primary italic font-serif">Big Happiness.</span>
        </motion.h3>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-medium leading-relaxed relative z-10 md:font-light"
        >
          At Little Things Cute, we believe that aesthetic objects have the power to transform your daily mood. 
          We curate unique, high-quality lifestyle accessories and stationery that bring a touch of joy, 
          creativity, and personality to your space with <span className="text-gray-900 font-bold underline decoration-primary/30 underline-offset-8">unmatched premium design.</span>
        </motion.p>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 relative z-10"
        >
          <Link to="/about" className="bg-gray-900 hover:bg-black text-white px-12 py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
            Read Our Full Story
          </Link>
          <div className="flex items-center gap-3 text-gray-400 font-bold uppercase tracking-widest text-[10px]">
            <Heart size={14} className="text-primary fill-primary" />
            Loved by 10k+ Customers
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BrandStory;
