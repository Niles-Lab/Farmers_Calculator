import React, { useState, useEffect, Fragment } from 'react';
import { Container, Button } from 'react-bootstrap';
import { BsXSquareFill, BsChevronDoubleRight } from "react-icons/bs";
import CropLossTM from "../viz/CropLossTM.jsx"
import OffCanvas from 'react-aria-offcanvas'
import CalcForm from "../calc/CalcForm.jsx"


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
			<div className="stickyleft"
					id="menu-button"
          aria-label="Menu"
          aria-controls="menu"
          aria-expanded={show}
          onClick={toggleShow}>
				<BsChevronDoubleRight />
				<BsChevronDoubleRight />
			</div>


        <OffCanvas
        	height={"100%"}

					// mainContainerSelector={"#menu-button"}
        	style={style}
          isOpen={show}
          onClose={handleClose}
          labelledby="menu-button"
        >
					<CalcForm
        	marginTop={"10vh"}
						handleClose={handleClose}
						{...props} />    	
        </OffCanvas>

		</>

		)
}

export default CalcShow;
