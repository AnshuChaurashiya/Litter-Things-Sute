import { useState, useEffect, useRef } from "react"
import { Search, Heart, ShoppingCart, User, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import MobileSidebar from "./MobileSidebar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const userRef = useRef(null)

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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">

      {/* Top Bar */}
      <div className="bg-teal-300 text-center text-sm py-1">
        Use coupon "WELCOME5" and get 5% off
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-2 max-w-7xl mx-auto">

        {/* Left */}
        <div className="flex items-center gap-4">
          <Menu onClick={() => setIsOpen(true)} className="md:hidden cursor-pointer" />
          <img
            className="w-12 h-12"
            src="https://littlethingscute.com/wp-content/uploads/2024/12/Little_Things_Cute-logo-1-1024x1024.png"
            alt="logo"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Mobile Search */}
          {/* <Search
            className="cursor-pointer"
            onClick={() => setShowMobileSearch(true)}
          /> */}

          {/* <ShoppingCart className="cursor-pointer hover:scale-110 transition" /> */}

          {/* User Menu */}
          <div className="relative" ref={userRef}>
            <User
              className="cursor-pointer z-50 hover:scale-110 transition"
              onClick={() => setShowUserMenu(!showUserMenu)}
            />

            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-3 w-48 bg-white shadow-xl z-10 rounded-xl p-2 transition-all duration-300 ${
                showUserMenu ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <Link to="/login" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                Login
              </Link>
              <Link to="/register" className="block px-3 py-2 hover:bg-gray-100 rounded-md">
                Create Account
              </Link>

              <div className="border-t my-2"></div>

              <div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                <Heart size={16} /> Wishlist
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      {showMobileSearch && (
        <div className="fixed top-24  left-0 w-full bg-white z-50 p-4 flex gap-3 shadow-md">
          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 border rounded-full px-4 py-2 outline-none"
          />
          <X className="cursor-pointer" onClick={() => setShowMobileSearch(false)} />
        </div>
      )}

     

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  )
}