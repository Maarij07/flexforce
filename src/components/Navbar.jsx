import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

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

  return (
    <nav 
      className={`w-full h-[10vh] fixed top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80' : 'bg-black/60'
      }`}
    >
      <div className="max-w-[95vw] mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo with subtle glow effect */}
        <div className="flex-shrink-0 relative group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-[8vh] w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Nav Links with improved readability */}
        <div className="hidden md:flex items-center space-x-12 px-6 py-2 rounded-full border border-blue-400/30">
          <NavLink label="Home" active={activeLink === 'Home'} onClick={() => setActiveLink('Home')} />
          <NavLink label="Executives" active={activeLink === 'Executives'} onClick={() => setActiveLink('Executives')} />
          <NavLink label="Team" active={activeLink === 'Team'} onClick={() => setActiveLink('Team')} />
          <NavLink label="Events" active={activeLink === 'Events'} onClick={() => setActiveLink('Events')} />
          <NavLink label="Collaborations" active={activeLink === 'Collaborations'} onClick={() => setActiveLink('Collaborations')} />
          <NavLink 
            label="Contact Us" 
            active={activeLink === 'Contact Us'} 
            onClick={() => setActiveLink('Contact Us')} 
            isHighlighted={true}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="group relative w-10 h-10 flex items-center justify-center">
            <div className="w-6 flex flex-col items-center justify-center gap-1.5 group-hover:gap-2 transition-all duration-300">
              <span className="block h-0.5 w-full bg-blue-400 rounded-full group-hover:bg-blue-300 transition-all duration-300"></span>
              <span className="block h-0.5 w-full bg-blue-400 rounded-full group-hover:bg-blue-300 transition-all duration-300"></span>
            </div>
            <span className="absolute w-full h-full rounded-full border border-blue-400/30 group-hover:border-blue-400/50 group-hover:scale-90 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ label, active, onClick, isHighlighted }) => {
  return (
    <div 
      className={`relative group cursor-pointer`}
      onClick={onClick}
    >
      <a
        href="#"
        className={`text-[1.8vh] font-medium tracking-wide transition duration-300 ${
          active ? 'text-blue-300' : 'text-white'
        } ${isHighlighted ? 'text-blue-200' : ''}`}
        aria-label={`Navigate to ${label}`}
        tabIndex="0"
      >
        {label}
        {isHighlighted && (
          <span className="ml-1 inline-block w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
        )}
      </a>
      
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

export default Navbar;