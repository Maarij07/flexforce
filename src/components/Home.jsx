import React, { useState, useEffect } from 'react';

const Home = () => {
  // States for microinteractions
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoverButton, setHoverButton] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  // Simulate loading effect
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample initiatives data
  const initiatives = [
    { id: 1, title: "Voter Registration Drive", description: "Help register students to vote and inform them about voting rights." },
    { id: 2, title: "Community Cleanup", description: "Organize regular cleanup events in local neighborhoods and parks." },
    { id: 3, title: "Civic Education Workshops", description: "Learn about government processes and how to effectively advocate for change." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-16">
      {/* Hero Section */}
      <header className={`py-16 px-6 text-center transition-all duration-700 delay-100 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">Civic Engagement Society</h1>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto mb-8">
            Empowering students to make a difference in their communities through active participation and civic responsibility.
          </p>
          <div 
            className={`inline-block relative ${hoverButton ? 'scale-105' : 'scale-100'} transition-all duration-300`}
            onMouseEnter={() => setHoverButton(true)}
            onMouseLeave={() => setHoverButton(false)}
          >
            <a 
              href="#" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-4 rounded-lg shadow-lg transition-all duration-300"
            >
              Get Involved
            </a>
            {hoverButton && 
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-blue-500 rounded-full animate-pulse"></span>
            }
          </div>
        </div>
      </header>

      {/* Initiatives Section */}
      <section className={`py-16 px-6 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((item) => (
              <div 
                key={item.id}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 ${activeCard === item.id ? 'border-blue-600 -translate-y-2' : 'border-blue-200'}`}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className={`mt-4 h-1 bg-blue-100 rounded-full overflow-hidden transition-all duration-500 ${activeCard === item.id ? 'w-full' : 'w-1/3'}`}>
                  <div className="h-full bg-blue-600 w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className={`bg-blue-900 text-white py-16 px-6 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-lg mb-8">
            The Civic Engagement Society is dedicated to promoting civic responsibility and community service among students. Through various initiatives and programs, we aim to foster a spirit of engagement and leadership.
          </p>
          <form className="max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-lg mb-4 text-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button 
              type="submit" 
              className="w-full bg-white text-blue-900 font-medium px-4 py-3 rounded-lg hover:bg-blue-100 transition-colors duration-300"
            >
              Subscribe to Updates
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-blue-800 text-white py-8 px-6 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Civic Engagement Society</h3>
            <p className="text-blue-100">
              Making a difference through active civic participation since 2020.
            </p>
          </div>
          <div className="text-right">
            <p className="text-blue-100">&copy; 2024 Civic Engagement Society. All rights reserved.</p>
            <div className="flex justify-end space-x-4 mt-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">Twitter</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">Instagram</a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-300">Facebook</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;