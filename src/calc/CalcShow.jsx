import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas } from 'react-bootstrap';
import CropLossTM from "../viz/CropLossTM.jsx"
import CalcForm from "../calc/CalcForm.jsx"

function CalcShow({name, ...props}) {

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
											<CalcForm
												{...props} />
		        </Offcanvas.Body>
			</Offcanvas>
		</>

		)
}

export default CalcShow;
