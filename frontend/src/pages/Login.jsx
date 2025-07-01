import { useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    setIsLoading(false);
  };

  return (
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-300/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 bg-blue-300/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-2xl w-full max-w-md rounded-3xl shadow-2xl border border-white/20 p-8 transform hover:scale-[1.02] transition-all duration-500 hover:shadow-purple-500/25">
        {/* Enhanced Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl mb-6 shadow-xl animate-pulse">
            <FaUser className="text-white text-xl" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome Back
          </h1>
          <p className="text-white/70 text-sm">Sign in to continue your journey</p>
        </div>

        <div className="space-y-6">
          {/* Enhanced Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white/90 flex items-center gap-2">
              <FaUser className="text-xs text-purple-400" />
              Email Address
            </label>
            <div className="relative group">
              <input
                ref={emailRef}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="w-full p-4 pl-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10"
                required
              />
              <FaUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${focusedField === 'email' ? 'text-purple-400 scale-110' : 'text-white/40'}`} />
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'email' ? 'opacity-100' : ''}`}></div>
            </div>
          </div>

          {/* Enhanced Password Field */}
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-white/90 flex items-center gap-2">
              <FaLock className="text-xs text-purple-400" />
              Password
            </label>
            <div className="relative group">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField('')}
                className="w-full p-4 pl-12 pr-12 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:bg-white/10 transition-all duration-300 hover:bg-white/10"
                required
              />
              <FaLock className={`absolute left-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${focusedField === 'password' ? 'text-purple-400 scale-110' : 'text-white/40'}`} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-purple-400 transition-all duration-200 hover:scale-110"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'password' ? 'opacity-100' : ''}`}></div>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-purple-300 hover:text-purple-100 font-medium transition-colors duration-200 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Enhanced Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 disabled:hover:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-3 text-base relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </>
            )}
          </button>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center mt-8 pt-6 border-t border-white/10">
          <p className="text-sm text-white/70">
            Don't have an account?{" "}
            <button className="text-purple-300 font-semibold hover:text-purple-100 transition-colors duration-200 hover:underline">
              Create Account
            </button>
          </p>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl"></div>
        <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
      </div>
    </div>
  );
};

export default Login;