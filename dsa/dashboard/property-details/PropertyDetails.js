import { Col, Container, Row } from 'react-bootstrap';
import './PropertyDetails.css';
import PropertyDetailsHeader from './PropertyDetailsHeader';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import PropertyDetailsForm from './PropertyDetailsForm';
import PropertyDetailsText from './PropertyDetailsText';
import { useLocation } from 'react-router-dom';

const PropertyDetails = () => {
  const location = useLocation();

  return (
    <Container fluid="lg" className="property__details">
      <Row>
        <Col xs={12}>
          {location.pathname === '/dsa/home-dashboard/property-details' && (
            <>
              <PropertyDetailsHeader />
              <div className="mt-5"></div>
              <DashboardChildCard cardType="propertyDetailsProfile" />
              <div className="mb-5"></div>
              <PropertyDetailsText />
            </>
          )}
          {location.pathname ===
            '/dsa/home-dashboard/property-details-assigned' && (
            <>
              <PropertyDetailsHeader />
              <div className="mt-5"></div>
              <DashboardChildCard cardType="propertyDetailsProfile" />
              <div className="mb-5"></div>
              <PropertyDetailsForm />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PropertyDetails;
