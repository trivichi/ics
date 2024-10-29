import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ExecutiveBoard from './pages/ExecutiveBoard';
import Events from './pages/Events';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Globe3D from './components/Globe3D';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Globe3D /> {/* Added globe background here */}
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/executive-board" element={<ExecutiveBoard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
