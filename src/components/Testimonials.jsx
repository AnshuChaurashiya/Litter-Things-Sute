import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

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
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)

  // Automatic slide only
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    const currentX = e.touches[0].clientX
    const diff = currentX - startX
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - previous
        setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)
      } else {
        // Swipe right - next
        setIndex((prev) => (prev + 1) % testimonials.length)
      }
      setIsDragging(false)
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 xl:px-20 bg-gradient-to-b from-slate-50/50 to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-2xl">
            What Our Customers Say
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our delighted customers
          </p>
        </div>

        {/* Horizontal Carousel - Auto slide only */}
        <div 
          className="relative overflow-hidden rounded-4xl bg-white/70 backdrop-blur-2xl shadow-2xl border border-white/50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Track */}
          <div 
            className="flex transition-transform duration-[1200ms] ease-in-out h-[450px] sm:h-[500px] lg:h-[550px] w-full"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((testimonial, i) => (
              <div key={i} className="w-full flex-shrink-0 flex items-center justify-center p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-transparent to-white/50">
                <div className="w-full max-w-3xl mx-auto text-center">
                  {/* Stars */}
                  <div className="flex items-center justify-center mb-12 gap-1 mx-auto w-fit">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx}
                        size={34}
                        fill={starIdx < testimonial.rating ? "#fbbf24" : "none"} 
                        stroke={starIdx < testimonial.rating ? "#fbbf24" : "#d1d5db"}
                        className="stroke-[2] hover:scale-125 hover:rotate-[360deg] transition-all duration-500 drop-shadow-xl"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-14">
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-gray-800 leading-[1.3] drop-shadow-2xl tracking-wide max-w-3xl mx-auto px-8">
                      "{testimonial.text}"
                    </p>
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-8">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-3xl ring-8 ring-teal-200/60 shadow-3xl overflow-hidden hover:scale-110 transition-all duration-700 cursor-default">
                      <img 
                        src={testimonial.img} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover hover:scale-115 transition-transform duration-700"
                      />
                    </div>
                    <div>
                      <h4 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-blue-600 bg-clip-text text-transparent drop-shadow-3xl">
                        {testimonial.name}
                      </h4>
                      <p className="text-2xl lg:text-3xl text-gray-600 font-semibold mt-2">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar - Auto slide indicator */}
          <div className="absolute bottom-6 left-12 right-12 h-2 bg-gray-200/70 rounded-full shadow-inner overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-blue-600 rounded-full shadow-xl transition-all duration-1000 ease-linear"
              style={{ width: `${((4000 - (Date.now() % 4000)) / 4000) * 100}%` }}
            />
          </div>
        </div>

        {/* Optional Arrows - Desktop only */}
        <div className="hidden lg:flex justify-center gap-6 mt-16">
          <button
            onClick={() => setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="bg-white/90 backdrop-blur-xl hover:bg-white shadow-2xl hover:shadow-hero-lg border border-gray-200/50 p-6 rounded-4xl group transition-all duration-500 hover:scale-110 hover:-translate-x-3"
          >
            <ChevronLeft className="w-8 h-8 text-gray-800 group-hover:text-teal-600 transition-colors" />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="bg-white/90 backdrop-blur-xl hover:bg-white shadow-2xl hover:shadow-hero-lg border border-gray-200/50 p-6 rounded-4xl group transition-all duration-500 hover:scale-110 hover:translate-x-3"
          >
            <ChevronRight className="w-8 h-8 text-gray-800 group-hover:text-emerald-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  )
}
