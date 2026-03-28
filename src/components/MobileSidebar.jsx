import { useState } from "react"
import { X, ChevronDown, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { categories } from "../data/categories"

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-white shadow-2xl z-50 transform transition-transform duration-500 ease-in-out border-r border-gray-100 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-50 bg-gray-50/30">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles className="text-primary w-4 h-4" />
            </div>
            <h2 className="font-extrabold text-xl tracking-tight text-gray-900">Explore</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Menu */}
        <div className="flex flex-col p-6 gap-2 text-gray-700 h-[calc(100vh-80px)] overflow-y-auto">
          {categories.map((cat, index) => (
            <div key={index} className="border-b border-gray-50 last:border-0 pb-2">
              {/* Category Header */}
              <div
                onClick={() => toggleMenu(index)}
                className={`flex justify-between items-center py-3 cursor-pointer group transition-all duration-300 ${
                  openIndex === index ? "text-primary scale-102" : "hover:text-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <p className={`font-semibold text-[15px] ${openIndex === index ? "text-primary" : "text-gray-800"}`}>
                    {cat.name}
                  </p>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-500 text-gray-400 group-hover:text-primary ${
                    openIndex === index ? "rotate-180 text-primary" : ""
                  }`}
                />
              </div>

              {/* Sub-menu Items */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-64 mt-2 mb-4" : "max-h-0"
                }`}
              >
                <div className="flex flex-col gap-1 pl-2">
                  {cat.items.map((item, i) => (
                    <Link
                      key={i}
                      to={`/products/${cat.name.replace(/\s+/g, '-').toLowerCase()}/${item.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={handleLinkClick}
                      className="group flex items-center gap-3 py-2.5 px-3 rounded-xl hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-primary transition-colors" />
                      <span className="text-sm font-medium text-gray-500 group-hover:text-primary group-hover:translate-x-1 transition-all">
                        {item}
                      </span>
                    </Link>
                  ))}
                  <Link
                    to={`/category/${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
                    onClick={handleLinkClick}
                    className="mt-2 text-[11px] font-bold text-primary uppercase tracking-widest pl-2 hover:underline inline-block"
                  >
                    View All {cat.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col gap-4">
            <Link to="/about" onClick={handleLinkClick} className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">Our Story</Link>
            <Link to="/testimonials" onClick={handleLinkClick} className="text-sm font-bold text-gray-900 hover:text-primary transition-colors">Testimonials</Link>
        
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
