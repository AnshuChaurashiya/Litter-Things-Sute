import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&q=80&w=2000",
    title: "Premium Personalised Gifts",
    subtitle: "Make every moment special with unique, timeless creations.",
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000",
    title: "Creative Stationery",
    subtitle: "Design your ideas beautifully with our elegant collections.",
  },
  {
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=2000",
    title: "Cute Kids Collection",
    subtitle: "Fun, vibrant, and incredibly colorful products for kids.",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
    title: "Travel Essentials",
    subtitle: "Carry unparalleled style everywhere you go.",
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    )
  }

  return (
    <div className="relative h-[65vh] md:h-[75vh] min-h-[400px] w-full mt-0 overflow-hidden bg-gray-900">
      {/* Images with soft fade & slow zoom */}
      {heroSlides.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === slide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={item.img}
            alt={item.title}
            className={`w-full h-full object-cover transform transition-transform duration-[10000ms] ${
              i === slide ? "scale-105" : "scale-100"
            }`}
          />
          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent flex flex-col justify-end px-6 md:px-16 lg:px-24 pb-20 md:pb-32">
            <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${i === slide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
              <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight mb-4">
                {item.title}
              </h1>
              <p className="text-gray-200 text-lg md:text-xl font-light max-w-lg mb-8">
                {item.subtitle}
              </p>
              <button className="bg-white text-gray-900 hover:bg-gray-100 hover:scale-105 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all shadow-lg active:scale-95">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 flex justify-between px-4 md:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md text-white border border-white/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Modern Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === slide ? "w-8 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}