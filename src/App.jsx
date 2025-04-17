import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Images for the slider
  const sliderImages = [
    "2b0e981b-eeb1-409f-03a5-2c504db1fe00",
    "cebd38a7-5788-4d83-1ce2-ab09533cdd00",
    "8bc343eb-ff51-4011-c8dc-c5fba9ba3100",
  ];
  
  // Images for the gallery
  const galleryImages = Array.from({ length: 9 }, (_, i) => `/gallery-image-${i + 1}.jpg`);
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div className="app">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">Summit Lodge Big Bear</div>
          <div className="navbar-links">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Featured Banner */}
      <div className="featured-banner">
          Featured on Staycation TV
      </div>
      
      {/* Image Slider */}
      <div className="slider-container">
        <div className="slider">
          {sliderImages.map((image, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${image}/public)` }}
            />
          ))}
        </div>
        <div className="slider-overlay">
          <div className='overlay-text'>
            <p>A one of a kind luxury vacation</p>
            <p>experience in Big Bear, CA</p>
          </div>
        </div>
      </div>
      
      {/* Social Links Row */}
      <div className="social-row">
        <div className="social-links">
          <a 
            href="https://facebook.com/SummitLodgeBigBear"
            className="social-link"
            target='_blank'
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a 
            href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
            className="social-link"
            target='_blank'
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href="https://youtube.com" 
            className="social-link"
            target='_blank'
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <button className="book-btn">Book it!</button>
        <div className="address">
          Summit Lodge – Big Bear<br />
          42243 Evergreen Dr, Big Bear Lake, CA 92315
        </div>
      </div>
      
      {/* YouTube Video */}
      <div className="video-container">
        <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/your-video-id" 
          title="Summit Lodge Big Bear"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Image Gallery */}
      <div className="gallery-container">
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-social">
              <a 
                href="https://facebook.com/SummitLodgeBigBear" 
                className="footer-social-link"
                target='_blank'
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                className="footer-social-link"
                target='_blank'
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="https://youtube.com" 
                className="footer-social-link"
                target='_blank'
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <button className="footer-btn">Contact Us</button>
            <button className="footer-btn book-btn">Book it!</button>
          </div>
          <div className="footer-section">
            <div className="footer-address">
              Summit Lodge – Big Bear<br />
              42243 Evergreen Dr, Big Bear Lake, CA 92315
            </div>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Summit Lodge Big Bear
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;