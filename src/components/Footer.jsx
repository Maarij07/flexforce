import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Smartphone size={24} className="text-primary" />
              <span className="text-xl font-bold">FixMyPhone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional phone repair services with quick turnaround times and quality parts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Screen Replacement</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Battery Replacement</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Water Damage Repair</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Software Issues</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Repair Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@fixmyphone.com" className="text-gray-400 hover:text-primary transition-colors">
                  info@fixmyphone.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} FixMyPhone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;