import { useState } from "react";
import { BsCart4, BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartCount] = useState(1);

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                {/* Logo placeholder - replace with your actual logo */}
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-sm"></div>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
                    BinKeyit
                  </h1>
                  <p className="text-xs text-white/60">Your Store</p>
                </div>
              </Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Login Button */}
              <Link
                to="/login"
                className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-purple-400 transition-all duration-300 group"
              >
                <FaUser className="text-sm group-hover:text-purple-400 transition-colors duration-300" />
                <span className="font-medium">Login</span>
              </Link>

              {/* Cart Button */}
              <button className="relative group">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="relative">
                    <BsCart4 size={22} className="group-hover:animate-bounce" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:block">My Cart</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="h-20"></div>
    </>
  );
};

export default Header;
