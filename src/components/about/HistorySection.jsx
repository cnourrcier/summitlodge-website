import Section from "./Section";
import SectionContent from "./SectionContent";

const HistorySection = ({ imageUrl }) => {
    return (
        <Section title="Our History" className="history-section">
          <SectionContent>
            <div className="section-text">
              <p>
                Summit Lodge was custom designed and built for Richard Carpenter, completed in 2002 after nearly 2 years of construction. Richard was a singer and songwriter for "The Carpenters" - the famous duo consisting of Richard and his sister Karen who achieved fame in the 70's with songs such as "Close to You," "We've Only Just Begun," "Top of the World," "Yesterday Once More," and "Rainy Days and Mondays."
              </p>
              <p>
                The Carpenter property was purchased along with its original furnishings in 2013, preserving the unique character and craftsmanship of this celebrity retreat.
              </p>
            </div>
            <div className="section-image construction-image">
              <img src={imageUrl} alt="" />
            </div>
          </SectionContent>
        </Section>
    )
}

export default HistorySection;