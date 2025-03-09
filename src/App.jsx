import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Executives from './components/Executives';
import ContactUs from './components/ContactUs';
import Teams from './components/Teams';
import Events from './components/Events';
import Collaborations from './components/Collaborations';
import { useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page every time the route changes
    window.scrollTo(0, 0);
  }, [location]); // Dependency on location means it will run on route change

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/executives" element={<Executives />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/collaborations" element={<Collaborations />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
