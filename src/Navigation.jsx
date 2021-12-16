import React from 'react';
import { Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';

const Navigation = () => {

    return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="mainnav">
        <Col>
            <Row className="mb-0 pb-0 ml-3 text-wrap">
              <Navbar.Brand className="text-wrap">Climate Adaptation Resources for Northern New England Farmers</Navbar.Brand>
            </Row>
            <Row className="mt-0">
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>


                <NavDropdown title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">About</NavDropdown.Item>
                  <NavDropdown.Item href="/press">Press</NavDropdown.Item>
                  <NavDropdown.Item href="/research">Research</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/extras">Extras</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Practices" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/silvopasture">Silvopasture</NavDropdown.Item>
                  <NavDropdown.Item href="/irrigation">Irrigation</NavDropdown.Item>
                  <NavDropdown.Item href="/tarping">Tarping</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Tools" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/visualizations">Visualizations</NavDropdown.Item>
                  <NavDropdown.Item href="/tools">Economic Tools</NavDropdown.Item>

                </NavDropdown>

              </Nav>
            </Navbar.Collapse>

            </Row>
        </Col>
        <Col xs={4}>
{/*          <Nav className="logos d-none d-sm-block">
              <Navbar.Brand>
                <a href="https://uvm.edu/" rel="noreferrer" target="_blank"><Image src={uvm} width="90%"/></a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="https://umaine.edu/" rel="noreferrer" target="_blank"><Image src={umaine} width="90%"/></a>
              </Navbar.Brand>
          </Nav>*/}
        </Col>
      </Navbar>    
    </>
        )
}

export default Navigation;
