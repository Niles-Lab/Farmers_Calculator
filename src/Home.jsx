import React from 'react';
import { Container, Col, Row, Navbar, Nav, Button } from 'react-bootstrap';

import TextAccordion from "./home/TextAccordion.jsx"
import MainContent from "./home/MainContent.jsx"


function Home(props) {

const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Our Mission"];

	return (

		<>
		<Row className="maindiv">
			<Col>
				<Navbar collapseOnSelect expand="sm" variant="light">
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
			<Col className="box">
				<MainContent sections={navs} />
			</Col>
			<Col>

			</Col>


{/*			<TextAccordion />*/}

			</Row>



		</>

		)
}

export default Home;
