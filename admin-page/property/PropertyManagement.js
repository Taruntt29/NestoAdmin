import React, { useState } from "react";
import Toggle from "react-toggle";
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
import ProfilePage from "../broker-profile/Profile";
// import NotificationDropdown from "../Builderprofile/notification/NotificationDropdown";
// import property from "../../Images/property.png";
// import Brokerage from "../../Images/brokrage.png";
// import home from "../../Images/Home.png";

export default function PropertyManagement() {
  return (
    <>
      <Header />
      <ProfilePage />
    </>
  );
}
