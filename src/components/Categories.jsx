import React from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight } from "lucide-react"

import { categories } from "../data/categories.js"

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl">
            Explore our curated collections of premium personalized gifts, thoughtful stationery, and chic accessories.
          </p>
        </div>
        <button 
          onClick={() => navigate('/products')}
          className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-primary-hover transition-colors"
        >
          View all categories
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${encodeURIComponent(cat.name)}`)}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Circular Image Container */}
            <div className="w-full aspect-square bg-gray-50 rounded-full overflow-hidden mb-4 relative shadow-sm border border-gray-100 group-hover:shadow-lg transition-all duration-500">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
            
            {/* Label */}
            <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-primary transition-colors text-center block w-full truncate px-2">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* Mobile View All */}
      <button 
        onClick={() => navigate('/products')}
        className="mt-8 mx-auto flex md:hidden items-center justify-center gap-2 text-primary font-medium w-full py-3.5 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors"
      >
        View all categories
        <ArrowRight size={18} />
      </button>
    </section>
  )
}