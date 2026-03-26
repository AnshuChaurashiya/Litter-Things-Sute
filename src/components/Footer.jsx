import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-slate-900 to-black text-white py-12 px-4 sm:px-6 lg:px-12 xl:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Contact Info
            </h3>
            <div className="space-y-4 text-sm sm:text-base">
              <p className="font-semibold">Address:</p>
              <p>Vafadar Cold Drink House, First floor, 10, 8, Mulchand Mansion, Dhirubhai Parekh Marg, Dawa Bazar, Kalbadevi, Mumbai, Maharashtra, 400002</p>
              <p className="font-semibold">Phone:</p>
              <p>+91 98923 60639 <span className="text-teal-400">(10 AM to 6:30 PM) Mon to Sat</span></p>
              <p className="font-semibold">Email:</p>
              <p className="hover:text-teal-400 transition-colors cursor-pointer">hello@littlethingscute.com</p>
            </div>
          </div>

          {/* Follow Us / Quick Links */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-4 mb-6">
              <a href="#" className="w-10 h-10 bg-teal-500/20 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-pink-500/20 hover:bg-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-1.057-3.505-.064 3.205-.07 4.849 0-3.205.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.645-.069 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.196-6.78 1.703-6.98 6.04-.058 1.299-.027 1.687.066 4.948 0 3.259-.014 3.668-.066 4.948-.2 4.358-1.713 6.78-6.98 6.04-1.281-.058-1.689-.027-4.948-.066-3.259 0-3.668-.014-4.948.066-4.354.2-6.82 1.713 6.98 6.04 1.281.058 1.689.027 4.948.066 3.259 0 3.668.014 4.948-.066 4.354-.2 6.82-1.713-6.98 6.04-1.281-.058-1.689-.027-4.948-.066-3.259 0-3.668-.014-4.948.066-4.354.2-6.82 1.713 6.98 6.04 1.281.102 1.689.027 4.948.066 3.259 0 3.668.014 4.948-.066 4.354-.2 6.82-1.713-6.98 6.04-1.281-.058-Follow Us:"/>
                </svg>
              </a>
            </div>
            <div className="space-y-2">
              <a href="#" className="block hover:text-teal-400 transition-colors text-sm">About Us</a>
              <a href="#" className="block hover:text-teal-400 transition-colors text-sm">Contact Us</a>
              <a href="#" className="block hover:text-teal-400 transition-colors text-sm">Payment Method</a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Payment Methods
            </h3>
            <img 
              src="https://littlethingscute.com/wp-content/uploads/2024/12/WhatsApp-Image-2023-10-30-at-3.29.21-PM-e1698660444484-1536x240-1-1024x160.webp" 
              alt="Payment Methods"
              className="w-full max-w-sm h-auto rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            />
            <p className="text-xs text-gray-400 mt-3 text-center">We accept the following modes of payments</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">Stay updated with exclusive offers!</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © Copyright - Little Things Cute<br />
            Site Designed and Developed By <a href="#" className="hover:text-teal-400 font-semibold">Creo Elements LLP</a>
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
