import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const dropdownRef = useRef(null); // For Desktop
  const mobileDropdownRef = useRef(null); // For Mobile
  const mobileMenuRef = useRef(null); // Mobile Menu

  // Close dropdown when route changes
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target) && 
        mobileDropdownRef.current && 
        !mobileDropdownRef.current.contains(event.target) &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#0F0F0F]/40 backdrop-blur-[18px] px-6 md:px-16 h-[100px] flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center text-2xl font-bold">
        <img src="/images/logo.svg" alt="Company Logo" width={235} height={52} />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 font-bold text-base">
        {/* Services Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="flex items-center gap-1 text-white hover:text-gray-300"
          >
            Services
            <ChevronDown className="h-4 w-4" />
          </button>
          {isServicesOpen && (
            <div className="absolute left-0 top-full mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
              <Link to="/services/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Web Development
              </Link>
              <Link to="/services/mobile-app" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Mobile App
              </Link>
              <Link to="/services/branding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Branding
              </Link>
              <Link to="/services/digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Digital Marketing
              </Link>
              <Link to="/services/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                SEO
              </Link>
              <Link to="/services/cro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                CRO
              </Link>
            </div>
          )}
        </div>
        <Link to="/careers" className="text-white hover:text-gray-300">Careers</Link>
        <Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
        <Link to="/about" className="text-white hover:text-gray-300">About us</Link>
         <Link to="/pricing" className="text-white hover:text-gray-300">Pricing</Link>
        <Link to="/contact" className="rounded-full border border-red-500 ml-1.5 px-6 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500 hover:text-white">
          CONTACT
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white md:hidden">
        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="absolute top-[100px] left-0 w-full h-screen bg-[#0F0F0F] backdrop-blur-md flex flex-col gap-4 py-4 px-6 md:hidden">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <button 
            onClick={() => setIsServicesOpen(!isServicesOpen)} 
            className="flex items-center justify-between text-white hover:text-gray-300"
          >
            Services
            <ChevronDown className="h-4 w-4" />
          </button>
          {isServicesOpen && (
            <div ref={mobileDropdownRef} className="pl-4 flex flex-col gap-2">
              <Link 
                to="/services/web-development" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link 
                to="/services/mobile-app" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mobile App
              </Link>
              <Link 
                to="/services/branding" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Branding
              </Link>
              <Link 
                to="/services/digital-marketing" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link 
                to="/services/seo" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SEO
              </Link>
              <Link 
                to="/services/cro" 
                className="text-white/100 hover:text-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CRO
              </Link>
            </div>
          )}
          <Link to="/careers" className="text-white hover:text-gray-300">Careers</Link>
          <Link to="/portfolio" className="text-white hover:text-gray-300">Portfolio</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About us</Link>
          <Link to="/contact" className="rounded-full border flex justify-center border-red-500 px-6 py-2.5 text-sm text-red-500 transition-colors hover:bg-red-500 hover:text-white">
            CONTACT
          </Link>

          <Link to="/pricing" className="text-white hover:text-gray-300">Pricing</Link>

        </div>
      )}
    </nav>
  );
}
