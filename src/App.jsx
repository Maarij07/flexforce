import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Classes from './pages/Classes';
import Trainers from './pages/Trainers';
import Contact from './pages/Contact';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ScrollToTop component to reset scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ToastContainer position="top-right" autoClose={3000} />
        <Navbar />
        <ScrollToTop />
        <motion.main 
          className="flex-grow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;