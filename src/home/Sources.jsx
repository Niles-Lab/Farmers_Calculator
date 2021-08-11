import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas } from 'react-bootstrap';
import CropLossTM from "../viz/CropLossTM.jsx"

function Sources({name, ...props}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(d => !d);


	return (

		<>
			<Button variant="primary" onClick={toggleShow}>
				Offcanvas
			</Button>

			<Offcanvas show={show} onHide={handleClose} {...props}>
				<Offcanvas.Header closeButton>
		          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
		        </Offcanvas.Header>
		        <Offcanvas.Body>
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
