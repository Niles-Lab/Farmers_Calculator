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


	return (
<Accordion.Item eventKey="0">
	<Accordion.Header eventKey="0">
		Silvopasture Options
	</Accordion.Header>
	<Accordion.Body>
	<Form>
		<Form.Group>
			<Row>
				<Col>
				Length of Project(Yrs)
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
			<Row>
				<Col>
				Tree Spacing(ft)
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

			<Row>
				<Col>
				Length of Project(Yrs)
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
	</Accordion.Body>
</Accordion.Item>
		)
}

export default CalcForm;
