import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import useMyBookings from '../../../Hooks/useMyBookings';
import './header.css';

const Header = () => {
    const {isLoading,user,logOut} = useAuth();
    const {count} = useMyBookings()
    console.log(count)
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
                            <div className="login-related-link">
                                <Nav.Link  as={HashLink} to="/addnewservice">Add New Service</Nav.Link>
                                 <Nav.Link  as={HashLink} to="/manageallbookings">Manage All Bookings</Nav.Link>
                                 <Nav.Link  as={HashLink} to="/mybookings">My Bookings <span className="count-style">{count}</span></Nav.Link>
                                 <Navbar.Text className="disply-name">
                                    Hello,<span className="user-name">{user?.displayName}</span>
                                </Navbar.Text>
                            </div>
                               
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