import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './header.css';

const Header = () => {
    return (
        <>
            <Navbar sticky="top" className="nav-custom" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/home"><span className="site-name">Tour<span className="site-name-sub">X</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#home">Packages</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;