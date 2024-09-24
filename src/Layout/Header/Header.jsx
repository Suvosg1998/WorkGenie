import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown, Button } from 'react-bootstrap';
import "./Header.css"
import { FaStar } from "react-icons/fa";
const Header = () => {
  return (
    <Navbar data-bs-theme="dark" expand="lg" className='navbar sticky-top'>
        <Container >
          <Navbar.Brand className="navlogo" href="/">Work Genie<FaStar id='star'/></Navbar.Brand>
          <Nav >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="jobs">Find a job</NavDropdown.Item>
              <NavDropdown.Item href="post">
                Post a job
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="allprofile">Find freelancers</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className='d-flex '>
            <Button href="/login"className='mx-2'>User</Button>
            <Button href="/admin"className='mx-2'>Admin</Button>
            </div>
        </Container>
      </Navbar>
  )
}

export default Header