import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';

function Sources(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	return (

		<>

		<Container className="box my-5">
			<Button variant="primary" onClock={handleShow}>
				Offcanvas
			</Button>
{/*
			<Offcanvas show={show} onHide={handleClose}>
				<Offcanvas.Header closeButton>
		          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
		        </Offcanvas.Header>
		        <Offcanvas.Body>
		          Some text as placeholder. In real life you can have the elements you
		          have chosen. Like, text, images, lists, etc.
		        </Offcanvas.Body>
			</Offcanvas>*/}
		</Container>
		</>

		)
}

export default Sources;
