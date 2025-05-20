
import './GoogleMap.css';

const GoogleMap = ({ address }) => {
  // Encoding the address for use in the Google Maps embed URL
  const encodedAddress = encodeURIComponent(address);
  
  return (
    <div className="google-map-container">
      <iframe 
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5630.902118162788!2d-116.8825998979666!3d34.23877747387413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c4b47b4131e001%3A0xf174d5a78a99a65d!2s${encodedAddress}!5e0!3m2!1sen!2sus!4v1747691876337!5m2!1sen!2sus`}
        width="100%" 
        height="450" 
        style={{ border: '0' }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMap;