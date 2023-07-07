import { Link } from 'react-router-dom';

import { Container, Nav, Navbar, Image, Dropdown } from 'react-bootstrap';
import {
  BsQuestionCircle,
  BsBoxArrowRight,
  BsThreeDotsVertical,
} from 'react-icons/bs';
import NotificationDropdown from '../profile/notification/NotificationDropdown';
import './DashboardHeader.css';

const DashboardHeader = () => {
  return (
    <>
      {/* lg size screen desktop menu */}
      <Navbar
        className="shadow-sm py-3 nes__dashboard__navbar dashboard__navbar d-none d-lg-block"
        expand="lg"
      >
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/dsa/home-dashboard">
            <img src="/assets/nesto-logo.png" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center gap-3">
              <Nav.Link
                as={Link}
                to="/dsa/profile"
                className="p-0 me-2 profile-img"
              >
                <Image
                  className="h-100 profile-img"
                  src="/assets/dashboard-profile.png"
                  rounded
                  roundedCircle
                  alt="profile img"
                />
              </Nav.Link>
              <NotificationDropdown notification={3} />
              <Nav.Link as={Link} to="/dsa/faq" className="p-0 mx-2 text-dark">
                <BsQuestionCircle className="icon" size={18} />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/dsa/login"
                className="p-0 ms-2 color-blue"
              >
                <BsBoxArrowRight className="icon" size={18} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* less than lg screen */}

      <Navbar
        className="shadow-sm py-3 nes__dashboard__navbar dashboard__navbar d-block d-lg-none"
        expand="lg"
      >
        <Container fluid="lg">
          <Navbar.Brand as={Link} to="/dsa/home-dashboard">
            <img src="/assets/nesto-logo.png" alt="logo" />
          </Navbar.Brand>
          <Dropdown
            align="end"
            className="notification nes__dashboard__navbar__notifications d-flex"
          >
            <Dropdown.Toggle
              variant="secondary"
              id="dashboard-dropdown"
              className="btn-color-primary p-0 d-flex justify-content-center align-items-center position-relative"
            >
              <BsThreeDotsVertical color="#ffffff" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/dsa/home-dashboard/profile">
                <Image
                  className="h-100 profile-img"
                  src="/assets/dashboard-profile.png"
                  rounded
                  roundedCircle
                  alt="profile img"
                />
              </Dropdown.Item>
              {/* notification dropdown */}

              <NotificationDropdown notification={3} />

              {/* notification dropdown code end here */}

              <Dropdown.Item as={Link}>
                <BsQuestionCircle className="icon" size={18} />
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/dsa/login">
                <BsBoxArrowRight className="icon" size={18} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      {/* less than lg screen code end here */}
    </>
  );
};

export default DashboardHeader;
