import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Executives from './components/Executives';
import ContactUs from './components/ContactUs';
import Teams from './components/Teams';
import Events from './components/Events';
import Collaborations from './components/Collaborations';

function App() {
  return (
    <Router>
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
