import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const TrustBadges = () => {
  const badges = [
    { icon: Truck, title: "Free Shipping", desc: "On orders over ₹999" },
    { icon: ShieldCheck, title: "Secure Pay", desc: "100% Secure Checkout" },
    { icon: RotateCcw, title: "Easy Returns", desc: "7 Days Return Policy" },
    { icon: Headphones, title: "Happy Help", desc: "24/7 Dedicated Support" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-gray-100 py-16"
    >
      {badges.map((badge, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center group"
        >
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white group-hover:rotate-[10deg] transition-all duration-500 text-primary shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/20">
            <badge.icon size={28} strokeWidth={1.5} />
          </div>
          <h4 className="font-black text-gray-900 text-xs tracking-[0.2em] uppercase mb-2">{badge.title}</h4>
          <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">{badge.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustBadges;
