import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Users, Award, ChevronDown } from 'lucide-react';

// Parallax Text using Framer Motion only
const ParallaxText = ({ children, baseVelocity = 5 }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [direction, setDirection] = useState(1);
  
  return (
    <div className="parallax">
      <motion.div
        initial={{ x: 0 }}
        animate={{ 
          x: direction > 0 ? "-100%" : "0%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20 / Math.abs(baseVelocity),
          ease: "linear",
        }}
        className="scroller"
        onAnimationComplete={() => {
          setLoopNum(loopNum + 1);
          setDirection(direction * -1);
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
  }, []);
  
  return (
    <div className="bg-black text-gray-300">
      {/* Loading Animation */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 1.5, times: [0, 0.7, 1] }}
              className="text-4xl font-bold text-primary"
            >
              FlexForce
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Hero Section with animated background */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Animated dots background */}
            <div className="stars-container">
              {Array.from({ length: 100 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="star"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: Math.random() * 0.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.3
                  }}
                  animate={{
                    y: ["-10%", "110%"],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 20,
                    repeat: Infinity,
                    delay: Math.random() * 20
                  }}
                  style={{
                    position: "absolute",
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#1E8449"
                  }}
                />
              ))}
            </div>
            <div className="absolute inset-0 opacity-30" 
                 style={{
                   backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(30, 132, 73, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(30, 132, 73, 0.2) 0%, transparent 50%)'
                 }}></div>
          </div>
        </div>
        
        <div className="container-custom relative z-20">
          <motion.div
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Sculpt Your <span className="text-primary">Legacy</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Transform your body and mind with cutting-edge equipment and expert guidance
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link 
                to="/contact" 
                className="btn bg-primary hover:bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/classes" 
                className="btn bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md text-lg font-semibold transition-all duration-300"
              >
                Explore Classes
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-10 w-10 text-primary" />
        </motion.div>
      </section>

      {/* Animated Text Banner */}
      <div className="bg-primary/10 py-6 overflow-hidden border-t border-b border-primary/20">
        <ParallaxText baseVelocity={-5}>
          <div className="flex space-x-12 text-2xl font-bold text-primary">
            <span>STRENGTH</span>
            <span>DISCIPLINE</span>
            <span>COMMUNITY</span>
            <span>RESULTS</span>
            <span>TRANSFORMATION</span>
          </div>
        </ParallaxText>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose <span className="text-primary">FlexForce</span>?</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-400">
              We provide the perfect environment for your fitness journey with premium equipment and expert guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-12 w-12 text-primary" />,
                title: "Expert Trainers",
                description: "Our certified trainers create personalized workout plans to help you achieve your fitness goals."
              },
              {
                icon: <Clock className="h-12 w-12 text-primary" />,
                title: "Open 24/7",
                description: "Access our gym facilities any time of day or night to fit your busy schedule."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Community Support",
                description: "Join a supportive community that will motivate and inspire you throughout your fitness journey."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-primary transition-all duration-300"
              >
                <motion.div 
                  className="mb-6 text-primary"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;