import React, { useRef } from 'react';
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap';

import TextAccordion from "./TextAccordion.jsx"
import MainContent from "./MainContent.jsx"
import Sources from "./Sources.jsx"


function Home(props) {

const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Resources"];
let refs = [];

	return (

		<>
			<Sources />
		<Row className="maindiv">
			<Col>
				<Navbar collapseOnSelect expand="sm" variant="light">
		            <Navbar.Collapse id="responsive-navbar-nav">
		              <Nav id="sectionnav">
		              	{navs.map(d => (
		              		<Nav.Link href="./LoremIpsum">
		              		{d}
		              		</Nav.Link>

		              		))}
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
