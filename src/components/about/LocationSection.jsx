import Section from "./Section";
import SectionContent from "./SectionContent";

const LocationSection = ({ imageUrl }) => {
    return (
        <Section title="Location Perks" className="location-section">
            <SectionContent>
                <div className="section-text">
                    <ul className="location-list">
                        <li>Centrally located, less than 1 mile to Snow Summit and 2 miles to Bear Mountain Ski Resort and Big Bear Village</li>
                        <li>Within a 2-mile radius: lake access, top-rated restaurants, Big Bear Snow Play, hiking & biking trails</li>
                        <li>Easy access to fishing, boating, and other lake activities</li>
                        <li>Located in a celebrity-favored neighborhood—past residents include Oscar De La Hoya and Tito Ortiz</li>
                    </ul>
                </div>
                <div className="section-image">
                    <img src={imageUrl} alt="" />
                </div>
            </SectionContent>
        </Section>
    )
}

export default LocationSection;