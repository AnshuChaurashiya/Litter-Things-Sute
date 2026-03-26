import { useState } from "react"
import { X } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen flex">

      {/* LEFT IMAGE */}
      <div className="hidden md:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
          alt="fashion"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#f5f0e8] relative px-6">

        {/* Close Icon */}
        <X className="absolute top-6 right-6 cursor-pointer" />

        <div className="max-w-sm w-full text-center">

          {/* Title */}
          <h2 className="text-sm tracking-widest text-gray-600 mb-2">
            Little Things Cute
          </h2>

          <h1 className="text-3xl font-semibold mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>

          <p className="text-gray-600 mb-6">
            {isLogin
              ? "Login to continue shopping"
              : "Sign up to get started"}
          </p>

          {/* FORM */}
          <form className="space-y-4">

            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border px-4 py-3 rounded-md outline-none"
              />
            )}

            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-3 rounded-md outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border px-4 py-3 rounded-md outline-none"
            />

            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border px-4 py-3 rounded-md outline-none"
              />
            )}

            {/* Button */}
            <button className="w-full bg-black text-white py-3 rounded-md hover:opacity-90 transition">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Toggle */}
          <p className="mt-6 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <span
              className="ml-2 text-black font-semibold cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}