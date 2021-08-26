import React from 'react';
import { Container, Col, Row, Navbar, Nav, Button } from 'react-bootstrap';

import TextAccordion from "./home/TextAccordion.jsx"
import MainContent from "./home/MainContent.jsx"


function Home(props) {

const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Our Mission"];

	return (

		<>
			<Row>
				<Col>
					<Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-5">
			            <Navbar.Collapse id="responsive-navbar-nav">
			              <Nav id="sectionnav">
			              	{navs.map((d, idx) => (
			              		<Nav.Link href={"#" + idx}>
			              		{d}
			              		</Nav.Link>
			              		))}
			              </Nav>
			            </Navbar.Collapse>
			        </Navbar>
				</Col>
				<Col>
					<MainContent sections={navs} />
				</Col>
				<Col>

				</Col>
			</Row>
		</>

		)
}

export default Home;
