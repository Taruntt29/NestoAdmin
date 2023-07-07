import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

// const iconText = ['2110 Sqft', '3 Beds', '1 Baths', '1 Garages', '1 Balcony'];

const IconsCard = ({ length, title, col, iconTitle }) => {
  return (
    <Card className="border-0 shadow-none bg-transparent property__details__iconcard mb-4">
      <Card.Header className="bg-transparent border-0 mt-3 px-0">
        <Card.Title className="fw-bold">{title}</Card.Title>
      </Card.Header>
      <Card.Body className="border rounded">
        <Row className="g-4">
          {Array.from({ length }, (_, index) => (
            <Col
              style={{ flex: `0 0 calc(100% / ${col})` }}
              key={index}
              className="d-flex justify-content-center align-items-center"
            >
              <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
                <img
                  src={`/assets/card-icon-${
                    index + 1 > 5 ? index + 1 - 5 : index + 1
                  }.svg`}
                  alt={`icon ${index}`}
                  className="img-fluid mb-2"
                />
                {iconTitle && (
                  <span className="property__details__iconcard__icontitle">
                    Mini Market
                  </span>
                )}
                <span className="property__details__iconcard__iconsubtitle">
                  3 Beds
                </span>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default IconsCard;
