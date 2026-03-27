import React, { useState, useEffect } from 'react'
import { Search, Heart, ShoppingBag, User, Home } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const MobileBottomNav = ({ setIsCartOpen }) => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home')
  const cartCount = 3;

  useEffect(() => {
    const path = location.pathname
    if (path === '/') setActiveTab('home')
    else if (path.includes('/products') || path.includes('/category')) setActiveTab('search')
    else if (path.includes('/wishlist')) setActiveTab('wishlist')
    else if (path.includes('/cart')) setActiveTab('cart')
    else if (path.includes('/login') || path.includes('/register')) setActiveTab('profile')
  }, [location.pathname])

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'search', icon: Search, label: 'Search', path: '/category/stationery' },
    { id: 'wishlist', icon: Heart, label: 'Wishlist', path: '/' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', action: () => setIsCartOpen(true), count: cartCount },
    { id: 'profile', icon: User, label: 'Profile', path: '/login' },
  ]

  return (
    <div className="fixed bottom-1 rounded-2xl left-0 right-0  z-[60] md:hidden glass border  backdrop:backdrop-blur-3xl border-gray-400/50 pb-safe pt-2 px-2 mx-3 shadow-[0_-4px_25px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-center max-w-md mx-auto mb-2">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          const Content = (
            <>
              <div 
                className={`flex flex-col items-center justify-center transition-all duration-300 z-10 ${
                  isActive ? '-translate-y-1 text-primary' : 'text-gray-400 hover:text-gray-700'
                }`}
              >
                <Icon 
                  size={22} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-all duration-300 ${isActive ? 'scale-110 drop-shadow-sm' : ''}`}
                />
                
                {isActive && (
                  <span className="text-[10px] font-bold mt-1 tracking-wide opacity-100 transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
                
                {/* Active Indicator Dot */}
                <div 
                  className={`absolute -bottom-1.5 w-1 h-1 rounded-full bg-primary transition-all duration-300 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}
                />
              </div>

              {/* Cart Badge */}
              {item.count > 0 && (
                <span className="absolute top-1 right-2 lg:right-4 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white shadow-sm z-20">
                  {item.count}
                </span>
              )}
            </>
          )

          if (item.action) {
            return (
              <button
                key={item.id}
                onClick={item.action}
                className="relative flex flex-col items-center justify-center w-[20%] h-14"
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
              className="relative flex flex-col items-center justify-center w-[20%] h-14"
            >
              {Content}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default MobileBottomNav
