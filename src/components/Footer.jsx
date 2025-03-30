import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-white">FlexForce</span>
            </div>
            <p className="mb-4 text-gray-400">
              Empowering you to reach your fitness goals with state-of-the-art equipment and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">Classes</Link></li>
              <li><Link to="/trainers" className="text-gray-400 hover:text-primary transition-colors">Trainers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Our Classes</h3>
            <ul className="space-y-2">
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">Strength Training</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">Cardio Fitness</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">Yoga & Pilates</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">CrossFit</Link></li>
              <li><Link to="/classes" className="text-gray-400 hover:text-primary transition-colors">HIIT Workouts</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Fitness Street, Workout City, WC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-400">info@flexforce.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} FlexForce Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;