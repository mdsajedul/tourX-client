import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './header.css';

const Header = () => {
    const {isLoading,user,logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" className="nav-custom" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/home"><span className="site-name">Tour<span className="site-name-sub">X</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#package">Packages</Nav.Link>
                        </Nav>
                        <Nav>
                        {user?.email &&
                            <Navbar.Text>
                                 Hello,<span className="user-name">{user?.displayName}</span>
                            </Navbar.Text>
                        }
                            {user?.email ?
                            <button className="btn-logout" onClick={logOut} variant="light">Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;