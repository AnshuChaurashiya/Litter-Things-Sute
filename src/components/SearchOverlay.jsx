import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SearchOverlay = ({ isSearchOpen, setIsSearchOpen }) => {
  const [searchQuery, setSearchQuery] = useState('')

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsSearchOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [setIsSearchOpen])

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
          className="fixed inset-0 bg-white/95 backdrop-blur-3xl z-[100] p-6 lg:p-12"
        >
          <div className="max-w-4xl mx-auto flex flex-col gap-12 pt-12">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Search Products</span>
              <button 
                className="p-4 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-full transition-all active:scale-90"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={24} strokeWidth={2.5} />
              </button>
            </div>

            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full bg-transparent border-b-2 border-gray-100 py-6 text-2xl md:text-5xl font-black outline-none placeholder:text-gray-200 focus:border-primary transition-all pr-12"
                autoFocus
              />
              <Search size={32} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-200" strokeWidth={3} />
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-300">Popular Searches</h4>
               <div className="flex flex-wrap gap-3">
                  {['Personalized Gifts', 'Stationery', 'Jewelry', 'Fashion'].map(s => (
                    <button 
                      key={s} 
                      onClick={() => setSearchQuery(s)}
                      className="px-6 py-2.5 rounded-full bg-gray-50 hover:bg-gray-100 text-xs font-bold text-gray-600 transition-all"
                    >
                      {s}
                    </button>
                  ))}
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SearchOverlay
