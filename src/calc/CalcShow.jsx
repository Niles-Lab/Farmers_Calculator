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
			<Button bg="secondary" onClick={toggleShow}>
				Show Calculator
			</Button>

			<Offcanvas className="my-5" show={show} onHide={handleClose} {...props}>
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
