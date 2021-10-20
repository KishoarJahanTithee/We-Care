import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
          <>
  <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="/home#home"><h4 className="logo">WE CARE</h4></Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
      <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
      <Nav.Link as={HashLink} to="/mission">Mission</Nav.Link>
      <Nav.Link as={HashLink} to="/about">About</Nav.Link>
      { user?.email ? 
          <Button onClick={logOut} variant="">Logout</Button>:
          <Nav.Link as={Link} to="/login">Login</Nav.Link>}
      <Navbar.Text>
      Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>  

    );
};

export default Header;