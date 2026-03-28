import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PinterestGrid from '../components/PinterestGrid';
import Testimonials from '../components/Testimonials';
import BrandStory from './BrandStory';
import TrustBadges from './TrustBadges';
import NewsLetter from './Newsletter';
import LatestArrivals from '../components/LatestArrivals';
import ShopByPrice from '../components/ShopByPrice';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
};

export const Home = () => {
  // Grab best sellers for masonry
  const bestSellers = products.slice(0, 12);
  
  // Grab latest arrivals for grid
  const latestArrivalsData = products.slice().reverse().slice(0, 4);

  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      
      <motion.div {...fadeInUp} className="pt-8">
        <Categories />
      </motion.div>

      {/* Latest Arrivals - Cinematic Component */}
      <LatestArrivals products={latestArrivalsData} />

      {/* Brand Story */}
      <motion.div {...fadeInUp}>
        <BrandStory />
      </motion.div>

      {/* Shop By Price - Premium Component */}
      <ShopByPrice />

      <div className="max-w-[1900px] mx-auto px-4 md:px-12">
        <TrustBadges />
      </div>

      {/* Best Selling Products - Masonry */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24"
      >
        <PinterestGrid products={bestSellers} title="The Best Sellers" />
      </motion.section>

      {/* Testimonials */}
      <motion.div {...fadeInUp}>
        <Testimonials />
      </motion.div>

      {/* Newsletter */}
      <motion.div {...fadeInUp}>
        <NewsLetter />
      </motion.div>
    </div>
  )
}

export default Home;