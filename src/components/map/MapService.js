// MapService.js - Helper functions for map operations

/**
 * Generate a static MapBox map URL
 * @param {string|number} longitude - The longitude coordinate
 * @param {string|number} latitude - The latitude coordinate 
 * @param {string|number} zoom - The zoom level
 * @param {number} width - Image width in pixels
 * @param {number} height - Image height in pixels
 * @returns {string} - Complete static map URL
 */
export const getStaticMapUrl = (longitude, latitude, zoom, width = 300, height = 200) => {
  const accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const pinCoordinates = `${longitude},${latitude}`;
  
  return `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+e5743b(${encodeURIComponent(pinCoordinates)})/${longitude},${latitude},${zoom},0/${width}x${height}?access_token=${accessToken}`;
};

/**
 * Generate a Google Maps directions URL
 * @param {string} address - Destination address
 * @returns {string} - URL for Google Maps directions
 */
export const getDirectionsUrl = (address) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
};

/**
 * Get map provider configurations
 * @returns {object} - Map provider configuration options
 */
export const getMapProviders = () => {
  return {
    MAPBOX: 'mapbox',
    GOOGLE: 'google'
  };
};