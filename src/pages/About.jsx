import ConstructionSection from '../components/about/ConstructionSection';
import CtaSection from '../components/about/CtaSection';
import FeaturesSection from '../components/about/FeaturesSection';
import HeroSection from '../components/about/HeroSection';
import HistorySection from '../components/about/HistorySection';
import LocationSection from '../components/about/LocationSection';
import MapSection from '../components/about/MapSection';
import ScrollToTop from '../components/common/ScrollToTop';
import { aboutImages } from '../data/images';
import { getCloudFlareImageUrl } from '../utils/imageUtils';
import './About.css';

function About() {
  return (
    <>
      <ScrollToTop />
      <div className="about-page">
        <HeroSection />
        <HistorySection imageUrl={getCloudFlareImageUrl(aboutImages[0].imageId)} />
        <ConstructionSection imageUrl={getCloudFlareImageUrl(aboutImages[1].imageId)} />
        <FeaturesSection />
        <LocationSection imageUrl={getCloudFlareImageUrl(aboutImages[2].imageId)}/>
        <MapSection imageUrl={getCloudFlareImageUrl(aboutImages[3].imageId)}/>
        <CtaSection />
      </div>
    </>
  );
}

export default About;