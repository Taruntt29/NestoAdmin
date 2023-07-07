import { Dropdown, Button } from 'react-bootstrap';
import { FiBell } from 'react-icons/fi';
import ShadowCard from '../shadow-card/ShadowCard';
import './NotificationDropdown.css';
import { Link } from 'react-router-dom';
const NotificationDropdown = ({ notification }) => {
  return (
    <Dropdown align="end" drop="down" className="notification">
      <Dropdown.Toggle
        as={Button}
        variant="link"
        className="p-0 d-flex justify-content-center align-items-center position-relative"
      >
        <FiBell size={20} />
        {notification /* <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          99+
          <span className="visually-hidden">unread messages</span>
        </span> */ && (
          <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
            <span className="visually-hidden">New alerts</span>
          </span>
        )}
      </Dropdown.Toggle>

      <Dropdown.Menu
        className="notification__menu border-0 shadow-sm"
        style={{ width: '350px' }}
      >
        <Dropdown.Header className="pb-0">Notifications</Dropdown.Header>

        {notification && (
          <ShadowCard
            itemLength={3}
            title="Loreum ipsum dolor sit amet, consectetur elit"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut."
          />
        )}

        {!notification && 'No new notification'}

        <div className="bg-white d-flex justify-content-center align-items-center my-2 view-all">
          <Link className="text-decoration-none"> View All</Link>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
