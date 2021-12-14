/**
 * 
 * AdvancedOptions - particular calculator component for Silvopasture data collection
 * 
 **/

import React, { useState } from "react";
import { Form, Card, Col, Row, Button, Collapse, InputGroup } from 'react-bootstrap';

function AdvancedOptions(props) {


const [isOpen, setIsOpen] = useState(false);
let upperCaseMethod = props.method.charAt(0).toUpperCase() + props.method.slice(1);


function handleChange(event,key,value) {

	let opts = props.opts;

	opts[key][0] = parseFloat(event.target.value);
	
	props.setSP(sp => ({
		...props.opts
	}));

}

	return (


	<Card style={{"backgroundColor": "rgba(255,255,255,0.2)"}} className="mt-5">


		
    <Button
    onClick={() => setIsOpen(!isOpen)}
    aria-controls="silvoPasture-collapse"
    aria-expanded={isOpen}>
  		More { upperCaseMethod } Options
  	</Button>


    <Collapse in={isOpen}>
    <Form className="mt-3">

		{
		// Check box
		}


		{Object.entries(props.opts).map(([key,value]) => (
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
						value={props.opts[key][0]}
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

export default AdvancedOptions;
