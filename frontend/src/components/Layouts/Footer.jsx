import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-300 rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-300 bg-clip-text text-transparent">
                BinKeyit
              </h3>
            </div>
            <p className="text-purple-200 text-lg leading-relaxed mb-6 max-w-md">
              Your trusted partner for quality products and exceptional service. Discover amazing deals and premium brands all in one place.
            </p>
            
            {/* Social media */}
            <div className="flex items-center gap-4">
              <span className="text-purple-300 font-medium">Follow us:</span>
              <div className="flex gap-3">
                <Link  
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <FaFacebook className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                </Link>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <FaInstagram className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                >
                  <FaLinkedin className="w-5 h-5 text-purple-200 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'Categories', 'Deals', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-purple-200 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <IoMailSharp className="w-4 h-4 text-purple-300" />
                </div>
                <span className="text-purple-200">support@binkeyit.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="w-4 h-4 text-purple-300" />
                </div>
                <span className="text-purple-200">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center mt-1">
                  <FaMapMarkerAlt className="w-4 h-4 text-purple-300" />
                </div>
                <span className="text-purple-200">123 Commerce Street<br />New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-purple-300 text-center md:text-left">
              © All Rights Reserved {new Date().getFullYear()}. BinKeyit - Your Store
            </p>
            <div className="flex gap-6 text-sm text-purple-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
