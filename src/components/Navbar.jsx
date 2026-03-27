import { useState, useEffect, useRef } from "react"
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import MobileSidebar from "./MobileSidebar"

export default function Navbar({ setIsCartOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const userRef = useRef(null)
  
  // Static cart mockup 
  const cartCount = 3;

  // Close user menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50 glass">
      {/* Top Bar Announcement */}
      <div className="bg-primary text-white text-center text-xs font-medium py-1.5 px-4 tracking-wide">
        ✨ Use coupon <span className="font-bold">WELCOME5</span> and get 5% off your first order!
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(true)} 
            className="md:hidden p-2 -ml-2 text-gray-700 hover:text-primary transition-colors rounded-full hover:bg-gray-100"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2 group">
            <img
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-105 transition-transform duration-300"
              src="https://littlethingscute.com/wp-content/uploads/2024/12/Little_Things_Cute-logo-1-1024x1024.png"
              alt="LittleThingsCute Logo"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation (Optional Expansion) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/category/stationery" className="hover:text-primary transition-colors">Stationery</Link>
          <Link to="/category/fashion" className="hover:text-primary transition-colors">Fashion</Link>
          <Link to="/category/gifts" className="hover:text-primary transition-colors">Gifts</Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 md:gap-5 text-gray-700">
          <button 
            className="p-2 hover:text-primary hover:bg-gray-100 rounded-full transition-all duration-300"
            onClick={() => setShowMobileSearch(true)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <button className="hidden md:block p-2 hover:text-primary hover:bg-gray-100 rounded-full transition-all duration-300 relative">
            <Heart size={20} />
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-primary hover:bg-gray-100 rounded-full transition-all duration-300 relative"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Menu Dropdown */}
          <div className="relative hidden md:block" ref={userRef}>
            <button 
              className="p-2 hover:text-primary hover:bg-gray-100 rounded-full transition-all duration-300"
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="User Account"
            >
              <User size={20} />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 mt-3 w-56 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] z-50 rounded-2xl p-2 transition-all duration-300 origin-top-right ${
                showUserMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Account</div>
              <Link to="/login" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors">
                Login
              </Link>
              <Link to="/register" className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-colors">
                Create Account
              </Link>
              <div className="h-px bg-gray-100 my-1 mx-2"></div>
              <div className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
                <Heart size={16} /> Wishlist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[60] p-4 transition-transform duration-300 ease-in-out ${
          showMobileSearch ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3 max-w-lg mx-auto mt-2">
          <div className="flex-1 flex items-center bg-gray-100 rounded-full px-4 py-2 ring-1 ring-gray-200 focus-within:ring-primary focus-within:bg-white transition-all">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search for gifts, stationery..."
              className="flex-1 bg-transparent px-3 py-1 outline-none text-gray-700 placeholder:text-gray-400"
              autoFocus={showMobileSearch}
            />
          </div>
          <button 
            className="p-2 text-gray-500 hover:text-gray-900 bg-gray-50 rounded-full"
            onClick={() => setShowMobileSearch(false)}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}