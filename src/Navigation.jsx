import React from 'react';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import umaine from './images/umaine.png';
import uvm from './images/uvm.svg';

const Navigation = () => {

    return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="mainnav">
          <Navbar.Brand href="/">UVM/Umaine for Farmers</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/research">Research</Nav.Link>
                <Nav.Link href="/formcontroller">Calculator</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <NavDropdown title="Methods" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/silvopasture">Silvopasture</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

          <Nav className="logos d-none d-sm-block">
              <Navbar.Brand>
                <a href="https://uvm.edu/" rel="noreferrer" target="_blank"><Image src={uvm} width="100%"/></a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="https://umaine.edu/" rel="noreferrer" target="_blank"><Image src={umaine} width="100%"/></a>
              </Navbar.Brand>
          </Nav>

      </Navbar>    
    </>
        )
}

export default Navigation;
