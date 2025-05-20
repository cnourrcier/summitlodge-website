import Map from './Map';
import MapBox from './MapBox';
import GoogleMap from './GoogleMap';
import { getMapProviders } from './MapService';

const MapModalContent = ({ 
  provider = getMapProviders().MAPBOX, 
  address, 
  longitude, 
  latitude, 
  zoom 
}) => {
  // Choose the map implementation based on the provider
  const getMapImplementation = () => {
    const { MAPBOX, GOOGLE } = getMapProviders();
    
    switch (provider) {
      case GOOGLE:
        return GoogleMap;
      case MAPBOX:
      default:
        return MapBox;
    }
  };

  return (
    <Map
      mapImplementation={getMapImplementation()}
      address={address}
      longitude={longitude}
      latitude={latitude}
      zoom={zoom}
    />
  );
};

export default MapModalContent;