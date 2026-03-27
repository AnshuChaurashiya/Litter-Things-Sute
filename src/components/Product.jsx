import ProductCard from './ProductCard';
import { products as allProducts } from "../data/products";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductList({ products: inputProducts, title = "Trending Now" }) {
  const displayProducts = inputProducts || allProducts.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <Link 
          to="/products"
          className="hidden sm:flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-primary transition-colors pb-1"
        >
          Explore collection
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* Grid List */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
        {displayProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Mobile View All */}
      <div className="mt-8 flex justify-center sm:hidden">
        <Link 
          to="/products"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-xl font-medium transition-colors border border-gray-100"
        >
          Explore collection
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}
