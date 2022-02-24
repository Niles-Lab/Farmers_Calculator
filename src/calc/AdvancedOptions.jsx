/**
 * 
 * AdvancedOptions - Contains advanced options to fine-tune parameters for each practice - items such as cost/unit or $/unit may live here
 * A dictionary of arrays is expected in the format of:
 * value: [default: integer, 
 * 			unit: string,
 * 			display name: string,
 * 			(optional) tooltip description: string,
 * 			(optional) tooltip link: string(preferably url)]
 * e.g.
 * costPerUnit: [5, "$/Unit", "Cost Per Unit", "This is the cost per unit of x", "www.costperunit.com" (not a real website)]
 * 
 * 
 **/

import React, { useState } from "react";
import { Form, Card, Col, Row, Button, Collapse, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle } from "react-icons/bs";

function AdvancedOptions(props) {


const [isOpen, setIsOpen] = useState(false);

// Capitalize first letter in method name for display purposes
let upperCaseMethod = props.method.charAt(0).toUpperCase() + props.method.slice(1);


function handleChange(event,key,value) {

	let opts = props.opts;

	opts[key][0] = parseFloat(event.target.value);
	
	props.setOpts(sp => ({
		...props.opts
	}));

}

	return (


	<Card style={{"backgroundColor": "rgba(255,255,255,0.2)"}} className="mt-3">

    <Button
    onClick={() => setIsOpen(!isOpen)}
    aria-controls="silvoPasture-collapse"
    aria-expanded={isOpen}>
  		More { upperCaseMethod } Options
  	</Button>


    <Collapse in={isOpen}>
    <Form className="mt-3">

		{/* CBA Discount Rate */}
		<Row>
			<Col xs={12} lg={6} className="py-2">
				Discount Rate

			  <OverlayTrigger
			    placement="right"
			    overlay={<Tooltip>Typical for agricultural financial analyses</Tooltip>}>
				<span className="ml-1"><BsInfoCircle /></span>
			  </OverlayTrigger>

			</Col>
			<Col xs={12} lg={6}>
		<InputGroup>
			<Form.Control
				placeholder="..."
				name="rate"
				type="number"
				min={0}
				step={0.01}
				key={"dcRate"}
				value={props.rate}
				onChange = {(event) => {props.setRate(event.target.value)}} />
			<InputGroup.Text>%</InputGroup.Text>
		  </InputGroup>
			</Col>
		</Row>


		{Object.entries(props.opts).map(([key,value]) => (

			<Form.Group key={key}>
				<Row className="my-3">
					
					<Col xs={12} lg={6}>
						{value[2]}
				
						{ props.opts[key].length === 4 &&
						  <OverlayTrigger
						  	key={key+"trigger"}
						    placement="right"
						    overlay={<Tooltip id={key+"trigger"}>{props.opts[key][3]}</Tooltip>}>
							<span className="ml-1"><BsInfoCircle /></span>
						  </OverlayTrigger>

						}
						{ props.opts[key].length === 5 &&
						  <OverlayTrigger
						  	key={key+"trigger"}
						    placement="right"
						    overlay={<Tooltip id={key+"trigger"}>{props.opts[key][3]}</Tooltip>}>
							<a target="_blank" rel="noreferrer" className="ml-1" href={props.opts[key][4]}><BsInfoCircle /></a>
						  </OverlayTrigger>

						}


					</Col>
				<Col xs={12} lg={6}>
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
