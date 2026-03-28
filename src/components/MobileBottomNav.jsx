import React, { useState, useEffect } from 'react'
import { Search, Heart, ShoppingBag, User, Home, Sparkles } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const MobileBottomNav = ({ setIsCartOpen, setIsSearchOpen }) => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home')
  const cartCount = 3;

  useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveTab('home')
    else if (path.includes('/wishlist')) setActiveTab('wishlist')
    else if (path.includes('/login') || path.includes('/register')) setActiveTab('profile')
    else setActiveTab('') 
  }, [location.pathname])

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', action: () => setIsSearchOpen(true) },
    { id: 'wishlist', icon: Heart, label: 'Wishlist', path: '/' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', action: () => setIsCartOpen(true), count: cartCount },
    { id: 'profile', icon: User, label: 'Profile', path: '/login' },
   ]

  return (
    <div className="fixed bottom-6 left-0 right-0 z-[60] md:hidden px-6 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.5 }}
        className="max-w-md mx-auto pointer-events-auto bg-white/70 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-2 flex justify-between items-center relative overflow-hidden"
      >
        {/* Animated Background Indicator */}
        <div className="absolute inset-2 pointer-events-none">
          <div className="relative w-full h-full flex justify-between items-center">
            {navItems.map((item) => (
              <div key={`bg-${item.id}`} className="w-1/5 h-full flex items-center justify-center">
                {activeTab === item.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="w-12 h-12 bg-primary rounded-2xl shadow-lg shadow-primary/20"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          const Content = (
            <motion.div 
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center z-10 w-full h-full"
            >
              <Icon 
                size={22} 
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`}
              />
              
              <AnimatePresence>
                {isActive && (
                   <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: 5 }}
                     className="absolute -bottom-1"
                   >
                     <div className="w-1 h-1 bg-white rounded-full sm:hidden" />
                   </motion.div>
                )}
              </AnimatePresence>

              {/* Cart Badge */}
              {item.count > 0 && item.id === 'cart' && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`absolute top-2 right-2 min-w-[18px] h-[18px] flex items-center justify-center text-[9px] font-black rounded-full border-2 transition-colors duration-300 ${
                    isActive ? 'bg-white text-primary border-primary shadow-sm' : 'bg-primary text-white border-white shadow-md'
                  }`}
                >
                  {item.count}
                </motion.span>
              )}
            </motion.div>
          )

          if (item.action) {
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="relative flex items-center justify-center w-1/5 h-16 group outline-none"
              >
                {Content}
              </button>
            )
          }

          return (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setActiveTab(item.id)}
              className="relative flex items-center justify-center w-1/5 h-16 group outline-none"
            >
              {Content}
            </Link>
          )
        })}
      </motion.div>
    </div>
  )
}

export default MobileBottomNav
