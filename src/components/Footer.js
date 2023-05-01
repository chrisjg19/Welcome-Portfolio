import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <Navbar fixed='bottom'>
        <Container>
        <Nav.Link href="https://www.linkedin.com/in/christopher-gonzalez-73b927122/" target="_blank" rel="noreferrer" className='nav-link'> <AiFillLinkedin/> </Nav.Link>
        <Nav.Link href="https://github.com/chrisjg19" target="_blank" rel="noreferrer" className='nav-link'>GitHub </Nav.Link>
        <Nav.Link href="https://twitter.com/" target="_blank" rel="noreferrer" className='nav-link'>Twitter</Nav.Link>
        </Container>
      </Navbar>
    </footer>
  )
};

export default Footer;