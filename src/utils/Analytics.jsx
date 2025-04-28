import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Only use in production
    if (import.meta.env.VITE_ENV === 'production') {
      const umamiScript = document.createElement('script');
      umamiScript.src = 'https://cloud.umami.is/script.js';
      umamiScript.defer = true;
      umamiScript.setAttribute('data-website-id', import.meta.env.VITE_UMAMI_DATA_WEBSITE_ID);

      // Append the script to the head of the html document
      document.head.appendChild(umamiScript);

      // Clean up the script when the component is unmounted
      return () => {
        document.head.removeChild(umamiScript);
      };
    }
  }, []);

  return null; // Component doesn't render anything
};

export default Analytics;