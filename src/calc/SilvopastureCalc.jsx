/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import { React, useState } from "react";
import { ListGroup, Form, Card, Col, Row, Button, Container, Accordion, Collapse, InputGroup, Fade } from 'react-bootstrap';
import CropInput from './CropInput.jsx'
import { BsXSquareFill, BsX } from "react-icons/bs";

let MAX_CROPS = 10;



function SilvopastureCalc(props) {


const [spOpen, spSetOpen] = useState(false);

function handleChange(event,key,value) {

	let opts = props.silvoPasture;

	opts[key][0] = parseFloat(event.target.value);
	
	props.setSilvopasture(silvoPasture => ({
		...props.silvoPasture
	}));

}

	return (


	<Card style={{"backgroundColor": "rgba(255,255,255,0.2)"}}>


		
    <Button
    variant="success"
    onClick={() => spSetOpen(!spOpen)}
    aria-controls="silvoPasture-collapse"
    aria-expanded={spOpen}
  	>
  	More Silvopasture Options
  	</Button>


    <Collapse in={spOpen}>
    <Form >

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
			<Form.Group key={key}>
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
    </Collapse>
	</Card>
		)
}

export default SilvopastureCalc;
