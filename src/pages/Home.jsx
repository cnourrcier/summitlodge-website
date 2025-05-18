import { useEffect, useState } from 'react';
import ScrollToTop from '../components/common/ScrollToTop';
import { sliderImages, galleryImages } from '../data/images';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

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

export default Home;