import { useState } from 'react';
import Modal from '../common/Modal';
import MapModalContent from './MapModalContent';
import { getStaticMapUrl, getMapProviders } from './MapService';
import './FooterMap.css';

const FooterMap = ({
  address, 
  longitude, 
  latitude, 
  zoom,
  preferredProvider = getMapProviders().MAPBOX 
}) => {
  const [showModal, setShowModal] = useState(false);
  
  // Generate static map image URL
  const staticMapUrl = getStaticMapUrl(longitude, latitude, zoom);

  return (
    <div className="footer-map">
      <div className="static-map-container">
        <img 
          src={staticMapUrl} 
          alt={`Map to ${address}`}
          className="static-map"
        />
      </div>
      <button 
        className="view-map-btn"
        onClick={() => setShowModal(true)}
      >
        View Map
      </button>

      {/* Map Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title="Summit Lodge Big Bear"
        size="large"
      >
        <MapModalContent 
          provider={preferredProvider}
          address={address}
          longitude={longitude}
          latitude={latitude}
          zoom={zoom}
        />
      </Modal>
    </div>
  );
};

export default FooterMap;