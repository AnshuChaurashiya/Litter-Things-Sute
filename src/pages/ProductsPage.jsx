import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const { category, subCategory } = useParams();
  
  // If no params, show all 
  let filteredProducts = products;
  let pageTitle = "All Collections";
  
  if (category) {
    const decodedCategory = decodeURIComponent(category);
    pageTitle = decodedCategory;
    filteredProducts = products.filter(p => p.category === decodedCategory);
    
    if (subCategory) {
      const decodedSubCategory = decodeURIComponent(subCategory);
      pageTitle = `${decodedCategory} - ${decodedSubCategory}`;
      filteredProducts = filteredProducts.filter(p => p.subCategory === decodedSubCategory);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Editorial Header */}
      <div className="bg-white border-b border-gray-100 pt-10 pb-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-6">
            Home <ChevronRight size={14} className="mx-1 opacity-50" /> {pageTitle}
          </Link>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4 capitalize">
            {pageTitle || "All Products"}
          </h1>
          <p className="text-lg text-gray-500">
            Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> curated items
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">No products found</h2>
            <p className="text-gray-500 mb-8 font-medium">It looks like this collection is currently empty.</p>
            <Link to="/" className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-hover shadow-md transition-all font-semibold hover:-translate-y-0.5">
              Browse All Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
