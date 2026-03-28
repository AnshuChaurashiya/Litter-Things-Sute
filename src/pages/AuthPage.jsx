import { useState } from "react"
import { X, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex bg-white font-sans overflow-hidden">

      {/* LEFT IMAGE / EDITORIAL */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900 focus-within:ring-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1500&auto=format&fit=crop"
            alt="editorial background"
            className="h-full w-full object-cover opacity-70"
          />
        </motion.div>
        
        <div className="absolute bottom-16 left-16 z-20 max-w-lg">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-white/60">Established 2026</span>
            </div>
            <h2 className="text-white text-5xl font-black tracking-tight leading-[1.1] mb-6">
              Where little things bring immense joy.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-medium">
              Join thousands of happy customers discovering aesthetic daily essentials, stationery, and personalized gifts.
            </p>
          </motion.div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative px-6 py-12 md:px-16 overflow-y-auto">

        {/* Home / Close */}
        <motion.a 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="/" 
          className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors p-3 bg-gray-50 rounded-full hover:bg-white hover:shadow-xl border border-gray-100"
        >
          <X size={20} strokeWidth={2.5} />
        </motion.a>

        <div className="w-full max-w-md">

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            >
              {/* Title Area */}
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4">
                  Little Things Cute
                </h2>
                <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
                  {isLogin ? "Welcome back" : "Create account"}
                </h1>
                <p className="text-gray-400 font-bold text-sm">
                  {isLogin
                    ? "Enter your details to access your account."
                    : "Join us today and make the mundane beautiful."}
                </p>
              </div>

              {/* FORM */}
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/' }}>
                
                <div className="space-y-4">
                  {!isLogin && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                    >
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full border border-gray-100 px-6 py-4.5 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-gray-50/50 font-bold text-gray-900 placeholder:text-gray-300"
                      />
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="hello@example.com"
                      className="w-full border border-gray-100 px-6 py-4.5 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-gray-50/50 font-bold text-gray-900 placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2 ml-1">
                      <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest">Password</label>
                      {isLogin && (
                        <a href="#" className="text-[10px] text-primary font-black uppercase tracking-widest hover:underline">Forgot?</a>
                      )}
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full border border-gray-100 px-6 py-4.5 rounded-2xl outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all bg-gray-50/50 font-bold text-gray-900 placeholder:text-gray-300"
                    />
                  </div>
                </div>

                {/* Button */}
                <button type="submit" className="w-full bg-gray-900 text-white py-5 rounded-3xl font-black shadow-2xl shadow-gray-900/20 hover:bg-black hover:-translate-y-1 transition-all flex justify-center items-center gap-3 mt-8 group active:scale-[0.98]">
                  {isLogin ? "Sign In" : "Get Started"}
                  <ArrowRight size={20} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* Toggle */}
              <div className="mt-10 text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
                {isLogin ? "New here?" : "Already a member?"}
                <button
                  className="ml-2 text-primary hover:underline font-black"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Create account" : "Sign in instead"}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
        </div>
      </div>
    </div>
  )
}