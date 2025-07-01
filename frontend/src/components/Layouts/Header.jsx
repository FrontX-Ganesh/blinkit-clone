import { useState, useEffect } from "react";
import { BsCart4, BsSearch, BsList, BsX } from "react-icons/bs";
import { FaUser, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cartCount] = useState(3); // Mock cart count

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = () => {
    console.log("Navigate to login");
    // navigate("/login")
  };

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    console.log("Search for:", searchQuery);
    // Add your search logic here
  };

  const handleMobileSearch = () => {
    console.log("Mobile search for:", searchQuery);
    // Add your mobile search logic here
  };

  return (
    <>
      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' 
          : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
      }`}>
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-32 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              
              <div className="flex items-center space-x-2">
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
              </div>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Search for products, brands and more..."
                  className="w-full px-6 py-3 pl-12 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 hover:bg-white/15"
                />
                <BsSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 group-focus-within:text-purple-400 transition-colors duration-300" />
                <button
                  type="button"
                  onClick={handleSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              
              {/* Search Icon - Mobile */}
              <button 
                className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <BsSearch size={20} />
              </button>

              {/* Login Button */}
              <button
                onClick={handleLogin}
                className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-purple-400 transition-all duration-300 group"
              >
                <FaUser className="text-sm group-hover:text-purple-400 transition-colors duration-300" />
                <span className="font-medium">Login</span>
              </button>

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

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-white/20 bg-slate-900/95 backdrop-blur-xl">
            <div className="container mx-auto px-4 py-6 space-y-4">
              
              {/* Mobile Search */}
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleMobileSearch()}
                  placeholder="Search products..."
                  className="w-full px-4 py-3 pl-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all duration-300"
                />
                <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
                <button
                  type="button"
                  onClick={handleMobileSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 rounded-lg text-white text-sm font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Go
                </button>
              </div>

              {/* Mobile Login */}
              <button
                onClick={handleLogin}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <FaUser />
                <span className="font-medium">Login / Register</span>
              </button>

              {/* Mobile Navigation Links */}
              <div className="pt-4 border-t border-white/10">
                <nav className="space-y-2">
                  <button className="w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Categories
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Deals
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    About Us
                  </button>
                  <button className="w-full text-left px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300">
                    Contact
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;