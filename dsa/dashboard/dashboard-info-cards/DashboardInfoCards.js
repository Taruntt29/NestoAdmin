import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './DashboardInfoCards.css';

const ContentCard = ({ icon, title, active, path }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(true);
  };

  return (
    <Card
      as={Link}
      to={path}
      border="0"
      className={`dashboard__infocard  ${
        active ? 'card-blue shadow-sm' : 'bg-transparent'
      }`}
    >
      <Card.Body>
        <div className="d-flex align-items-center justify-content-center flex-column">
          {!imageLoaded && (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
          <img
            src={`${icon}${active ? `white` : `black`}.svg`}
            alt={title}
            className={`img-fluid ${!active && `card-border px-5 py-3`} ${
              imageLoaded ? '' : 'd-none'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
          {active && <Card.Title className="mt-3">{title}</Card.Title>}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ContentCard;
