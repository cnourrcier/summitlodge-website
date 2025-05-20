import './AttractionsList.css';

const AttractionsList = () => {
  const attractions = [
    { name: 'Snow Summit', distance: '0.7 miles' },
    { name: 'Grocery Stores (Vons & Stater)', distance: '1.3 miles' },
    { name: 'Golf Courses', distance: '1.6 miles' },
    { name: 'Big Bear Lake', distance: '2.0 miles' },
    { name: 'Mountain Room Escapes', distance: '2.5 miles' },
    { name: 'Big Bear Snow Play', distance: '2.5 miles' },
    { name: 'Oktoberfest', distance: '2.7 miles' },
    { name: 'Helicopter Big Bear Tours', distance: '3.5 miles' },
    { name: 'Big Bear Valley Historical Museum', distance: '4.3 miles' }
  ];

  return (
    <div className="attractions-list">
      <h3>Nearby Attractions</h3>
      <p>Our cabin is strategically located near most of the Big Bear activities and attractions!</p>
      <ul>
        {attractions.map((attraction, index) => (
          <li key={index}>
            <span className="attraction-icon">☀</span>
            <div className="attraction-details">
              <span className="attraction-name">{attraction.name}</span>
              <span className="attraction-distance">{attraction.distance}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttractionsList;