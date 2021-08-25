import React, { useState, useEffect, Fragment } from 'react';
import { Container, Button, CloseButton } from 'react-bootstrap';
import CropLossTM from "../viz/CropLossTM.jsx"
import OffCanvas from 'react-aria-offcanvas'
import CalcForm from "../calc/CalcForm.jsx"

function CalcShow({name, ...props}) {

	const style = {
		overlay: {
			background: "none"
		},
		content: {
  		background: "rgba(220, 220, 220, 0.8)"
		}
	}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(d => !d);


	return (

		<>
{/*			<Button bg="secondary" onClick={toggleShow}>
				Show Calculator
			</Button>

			<Offcanvas className="my-5" show={show} onHide={handleClose} {...props}>
				<hr className="my-0" />
		        <Offcanvas.Body>
											<CalcForm
												{...props} />
		        </Offcanvas.Body>
			</Offcanvas>*/}

        <button
          id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={show}
          onClick={toggleShow}
        >
          Click here
        </button>
        <OffCanvas
        	height={"100%"}
        	width={"25%"}
        	style={style}
          isOpen={show}
          onClose={handleClose}
          labelledby="menu-button"
        >
          <button onClick={handleClose}>Close</button>
          <CloseButton />
											<CalcForm
												{...props} />    	
        </OffCanvas>

		</>

		)
}

export default CalcShow;
