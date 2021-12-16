/**
*
*	Offcanvas element to show the calculator on screen
* Parent: FormController
* Child: Calcform
*  
**/

//import React, { useState } from 'react';
//import { BsChevronDoubleRight } from "react-icons/bs";
import OffCanvas from 'react-aria-offcanvas';
//import { Button, Row } from 'react-bootstrap';
import CalcForm from "../calc/CalcForm.jsx";


function CalcShow({name, ...props}) {

	const style = {
		overlay: {
			background: "none"
		},
		content: {
  		//background: "rgba(255, 255, 4, 1)",
  		background: "rgba(220, 220, 220, 1)",
  		//background: "#FFFFFF",
  		minWidth: "35vw",
		}
	}
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const toggleShow = () => setShow(d => !d);


	return (

		<div>

{/*				
				CUSTOM BUTTON TOGGLE ON LEFT OF SCREEN
				<div className="stickyleft rounded-right"
						id="menu-button"
	          aria-label="Menu"
	          aria-controls="menu"
	          aria-expanded={show}
	          onClick={toggleShow}>
					<BsChevronDoubleRight className="white" />

					<h5 className="sideways">Show Calculator</h5>
				</div>*/}


        <OffCanvas
 					placement={"start"}
          height={"100%"}
          style={style}
          isOpen={props.show}
          onClose={props.handleClose}
          labelledby="menu-button"
        >

					<CalcForm

					{...props} />    	

      	</OffCanvas>

		</div>

		)
}

export default CalcShow;