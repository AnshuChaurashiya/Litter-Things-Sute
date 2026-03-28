import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Absolutely amazing products! The quality and personalization are top-notch. Perfect gifts for every occasion.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    role: "Happy Customer"
  },
  {
    name: "Rahul Patel",
    text: "Loved the quality and fast delivery! The stationery items are so cute and well-made. Highly recommended!",
    rating: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    role: "Repeat Buyer"
  },
  {
    name: "Anita Desai",
    text: "Perfect gifts for kids! The toys and school items are adorable and durable. Will definitely buy again.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    role: "Parent"
  },
  {
    name: "Vikram Singh",
    text: "Excellent travel accessories! Stylish and practical. Great packaging and quick shipping.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    role: "Traveler"
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1)
    }, 8000)
    return () => clearInterval(interval)
  }, [index])

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9
    })
  }

  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-white overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/2 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/2 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Voice of Joy</span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Loved by our <span className="text-primary italic font-serif">Kind</span> Community
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6 opacity-20" />
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[450px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 }
                }}
                className="absolute w-full px-4"
              >
                <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-50 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden group">
                  {/* Quote Background Icon */}
                  <Quote size={120} className="absolute -top-4 -left-4 text-gray-50 opacity-10 group-hover:text-primary/5 transition-colors duration-700" strokeWidth={3} />
                  
                  {/* Image Part */}
                  <div className="relative shrink-0">
                    <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] overflow-hidden rotate-3 shadow-2xl transition-transform group-hover:rotate-0 duration-700">
                      <img src={testimonials[index].img} className="w-full h-full object-cover" alt={testimonials[index].name} />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-all duration-700">
                      <Star size={20} fill="currentColor" />
                    </div>
                  </div>

                  {/* Content Part */}
                  <div className="flex flex-col flex-1 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + (i * 0.1) }}
                        >
                          <Star size={18} className="fill-amber-400 text-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
                      “{testimonials[index].text}”
                    </p>
                    <div>
                      <h4 className="text-lg font-black text-gray-900 mb-1">{testimonials[index].name}</h4>
                      <p className="text-xs font-black uppercase tracking-widest text-primary/60">{testimonials[index].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-10 mt-12">
            <button
               onClick={() => paginate(-1)}
               className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-primary shadow-lg shadow-primary/20' : 'w-1.5 bg-gray-200'}`}
                />
              ))}
            </div>

            <button
               onClick={() => paginate(1)}
               className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
