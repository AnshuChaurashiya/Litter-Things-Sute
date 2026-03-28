import React from "react";
import { motion } from "framer-motion";
import { Heart, Star, ShieldCheck, Truck, Sparkles, MapPin, Phone, Mail } from "lucide-react";

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden pt-20">
      
      {/* Cinematic Hero */}
      <section className="relative py-32 md:py-48 px-6 bg-[#FCF9F6] border-b border-gray-100 italic font-serif">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.9]">
              Creating <span className="text-primary">Joy</span> in the <br /> 
              <span className="italic">Little Things.</span>
            </h1>
            <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed font-sans not-italic">
              Founded on the belief that beauty exists in everyday moments, curated for the aesthetic soul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Split Story */}
      <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-4 border border-primary/20 rounded-[3rem] -z-10 translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=90"
              alt="Artistic Lifestyle"
              className="rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
               <Sparkles className="text-primary mb-3" size={32} />
               <p className="text-xs font-black uppercase tracking-widest text-gray-400">Est. 2026</p>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Small Gestures, <br /> Infinite <span className="text-primary italic font-serif">Emotions.</span>
            </h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium">
              <p>
                At Little Things Cute, we believe small things create big happiness. What started as a tiny passion for cute and aesthetic products has grown into a vibrant collection of unique designs and creative ideas.
              </p>
              <p>
                Every product in our collection is handpicked and selected with immense love to bring a spark of magic into your daily life. We aren't just a store; we are a curator of smiles.
              </p>
            </div>
            <div className="pt-6">
              <div className="inline-flex items-center gap-4 py-4 px-8 bg-gray-900 text-white rounded-2xl shadow-2xl hover:-translate-y-1 transition-all cursor-pointer">
                <span className="font-black text-xs uppercase tracking-widest">Discover Collection</span>
                <Heart size={16} className="fill-primary text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-900 py-32 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div {...fadeIn} className="mb-20">
             <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">Our Core Philosophy</h2>
             <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">Commitment to quality and the aesthetic journey of our community.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Artistic Design", desc: "Every piece is selected for its unique visual language and charm.", icon: Sparkles },
              { title: "Premium Quality", desc: "We ensure every item meets the highest standards of craftsmanship.", icon: ShieldCheck },
              { title: "Rapid Joy", desc: "Fast, reliable, and beautifully packaged delivery to your doorstep.", icon: Truck }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 text-left group hover:bg-white/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:bg-primary transition-colors">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Contact Strip */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          {/* Background Text Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-black text-gray-200/40 select-none pointer-events-none uppercase">Contact</div>
          
          <motion.div {...fadeIn} className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-12">Connect With Us</h2>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <a href="mailto:hello@littlethingscute.com" className="flex items-center gap-4 bg-white px-8 py-5 rounded-3xl shadow-xl hover:-translate-y-1 transition-all group">
                <Mail size={20} className="text-primary" />
                <span className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors">hello@littlethingscute.com</span>
              </a>
              <a href="tel:+919892360639" className="flex items-center gap-4 bg-white px-8 py-5 rounded-3xl shadow-xl hover:-translate-y-1 transition-all group">
                <Phone size={20} className="text-primary" />
                <span className="text-sm font-black text-gray-900 group-hover:text-primary transition-colors">+91 98923 60639</span>
              </a>
            </div>
            <div className="mt-12 flex items-center justify-center gap-3">
               <MapPin size={16} className="text-gray-400" />
               <span className="text-xs font-black text-gray-400 uppercase tracking-widest leading-loose">Mumbai, Maharashtra, India</span>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}