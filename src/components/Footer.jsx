import { Mail, Phone, MapPin, Heart, Star, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-24 px-6 sm:px-12 lg:px-20 border-t border-white/5 relative overflow-hidden mt-20">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-black text-white tracking-tighter flex items-center gap-2">
                LittleThings<span className="text-primary italic font-serif">Cute</span>
              </h2>
              <p className="text-sm leading-relaxed font-medium">
                Curating joy through masterfully crafted personalized gifts, elegant stationery, and everyday aesthetic essentials.
              </p>
            </div>
            <div className="flex gap-4">
              {[
                { icon: Heart, href: "#" },
                { icon: Star, href: "#" },
                { icon: Globe, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href} 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white shadow-xl"
                >
                  <social.icon size={20} strokeWidth={2.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Shop Collection</h3>
            <ul className="space-y-4">
              {['Stationery', 'Fashion', 'Gifts', 'Jewar Collection'].map((link) => (
                <li key={link}>
                  <Link to={`/category/${link}`} className="text-sm font-bold hover:text-primary transition-all flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary transition-colors" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-8">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Our House</h3>
            <ul className="space-y-4">
              {['About Us', 'Shipping & Returns', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-bold hover:text-white transition-all">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">Get In Touch</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm leading-relaxed font-medium">
                  10, 8, Mulchand Mansion, Dawa Bazar, Mumbai, MH 400002
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm font-black">+91 98923 60639</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-black group-hover:text-white transition-colors text-ellipsis overflow-hidden">hello@littlethingscute.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar High fidelity */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
              © {new Date().getFullYear()} LittleThingsCute. Handcrafted with ✨ in India.
            </p>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
               <Sparkles size={12} className="text-amber-500 animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-widest text-amber-500/80">Premium Member Portal</span>
            </div>
          </div>
          
          <div className="bg-white/5 px-6 py-4 rounded-[1.5rem] border border-white/10 backdrop-blur-md group hover:bg-white/10 transition-colors">
             <img 
              src="https://littlethingscute.com/wp-content/uploads/2024/12/WhatsApp-Image-2023-10-30-at-3.29.21-PM-e1698660444484-1536x240-1-1024x160.webp" 
              alt="Payment Methods"
              className="h-5 w-auto opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
