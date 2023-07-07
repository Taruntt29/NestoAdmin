import { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import ProfilePage from "./broker-profile/Profile";
import "./Sidebar.css";
export default function Sidebar() {
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
      icon: "/assets/DashboardImg/subscription 1.png",
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

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    // <div>
    //   <Nav className="flex-column mt-4 ">
    //     {tabs.map((tab, index) => (
    //       <Nav.Item key={index}>
    //         <Nav.Link
    //           active={activeTab === index}
    //           onClick={() => handleTabChange(index)}
    //           className={`d-flex align-items-center admin-sidebar admin-sidebar__link  gap-2 ${
    //             index === 0 ? "sidebar-active" : ""
    //           }`}
    //         >
    //           <div className="d-flex align-items-center gap-2">
    //             <div className="profile__sidebar__wrapper__icon shadow bg-white d-flex">
    //               <img
    //                 // src={`/assets/profile-page/profile-icon-${index + 1}.svg`}
    //                 src={tab.icon}
    //                 // tabs
    //                 alt="profile icon"
    //                 className="img-fluid m-auto"
    //               />
    //             </div>
    //             <span style={{ color: "#69748C" }}>{tab.title}</span>
    //           </div>

    //           {/* <RiArrowRightSLine size={22} /> */}
    //         </Nav.Link>
    //       </Nav.Item>
    //     ))}
    //   </Nav>
    // </div>

    <ProfilePage />
    
  );
}
