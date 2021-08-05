import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import styles from "./styles.module.scss";
import logo from "./big-logo.svg";

/*
    --- NAVBAR CONTENTS ---
    1. Logo/name that links to landing page --> Look into Bootstrap's Navbar.Brand
    2. Links --> Boostrap's Navs
        - Home
        - Offerings
        - Get Involved
        - Our People
        - Contact us
*/

const SiteNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height="60rem" alt="Berkeley Investment Group" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/offerings">Offerings</Nav.Link>
            <Nav.Link to="/involve">Get Involved</Nav.Link>
            <Nav.Link to="/people">Our People</Nav.Link>
            <Nav.Link to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
