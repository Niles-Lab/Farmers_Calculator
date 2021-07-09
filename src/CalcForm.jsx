import React, { useState } from 'react';
import { Form, Dropdown, ButtonGroup, Col, Row, Container, Button } from 'react-bootstrap';
import CropInput from './CropInput.jsx'

let MAX_CROPS = 10;




function CalcForm(props) {




// Global variables for option selections

const options = ["Method A", "Method B", "Method C", "Method D"];
const opts = { // Calculate Options for "Category": ["Methods..."]
		"Livestock": ["Method L-1", "Method L-2"], 
		"Climate": ["Method C-1", "Method C-2"], 
		"Other": ["Support Local Music", "Irrigation"]
	};


const [land, setLand] = useState(0);
const [dairy, setDairy] = useState(false);
const [acres, setAcres] = useState(100);
const [crops, setCrops] = useState([{type: "Unknown", amount: 0, idx: 0}]);
const [method, setMethod] = useState([]);



function handleSubmit(event) {
	
	//this.preventDefault();



	// if(target.type === 'checkbox') {
	// 	value = target.checked;
	// } else if(target.type === 'select-multiple') {
	// 	// Get all selected values for methods
	// 	value = Array.from(target.options).filter(d => d.selected === true).map(s => s.value);
	// } else {
	// 	value = target.value;
	// }


}
function handleCropChange(event) { // Special handler for the CropInput Component
	const target = event.target;
	const name = target.name;
	const value = target.value;
	const idx = target.attributes.idx.value;

	crops[idx][name] = value; // Set dictionary value from master record of crops

	setCrops(crops);
	console.log(crops);

}

function addCrop() {
	let len;
	if((len = crops.length) >= MAX_CROPS) { // Max of 10 crops
		return;
	}

	crops.push({ type: "Unknown", amount: 0, idx: len });
	setCrops(crops);

}
function removeCrop() {
	
	let len;
	if((len = crops.length) <= 1) {
		return;
	}
	crops.splice(len-1,1);
	setCrops(crops);
	
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
						step="0.001"
						value={acres}
						onChange = {(event) => {setAcres(event.target.value)}} />
				</Col>
			</Row>

			<Row>
				<Col>
					Land(Acres):
				</Col>
				<Col className="ml-auto">
				<Form.Control
					name="land"
					min="0"
					type="number"
					step="0.001"
					value={land}
					onChange = {(event) => {setLand(event.target.value)}} />
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
					value={dairy}
					onChange={(event) => {setDairy(event.target.checked)}} />

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
					onChange={(event) => {setMethod(Array.from(event.target.options).filter(d => d.selected === true).map(s => s.value))}}>
					{options.map(option => ( // Map state options to multi-select
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>

			<Row>
				<Col>
				Calculate Costs For:  
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
											{(event) => {setMethod(Array.from(event.target.options).filter(d => d.selected === true).map(s => s.value))}}>
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

				<Container>
					{crops.map(cr => ( // Map Variate Crop Inputs
						<CropInput onChange={(event) => handleCropChange(event)} name="crops" id={cr.idx} />
					))}
				
				</Container>	

					<Row className="rightAlgn">
						<Col>
						    <Button onClick={addUpd}>
						      	Add...
						    </Button>
					    </Col>
					    <Col>
						    <Button onClick={removeUpd}>
						    	Remove...
						    </Button>
					    </Col>
				    </Row>

			
			{
			// Submit for calculation
			}

			<Row>
				<button
					className="btn btn-primary my-4"
					name="submit"
					value="Submit"
					type="submit"
					onClick={(event) => {event.preventDefault()}}>
					Submit
				</button>
			</Row>
		</Form.Group>
		</Form>
		

		
		</Container>
		)
}

export default CalcForm;
