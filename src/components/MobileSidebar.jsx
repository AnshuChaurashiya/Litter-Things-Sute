import { useState } from "react"
import { X, ChevronDown } from "lucide-react"
import { categories } from "../data/categories"

export default function MobileSidebar({ isOpen, setIsOpen }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        {/* Menu */}
        <div className="flex flex-col p-4 gap-3 text-gray-700">

          {categories.map((cat, index) => (
            <div key={index}>

              {/* Category Name */}
              <div
                onClick={() => toggleMenu(index)}
                className="flex justify-between items-center cursor-pointer hover:text-teal-500 transition"
              >
                <p>{cat.name}</p>
                <ChevronDown
                  size={16}
                  className={`transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* Items */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                }`}
              >
                {cat.items.map((item, i) => (
                  <p
                    key={i}
                    className="pl-4 py-1 text-sm hover:text-teal-500 hover:translate-x-2 transition cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}