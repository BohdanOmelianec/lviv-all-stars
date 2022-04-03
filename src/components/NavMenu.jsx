// import { useState } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';

function NavMenu() {
  const { pathname } = useLocation();


  return (
    <Navbar bg="dark-half" variant="dark" expand="md" className='header'>
      <Container>
        <Navbar.Brand as={Link} to="/">Lviv All Stars</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-center"
          id="responsive-navbar-nav"
        >
          <Nav defaultActiveKey={pathname}>
            <Nav.Link eventKey='/home' as={Link} to='/' >ГОЛОВНА</Nav.Link>
            <Nav.Link eventKey='/about' as={Link} to="/about">ПРО НАС</Nav.Link>
            <Nav.Link eventKey='/schedule' as={Link} to='/schedule'>РОЗКЛАД ЗАНЯТЬ</Nav.Link>
            <Nav.Link eventKey='/coaches' as={Link} to="/coaches">ТРЕНЕРИ</Nav.Link>
            <Nav.Link eventKey='/contacts' as={Link} to="/contacts">КОНТАКТИ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
