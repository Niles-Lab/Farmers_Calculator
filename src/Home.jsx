import React, { useRef } from 'react';
import { Container, Col, Row, Navbar, Nav, Button } from 'react-bootstrap';

import TextAccordion from "./home/TextAccordion.jsx"
import MainContent from "./home/MainContent.jsx"
import Sources from "./home/Sources.jsx"

const scrollTo = (d) => console.log(d.current);
function Home(props) {

const idxs = [0,1,2,3];

const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Resources"];

const ref1 = useRef(null);
const ref2 = useRef(null);
const ref3 = useRef(null);
const ref4 = useRef(null);
let refs = [ref1, ref2, ref3, ref4];

const executeScroll = (ref) => scrollTo(ref);

const onClick = () => {
	ref3.scrollIntoView({block: 'end', behavior: 'smooth'});
}

	return (

		<>
			<Sources />
		<Row className="maindiv">
			<Col>
				<Navbar collapseOnSelect expand="sm" variant="light">
		            <Navbar.Collapse id="responsive-navbar-nav">
		              <Nav id="sectionnav">
		              	{idxs.map(d => (
		              		<Button onClick={onClick}>
		              		{navs[d]}
		              		</Button>

		              		))}
		              </Nav>
		            </Navbar.Collapse>
		        </Navbar>
			</Col>
			<Col className="box">
				<MainContent refProp={ref3} refs={refs} />
			</Col>
			<Col>

			</Col>

{/*			<TextAccordion />*/}

			</Row>



		</>

		)
}

export default Home;
