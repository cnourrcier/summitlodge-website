import { useState, useEffect } from 'react';

const styles = {
  dimensionsBox: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    fontFamily: 'monospace',
    fontSize: '14px',
    zIndex: 9999
  },
  dimensionLine: {
    margin: '2px 0'
  }
};

const ViewportDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={styles.dimensionsBox}>
      <div style={styles.dimensionLine}>Width: {dimensions.width}px</div>
      <div style={styles.dimensionLine}>Height: {dimensions.height}px</div>
    </div>
  );
};

export default ViewportDimensions;