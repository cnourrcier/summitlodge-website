import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

const imageIDs = [
    '2b0e981b-eeb1-409f-03a5-2c504db1fe00',
    '076410bc-8c7f-49d1-8c02-984999291d00',
    '34cb4192-d9be-4d60-d6a1-21b2ec988400',
    'c524ad3a-be6a-43d5-73c9-a7c976a63800',
]; 

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Summit Lodge</h1>
          <p>A celebrity-built mountain retreat in Big Bear, CA</p>
        </div>
      </div>

      {/* History Section */}
      <section className="about-section history-section">
        <div className="container">
          <h2>Our History</h2>
          <div className="section-content">
            <div className="section-text">
              <p>
                Summit Lodge was custom designed and built for Richard Carpenter, completed in 2002 after nearly 2 years of construction. Richard was a singer and songwriter for "The Carpenters" - the famous duo consisting of Richard and his sister Karen who achieved fame in the 70's with songs such as "Close to You," "We've Only Just Begun," "Top of the World," "Yesterday Once More," and "Rainy Days and Mondays."
              </p>
              <p>
                The Carpenter property was purchased along with its original furnishings in 2013, preserving the unique character and craftsmanship of this celebrity retreat.
              </p>
            </div>
            <div className="section-image construction-image">
              <img src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${imageIDs[0]}/public`} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section className="about-section construction-section">
        <div className="container">
          <h2>Unique Construction</h2>
          <div className="section-content reverse">
            <div className="section-image construction-image">
              <img src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${imageIDs[1]}/public`} alt="" />
            </div>
            <div className="section-text">
              <p>
                This rare, full log home is constructed with 9-inch Lodgepole pine logs with a stack height of 8 inches. The logs feature Swedish cope on the bottom and are joined by 12x3/8 inch spikes. Each corner log is hand-notched into adjoining corner logs, creating a beautiful, seamless appearance.
              </p>
              <p>
                The roof design uses a purlin beam with a log truss over the great room. The roof itself consists of 1x6 tongue and groove with 2x12 rafters, adding to the authentic log cabin aesthetic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-section features-section">
        <div className="container">
          <h2>Home Highlights</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-home"></i>
              </div>
              <h3>Authentic Log Home</h3>
              <p>Fully furnished with original, custom-made pieces crafted specially for the Carpenters</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-fire"></i>
              </div>
              <h3>Great Room</h3>
              <p>Spacious open-concept with vaulted ceilings and a stunning rock gas fireplace</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-dice"></i>
              </div>
              <h3>Game Room</h3>
              <p>Lofted upstairs game room with a handcrafted teak pool table and foosball</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <h3>Kitchen</h3>
              <p>Large, open kitchen with expansive windows framing beautiful forest scenery</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hot-tub"></i>
              </div>
              <h3>Outdoor Space</h3>
              <p>Secluded backyard with a private picnic area, BBQ, and Jacuzzi for ultimate relaxation</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-snowflake"></i>
              </div>
              <h3>Year-Round Comfort</h3>
              <p>Central heating and air conditioning for comfortable stays in any season</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="about-section location-section">
        <div className="container">
          <h2>Location Perks</h2>
          <div className="section-content">
            <div className="section-text">
              <ul className="location-list">
                <li>Centrally located, less than 1 mile to Snow Summit and 2 miles to Bear Mountain Ski Resort and Big Bear Village</li>
                <li>Within a 2-mile radius: lake access, top-rated restaurants, Big Bear Snow Play, hiking & biking trails</li>
                <li>Easy access to fishing, boating, and other lake activities</li>
                <li>Located in a celebrity-favored neighborhood—past residents include Oscar De La Hoya and Tito Ortiz</li>
              </ul>
            </div>
            <div className="section-image location-image">
              <img src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${imageIDs[2]}/public`} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="about-section map-section">
        <div className="container">
          <div className="map-image-container">
            <img 
              src={`${import.meta.env.VITE_CLOUDFLARE_IMAGE_URL}/${imageIDs[3]}/public`} 
              alt="Map of 3 routes to Summit Lodge" 
              className="map-image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section cta-section">
        <div className="container">
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
        </div>
      </section>
    </div>
  );
}

export default About;