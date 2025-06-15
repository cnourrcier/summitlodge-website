import { useEffect, useState } from 'react';
import ScrollToTop from '../components/common/ScrollToTop';
import { sliderImages, galleryImages } from '../data/images';
import ImageSlider from '../components/home/ImageSlider';
import VideoPlayer from '../components/home/VideoPlayer';
import Gallery from '../components/home/Gallery';
import FeaturedBanner from '../components/common/FeaturedBanner';

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
      <FeaturedBanner />
      
      <ImageSlider 
        images={sliderImages}
        imageBaseUrl={import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}
        currentSlide={currentSlide}
        overlayText={[
          "A one of a kind luxury vacation",
          "experience in Big Bear, CA",
        ]}
      />

      <VideoPlayer 
        videoId={import.meta.env.VITE_CLOUDFLARE_STREAM_VIDEO_ID}
        customerSubdomain={import.meta.env.VITE_CLOUDFLARE_STREAM_CUSTOMER_SUBDOMAIN}
        title={"Summit Lodge Big Bear on Staycation TV"}
      />
      
      <Gallery 
        images={galleryImages}
        imageBaseUrl={import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}
      />
    </>
  );
}

export default Home;