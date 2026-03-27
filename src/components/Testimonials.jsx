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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Loved by our customers
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover why thousands of people trust us for their personalized gifts and everyday essentials.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-gray-200/50 border border-gray-100">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 p-8 sm:p-12 lg:p-16 flex flex-col items-center text-center">
                  
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx}
                        size={24}
                        fill={starIdx < testimonial.rating ? "#F59E0B" : "none"} 
                        stroke={starIdx < testimonial.rating ? "#F59E0B" : "#D1D5DB"}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed max-w-2xl mb-10">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <img 
                      src={testimonial.img} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-md mb-4"
                    />
                    <h4 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Desktop Arrows */}
          <button
            onClick={() => setIndex((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 bg-white rounded-full p-4 shadow-xl hover:scale-110 hover:text-primary transition-all text-gray-700 border border-gray-100"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
            className="hidden md:flex absolute top-1/2 -translate-y-1/2 -right-6 lg:-right-12 bg-white rounded-full p-4 shadow-xl hover:scale-110 hover:text-primary transition-all text-gray-700 border border-gray-100"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
