import { useState, useEffect } from 'react';

const categories = [
  { name: "Stationery", img: "https://images.unsplash.com/photo-1588072432836-e10032774350" },
  { name: "Fashion", img: "https://images.unsplash.com/photo-1521334884684-d80222895322" },
  { name: "Travel", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Kids", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74" },
]

const products = [
  { name: "Notebook", price: "₹299", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { name: "Gift Box", price: "₹499", img: "https://images.unsplash.com/photo-1607082349566-187342175e2f" },
  { name: "Bag", price: "₹899", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3" },
  { name: "Keychain", price: "₹199", img: "https://images.unsplash.com/photo-1585386959984-a415522316cb" },
]

// Hero slider images with captions
const heroSlides = [
  {
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
    title: "Premium Personalised Gifts",
    subtitle: "Elevate every moment with our curated collection of bespoke delights"
  },
  {
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    title: "Stationery That Inspires",
    subtitle: "Timeless designs for your creative journey"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    title: "Travel in Style",
    subtitle: "Personalized essentials for every adventure"
  },
  {
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    title: "Joy for Kids",
    subtitle: "Magical gifts that spark imagination"
  }
];

// Testimonials data
const testimonials = [
  {
    name: "Priya Sharma",
    text: "Absolutely stunning personalized gifts! The quality exceeded my expectations. Will definitely order again.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Rahul Patel",
    text: "Fast delivery and beautiful packaging. The notebook is perfect for journaling my thoughts.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Anita Desai",
    text: "Love the fashion accessories! Made my gift so special. Highly recommend for all occasions.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 4.9
  },
  {
    name: "Vikram Singh",
    text: "The travel bag is premium quality. Perfect companion for my trips. Great value!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export default function HomeMainPages() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero auto-slide every 4 seconds
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(heroInterval);
  }, []);

  // Testimonials auto-slide every 5 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  const goToHeroSlide = (index) => setHeroSlide(index);
  const goToTestimonial = (index) => setCurrentTestimonial(index);

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* HERO SLIDER SECTION */}
      <section className="relative mx-4 sm:mx-6 lg:mx-12 xl:mx-20 mt-4 sm:mt-8 rounded-3xl overflow-hidden shadow-2xl">
        {/* Images with fade transition */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                i === heroSlide
                  ? 'scale-100 opacity-100'
                  : 'scale-110 opacity-0'
              }`}
            >
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16">
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-teal-300 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl leading-tight animate-fade-in">
            {heroSlides[heroSlide].title}
          </h1>
          <p className="text-gray-100 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light drop-shadow-lg max-w-md animate-fade-in-delay">
            {heroSlides[heroSlide].subtitle}
          </p>
          <button className="mt-6 sm:mt-8 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-8 sm:px-10 py-3 sm:py-4 rounded-2xl text-white font-semibold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 w-fit border-0 animate-slide-up">
            Discover Now
          </button>
        </div>

        {/* Hero Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToHeroSlide(i)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                i === heroSlide
                  ? 'bg-gradient-to-r from-teal-500 to-blue-500 scale-125 shadow-lg'
                  : 'bg-white/60 hover:bg-teal-400'
              }`}
            />
          ))}
        </div>

        {/* Auto-slide indicator */}
        <div className="absolute top-4 right-4 bg-teal-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full shadow-lg animate-pulse border border-white/30">
          Auto
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mt-12 sm:mt-16 lg:mt-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-8 sm:mb-12 text-center">
          Explore Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-white/50 hover:border-teal-200/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="h-32 sm:h-36 md:h-44 lg:h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 sm:p-5 text-center">
                <p className="text-lg sm:text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 mt-16 sm:mt-20 lg:mt-24 pb-12 sm:pb-16">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-slate-800 bg-clip-text text-transparent">
            Trending Products
          </h2>
          <button className="text-teal-500 hover:text-teal-600 font-semibold text-sm sm:text-base bg-white/50 backdrop-blur-sm px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((p, i) => (
            <div 
              key={i} 
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl p-4 sm:p-5 lg:p-6 border border-white/60 hover:border-teal-200/60 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] overflow-hidden relative"
            >
              <div className="relative mb-3 sm:mb-4">
                <img 
                  src={p.img} 
                  alt={p.name}
                  className="w-full h-28 sm:h-32 lg:h-36 rounded-2xl object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  New
                </div>
              </div>
              <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                {p.name}
              </h3>
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <p className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 drop-shadow-sm">
                  {p.price}
                </p>
                <div className="w-2 h-8 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full shadow-lg"></div>
              </div>
              <button className="w-full bg-gradient-to-r from-teal-500 via-teal-600 to-blue-600 hover:from-teal-600 hover:via-teal-700 hover:to-blue-700 text-white font-semibold py-3 sm:py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base border-0 relative overflow-hidden">
                <span>Add to Cart</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="px-4 sm:px-6 lg:px-12 xl:px-20 py-16 sm:py-20 bg-white/30 backdrop-blur-sm">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-12 sm:mb-16 text-center">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center p-8 sm:p-12 lg:p-16 bg-gradient-to-br from-white via-white/90 to-teal-50/50 rounded-3xl shadow-2xl border border-white/50 backdrop-blur-xl">
            <img 
              src={testimonials[currentTestimonial].img} 
              alt={testimonials[currentTestimonial].name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto shadow-2xl border-4 border-white mb-6 sm:mb-8 ring-4 ring-teal-200/50"
            />
            <div className="flex justify-center mb-6 sm:mb-8">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 sm:w-6 sm:h-6 ${i < Math.floor(testimonials[currentTestimonial].rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
              <span className="ml-2 text-sm sm:text-base font-semibold text-gray-700">({testimonials[currentTestimonial].rating})</span>
            </div>
            <p className="text-lg sm:text-xl lg:text-2xl italic font-light text-gray-800 leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">
              {testimonials[currentTestimonial].name}
            </p>
          </div>

          <div className="flex justify-center mt-8 sm:mt-12 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  i === currentTestimonial
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 scale-125 shadow-lg'
                    : 'bg-gray-300 hover:bg-teal-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white px-6 sm:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 text-center text-sm sm:text-base">
        <div className="max-w-4xl mx-auto">
          <p className="font-light drop-shadow-lg mb-4">
            © 2024 LittleThingsCute — Premium Gifts, Timeless Moments 🚀
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
