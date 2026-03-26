import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    title: "Premium Personalised Gifts",
    subtitle: "Make every moment special with unique creations",
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Creative Stationery",
    subtitle: "Design your ideas beautifully",
  },
  {
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    title: "Cute Kids Collection",
    subtitle: "Fun & colorful products for kids",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Travel Essentials",
    subtitle: "Carry style everywhere you go",
  },
  {
    img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    title: "Fashion Accessories",
    subtitle: "Upgrade your everyday look",
  },
  {
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
    title: "Gift Bundles",
    subtitle: "Perfect combos for every occasion",
  },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroSlides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Next / Prev
  const nextSlide = () => {
    setSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    )
  }

  return (
    <div className="relative h-[250px] md:h-[300px] lg:h-[500px] overflow-hidden rounded-2xl mx-4 mt-4 shadow-xl">

      {/* Images */}
      {heroSlides.map((item, i) => (
        <img
          key={i}
          src={item.img}
          alt={item.title}
          className={`absolute w-full h-full object-cover transition-all duration-1000 ${
            i === slide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-110"
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex flex-col justify-center items-center px-6 md:px-12">

        <h4 className="text-white mt-24 text-2xl md:text-4xl font-extrabold leading-tight max-w-xl">
          {heroSlides[slide].title}
        </h4>

        <p className="text-gray-200  md:text-lg max-w-md">
          {heroSlides[slide].subtitle}
        </p>

        <button className=" w-fit bg-teal-500 hover:bg-teal-600 text-white md:px-6 md:py-3  px-2 py-2 text-sm rounded-full shadow-lg hover:scale-105 transition">
          Shop Now
        </button>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className={`w-2 h-2 rounded-full transition ${
              i === slide ? "bg-teal-500 scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  )
}