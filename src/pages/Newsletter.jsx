import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const NewsLetter = () => {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
          className="bg-gray-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group border border-white/5 shadow-2xl"
        >
          {/* Background Image with Zoom */}
          <motion.img 
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1600&h=800&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-1000" 
            alt="Newsletter Background"
          />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="w-16 h-16 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 border border-white/10"
            >
              <Mail className="text-primary" size={28} />
            </motion.div>

            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-[0.95]"
            >
              Join The <span className="text-primary italic font-serif">Aesthetic Club.</span>
            </motion.h2>

            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 font-medium md:font-light"
            >
              Drop your email below and receive weekly curation of the most aesthetic items and exclusive early access to drops.
            </motion.p>

            <motion.form 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-xl group/form" 
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  placeholder="yourname@gmail.com" 
                  className="w-full bg-white/5 border border-white/10 rounded-3xl px-8 py-5 text-white focus:outline-none focus:ring-4 focus:ring-primary/20 focus:bg-white/10 placeholder:text-gray-500 transition-all font-bold tracking-tight text-lg"
                />
              </div>
              <button className="bg-white text-gray-900 hover:bg-primary hover:text-white px-10 py-5 rounded-3xl font-black uppercase tracking-widest text-xs transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 group/btn">
                Subscribe
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.form>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="mt-8 text-[10px] text-white/20 font-black uppercase tracking-[0.3em]"
            >
              ✨ No spam. Just pure aesthetic magic. ✨
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;
