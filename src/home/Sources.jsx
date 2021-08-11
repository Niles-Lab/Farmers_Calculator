import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas } from 'react-bootstrap';
import CropLossTM from "../viz/CropLossTM.jsx"

function Sources(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	return (

		<>
			<Button variant="primary" onClick={handleShow}>
				Offcanvas
			</Button>

			<Offcanvas show={show} onHide={handleClose} placement="start">
				<Offcanvas.Header closeButton>
		          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
		        </Offcanvas.Header>
		        <Offcanvas.Body>
		        	<CropLossTM />
		          Some text as placeholder. In real life you can have the elements you
		          have chosen. Like, text, images, lists, etc.
		          <br/>
		          <br/>
		          <br/>
		          <br/>
		          <br/>
		          <br/>
		          <br/>
		        </Offcanvas.Body>
			</Offcanvas>
		</>

		)
}

export default Sources;
