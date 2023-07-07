import { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import DashboardChildCard from './DashboardChildCard';
import './DashboardParentCard.css';

const DashboardParentCard = ({ title, cardType }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <Card className="border-0 shadow-sm mb-5 dashboard-parent-card">
      <Card.Header className="bg-transparent py-3">
        <h5 className="mb-0 fw-semibold">{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row className="g-4">
          <Col xs={12}>
            <DashboardChildCard cardType={cardType} />
          </Col>
          {showMore && (
            <Col xs={12}>
              <DashboardChildCard cardType={cardType} />
            </Col>
          )}
        </Row>
      </Card.Body>
      <Card.Footer className="bg-transparent border-0 d-flex justify-content-center align-items-center py-3">
        {!showMore && (
          <Button
            className="btn-color-outline-secondary rounded-100"
            onClick={handleShowMore}
          >
            Browse More
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default DashboardParentCard;
