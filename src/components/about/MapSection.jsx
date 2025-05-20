import Section from "./Section";

const MapSection = ({ imageUrl }) => {
    return (
        <Section className="map-section">
            <div className="map-image-container">
                <img 
                    src={imageUrl} 
                    alt="Map of 3 routes to Summit Lodge" 
                    className="map-image"
                />
            </div>
        </Section>
    );
}

export default MapSection;