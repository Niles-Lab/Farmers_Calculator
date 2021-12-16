/**
 * 
 * CalcForm - demo model to include multiple method calculator options in one module
 * 
 **/

import React from "react";
import { Form, Col, Row, Container, Dropdown } from 'react-bootstrap';
//import CropInput from './CropInput.jsx'
import { BsX } from "react-icons/bs";
import AdvancedOptions from './AdvancedOptions.jsx';

// let MAX_CROPS = 10;

function CalcForm(props) {

// Global variables for option selections
// const opts = { // Calculate Options for "Category": ["Methods..."]
// 		"Livestock": ["Method L-1", "Method L-2"], 
// 		"Climate": ["Method C-1", "Method C-2"], 
// 		"Other": ["Support Local Music", "Irrigation"]
// 	};
let units = ["Acres", "Hectares"];

// function handleCropChange(event) { // Special handler for the CropInput Component
// 	const target = event.target;
// 	const name = target.name;
// 	const idx = target.attributes.idx.value;
// 	let value = target.value;

// 	if(event.target.type === "number") { // Handle UI for negative crop input value
// 		const val = parseFloat(value);
// 		if(isNaN(val) || val <= 0) {
// 			value = 0;
// 		}

// 	}

// 	props.crops[idx][name] = value; // Set dictionary value from master record of crops

// 	props.setCrops(props.crops);
// 	props.onChange();

// }

// // Handler for the "Add" button for particular land use input
// // Adds a null crop to the end of the crop model array, updates the view and scrolls to the bottom
// function addCrop() {
// 	let len;
// 	if((len = props.crops.length) >= MAX_CROPS) { // Max of 10 crops
// 		return;
// 	}

// 	props.crops.push({ type: "Unknown", amount: 0, idx: len });
// 	props.setCrops(props.crops);

// }

// // Handler for "Remove" button for particular land use input
// // Splices the last index from the crop model array, updates the view and scrolls up
// function removeCrop() {
	
// 	let len;
// 	if((len = props.crops.length) <= 1) {
// 		return;
// 	}
// 	props.crops.splice(len-1,1);
// 	props.setCrops(props.crops);

// 	// Scrolling functionality for inputs
// 	// window.scrollTo({
// 	// 	behavior: "smooth",
// 	// 	top: 0
// 	// });
	
// }

	return (
		<Container className="calc">
			<h1>Calculator <BsX onClick={props.handleClose} /></h1>
			<Form>
			
			<Form.Group>

				<hr />
			




				{/* MAX LENGTH = 100 */}
				<Row>
					<Col>
						Length of Project(Yrs)
					</Col>
					<Col>
					<Form.Control
						placeholder="..."
						name="length"
						min="1"
						type="number"
						step="1"
						value={props.length}
						onChange = {(event) => {props.setLength(event.target.value)}} />
					</Col>
				</Row>

			
				{
				// Numerical input
				}

				<Row>
					<Col>
						<Dropdown>
						<Dropdown.Toggle
						  className="acreDrop"
						  align="end"
						  id="dropdown-basic"
						  variant="secondary">
						  {props.unit}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{units.map((item,idx) => (
								<Dropdown.Item
									key={item+idx}
									onClick={e => props.setUnit(e.target.innerHTML)}>
									{item}
								</Dropdown.Item>
								))}
						</Dropdown.Menu>
						</Dropdown>
					</Col>
					<Col>
					<Form.Control
						placeholder="..."
						name="land"
						min="0"
						type="number"
						step="0.1"
						value={props.land}
						onChange = {(event) => {props.setLand(event.target.value)}} />
					</Col>
				</Row>


			</Form.Group>



			</Form>


{/* Add and remove different acres */}
{/*				<Form.Label>I Own...</Form.Label>

						<Row>
							<Col>
							    <Button onClick={() => { props.onChange(); addCrop();}}>
							      	Add...
							    </Button>
						    </Col>
						    <Col>
							    <Button onClick={() => { props.onChange(); removeCrop();}}>
							    	Remove...
							    </Button>
						    </Col>
					    </Row>

					<Container>
						{props.crops.map((cr,idx) => ( // Map Various Crop Inputs
							<CropInput key={cr+idx} unit={props.unit} onChange={(event) => {handleCropChange(event); }} name="crops" id={cr.idx} key={cr.idx} />
						))}
					</Container>*/}


					{/* Custom Calculator input here */}

					<AdvancedOptions {...props} />

			


			

		
		</Container>
		)
}

export default CalcForm;
