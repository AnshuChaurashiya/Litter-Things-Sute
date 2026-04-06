import { useState, useEffect, useRef } from "react"
import { Search, Heart, ShoppingCart, User, Menu, X, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import MobileSidebar from "./MobileSidebar"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar({ setIsCartOpen, setIsSearchOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false) 
  const [scrolled, setScrolled] = useState(false)

  const userRef = useRef(null)
  
  // Static cart mockup 
  const cartCount = 3;

  useEffect(() => {
    const handleScroll = () => {
       if (window.scrollY > 10) {
         setScrolled(true)
       } else {
         setScrolled(false)
       }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <motion.header 
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        paddingTop: scrolled ? "0.5rem" : "1rem",
        paddingBottom: scrolled ? "0.5rem" : "1rem",
      }}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className="sticky top-0 z-50 transition-shadow duration-500"
      style={{
        boxShadow: scrolled ? "0 4px 20px -5px rgba(0,0,0,0.05)" : "none"
      }}
    >
      {/* Top Bar Announcement */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-primary text-white text-center text-[10px] sm:text-xs font-black py-2 px-4 tracking-[0.2em] uppercase overflow-hidden"
          >
            ✨ Use code <span className="underline decoration-2 underline-offset-4">WELCOME5</span> for 5% off
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 md:px-12 max-w-[1600px] mx-auto">
        {/* Left: Mobile Menu & Logo */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsOpen(true)} 
            className="lg:hidden p-2 -ml-2 text-gray-900 border border-gray-100 rounded-xl hover:bg-white transition-all shadow-sm"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              initial={false}
              animate={{
                width: scrolled ? "40px" : "60px",
                height: scrolled ? "40px" : "60px",
              }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="object-contain"
              src="https://littlethingscute.com/wp-content/uploads/2024/12/Little_Things_Cute-logo-1-1024x1024.png"
              alt="LittleThingsCute Logo"
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.2em] text-gray-400">
          <Link to="/" className="hover:text-primary transition-all relative group py-2">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link to="/category/Stationery" className="hover:text-primary transition-all relative group py-2">
            Stationery
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link to="/category/Fashion" className="hover:text-primary transition-all relative group py-2">
            Fashion
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link to="/category/Gifts" className="hover:text-primary transition-all relative group py-2">
            Gifts
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
          </Link>
          <Link to="/category/Jewar Collection" className="text-amber-600 hover:text-amber-700 transition-all relative group py-2 flex items-center gap-1.5">
            Jewar
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-600 transition-all group-hover:w-full" />
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 md:gap-4 text-gray-900">
          <button 
            className="p-3 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl transition-all duration-300 shadow-sm md:shadow-none hover:shadow-xl"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search"
          >
            <Search size={20} strokeWidth={2.5} />
          </button>

          <button className="hidden md:block p-3 hover:bg-white border border-transparent hover:border-gray-100 rounded-2xl transition-all duration-300 relative shadow-none hover:shadow-xl group">
            <Heart size={20} strokeWidth={2.5} className="group-hover:fill-red-500 group-hover:text-red-500 transition-colors" />
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-3 bg-white md:bg-transparent border border-gray-100 md:border-transparent hover:border-gray-100 rounded-2xl transition-all duration-300 relative shadow-sm md:shadow-none hover:shadow-xl group"
          >
            <ShoppingCart size={20} strokeWidth={2.5} className="group-hover:text-primary transition-colors" />
            {cartCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[20px] h-[20px] bg-primary text-white text-[9px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-xl group-hover:scale-110 transition-transform">
                {cartCount}
              </span>
            )}
          </button>

          {/* User Menu Dropdown */}
          <div className="relative hidden md:block" ref={userRef}>
            <button 
              className={`flex items-center gap-2 p-1.5 pl-3 border rounded-2xl transition-all duration-300 ${
                showUserMenu ? 'bg-primary border-primary text-white shadow-xl ring-4 ring-primary/10' : 'bg-white border-gray-100 text-gray-900 hover:shadow-xl hover:border-gray-200'
              }`}
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-label="User Account"
            >
              <div className="font-black text-[9px] uppercase tracking-widest hidden lg:block">Profile</div>
              <div className={`p-2 rounded-xl transition-colors ${showUserMenu ? 'bg-white/20' : 'bg-gray-50'}`}>
                <User size={18} strokeWidth={2.5} />
              </div>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showUserMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-4 w-64 bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] z-50 rounded-[2rem] p-3 overflow-hidden"
                >
                  <div className="px-4 py-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50 mb-2">Member Portal</div>
                  <div className="space-y-1">
                    <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all group">
                      Login
                      <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                    <Link to="/register" className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-gray-700 hover:text-primary hover:bg-primary/5 rounded-2xl transition-all group">
                      Sign Up
                      <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                    </Link>
                  </div>
                  <div className="h-px bg-gray-50 my-3 mx-2"></div>
                  <div className="space-y-1">
                    <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                      <Heart size={16} /> Wishlist
                    </button>
                    <Link to="/about" className="flex items-center gap-3 px-4 py-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                       About Us
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.header>
  )
}
