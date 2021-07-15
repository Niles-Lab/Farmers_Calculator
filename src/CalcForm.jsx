import React, { useState } from 'react';
import { Form, Dropdown, ButtonGroup, Col, Row, Container, Button } from 'react-bootstrap';
import CropInput from './CropInput.jsx'

let MAX_CROPS = 10;




function CalcForm(props) {


// Global variables for option selections
const opts = { // Calculate Options for "Category": ["Methods..."]
		"Livestock": ["Method L-1", "Method L-2"], 
		"Climate": ["Method C-1", "Method C-2"], 
		"Other": ["Support Local Music", "Irrigation"]
	};


function handleCropChange(event) { // Special handler for the CropInput Component
	const target = event.target;
	const name = target.name;
	const value = target.value;
	const idx = target.attributes.idx.value;

	props.crops[idx][name] = value; // Set dictionary value from master record of crops

	props.setCrops(props.crops);
	props.onChange();

}

// Handler for the "Add" button for particular land use input
// Adds a null crop to the end of the crop model array, updates the view and scrolls to the bottom
function addCrop() {
	let len;
	if((len = props.crops.length) >= MAX_CROPS) { // Max of 10 crops
		return;
	}

	props.crops.push({ type: "Unknown", amount: 0, idx: len });
	props.setCrops(props.crops);
	window.scrollTo({
		behavior: "smooth",
		top: (window.innerHeight / 4)
	});
}

// Handler for "Remove" button for particular land use input
// Splices the last index from the crop model array, updates the view and scrolls up
function removeCrop() {
	
	let len;
	if((len = props.crops.length) <= 1) {
		return;
	}
	props.crops.splice(len-1,1);
	props.setCrops(props.crops);

	window.scrollTo({
		behavior: "smooth",
		bottom: (window.innerHeight / 2)
	});
	
}


	return (



		<Container>
		<Form>
		<Form.Group>
			<h1>Calculator</h1>
			<hr />
		

			{
			// Numerical input
			}

			<Row>
				<Col>
					Acres:
				</Col>
				<Col className="ml-auto">
					<Form.Control
						name="acres"
						min="0"
						type="number"
						step="0.1"
						value={props.acres}
						onChange = {(event) => {props.setAcres(event.target.value)}} />
				</Col>
			</Row>

			<Row>
				<Col>
					Another Input:
				</Col>
				<Col className="ml-auto">
				<Form.Control
					name="land"
					min="0"
					type="number"
					step="0.1"
					value={props.land}
					onChange = {(event) => {props.setLand(event.target.value)}} />
				</Col>
			</Row>

			{
			// Check box
			}

			<Row>
				<Col className="mx-auto">
					Dairy:
				</Col>
				<Col className="mx-auto">
				<Form.Control
					name="dairy"
					type="checkbox"
					value={props.dairy}
					onChange={(event) => {props.setDairy(event.target.checked)}} />

				</Col>
			</Row>

			{
			// Multi-select for different techniques
			}
			<Form.Group>

				<Form.Label>Calculate Costs For:</Form.Label>
			
				<Form.Control as="select" multiple
					name="method"
					type="select"
					onChange={(event) => {props.setMethod(Array.from(event.target.options).filter(d => d.selected === true).map(s => s.value))}}>
					{props.options.map(option => ( // Map state options to multi-select
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>

			<Row>
				<Col>
				Alternatively:  
				</Col>
				<Col>
				<Dropdown 
					className="ml-auto"
					as={ButtonGroup}
				>

					<Dropdown.Toggle>
						Select
					</Dropdown.Toggle>
						<Dropdown.Menu>

						<Dropdown.Divider />
						<Dropdown.Divider />
							{Object.entries(opts).map(options => ( // Map state options to multi-select
								<span>
									<Dropdown.ItemText key={options[0]}>
										<b>{options[0]}</b>
									</Dropdown.ItemText>
										{options[1].map(d => ( // Map each category's options
											<Dropdown.Item
											value={d}
											key={d} 
											name="costs"
											type="select"
											onChange=
											{(event) => {props.setMethod(Array.from(event.target.options).filter(d => d.selected === true).map(s => s.value))}}>
												{d}
											</Dropdown.Item>
											))}
									<Dropdown.Divider />
									<Dropdown.Divider />
								</span>
							))}
						</Dropdown.Menu>
				</Dropdown>
				</Col>
			</Row>


			<Form.Label>I Own...</Form.Label>

					<Row className="mb-3 mx-4">
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
					{props.crops.map(cr => ( // Map Variate Crop Inputs
						<CropInput onChange={(event) => {handleCropChange(event); }} name="crops" id={cr.idx} key={cr.idx} />
					))}
				</Container>	



			
			{
			// Submit for calculation
			}

{/*			<Row>
				<button
					className="btn btn-primary my-4"
					name="submit"
					value="Submit"
					type="submit"
					onClick={(event) => {event.preventDefault()}}>
					Submit
				</button>
			</Row>*/}
		</Form.Group>
		</Form>
		

		
		</Container>
		)
}

export default CalcForm;
