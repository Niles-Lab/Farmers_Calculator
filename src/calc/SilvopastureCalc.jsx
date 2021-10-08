/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React from "react";
import { Form, Card, Col, Row, Button, Container, Accordion, InputGroup } from 'react-bootstrap';
import CropInput from './CropInput.jsx'
import { BsXSquareFill, BsX } from "react-icons/bs";

let MAX_CROPS = 10;

function SilvopastureCalc(props) {

function handleChange(event,key,value) {

	let opts = props.silvoPasture;

	opts[key][0] = parseFloat(event.target.value);
	
	props.setSilvopasture(silvoPasture => ({
		...props.silvoPasture
	}));

}


	return (
<Accordion.Item eventKey="0">
	<Card>
{/*	<Card.Header as={Accordion.Header} eventKey="0">*/}
	<Accordion.Header as={Card}>
		Silvopasture Options
	</Accordion.Header>
{/*	<Accordion.Toggle as={Card.Header} eventKey="0">
		
	</Accordion.Toggle>*/}
{/*	</Card.Header>*/}
	<Accordion.Body>
	<Form>

		{
		// Check box
		}

		<Row>
			<Col>
				Apple Tree
			</Col>
			<Col>
			<Form.Control
				name="dairy"
				type="checkbox"
				value={props.dairy}
				onChange={(event) => {props.setDairy(event.target.checked)}} />

			</Col>
		</Row>


		{Object.entries(props.silvoPasture).map(([key,value]) => (
			<Form.Group>
				<Row>
					<Col>
						{value[2]}
					</Col>
					<Col>
					<InputGroup className="mb-1">

					<Form.Control
						placeholder="..."
						name={value[2]}
						type="number"
						min={0}
						step={0.5}
						key={key}
						value={props.silvoPasture[key][0]}
						onChange = {(event) => {handleChange(event,key,value)}} />
					<InputGroup.Text>{value[1]}</InputGroup.Text>
				  </InputGroup>
				</Col>
				</Row>
			</Form.Group>

			))}
	</Form>
	</Accordion.Body>
	</Card>
</Accordion.Item>
		)
}

export default SilvopastureCalc;
