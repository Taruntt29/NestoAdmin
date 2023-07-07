import { Button, Col, Container, Row } from 'react-bootstrap';
import DashboardParentCard from '../dashboard-card-big/DashboardParentCard';
import DoughnutChartDashboard from '../doughnut-chart/DoughnutChart';
import StackedBarChartDashboard from '../stacked-bar-chart-loan/StackedBarChart';
import { ChartData } from '../chart-data/ChartData';
import { HomeDashboardContentContentData } from './HomeDashboardContentData';

const HomeDashboardContent = () => {
  return (
    <Container fluid="lg">
      <Row className="mb-5">
        <Col md={9} className="dashboard-parent-card-wrapper">
          {HomeDashboardContentContentData.map(({ title, cardType }) => (
            <DashboardParentCard
              title={title}
              cardType={cardType}
              key={title}
            />
          ))}
          <div className="d-flex justify-content-center align-items-center">
            <Button className="btn-color-primary rounded-100 mb-5 px-5 py-3 downloaded-pdf">
              Download All PDF
            </Button>
          </div>
        </Col>
        <Col md={3} className="flex-column overflow-hidden">
          <div className="row g-5">
            {ChartData.map(({ title, data }) => (
              <div className="col" key={title}>
                <DoughnutChartDashboard data={data} title={title} />
              </div>
            ))}
            <div className="col">
              <StackedBarChartDashboard />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeDashboardContent;
