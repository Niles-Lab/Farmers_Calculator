import React from 'react';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';
import umaine from './images/umaine.png';
import uvm from './images/uvm.svg';

const Navigation = () => {

    return (
        <>

          <Navbar collapseOnSelect expand="sm">
            <Navbar.Brand href="/">UVM/Umaine for Farmers</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/FormController">Calculator</Nav.Link>
                  <Nav.Link href="/LoremIpsum">Resources</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            <Navbar.Brand>
              <a href="https://uvm.edu/" rel="noreferrer" target="_blank"><Image src={uvm} width="100%" className="align-self"/></a>
            </Navbar.Brand>
            <Navbar.Brand>
              <a href="https://umaine.edu/" rel="noreferrer" target="_blank"><Image src={umaine} width="100%" className="align-self"/></a>
            </Navbar.Brand>
          </Navbar>
        
        </>
        )
}

export default Navigation;
