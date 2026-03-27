import { useState } from "react"
import { X, ArrowRight } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex bg-white font-sans">

      {/* LEFT IMAGE / EDITORIAL */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1500&auto=format&fit=crop"
          alt="editorial background"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute bottom-16 left-16 z-20 max-w-lg">
          <h2 className="text-white text-4xl font-bold tracking-tight mb-4">
            Where little things bring immense joy.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Join thousands of happy customers discovering aesthetic daily essentials, stationery, and personalized gifts.
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center relative px-6 py-12 md:px-16 overflow-y-auto">

        {/* Home / Close */}
        <a href="/" className="absolute top-8 right-8 text-gray-400 hover:text-gray-900 transition-colors p-2 bg-gray-50 rounded-full hover:bg-gray-100">
          <X size={20} />
        </a>

        <div className="w-full max-w-md">

          {/* Title Area */}
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-primary font-bold tracking-widest text-xs uppercase mb-4">
              Little Things Cute
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
              {isLogin ? "Welcome back" : "Create an account"}
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              {isLogin
                ? "Enter your details to access your account."
                : "Join us today and make the mundane beautiful."}
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); window.location.href = '/' }}>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border border-gray-200 px-5 py-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-gray-50 focus:bg-white"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Email</label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="w-full border border-gray-200 px-5 py-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-semibold text-gray-700 uppercase">Password</label>
                {isLogin && (
                  <a href="#" className="text-xs text-primary font-medium hover:underline">Forgot?</a>
                )}
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-200 px-5 py-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-gray-50 focus:bg-white"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Confirm Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-200 px-5 py-3.5 rounded-xl outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all bg-gray-50 focus:bg-white"
                />
              </div>
            )}

            {/* Button */}
            <button type="submit" className="w-full bg-gray-900 text-white py-4 rounded-xl font-semibold hover:bg-black hover:shadow-lg transition-all flex justify-center items-center gap-2 mt-4 group">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          {/* Toggle */}
          <div className="mt-8 text-center text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              className="ml-2 text-primary font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </div>
          
        </div>
      </div>
    </div>
  )
}