/*
*
*	Resource box for resources.jsx page, containing props such as:
*	Format - Title / format of the particular resource - e.g. 'Academic Paper', 'Guide'
*	Description - Description of the resource, such as a longer title
*	Link - A link to the resouce. This must be both a way to view and download the resouce
*
*/


import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";

function Resource(props) {



	return (
	<>
		<Card style={{ width: '18rem', height: "100%"}} className="mx-auto">
		  <Card.Body>
		    <Card.Title className="mb-0">{props.format}</Card.Title>
			<cite>{props.date}</cite><br/>
		    <Card.Text className="text-center">
		      {props.description}
		    </Card.Text>
		    <Row className="mx-auto">
			    <Col>
				<Link to={{pathname: props.link}} target="_blank">View <BsBoxArrowUpRight/></Link>
				</Col>


			{	// Optional inclusion of download button for resource
				props.download ? (
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
