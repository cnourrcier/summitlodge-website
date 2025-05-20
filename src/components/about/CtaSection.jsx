import Section from "./Section";

const CtaSection = () => {
    return (
        <Section className="cta-section">
            <div className="cta-content">
                <h2>Experience This Luxury Mountain Retreat</h2>
                <p>This luxurious log cabin blends rustic elegance with modern amenities, making it the perfect forest escape—private, peaceful, and just minutes from everything Big Bear has to offer.</p>
                <a 
                href="https://bearadise.com/property/summit-lodge"
                className="book-btn"
                target="_blank"
                rel="noreferrer"
                >
                Book Your Stay
                </a>
            </div>
        </Section>
    )
}

export default CtaSection;