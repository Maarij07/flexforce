import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <div className="h-2 w-24 bg-primary mx-auto my-6"></div>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/" className="btn btn-primary flex items-center justify-center">
            <Home size={18} className="mr-2" />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn bg-white border border-primary text-primary hover:bg-gray-100 flex items-center justify-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;