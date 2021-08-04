import React from "react";

import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import styles from "./styles.module.scss";

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
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;
