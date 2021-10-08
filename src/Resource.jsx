/*
*
*	Resource box for resources.jsx page, containing props such as:
*	Format - Title / format of the particular resource - e.g. 'Academic Paper', 'Guide'
*	Description - Description of the resource, such as a longer title
*	Link - A link to the resouce. This must be both a way to view and download the resouce
*
*/


import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";

function Resource(props) {


	const download = () => {
		<Col>
			<Link to={{pathname: props.link}} target="_blank" download={props.download}>Download <BsDownload/></Link>
		</Col>
	}

	return (
	<>
		<Card style={{ width: '18rem' }} className="mx-auto">
		  <Card.Body>
		    <Card.Title className="mb-0">{props.format}</Card.Title>
			<cite>19 April 2021</cite><br/>
		    <Card.Text>
		      {props.description}
		    </Card.Text>
		    <Row className="mx-auto">
			    <Col>
				<Link to={{pathname: props.link}} target="_blank">View <BsBoxArrowUpRight/></Link>
				</Col>

			{props.download ? (
				<Col>
					<Link to={{pathname: props.link}} target="_blank" download={props.download}>Download <BsDownload/></Link>
				</Col>

		) : null}

		  	</Row>
		  </Card.Body>
		</Card>
	</>
		)
}

export default Resource;
