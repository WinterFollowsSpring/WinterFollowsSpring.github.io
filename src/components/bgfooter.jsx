import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const BGFooter = ({ pageName }) => (
    <Container>
        <hr />
        <Row>
            <Col xs='12' md='4' className='mb-3'>
                <p className="fs-5">PAGES</p>
                <Nav className="flex-column">
                    <Nav.Link href="/" active={pageName === "Home"}>HOME</Nav.Link>
                    <Nav.Link href="/about" active={pageName === "About"}>ABOUT</Nav.Link>
                    <Nav.Link href="/catalog" active={pageName === "Catalog"}>CATALOG</Nav.Link>
                    <Nav.Link href="/contact" active={pageName === "Contact"}>CONTACT</Nav.Link>
                    <Nav.Link href="/candle_care" active={pageName === "Candle Care"}>CANDLE CARE</Nav.Link>
                    <Nav.Link href="/wax_and_fragrances" active={pageName === "Wax & Fragrances"}>WAX & FRAGRANCES</Nav.Link>
                </Nav>
            </Col>
            <Col xs='12' md='4' className='mb-3'>
                <p className="fs-5">HELP</p>
                <Nav className="flex-column">
                    <Nav.Link href="/shipping_and_returns" active={pageName === "Shipping & Returns"}>SHIPPING & RETURNS</Nav.Link>
                    <Nav.Link href="/store_policy" active={pageName === "Store Policy"}>STORE POLICY</Nav.Link>
                </Nav>
            </Col>
            <Col xs='12' md='4' className='mb-3'>
                <p className="fs-5">CONTACT</p>
                <div className="d-flex flex-column ps-3">
                    <a href="mailto:bonnieglenlcg@gmail.com" className="text-decoration-none">bonnieglenlcg@gmail.com</a>
                    <div className="d-flex flex-row me-3">
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://facebook.com/bonnieglen2021" className="text-decoration-none link-dark me-2"><i
                                className="bi bi-facebook"></i></a>
                        <a target="_blank" rel="noopener noreferrer"
                            href="https://instagram.com/bonnieglenluxurycandles"
                            className="link-dark text-decoration-none"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
);

export default BGFooter;