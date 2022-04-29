/*
*
*	Resource box for resources.jsx page, containing props such as:
*	Format - Title / format of the particular resource - e.g. 'Academic Paper', 'Guide'
*	Description - Description of the resource, such as a longer title
*	Link - A link to the resouce. This must be both a way to view and download the resouce
*
*/


import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";

function Resource(props) {



	return (

		<Card style={{ maxWidth: '17rem'}} className="h-auto mx-auto px-1 m-2">
		  <Card.Body>
		    <Card.Title className="mb-0">{props.format}</Card.Title>
			<cite>{props.date}</cite>

		    <Row className="mx-auto">

			{props.view &&


			    <Col className='text-nowrap'>
					<Link to={{pathname: props.link}} target="_blank">View <BsBoxArrowUpRight/></Link>
				</Col>

			}
			{	// Optional inclusion of download button for resource
				props.download ? (
				<Col className='text-nowrap'>
					<Link to={{pathname: props.link}} target="_blank" download={props.download}>Download <BsDownload/></Link>
				</Col>

			) : null}

		  	</Row>


			{props.thumbnail ? (

				<Image
				rounded
				className='w-100'
				src={props.description} />

			) :

			<Card.Text className="text-center">
				{props.description}
		 	 </Card.Text>

			}


		  </Card.Body>
		</Card>

		)
}

export default Resource;
