import React, { useState, useEffect } from 'react';
import { Container, Button, Offcanvas } from 'react-bootstrap';
import CropLossTM from "../viz/CropLossTM.jsx"
import CalcForm from "../calc/CalcForm.jsx"

function CalcShow({name, ...props}) {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(d => !d);


	return (

		<>
			<h1 bg="secondary" onClick={toggleShow}>
				Show Calculator
			</h1>

			<Offcanvas show={show} onHide={handleClose} {...props}>
				<hr className="my-0" />
		        <Offcanvas.Body>
											<CalcForm
												{...props} />
		        </Offcanvas.Body>
			</Offcanvas>
		</>

		)
}

export default CalcShow;
