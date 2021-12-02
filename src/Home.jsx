import React from 'react';
import { Col, Row, Navbar, Nav } from 'react-bootstrap';

import MainContent from "./home/MainContent.jsx"


function Home(props) {

//const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Our Mission"];
//const navs = ["Abstract", "Project Goals", "Methods", "Focus Group"];
const navs = ["Project Description", "The Problem", "The Focus"]

	return (

		<>
			<Row>
				<Col>
{/*					<Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-5">
			            <Navbar.Collapse id="responsive-navbar-nav">
			              <Nav id="sectionnav" className="mx-auto">
			              	{navs.map((d, idx) => (
			              		<Nav.Link href={"#" + idx}>
			              		{d}
			              		</Nav.Link>
			              		))}
			              </Nav>
			            </Navbar.Collapse>
			        </Navbar>*/}
				</Col>
				<Col xs={8}>
					<MainContent sections={navs} />
				</Col>
				<Col>

				</Col>
			</Row>
		</>

		)
}

export default Home;
