import Section from "./Section";
import SectionContent from "./SectionContent";

const ConstructionSection = ({ imageUrl }) => {
    return (

        <Section title="Unique Construction" className="construction-section">
          <SectionContent reverse>
            <div className="section-image construction-image">
              <img src={imageUrl} alt="" />
            </div>
            <div className="section-text">
              <p>
                This rare, full log home is constructed with 9-inch Lodgepole pine logs with a stack height of 8 inches. The logs feature Swedish cope on the bottom and are joined by 12x3/8 inch spikes. Each corner log is hand-notched into adjoining corner logs, creating a beautiful, seamless appearance.
              </p>
              <p>
                The roof design uses a purlin beam with a log truss over the great room. The roof itself consists of 1x6 tongue and groove with 2x12 rafters, adding to the authentic log cabin aesthetic.
              </p>
            </div>
          </SectionContent>
        </Section>
    )
}

export default ConstructionSection;