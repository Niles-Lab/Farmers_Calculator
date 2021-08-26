import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoremIpsum(props) {


	return (
		<>


		<Container className="box my-5">

		<Card style={{ width: '18rem' }}>
		  <Card.Body>
		    <Card.Title className="mb-0">Academic Paper</Card.Title>
			<cite>19 April 2021</cite><br/>
		    <Card.Text>
		      Climate change in the context of whole-farming
				systems: opportunities for improved outreach
		    </Card.Text>
		    <Row>
			    <Col>
					<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank">View</Link>
				</Col>
				<Col>
					<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank" download>Download</Link>
			  	</Col>
		  	</Row>
		  </Card.Body>
		</Card>

		<br/>

		<Card style={{ width: '18rem' }}>
		  <Card.Body>
		    <Card.Title className="mb-0">Academic Paper</Card.Title>
			<cite>19 April 2021</cite><br/>
		    <Card.Text>
		      Climate change in the context of whole-farming
				systems: opportunities for improved outreach
		    </Card.Text>
		    <Row>
			    <Col>
					<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank">View</Link>
				</Col>
				<Col>
					<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank" download>Download</Link>
			  	</Col>
		  	</Row>
		  </Card.Body>
		</Card>

		</Container>


		</>
		)
}

export default LoremIpsum;
