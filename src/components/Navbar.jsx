import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Set active link based on current path
  const getActiveLink = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path === '/executives') return 'Executives';
    if (path === '/teams') return 'Team';
    if (path === '/events') return 'Events';
    if (path === '/collaborations') return 'Collaborations';
    if (path === '/contact-us') return 'Contact Us';
    return '';
  };

  const activeLink = getActiveLink();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`w-full h-[10vh] fixed top-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/80' : 'bg-black/60'
        }`}
      >
        <div className="max-w-[95vw] mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo with subtle glow effect */}
          <div className="flex-shrink-0 relative group">
            <Link to="/">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-[25vh] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Link>
          </div>
          
          {/* Nav Links with improved readability */}
          <div className="hidden md:flex items-center space-x-12 px-6 py-2 rounded-full border border-blue-400/30">
            <NavLink to="/" label="Home" active={activeLink === 'Home'} />
            <NavLink to="/executives" label="Executives" active={activeLink === 'Executives'} />
            <NavLink to="/teams" label="Team" active={activeLink === 'Team'} />
            <NavLink to="/events" label="Events" active={activeLink === 'Events'} />
            <NavLink to="/collaborations" label="Collaborations" active={activeLink === 'Collaborations'} />
            <NavLink 
              to="/contact-us"
              label="Contact Us" 
              active={activeLink === 'Contact Us'} 
              isHighlighted={true}
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="group relative w-10 h-10 flex items-center justify-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 flex flex-col items-center justify-center gap-1.5 group-hover:gap-2 transition-all duration-300">
                <span className={`block h-0.5 w-full bg-blue-400 rounded-full group-hover:bg-blue-300 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`block h-0.5 w-full bg-blue-400 rounded-full group-hover:bg-blue-300 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45' : ''
                }`}></span>
              </div>
              <span className="absolute w-full h-full rounded-full border border-blue-400/30 group-hover:border-blue-400/50 group-hover:scale-90 transition-all duration-300"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-black/90 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="h-[10vh] flex items-center justify-end px-4">
          <button 
            onClick={toggleMobileMenu}
            className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            aria-label="Close mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-4 px-6 py-8">
          <MobileNavLink to="/" label="Home" active={activeLink === 'Home'} />
          <MobileNavLink to="/executives" label="Executives" active={activeLink === 'Executives'} />
          <MobileNavLink to="/teams" label="Team" active={activeLink === 'Team'} />
          <MobileNavLink to="/events" label="Events" active={activeLink === 'Events'} />
          <MobileNavLink to="/collaborations" label="Collaborations" active={activeLink === 'Collaborations'} />
          <MobileNavLink 
            to="/contact-us"
            label="Contact Us" 
            active={activeLink === 'Contact Us'} 
            isHighlighted={true}
          />
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </>
  );
};

const NavLink = ({ to, label, active, isHighlighted }) => {
  return (
    <div className="relative group">
      <Link
        to={to}
        className={`text-[1.8vh] font-medium tracking-wide transition duration-300 ${
          active ? 'text-blue-300' : 'text-white'
        } ${isHighlighted ? 'text-blue-200' : ''}`}
        aria-label={`Navigate to ${label}`}
      >
        {label}
        {isHighlighted && (
          <span className="ml-1 inline-block w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
        )}
      </Link>
      
      {/* Animated underline */}
      <span 
        className={`absolute left-0 bottom-[-4px] h-[2px] bg-blue-400 transition-all duration-300 ${
          active ? 'w-full' : 'w-0 group-hover:w-full'
        }`} 
      />
      
      {/* Subtle glow effect */}
      {active && (
        <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-blue-400 blur-sm"></span>
      )}
    </div>
  );
};

const MobileNavLink = ({ to, label, active, isHighlighted }) => {
  return (
    <Link
      to={to}
      className={`block py-2 border-b border-blue-400/20 ${
        active ? 'text-blue-300' : 'text-white'
      } ${isHighlighted ? 'text-blue-200' : ''} text-lg font-medium transition duration-300`}
    >
      {label}
      {isHighlighted && (
        <span className="ml-1 inline-block w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
      )}
    </Link>
  );
};

export default Navbar;