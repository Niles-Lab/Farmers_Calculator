import React from 'react';
import { Nav, Navbar, NavDropdown, Row, Col, Card } from 'react-bootstrap';

const Navigation = () => {

    return (
    <>
      <Navbar collapseOnSelect expand="sm" variant="dark" className="mainnav">
        <Col>
            <Row className="mb-0 pb-0 ml-3 text-wrap">
              <h4 className="text-white font-weight-normal text-justify" style={{"wordSpacing": "-2px", "wordBreak": "break-all"}}>Climate Adaptation Resources for Northern New England Farmers</h4>
              {/*<Navbar.Brand className="text-wrap">Climate Adaptation Resources for Northern New England Farmers</Navbar.Brand>*/}
            </Row>
            <Row className="mt-0">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav>
                <a href="/" className="text-decoration-none"><Nav.Link as={Card.Title} className="font-weight-light" href="/">Home</Nav.Link></a>


                <NavDropdown as={Card.Title} className="font-weight-light" title="About" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/about">Project</NavDropdown.Item>
                  <NavDropdown.Item href="/team">Team</NavDropdown.Item>
                  <NavDropdown.Item href="/research">Research</NavDropdown.Item>
                  <NavDropdown.Item href="/press">Publications</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown as={Card.Title} className="font-weight-light" title="Practices" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/silvopasture">Silvopasture</NavDropdown.Item>
                  <NavDropdown.Item href="/irrigation">Irrigation</NavDropdown.Item>
                  <NavDropdown.Item href="/tarping">Tarping</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown as={Card.Title} className="font-weight-light" title="Tools" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/visualizations">Visualizations</NavDropdown.Item>
                  <NavDropdown.Item href="/tools">Economic Tools</NavDropdown.Item>

                </NavDropdown>

              </Nav>

            </Navbar.Collapse>
            </Row>
        </Col>

{/*          <Nav className="logos d-none d-sm-block">
              <Navbar.Brand>
                <a href="https://uvm.edu/" rel="noreferrer" target="_blank"><Image src={uvm} width="90%"/></a>
              </Navbar.Brand>
              <Navbar.Brand>
                <a href="https://umaine.edu/" rel="noreferrer" target="_blank"><Image src={umaine} width="90%"/></a>
              </Navbar.Brand>
          </Nav>*/}

      </Navbar>    
    </>
        )
}

export default Navigation;
