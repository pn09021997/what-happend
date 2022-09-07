import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

//Css
import "./Navbar.css";

export default function NavbarCustom() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-custom">
        <Container fluid>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className="nav-link--cf" href="#home"> INTRODUCE </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#features"> SOLUTION </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#pricing"> RATE PLAN </Nav.Link>
            <div style={{ color: "#ccc8c6" }}> | </div>
            <Nav.Link className="nav-link--cf" href="#home"> LOGIN </Nav.Link>
            <Nav.Link className="nav-link--cf" href="#features"> APPLY FOR FREE US </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
