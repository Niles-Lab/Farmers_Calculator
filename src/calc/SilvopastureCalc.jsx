/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React from "react";
import { Form, Col, Row, Container, Accordion } from 'react-bootstrap';
import CropInput from './CropInput.jsx'
import { BsXSquareFill, BsX } from "react-icons/bs";

let MAX_CROPS = 10;

function CalcForm(props) {

function handleCropChange(event) { // Special handler for the CropInput Component
	const target = event.target;
	const name = target.name;
	const idx = target.attributes.idx.value;
	let value = target.value;

	if(event.target.type === "number") { // Handle UI for negative crop input value
		const val = parseFloat(value);
		if(isNaN(val) || val <= 0) {
			value = 0;
		}

	}

	props.crops[idx][name] = value; // Set dictionary value from master record of crops

	props.setCrops(props.crops);
	props.onChange();

}

function handleChange(event,key,value) {

	let opts = props.silvoPasture;

	opts[key][0] = parseFloat(event.target.value);
	
	props.setSilvopasture(silvoPasture => ({
		...props.silvoPasture
	}));

}


	return (
<Accordion.Item eventKey="0">
	<Accordion.Header eventKey="0">
		Silvopasture Options
	</Accordion.Header>
	<Accordion.Body>
	<Form>

		{Object.entries(props.silvoPasture).map(([key,value]) => (
			<Form.Group>
				<Row>
					<Col>
						{value[2]}
					</Col>
					<Col>
					<Form.Control
						placeholder="..."
						name={value[2]}
						type="number"
						min={0}
						step={0.5}
						key={key}
						value={props.silvoPasture[key][0]}
						onChange = {(event) => {handleChange(event,key,value)}} />
				</Col>
				</Row>
			</Form.Group>

			))}
	</Form>
	</Accordion.Body>
</Accordion.Item>
		)
}

export default CalcForm;
