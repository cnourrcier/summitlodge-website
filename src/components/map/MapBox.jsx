import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapBox.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapBox = ({ longitude, latitude, zoom }) => {
  const mapContainerRef = useRef(null);
  
  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);
  const [zm, setZm] = useState(zoom);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zm
    });

    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    
    // Add a marker at the location
    new mapboxgl.Marker({ color: '#e5743b' })
      .setLngLat([lng, lat])
      .addTo(map);

    // Update coordinates when map moves
    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZm(map.getZoom().toFixed(2));
    });

    // Clean up
    return () => map.remove();
  }, [lng, lat, zm]);

  return (
    <div ref={mapContainerRef} className="mapbox-container" />
  );
};

export default MapBox;