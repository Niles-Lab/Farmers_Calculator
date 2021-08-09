import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import TextAccordion from "./TextAccordion.jsx"
import MainContent from "./MainContent.jsx"
import Sources from "./Sources.jsx"

function Home(props) {



	return (

		<>
			<Sources />
		<Container className="box maindiv">
			<Row>
			<Col>
				a sdjkflhasjdf
			</Col>
			<Col>
				<MainContent />
			</Col>
			<Col>
				asdfasdfasdgasdfgsadf
			</Col>
			</Row>
{/*			<TextAccordion />*/}

		</Container>



		</>

		)
}

export default Home;
