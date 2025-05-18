import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ViewportDimensions from "./utils/ViewportDimensions";
import Analytics from './utils/Analytics';
import './App.css';

function App() {

  return (
    <Router>
      <Analytics />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {import.meta.env.VITE_ENV === 'development' && <ViewportDimensions />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;