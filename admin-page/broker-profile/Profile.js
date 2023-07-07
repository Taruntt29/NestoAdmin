import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Button, Image } from "react-bootstrap";
import {
  FiUser,
  FiClock,
  FiClipboard,
  FiBookOpen,
  FiHelpCircle,
  FiPlus,
} from "react-icons/fi";
import { RiArrowRightSLine, RiPencilFill } from "react-icons/ri";
import { BsBoxArrowRight } from "react-icons/bs";

import CardWrapper from "./card-wrapper/CardWrapper";

import PropertyManagement from "../property/PropertyManagement";
import PropertyManagementNew from "../property/PropertyManagementNew";
import "./Profile.css";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

// const tabs = [
//   { title: "Personal Details", icon: <FiUser /> },

//   { title: "Preferences", icon: <FiClipboard /> },
//   { title: "Notification", icon: <FiClipboard /> },
//   { title: "Refer & Earn", icon: <FiClipboard /> },
//   { title: "Terms & Conditions", icon: <FiBookOpen /> },
//   { title: "Support", icon: <FiHelpCircle /> },
//   { title: "Tutorial", icon: <FiHelpCircle /> },
//   { title: "Raise Query", icon: <FiHelpCircle /> },
// ];

const tabs = [
  { title: "Dashboard", icon: "/assets/DashboardImg/dashboard 1.png" },
  {
    title: "Roles & Employees",
    icon: "/assets/DashboardImg/group 1.png",
  },
  { title: "Nesto Modules", icon: "/assets/DashboardImg/cube 1.png" },
  {
    title: "Builder Management",
    icon: "/assets/DashboardImg/Group.png",
  },
  {
    title: "Property Management",
    icon: "/assets/DashboardImg/real-estate.png",
  },
  {
    title: "Broker Management",
    icon: "/assets/DashboardImg/Grouptext.png",
  },
  {
    title: "Subscription Management",
    icon: "/assets/DashboardImg/subscriptions.png",
  },
  {
    title: "Loan Agent",
    icon: "/assets/DashboardImg/013---Signing-Loan-Forms.png",
  },
  {
    title: "Payment Management",
    icon: "/assets/DashboardImg/credit-card 1.png",
  },
  { title: "Manage Q & A", icon: "/assets/DashboardImg/conversation 1.png" },
  { title: "Training", icon: "/assets/DashboardImg/presentation 1.png" },
  { title: "Analytics", icon: "/assets/DashboardImg/data-analytics 1.png" },
  {
    title: "Content Management",
    icon: "/assets/DashboardImg/copy-writing 1.png",
  },
  {
    title: "Queries Management",
    icon: "/assets/DashboardImg/Groupss.png",
  },
];

const profileSidebarNavContent = [
  {
    element: <AdminDashboard />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    // title: "Property Listing",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
  {
    element: <PropertyManagementNew />,
    title: "test",
  },
];

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <section className="admin-dashboard-sidebar">
        <Row className="gy-5 gx-lg-5">
          <Col
            md={5}
            lg={3}
            className="profile__sidebar__wrapper align-self-start"
          >
            <aside className="d-flex flex-column h-100 justify-content-between py-4">
              <div>
                <Nav className="flex-column mt-2">
                  {tabs.map((tab, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link
                        active={activeTab === index}
                        onClick={() => handleTabChange(index)}
                        className="d-flex justify-content-between align-items-center gap-2"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <div className="profile__sidebar__wrapper__icon shadow bg-white d-flex justify-content-center align-items-center">
                            <img                              
                              src={tab.icon}
                              alt="profile icon"
                              className="img-fluid"
                            />
                          </div>

                          {tab.title}
                        </div>
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </aside>
          </Col>
          <Col md={7} lg={9} className="pt-0 ">
            <Tab.Container activeKey={activeTab}>
              <Tab.Content>
                {tabs.map((_, index) => (
                  <Tab.Pane key={index} eventKey={index}>
                    <CardWrapper title={profileSidebarNavContent[index]?.title}>
                      {profileSidebarNavContent[index]?.element}
                    </CardWrapper>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ProfilePage;
