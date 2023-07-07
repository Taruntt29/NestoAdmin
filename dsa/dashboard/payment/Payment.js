import { Col, Container, Row } from 'react-bootstrap';
import DashboardTabs from '../dashboard-tabs/DashboardTabs';
import DashboardChildCard from '../dashboard-card-big/DashboardChildCard';

const tabKey = ['All', 'Overdue', 'Pending', 'Processing', 'Paid'];

const Payment = () => {
  return (
    <Container fluid="lg">
      <Row className="mb-5">
        <Col>
          <DashboardTabs tabsKey={tabKey} activeState={tabKey[0]}>
            {/* <DashboardChildCard cardType="assigned" status={true} /> */}
            <DashboardChildCard cardType="overdue" payment="Paid" />
            <DashboardChildCard cardType="overdue" payment="Pending" />
            <DashboardChildCard cardType="overdue" payment="Processing" />
            <DashboardChildCard cardType="overdue" payment="Overdue" />
          </DashboardTabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
