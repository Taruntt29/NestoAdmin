import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Testimonial() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="border-0 mb-3 testimonial">
      <Card.Header className="shadow-none border-0 bg-white py-2">
        <Card.Title as="h5" className="m-0">
          10/12/2022
        </Card.Title>
      </Card.Header>
      <Card.Body className="py-2">
        {expanded ? (
          <Card.Text>
            My wife and I had a dream of downsizing from our house in Cape
            Elizabeth into a small condo closer to where we work and play in
            Portland. David and his skilled team helped make that dream a
            reality. The sale went smoothly, and we just closed on an ideal new
            place we're excited to call home.
          </Card.Text>
        ) : (
          <Card.Text>
            My wife and I had a dream of downsizing from our house in Cape
            Elizabeth into a small condo closer to where we work and play in
            Portland. David and his skilled team helped make that dream a
            reality. The sale went smoothly, and we just closed on an ideal new
            place we're excited to call home...{' '}
            <Button
              variant="link"
              onClick={toggleExpanded}
              className="p-0 text-text-decoration-none"
            >
              Read more
            </Button>
          </Card.Text>
        )}
      </Card.Body>
    </Card>
  );
}

export default Testimonial;
