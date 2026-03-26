import Navbar from "./components/Navbar"
import { Routes, Route, useLocation } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import MobileBottomNav from "./components/MobileBottomNav"



export const App = () => {
  const location = useLocation()

   const hideNavbar = location.pathname === "/login"

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
      <Footer />
      <MobileBottomNav />
    </>
  )
}
