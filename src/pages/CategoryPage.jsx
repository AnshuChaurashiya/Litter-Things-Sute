import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import ProductList from '../components/Product';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

export default function CategoryPage() {
  const navigate = useNavigate();
  const { name } = useParams();
  const categoryName = decodeURIComponent(name);
  const category = categories.find(cat => cat.name === categoryName);
  const [selectedSub, setSelectedSub] = useState('');

  if (!category) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Category not found</h1>
        <Link to="/" className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-hover font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
          Return to Home
        </Link>
      </div>
    );
  }

  const categoryProducts = products.filter(p => p.category === categoryName);
  const filteredProducts = selectedSub ? categoryProducts.filter(p => p.subCategory === selectedSub) : categoryProducts;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Editorial Header */}
      <div className="bg-white border-b border-gray-100  px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto  relative z-10 flex flex-col items-center text-center">
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
            {category.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Discover our curated collection of premium {category.name.toLowerCase()} that bring joy to the everyday.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Sub-Categories Pill Filter */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-4 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          <button
            onClick={() => setSelectedSub('')}
            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
              selectedSub === '' 
                ? 'bg-gray-900 text-white border-gray-900 border' 
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            All Products
          </button>
          {category.items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedSub(item)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm ${
                selectedSub === item 
                  ? 'bg-gray-900 text-white border-gray-900 border' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-8 mt-8 border-b border-gray-200/60 pb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {selectedSub || 'All Products'} <span className="text-gray-400 font-normal ml-2">({filteredProducts.length})</span>
          </h2>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm mt-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500 mb-8 text-center max-w-md">We couldn't find any items matching this filter right now. Try selecting a different category.</p>
            <button 
              onClick={() => setSelectedSub('')}
              className="bg-primary text-white px-8 py-3.5 rounded-full font-medium hover:bg-primary-hover shadow-md hover:-translate-y-0.5 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
