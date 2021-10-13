/**
*
*	Offcanvas element to show the calculator on screen
* Parent: FormController
* Child: Calcform
*  
**/

import React, { useState, Fragment } from 'react';
import { BsChevronDoubleRight } from "react-icons/bs";
import OffCanvas from 'react-aria-offcanvas'
import CalcForm from "../calc/CalcForm.jsx"
import CalcFormAll from "../calc/CalcFormAll.jsx"


function CalcShow({name, ...props}) {

	const style = {
		overlay: {
			background: "none"
		},
		content: {
  		background: "rgba(220, 220, 220, 0.8)",
  		minWidth: "25%"
		}
	}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow(d => !d);


	return (

		<>

				<div className="stickyleft rounded-right"
						id="menu-button"
	          aria-label="Menu"
	          aria-controls="menu"
	          aria-expanded={show}
	          onClick={toggleShow}>
					<BsChevronDoubleRight className="white" />

					<h5 className="sideways">Show Calculator</h5>
				</div>

        <OffCanvas
          height={"100%"}
		  // mainContainerSelector={"#menu-button"}
          style={style}
          isOpen={show}
          onClose={handleClose}
          labelledby="menu-button"
        >

					<CalcFormAll
					handleClose={handleClose}
					{...props} />    	
      	</OffCanvas>

		</>

		)
}

export default CalcShow;
