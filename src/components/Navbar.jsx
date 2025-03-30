import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Smartphone, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Smartphone className="text-primary" size={28} />
            <span className="text-xl font-bold">FixMyPhone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium hover:text-primary transition-colors ${
                    location.pathname === link.path ? 'text-primary' : 'text-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <a href="tel:+1234567890" className="flex items-center space-x-2 btn btn-primary">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-dark"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute w-full"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium py-2 hover:text-primary transition-colors ${
                  location.pathname === link.path ? 'text-primary' : 'text-dark'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+1234567890" className="flex items-center space-x-2 btn btn-primary justify-center">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;