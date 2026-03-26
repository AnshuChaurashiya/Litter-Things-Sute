import React, { useState } from 'react'
import { Home, Search, Heart, User, Package, ShoppingCart } from 'lucide-react'

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home')
  const [cartCount] = useState(3)
  const [wishlistCount] = useState(1)

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'wishlist', icon: Heart, label: 'Heart', count: wishlistCount },
    { id: 'cart', icon: ShoppingCart, label: 'Cart', count: cartCount },
    { id: 'profile', icon: User, label: 'Profile' },
  ]

  const handleTabChange = (id) => {
    setActiveTab(id)
  }

  return (
    <div className="fixed bottom-0 left-0 bottom-2 right-0 mx-3 rounded-4xl bg-white/80 backdrop-blur-md shadow-sm border  border-gray-300/50 shadow-2  xl z-50 md:hidden">
      <div className="max-w-md mx-auto px-4">
        <div className=" flex justify-around gap-2 pt-3 pb-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.id
            return (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`
                  relative p-2 rounded-2xl transition-all duration-300 flex flex-col items-center w-20 h-10 gap-1 min-h-[60px]
                  ${isActive 
                    ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-2xl scale-[1.05]' 
                    : 'text-gray-700 hover:text-teal-500 hover:bg-gray-50 hover:shadow-lg hover:scale-[1.02]'
                  }
                  active:scale-[0.98] hover:-translate-y-0.5
                `}
              >
                {/* {item.count && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg animate-pulse">
                    {item.count}
                  </span>
                )} */}

                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 2}
                  className={`transition-all duration-300 ${
                    isActive ? 'drop-shadow-lg' : 'group-hover:drop-shadow-md'
                  }`}
                />
                
                <span className="text-xs font-medium tracking-wide">
                  {item.label}
                </span>

                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-2xl blur animate-pulse" />
                )}
              </button>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default MobileBottomNav
