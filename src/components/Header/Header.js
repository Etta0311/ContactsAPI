import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import './Header.css';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="navbar"
    >
      <Container fluid className="headerContainer">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="navBar" id="responsive-navbar-nav">
          <Nav className="headerNav mx-3">
            <Link to="/" className="link mx-3">
              Facts
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
