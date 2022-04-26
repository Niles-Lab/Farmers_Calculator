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

import React from "react";
import { Form, Col, Row, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle } from "react-icons/bs";

function AdvancedOptions(props) {



function handleChange(event,key,value) {

	let opts = props.opts;

	opts[key][0] = parseFloat(event.target.value);

	props.setOpts(() => ({
		...props.opts
	}));

}

	return (




    <Form className="mt-3">




		{Object.entries(props.opts).map(([key,value]) => (

			<Form.Group key={key}>
				<Row className="my-3">
					
					<Col xs={12} xl={6}>
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
				<Col xs={12} xl={6}>
				<InputGroup className="mb-1">

					<Form.Control
						placeholder="..."
						name={value[2]}
						type="number"
						min={0}
						step={0.5}
						key={key}
						disabled={key.includes("Disabled")}
						value={(Math.floor(props.opts[key][0]*100)/100)}
						onChange = {(event) => {handleChange(event,key,value)}} />
					<InputGroup.Text>{value[1]}</InputGroup.Text>
				  </InputGroup>
				</Col>
				</Row>
			</Form.Group>

			))}
	</Form>

		)
}

export default AdvancedOptions;
