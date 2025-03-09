import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Executives from './components/Executives';
import ContactUs from './components/ContactUs';
import Teams from './components/Teams';
import Events from './components/Events';
function App() {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
      {/* <Executives/> */}
      {/* <Teams/> */}
      <Events />
      {/* <ContactUs/> */}
    </>
  );
}

export default App;
