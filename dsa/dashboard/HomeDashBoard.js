import { Col, Container, Row } from 'react-bootstrap';
import ContentCard from './dashboard-info-cards/DashboardInfoCards';
import DashboardHeader from './header/DashboardHeader';
import { Outlet, useLocation } from 'react-router-dom';
import SearchFilterBox from './search-filter/SearchFilter';
import PaymentOverdueModal from './payment-overdue-modal/PaymentOverdueModal';
import RequestDenyModal from './request-deny-modal/RequestDenyModal';
import PayNowModal from './pay-now-modal/PayNowModal';
import './Dashboard.css';
import { useState } from 'react';

const dashboardInfoCardsData = [
  {
    icon: `/assets/home-sharp-`,
    title: 'Dashboard',
    path: '/dsa/home-dashboard',
  },
  {
    icon: `/assets/wallet-outline-`,
    title: 'Loan Management',
    path: '/dsa/home-dashboard/loan-management',
  },
  {
    icon: `/assets/card-outline-`,
    title: 'Payment',
    path: '/dsa/home-dashboard/payment',
  },
  {
    icon: `/assets/user-outline-`,
    title: 'Profile',
    path: '/dsa/home-dashboard/profile',
  },
];

const HomeDashBoard = () => {
  const location = useLocation();
  const currentPath =
    location.pathname === '/dsa/home-dashboard' ||
    location.pathname.includes('property-details')
      ? '/dsa/home-dashboard'
      : location.pathname;
  const [payNowShow, setPayNowShow] = useState(false);
  const onHide = () => {
    setPayNowShow(prevPayNowShow => !prevPayNowShow);
  };
  return (
    <>
      <PayNowModal show={payNowShow} onHide={onHide} />
      <PaymentOverdueModal show={false} />
      <RequestDenyModal show={false} />
      <DashboardHeader />
      <Container fluid="lg" className="pt-5 pb-4 dashboard__wrapper">
        <Row className="gx-4 dashboard-cards align-items-center">
          {dashboardInfoCardsData.map((cardItem, index) => (
            <Col xs={12} sm={6} lg={3} className="mb-4" key={index}>
              <ContentCard
                icon={cardItem.icon}
                title={cardItem.title}
                active={currentPath === cardItem.path}
                path={cardItem.path}
              />
            </Col>
          ))}
        </Row>
        <SearchFilterBox />
      </Container>
      <Outlet />
    </>
  );
};

export default HomeDashBoard;
