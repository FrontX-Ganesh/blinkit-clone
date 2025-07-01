import { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
    console.log("Password:", passwordRef.current.value);
    console.log("Confirm Password:", confirmPasswordRef.current.value);
  };

  return (
    <section className="h-full flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white w-full max-w-sm rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome to Binkeyit
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {/* Name */}
          <div className="grid gap-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              ref={nameRef}
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>

          {/* Email */}
          <div className="grid gap-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              ref={emailRef}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>

          {/* Password */}
          <div className="grid gap-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center rounded-lg border border-gray-300 bg-gray-100 px-3 focus-within:ring-2 focus-within:ring-primary focus-within:bg-white transition">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                className="w-full py-3 bg-transparent outline-none"
                required
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-gray-500 cursor-pointer ml-2"
              >
                {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="grid gap-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              ref={confirmPasswordRef}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#00b04d] hover:bg-[#019945] text-white py-3 rounded-lg font-semibold transition shadow-md"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-[#00b04d] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
