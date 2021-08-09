import React from 'react';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import TextAccordion from "./TextAccordion.jsx"
import MainContent from "./MainContent.jsx"
import Sources from "./Sources.jsx"
import Chart from "./viz/Chart.jsx"

function Home(props) {



	return (

		<>
			<Sources />
		<Row className="maindiv">
			<Col>
				<Navbar collapseOnSelect expand="sm" variant="light">
		            <Navbar.Collapse id="responsive-navbar-nav">
		              <Nav id="sectionnav">
		              	<Nav.Link href="/FormController">Local Effects of Climate Change</Nav.Link>
		              	<Nav.Link href="/FormController">Individual Action</Nav.Link>
		                <Nav.Link href="/FormController">What is CBA?</Nav.Link>
		                <Nav.Link href="/LoremIpsum">Resources</Nav.Link>
		              </Nav>
		            </Navbar.Collapse>
		        </Navbar>
			</Col>
			<Col className="box">
				<MainContent />
			</Col>
			<Col>

			</Col>

{/*			<TextAccordion />*/}

			</Row>



		</>

		)
}

export default Home;
