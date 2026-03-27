import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const allTestimonials = [
  { name: "Priya Sharma", text: "Absolutely stunning personalized gifts! The quality exceeded my expectations. Will definitely order again. The packaging alone is a 10/10 experience.", img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Happy Customer" },
  { name: "Rahul Patel", text: "Fast delivery and beautiful packaging. The notebook is perfect for journaling my thoughts. It's so cute and well-made.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Verified Buyer" },
  { name: "Anita Desai", text: "Love the accessories! Made my daughter's birthday gift so special. Highly recommend for all occasions. The team was extraordinarily responsive and kind.", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", rating: 4, role: "Parent" },
  { name: "Vikram Singh", text: "The travel bag is premium quality. Perfect companion for my trips. Great value for the money spent and incredibly durable handles.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Traveler" },
  { name: "Meera Reddy", text: "Obsessed with the custom stationery. The elegant designs make my desk setup look incredible. Very professional service and fast delivery timeline.", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Designer" },
  { name: "Karan Johar", text: "Bought the customized hampers for corporate gifting and everyone loved them. The boxes feel exceptionally premium and weighty. Will return.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Corporate Client" },
  { name: "Neha Gupta", text: "The little details matter, and LittleThingsCute proves exactly that. Adorable packaging, prompt replies, and lovely items. Nothing else to say!", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face", rating: 4, role: "Repeat Customer" },
  { name: "Arjun Verma", text: "I bought the minimalist watch and it's superb. Simple, elegant, and looks much more expensive than it is. Highly recommend pairing it with the bracelets.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Verified Buyer" },
  { name: "Sanya Mirza", text: "The soy candles smell absolutely divine. Fills the entire room without being overpowering. The jar design perfectly fits my scandinavian apartment decor.", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face", rating: 5, role: "Interior Enthusiast" }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24">
      
      {/* Editorial Header */}
      <div className="bg-white border-b border-gray-100 pt-10 pb-16 px-6 relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors mb-6">
            Home <ChevronRight size={14} className="mx-1 opacity-50" /> Testimonials
          </Link>
          
          <h2 className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Wall of Love</h2>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-gray-900 tracking-tight mb-6">
            Loved by thousands.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Don't just take our word for it. Read what our incredibly supportive community has to say about their LittleThingsCute experiences.
          </p>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {allTestimonials.map((review, i) => (
            <div key={i} className="break-inside-avoid bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100/80 hover:shadow-2xl hover:border-transparent transition-all duration-500 group flex flex-col">
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, starIdx) => (
                  <Star 
                    key={starIdx}
                    size={22}
                    fill={starIdx < review.rating ? "#F59E0B" : "none"} 
                    className={starIdx < review.rating ? "text-amber-500" : "text-gray-200"}
                  />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif italic text-gray-800 leading-snug mb-10 flex-grow">
                "{review.text}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform duration-500" />
                <div className="flex flex-col">
                  <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{review.name}</h4>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-widest mt-1">{review.role}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
