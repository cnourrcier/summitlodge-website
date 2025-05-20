import { features } from "../../data/features";
import FeatureCard from "./FeatureCard";
import Section from "./Section";

const FeaturesSection = () => {
    return (
        <Section title="Home Highlights" className="features-section">
            <div className="features-grid">
                {features.map((feature, index) => (
                    <FeatureCard 
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
        
            </div>
        </Section>
    );
}

export default FeaturesSection;