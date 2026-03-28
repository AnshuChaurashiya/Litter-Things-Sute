import React, { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"

const heroSlides = [
  {
    img: "https://i.pinimg.com/736x/25/16/1b/25161b30eab87baf268ff212781297e2.jpg",
    title: "Premium Personalised Gifts",
    subtitle: "Make every moment special with unique, timeless creations.",
    accent: "text-rose-400",
    bg: "bg-rose-500/10"
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000",
    title: "Creative Stationery",
    subtitle: "Design your ideas beautifully with our elegant collections.",
    accent: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=2000",
    title: "Cute Kids Collection",
    subtitle: "Fun, vibrant, and incredibly colorful products for kids.",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10"
  },
  {
    img: "https://i.pinimg.com/1200x/8f/d1/49/8fd1493882021b9d11e4d7ad5df5a564.jpg",
    title: "Travel Essentials",
    subtitle: "Carry unparalleled style everywhere you go.",
    accent: "text-blue-400",
    bg: "bg-blue-500/10"
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const yText = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setSlide((prev) => (prev + 1) % heroSlides.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setDirection(1)
    setSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
  }

  return (
    <div ref={containerRef} className="relative h-[85vh] md:h-[95vh] w-full mt-0 overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={slide}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0 z-0"
        >
          <motion.img
            style={{ scale }}
            src={heroSlides[slide].img}
            alt={heroSlides[slide].title}
            className="w-full h-full object-cover"
          />
          {/* Enhanced Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-black/40 md:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white via-white/50 to-transparent z-10 hidden md:block opacity-10" />
        </motion.div>
      </AnimatePresence>

      <motion.div style={{ opacity, y: yText }} className="relative z-10 h-full max-w-[1900px] mx-auto px-6 md:px-20 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -60, opacity: 0 }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-4xl"
          >
           
            
            <h1 className="text-white text-6xl   font-black tracking-tighter leading-[0.85] mb-10">
              {heroSlides[slide].title.split(' ').map((word, index) => (
                <span key={index} className="inline-block mr-[0.2em] transform-gpu">
                  {word}
                </span>
              ))}
            </h1>
            
            <p className="text-white/70 text-lg md:text-3xl font-medium max-w-2xl mb-12 leading-[1.2] md:font-light tracking-tight">
              {heroSlides[slide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-white text-black px-12 py-6 rounded-[2rem] text-xs font-black uppercase tracking-[0.3em] transition-all shadow-2xl flex items-center gap-4 active:scale-95 border border-white/20"
              >
                Explore The Story
                <span className="p-2 bg-gray-900 text-white rounded-full group-hover:rotate-45 transition-transform duration-500">
                  <ArrowRight size={16} />
                </span>
              </motion.button>
              
              <div className="flex items-center gap-8 pl-4">
                 <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-black overflow-hidden bg-gray-800">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                      </div>
                    ))}
                 </div>
                 <div className="flex flex-col">
                    <span className="text-white font-black text-sm tracking-tighter">12K+ Reviews</span>
                    <div className="flex gap-1 text-amber-400">
                       {[1,2,3,4,5].map(i => <Sparkles key={i} size={10} fill="currentColor" />)}
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Progress & Navigation Combined */}
      <div className="absolute right-6 md:right-20 bottom-1 -translate-y-1/2 z-20 flex flex-col gap-12 items-center">
        
        
        <div className="flex flex-col gap-4">
          <button
            onClick={prevSlide}
            className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-14 h-14 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-black backdrop-blur-xl border border-white/10 transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
    </div>
  )
}
