import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import Resource from "./Resource.jsx"

function Resources(props) {


	return (
		<>



		<Container className="my-5">
		<Row>
			<h1 className="mb-0">Climate Resources</h1>
		</Row>
		<hr/>
		<Row>
			<Resource format={"Academic Paper"}
			link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
			description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />

			<br/>

			<Resource format={"Academic Paper"}
			link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
			description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />
		</Row>
		</Container>




			<Container>
			<Row>
				<h1>Research</h1>
			</Row>
			<hr/>
			<Row>
			<Resource format={"Academic Paper"}
			link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
			description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />

				<br/>

				<Card style={{ width: '18rem' }} className="mx-auto">
				  <Card.Body>
				    <Card.Title className="mb-0">Academic Paper</Card.Title>
					<cite>19 April 2021</cite><br/>
				    <Card.Text>
				      Climate change in the context of whole-farming
						systems: opportunities for improved outreach
				    </Card.Text>
				    <Row>
					    <Col>
							<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank">View<br/><BsBoxArrowUpRight/></Link>
						</Col>
						<Col>
							<Link to="/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf" target="_blank" download>Download<BsDownload/></Link>
					  	</Col>
				  	</Row>
				  </Card.Body>
				</Card>
				
			</Row>
			</Container>


		</>
		)
}

export default Resources;
