import React from 'react'
import Categories from '../components/Categories'
import HomeMainPages from './HomeMainPages'
import Hero from '../components/Hero'
import Products from '../components/Product'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Products />
      <Testimonials />
      {/* <HomeMainPages /> */}
     </div>
  )
}

export default Home;
