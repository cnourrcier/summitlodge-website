import PropTypes from "prop-types";

/**
 * Gallery component to display a grid of images
 */
const Gallery = ({ images, imageBaseUrl}) => {
    return (
        <div className="gallery-container">
            <div className="gallery">
                {images.map((image) => (
                    <div key={image.id} className="gallery-item">
                        <img 
                            src={`${imageBaseUrl}/${image.imageId}/public`} 
                            alt={image.alt} 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            imageId: PropTypes.string.isRequired,
            name: PropTypes.string
        })
    ).isRequired
};

export default Gallery;