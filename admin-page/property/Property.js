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
import "../Admin.css";
import { Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import { GoPlus } from "react-icons/go";
import Sidebar from "../Sidebar";
import Header from "../Header";
// import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";
// import property from "../../Images/property.png";
// import Brokerage from "../../Images/brokrage.png";
// import home from "../../Images/Home.png";

export default function Property() {
  return (
    <>
      <Header />
      <Row>
        <Col xs={2}>
          <Sidebar />
        </Col>
      </Row>
    </>
  );
}
