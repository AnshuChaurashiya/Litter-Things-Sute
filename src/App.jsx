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
import { useEffect, useState } from "react"

export const App = () => {
  const location = useLocation()
  const [isCartOpen, setIsCartOpen] = useState(false)

   const isMinimalLayout = location.pathname === "/login" 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]) // ✅ FIX

  return (
    <>
      {!isMinimalLayout && <Navbar setIsCartOpen={setIsCartOpen} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/products/:category/:subCategory" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>

      {!isMinimalLayout && <Footer />}
      <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <MobileBottomNav setIsCartOpen={setIsCartOpen} />
    </>
  )
}