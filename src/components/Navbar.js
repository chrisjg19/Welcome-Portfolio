import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navigation = () => {
  const [click] = useState(false);


  return (
    <Navbar >
      <Container>
        <Navbar.Brand href="/">Christopher Gonzalez</Navbar.Brand>
       <Nav className="justify-content-end">
        
          <Nav.Link href="/">About</Nav.Link>
        
        
          <Nav.Link href="/portfolio">Project</Nav.Link>
        
        
          <Nav.Link href="/resume">Resume</Nav.Link>
        
        
          <Nav.Link href="/contact">Contact</Nav.Link>
        
      </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
