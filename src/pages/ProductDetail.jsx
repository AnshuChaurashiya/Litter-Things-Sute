import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== product.id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">Product not found</h1>
        <Link to="/" className="bg-primary text-white px-8 py-3.5 rounded-full hover:bg-primary-hover font-medium transition-all shadow-md hover:-translate-y-0.5">
          Return to Home
        </Link>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % (product.images?.length || 1));
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + (product.images?.length || 1)) % (product.images?.length || 1));
  
  const images = product.images || [product.img || "https://images.unsplash.com/photo-1572904589255-66774fca5e32?w=400&h=500&fit=crop"];
  const coverImage = images[currentImage] || images[0];

  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            Home <ChevronRight size={14} className="mx-1 opacity-50" /> 
            {product.category} <ChevronRight size={14} className="mx-1 opacity-50" /> 
            <span className="text-gray-900">{product.name}</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Images Section */}
          <div className="md:sticky md:top-32 space-y-4">
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 aspect-[4/5] group">
              <img 
                src={coverImage} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage} 
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-700 hover:text-primary"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextImage} 
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur hover:bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-700 hover:text-primary"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-300 ${
                      i === currentImage 
                        ? 'ring-2 ring-primary ring-offset-2 opacity-100' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} className="w-full h-full object-cover" alt={`Thumbnail ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer underline-offset-4 hover:underline transition-all">
                (128 Reviews)
              </span>
            </div>

            <div className="text-3xl font-bold text-gray-900 mb-6">
              {product.price}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
              {product.desc}
            </p>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-primary text-white py-4 px-8 rounded-full font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingBag size={22} />
                Add to Cart
              </button>
              
              <div className="flex gap-4">
                <button 
                   onClick={handleBuyNow}
                   className="flex-1 bg-gray-900 text-white py-4 px-6 rounded-full font-semibold hover:bg-black hover:shadow-lg transition-all text-center active:scale-95"
                >
                  Buy it Now
                </button>
                <button className="w-16 flex items-center justify-center border border-gray-200 rounded-full text-gray-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all active:scale-95">
                  <Heart size={22} />
                </button>
              </div>
            </div>

            {/* Specifications */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Product Details</h3>
              <div className="space-y-4">
                {Object.entries(product.specs || {}).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100 last:border-0 group">
                    <span className="text-gray-500 capitalize">{key}</span>
                    <span className="font-semibold text-gray-900 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Delivery Guarantees */}
            <div className="border border-gray-100 bg-white rounded-2xl p-6 mt-8 flex flex-col gap-4">
               <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                  Free Shipping on orders over ₹999
               </div>
               <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                  Secure Payments
               </div>
               <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">✓</div>
                  Easy 7-day returns
               </div>
            </div>

          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-gray-200 pt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                You May Also Like
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
