/**
*
* Offcanvas element to show the calculator on screen
* Utilizes react-aria-offcanvas extension, NOT react-bootstrap offcanvas
* Parent: FormController
* Child: Calcform
*  
**/

import OffCanvas from 'react-aria-offcanvas';

import CalcForm from "../calc/CalcForm.jsx";


function CalcShow({name, ...props}) {

	const style = {
		overlay: {
			background: "none"
		},
		content: {

  		background: "rgba(220, 220, 220, 1)",

  		minWidth: "35vw",
		}
	}



	return (

		<div>


        <OffCanvas
          position={"left"}
		  height={"100%"}
          style={style}
          isOpen={props.show}
          onClose={props.handleClose}
		  lockBodyAfterOpen={false}
          labelledby="menu-button"
        >

			<CalcForm {...props} />    	

      	</OffCanvas>

		</div>

		)
}

export default CalcShow;