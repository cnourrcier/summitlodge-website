import PropTypes from 'prop-types';

/**
 * Image slider component for the homepage
 * Displays a rotating carousel of images with text overlay
 */
const ImageSlider = ({ images, imageBaseUrl, currentSlide, overlayText }) => {
    return (
        <div className="slider-container">
            <div className="slider">
                {images.map((image, index) => (
                    <div 
                        key={index} 
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ 
                            backgroundImage: `url(${imageBaseUrl}/${image.imageId}/public)` 
                        }}
                        alt={image.alt}
                        aria-hidden={index != currentSlide}
                    />
                ))}
            </div>
            <div className="slider-overlay">
                <div className='overlay-content'>
                    <div className='overlay-text'>
                        {overlayText.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            alt: PropTypes.string
        })
    ).isRequired,
    currentSlide: PropTypes.number.isRequired,
    overlayText: PropTypes.arrayOf(PropTypes.string)
};

ImageSlider.defaultProps = {
    overlayText: []
};

export default ImageSlider;