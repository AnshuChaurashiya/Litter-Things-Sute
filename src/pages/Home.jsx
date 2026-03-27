import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import PinterestGrid from '../components/PinterestGrid';
import Testimonials from '../components/Testimonials';
import { products } from '../data/products';

export const Home = () => {
  // Grab best sellers for masonry
  const bestSellers = products.slice(0, 12);
  
  // Grab latest arrivals for grid
  const latestArrivals = products.slice().reverse().slice(0, 4);

  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      
      <div className="pt-8">
        <Categories />
      </div>

      {/* Latest Arrivals */}
      <section className="py-20 px-6 sm:px-8 lg:px-16 bg-gray-50 border-y border-gray-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-baseline justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">Latest Arrivals</h2>
              <p className="text-gray-500 text-lg sm:text-xl font-light">Fresh aesthetics dropped just today.</p>
            </div>
            <Link to="/products/all/all" className="hidden sm:inline-flex bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm whitespace-nowrap">
              Discover All
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {latestArrivals.map(product => {
              const imageSrc = product?.images?.[0] || product?.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=400&h=500&fit=crop";
              return (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 aspect-[4/5] relative mb-4 border border-gray-100">
                  <img src={imageSrc} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">New</div>
                </div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-1 group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                <p className="text-gray-500 font-medium text-sm sm:text-base">{product.price}</p>
              </Link>
            )})}
          </div>
          <Link to="/products/all/all" className="mt-8 flex sm:hidden justify-center bg-white border border-gray-200 text-gray-900 py-4 rounded-2xl font-semibold shadow-sm text-center">
            Discover All New Items
          </Link>
        </div>
      </section>

      {/* Shop By Price */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Budget Friendly</h2>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">Shop By Price</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">Don't break the bank. Find incredibly aesthetic items that fit your budget perfectly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 min-h-[500px] md:min-h-[400px]">
          <Link to="/products/all/all" className="relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Under 499" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
              <span className="text-emerald-300 font-bold tracking-widest text-xs lg:text-sm uppercase mb-2 drop-shadow-md">Steals & Deals</span>
              <h3 className="text-white text-3xl lg:text-4xl font-black drop-shadow-lg leading-none">Under ₹499</h3>
            </div>
          </Link>
          
          <Link to="/products/all/all" className="relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&h=600&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Under 999" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
               <span className="text-amber-300 font-bold tracking-widest text-xs lg:text-sm uppercase mb-2 drop-shadow-md">Daily Staples</span>
               <h3 className="text-white text-3xl lg:text-4xl font-black drop-shadow-lg leading-none">Under ₹999</h3>
            </div>
          </Link>

          <Link to="/products/all/all" className="relative rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500">
            <img src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&h=600&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Premium" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-10">
               <span className="text-pink-300 font-bold tracking-widest text-xs lg:text-sm uppercase mb-2 drop-shadow-md">Treat Yourself</span>
               <h3 className="text-white text-3xl lg:text-4xl font-black drop-shadow-lg leading-none">Premium Luxe</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Best Selling Products (Pinterest Masonry Layout) */}
      <section className="py-24 px-6 sm:px-8 lg:px-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <PinterestGrid products={bestSellers} title="Best Selling Products" />
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home;
