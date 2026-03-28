import Navbar from "./components/Navbar"
import { Routes, Route, useLocation } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Home from "./pages/Home"
import CategoryPage from "./pages/CategoryPage"
import ProductsPage from "./pages/ProductsPage"
import ProductDetail from "./pages/ProductDetail"
import TestimonialsPage from "./pages/TestimonialsPage"
import Footer from "./components/Footer"
import MobileBottomNav from "./components/MobileBottomNav"
import CartDrawer from "./components/CartDrawer"
import SearchOverlay from "./components/SearchOverlay"
import { useEffect, useState } from "react"
import About from "./pages/About"
import { AnimatePresence, motion } from "framer-motion"

export const App = () => {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

   const isMinimalLayout = location.pathname === "/login" 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <>
      {!isMinimalLayout && <Navbar setIsCartOpen={setIsCartOpen} setIsSearchOpen={setIsSearchOpen} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/products/:category/:subCategory" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      {!isMinimalLayout && <Footer />}
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <SearchOverlay isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <MobileBottomNav setIsCartOpen={setIsCartOpen} setIsSearchOpen={setIsSearchOpen} />
    </>
  )
}