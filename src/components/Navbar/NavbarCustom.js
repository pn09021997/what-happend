import React from "react";
import { Navbar, Nav } from "react-bootstrap";

//Css
import "./Navbar.css";

//Assets
import logo from "../../assets/header/logo.png";

export default function NavbarCustom() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="navbar-custom"
      >
        <Navbar.Brand href="#home">
          <img
            alt="logo"
            src={logo}
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link--cf" href="#home">
              {" "}
              INTRODUCE{" "}
            </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#features">
              {" "}
              SOLUTION{" "}
            </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#pricing">
              {" "}
              RATE PLAN{" "}
            </Nav.Link>
            <div className="rectangle--cf"> | </div>
            <Nav.Link className="nav-link--cf" href="#home">
              {" "}
              LOGIN{" "}
            </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#features">
              {" "}
              APPLY FOR FREE US{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
