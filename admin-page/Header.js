import React, { useState } from "react";
import {
  BsSearch,
  BsMic,
  BsGeoAlt,
  BsFillQuestionCircleFill,
} from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Admin.css";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import Sidebar from "./Sidebar";
// import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";
// import property from "../../Images/property.png";
// import Brokerage from "../../Images/brokrage.png";
// import home from "../../Images/Home.png";

export default function Header() {
  return (
    <>
      <header className="py-2 border">
        <Container>
          <Nav className="d-flex align-items-center">
            <Nav.Item>
              <img
                src="/assets/nesto-logo.png"
                alt="logo"
                className="login__header__img"
              />
            </Nav.Item>
            <div className="d-flex flex-row col-4 justify-content-between ms-auto">
              <div className="flex-grow-1 order-first order-md-2">
                <InputGroup
                  style={{ backgroundColor: "#f8f8f8", borderRadius: "8px" }}
                >
                  <InputGroup.Text className="border-0 bg-transparent">
                    <BsSearch color="#B3B4B8" />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Search"
                    className="border-0 outline-none"
                    style={{ boxShadow: "none" }}
                  />
                </InputGroup>
              </div>
            </div>
            <div className="d-flex col-3 ms-auto align-items-center justify-content-end">
              <Nav.Item
                className="me-3 mx-1 my-2"
                as={Link}
                to="/builder/home-dashboard/profile"
              >
                <img src="/assets/Help.svg" alt="profile" />
              </Nav.Item>
              <Nav.Item
                className="me-3 mx-1 my-2"
                as={Link}
                to="/builder/home-dashboard/profile"
              >
                <img src="/assets/Notification.svg" alt="profile" />
              </Nav.Item>
              <Nav.Item
                className="me-3 mx-1 my-2"
                as={Link}
                to="/builder/home-dashboard/profile"
              >
                <img src="/assets/profile.svg" alt="profile" />
              </Nav.Item>
              <Nav.Item>
                <h3>Katia Pena</h3>
                <p>admin</p>
              </Nav.Item>

              <Nav.Item
                className="me-3 mx-1 my-2"
                as={Link}
                to="/builder/home-dashboard/profile"
              >
               
              </Nav.Item>
            </div>
          </Nav>
        </Container>
      </header>
    </>
  );
}
