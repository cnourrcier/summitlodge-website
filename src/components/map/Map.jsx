import PropTypes from 'prop-types';

// This is an abstract component that defines the interface for map implementations
const Map = ({ 
  mapImplementation: MapImplementation,
  address,
  longitude,
  latitude,
  zoom,
  ...props
}) => {
  return (
    <div className="map-wrapper">
      <MapImplementation
        address={address}
        longitude={longitude}
        latitude={latitude}
        zoom={zoom}
        {...props}
      />
      <div className="map-address">
        <p className="map-address-p">{address}</p>
        <a 
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
          target="_blank"
          rel="noreferrer"
          className="directions-btn"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
};

Map.propTypes = {
  mapImplementation: PropTypes.elementType.isRequired,
  address: PropTypes.string.isRequired,
  longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  zoom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default Map;