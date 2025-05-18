import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import staycation from './assets/staycation.png';
import About from './About';
import Contact from './Contact';
import ScrollToTop from './components/ScrollToTop';
import ViewportDimensions from "./utils/ViewportDimensions";
import './App.css';
import Analytics from './utils/Analytics';

// Home 
function Home({ currentSlide, sliderImages, galleryImages }) {

  return (
    <>
      <ScrollToTop />
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
          <div className='overlay-content'>
            <div className='overlay-text'>
              <p>A one of a kind luxury vacation</p>
              <p>experience in Big Bear, CA</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* YouTube Video */}
      {/* <div className="video-container">
        <iframe 
          width="100%" 
          height="500" 
          src="https://www.youtube.com/embed/your-video-id" 
          title="Summit Lodge Big Bear"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div> */}

      {/* Cloudflare Video */}
      <div className="video-container">
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <iframe
            src={`https://${import.meta.env.VITE_CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN}/${import.meta.env.VITE_CLOUDFLARE_STREAM_VIDEO_ID}/iframe`}
            title="Summit Lodge Big Bear on Staycation TV"
            loading="lazy"
            style={{
              border: 'none', 
              position: 'absolute', 
              top: '0', 
              left: '0',
              height: '100%', 
              width: '100%',
            }}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      
      {/* Image Gallery */}
      <div className="gallery-container">
        <div className="gallery">
          {galleryImages.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${image.imageID}/public`} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// App
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Images for the slider
  const sliderImages = [
    "2b0e981b-eeb1-409f-03a5-2c504db1fe00",
    "cebd38a7-5788-4d83-1ce2-ab09533cdd00",
    "8bc343eb-ff51-4011-c8dc-c5fba9ba3100",
  ];
  
  // Images for the gallery
  const galleryImages = [
    { 
      id: 1,
      imageID: '1ef26f15-19ba-4db5-c509-dd5a9ea6b900',
      name: 'Beautiful secluded landscape at Summit Lodge Big Bear small.jpg', 
      alt: 'Beautiful secluded landscape at Summit Lodge Big Bear',
    },
    { 
      id: 2,
      imageID: '6590f63c-e974-4356-1840-7df45a49d200',
      name: 'Filming Staycation Featured Home with Host Robert Valletta small.jpg', 
      alt: 'Filming Staycation Featured Home with Host Robert Valletta',
    },
    { 
      id: 3,
      imageID: 'c86adda8-d1b7-43a3-07de-0863a58c8a00',
      name: 'Jacuzzi is very secluded small.jpg', 
      alt: 'Jacuzzi is very secluded',
    },
    { 
      id: 4,
      imageID: 'b5fac5ff-0c4c-4e94-ac8e-3372dc8a9600',
      name: 'Private and Secluded fenced backyard for dining or casual entertaining small.jpg', 
      alt: 'Private and Secluded fenced backyard for dining or casual entertaining',
    },
    { 
      id: 5,
      imageID: 'af87477a-5ec1-4b5d-f7d3-a0a413897500',
      name: 'Coffee in the morning at your secluded log cabin small.jpg', 
      alt: 'Coffee in the morning at your secluded log cabin',
    },
    { 
      id: 6,
      imageID: '265b416e-ac39-4149-2602-5759fc7e1300',
      name: 'Special dining experience at Summit Lodge Big Bear small.jpg', 
      alt: 'Special dining experience at Summit Lodge Big Bear',
    },
    { 
      id: 7,
      imageID: 'd9a4dda7-4692-4ae0-42be-1e9ad1cf3900',
      name: 'Picturesque Dining in your private log cabin small.jpg', 
      alt: 'Picturesque Dining in your private log cabin',
    },
    { 
      id: 8,
      imageID: '87c8bcb9-5d63-4572-e0ae-dbf2acd0c400',
      name: 'Great Front Porch for bird watching at Summit Lodge Big Bear small.jpg', 
      alt: 'Great Front Porch for bird watching at Summit Lodge Big Bear',
    },
    { 
      id: 9,
      imageID: '8312a756-820d-40c9-e172-eb23eb5e3000',
      name: 'Hosting special lunch in secluded backyard small.jpg', 
      alt: 'Hosting special lunch in secluded backyard',
    },
    { 
      id: 10,
      imageID: '6191e37c-d11b-41d7-50c9-e56b43988e00',
      name: 'Wine and cocktails at Summit Lodge Big Bear small.jpg', 
      alt: 'Wine and cocktails at Summit Lodge Big Bear',
    },
    { 
      id: 11,
      imageID: '373e5595-0b43-4b1b-8f9b-76f11771c500',
      name: 'Game Table for poker night small.jpg', 
      alt: 'Game table for poker night',
    },
    { 
      id: 12,
      imageID: 'ae51931f-1179-4249-2816-4c0fb7c60e00',
      name: 'Work from home at Summit Lodge Big Bear small.jpg', 
      alt: 'Work from home at Summit Lodge Big Bear',
    },
    { 
      id: 13,
      imageID: 'd21b1fc3-2e5c-40f5-8bab-a8c8886c9b00',
      name: '00220 small.jpg', 
      alt: 'Serene view from the patio',
    },
    { 
      id: 14,
      imageID: 'd2e2bf8b-2582-4ed2-3cb9-69016054ed00',
      name: 'IMG_0174 small.jpg', 
      alt: 'Snow covered patio chairs',
    },
    { 
      id: 15,
      imageID: '92057105-fec4-4263-3b37-63ea5eaef300',
      name: 'IMG_6162 small.jpg', 
      alt: 'Winter view from the patio',
    },
  ];
  
  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1075 && dropdownMenuOpen === true) {
        setDropdownMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dropdownMenuOpen]);

  const handleDropdownMenu = () => {
    dropdownMenuOpen === false ? setDropdownMenuOpen(true) : setDropdownMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        const scrollTop = window.scrollY;
        if (scrollTop > 130) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <Analytics />
      <div className="app">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="navbar-content">
            <div className={`navbar-left ${isScrolled && 'hidden'}`}>
              <div className="navbar-logo">
                <Link to="/">
                  <img src="/SummitLodgeLogo.jpg" alt="Summit Lodge Logo" className="logo-image" />
                </Link>
              </div>
              <div className='navbar-text'>
                <Link to="/" className="navbar-brand" onClick={() => window.scrollTo(0, 0)}>Summit Lodge Big Bear</Link>
                <div className="navbar-info">
                  <p>Luxury Vacation Rental - Secluded - Celebrity Home</p>
                  <p>Close to Summit Mountain Resort</p>
                  <p>Sleeps 16, 4 bedrooms, 3 bathrooms, 3287 sq-ft</p>
                </div>
              </div>
            </div>
            <div className="navbar-actions">
              <div className="navbar-social-links">
                <a 
                  href="https://facebook.com/SummitLodgeBigBear"
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a 
                  href="https://youtube.com" 
                  className="navbar-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <a 
                href='https://bearadise.com/property/summit-lodge'
                className="navbar-book-btn"
                target='_blank'
                rel="noreferrer"
              >
                Book it!
              </a>
              <div 
                className='navbar-dropdown-icon'
                onClick={handleDropdownMenu}
              >
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className={`navbar-dropdown-links ${dropdownMenuOpen ? 'visible' : ''}`}>
                  <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                  <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                  <a 
                    href='https://www.bigbear.com/dining-nightlife/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Local Dining & Nightlife
                  </a>
                </div>
              </div>
              <div className='navbar-links'>
                <Link to="/about" onClick={() => window.scrollTo(0, 0)}>About</Link>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                <a 
                  href='https://www.bigbear.com/dining-nightlife/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Local Dining & Nightlife
                </a>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home currentSlide={currentSlide} sliderImages={sliderImages} galleryImages={galleryImages} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {import.meta.env.VITE_ENV === 'development' && <ViewportDimensions />}
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={staycation} alt="Staycation TV" className="footer-staycation" />
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-social">
                <a 
                  href="https://facebook.com/SummitLodgeBigBear" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a 
                  href="https://www.instagram.com/summitlodgebigbear?igsh=ZjIwdmFjNmZ0YTVk" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                {/* <a 
                  href="https://youtube.com" 
                  className="footer-social-link"
                  target='_blank'
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a> */}
              </div>
              <div className="footer-buttons">
                <Link to="/contact" className="footer-btn" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                <a 
                  href='https://bearadise.com/property/summit-lodge'
                  className="footer-btn book-btn"
                  target='_blank'
                  rel="noreferrer"
                >
                  Book it!
                </a>
              </div>
              <div className="footer-address">
                Summit Lodge – Big Bear<br />
                42243 Evergreen Dr, Big Bear Lake, CA 92315
              </div>
            </div>
            <div className="footer-copyright">
              &copy; {new Date().getFullYear()} Summit Lodge Big Bear
              <div className="footer-credit">Website by DevRise Studio</div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;