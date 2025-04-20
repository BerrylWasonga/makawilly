import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './pages/header';
import Footer from './pages/footer';
import TonnyHub from './pages/home';
import Services from './pages/services';
import Projects from './pages/projects';
import About from './pages/about';
import Contact from './pages/contact';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<TonnyHub />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
