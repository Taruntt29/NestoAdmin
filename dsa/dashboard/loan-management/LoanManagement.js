import { Col, Container, Row } from 'react-bootstrap';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';

const tabKey = ['All', 'Assigned ', ' Matured', 'Not Matured'];

const LoanManagement = () => {
  return (
    <Container fluid="lg">
      <Row className="mb-5">
        <Col>
          <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
            {Array.from({ length: 10 }, (_, index) => (
              <DashboardChildCard
                key={index}
                cardType="assigned"
                status={true}
              />
            ))}
          </DashboardTabs>
        </Col>
      </Row>
    </Container>
  );
};

export default LoanManagement;
