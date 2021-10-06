/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React from "react";
import { Form, Col, Row, Container, Button, Dropdown, Accordion, Card } from 'react-bootstrap';
import CropInput from './CropInput.jsx'
import DDSelect from './DDSelect.jsx'
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

function handleChange(event,idx) {

	props.silvoPasture[idx][0] = event.target.value;
	props.setSilvopasture(props.silvoPasture);

}

	return (
<Accordion.Item eventKey="0">
	<Accordion.Header eventKey="0">
		Silvopasture Options
	</Accordion.Header>
	<Accordion.Body>
	<Form>
		{props.silvoPasture.map((opt,idx) => (
			<Form.Group>
				<Row>
					<Col>
						{opt[2]}
					</Col>
					<Col>
					<Form.Control
						key={idx}
						placeholder="..."
						name={opt[2]}
						min={opt[0]*10}
						type="number"
						step={1}
						idx={idx}
						value={opt[0]}
						onChange = {(event) => {handleChange(event,idx)}} />
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
