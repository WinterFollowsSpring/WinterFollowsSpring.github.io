import * as React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/BonnieGlen_Logo_FINAL.svg';

export default function BGNavbar({ pageName }) {
  return (
    <Navbar expand="lg">
      <Container className="d-flex flex-column" fluid>
        <Container className="d-flex justify-content-center position-relative" fluid>
          <Navbar.Brand style={{height: '240px'}} href="/">
            <img
              src={logo}
              width="286"
              height="240"
              alt="BonnieGlen Luxury Candles Logo"
              className="position-absolute top-50 start-50 translate-middle"
            />
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="bonnieglen-navbar-nav" />
        <Navbar.Collapse id="bonnieglen-navbar-nav">
          <Nav className="me-auto nav-underline">
            <Nav.Link href="/" active={pageName === "Home"}>HOME</Nav.Link>
            <Nav.Link href="/about" active={pageName === "About"}>ABOUT</Nav.Link>
            <Nav.Link href="/catalog" active={pageName === "Catalog"}>CATALOG</Nav.Link>
            <Nav.Link href="/contact" active={pageName === "Contact"}>CONTACT</Nav.Link>
            <Nav.Link href="/candle_care" active={pageName === "Candle Care"}>CANDLE CARE</Nav.Link>
            <Nav.Link href="/wax_and_fragrances" active={pageName === "Wax & Fragrances"}>WAX & FRAGRANCES</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}