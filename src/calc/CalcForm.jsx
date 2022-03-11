/**
 * 
 * CalcForm - demo model to include multiple method calculator options in one module
 * 
 **/

import React from "react";
import { Form, Col, Row, Container, Dropdown, Alert, InputGroup, Button, ToggleButtonGroup } from 'react-bootstrap';
//import CropInput from './CropInput.jsx'
import { BsX } from "react-icons/bs";
import AdvancedOptions from './AdvancedOptions.jsx';

// let MAX_CROPS = 10;

function CalcForm(props) {


	

	return (
		<Container className="calc">
			<h1 className="mt-3" style={{"fontSize": "2.5em", "fontWeight": "lighter"}}>Calculator and Input Options<BsX onClick={props.handleClose} /></h1>



			<Form>
			
			<Form.Group>

				<hr />
			




				<Row>
					<Col>
						Length of Project
					</Col>
					<Col>
					<InputGroup>
					<Form.Control
						placeholder="..."
						name="length"
						min="1"
						max={100}
						type="number"
						step="1"
						value={props.length}
						onChange = {(event) => {props.setLength(event.target.value)}} />
						<InputGroup.Text>Years</InputGroup.Text>
					</InputGroup>
					</Col>
				</Row>

			
				{
				// Numerical input
				}

				<Row>
					<Col>
						<Dropdown>
						<Dropdown.Toggle
						  className="acreDrop"
						  align="end"
						  id="dropdown-basic"
						  variant="secondary">
						  {props.unit}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{props.units.map((item,idx) => (
								<Dropdown.Item
									key={item+idx}
									onClick={() => props.setUnit(item)}>
									{item}
								</Dropdown.Item>
								))}
						</Dropdown.Menu>
						</Dropdown>
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

			{/* Irrigation Specific Switch to Drip Irrigation */}
			{props.method === "irrigation" && 

			<ToggleButtonGroup className="mt-3" name="radioGroup">


				<Button variant="secondary" className={props.irrTech === "Spray Irrigation" ? "btn.active" : ""} value={"Spray Irrigation"} onClick = {(event, d) => {props.setIrrTech(event.target.value)}}>Spray Irrigation</Button>
				<Button variant="secondary" className={props.irrTech === "Drip Irrigation" ? "btn.active" : ""} value={"Drip Irrigation"} onClick = {(event, d) => {props.setIrrTech(event.target.value)}}>Drip Irrigation</Button>
				
				{/* <ToggleButton
					id="spIgRd"
					type="radio"
					variant="secondary"
					name="radioGroup"
					value={props.irrTech}
					checked={"Spray Irrigation" === props.irrTech}
					//onChange={(e) => setRadioValue(e.currentTarget.value)}
					onChange = {(event, d) => {props.setIrrTech("Spray Irrigation")}}
				>Spray Irrigation</ToggleButton>


				<ToggleButton
					id="drIgRd"
					type="radio"
					variant="secondary"
					name="radioGroup"
					value={"Drip Irrigation"}
					checked={"Drip Irrigation" === props.irrTech}
					//onChange={(e) => setRadioValue(e.currentTarget.value)}
					onChange = {(event, d) => {props.setIrrTech("Drip Irrigation")}}
				>Drip Irrigation</ToggleButton> */}

			</ToggleButtonGroup>

			}						

			{/* Method Specific Calculator input here */}
			<AdvancedOptions {...props} />

			
			{/* Irrigation Specific Disclaimer */}
			{props.method === "irrigation" && 

			<Alert className="m-3" variant="warning">
			<small>This economic tool estimates the costs, revenues and profits of a sprinkler irrigation system. For more information on the costs of drip irrigation systems, visit the University of Vermont Extension’s <a href="https://www.uvm.edu/climatefarming/sites/default/files/files/uvm_dripirrigation.pdf" rel="noreferrer" target="_blank">Getting started with drip irrigation: components and costs.</a></small>
			</Alert>

			}

			

		
		</Container>
		)
}

export default CalcForm;
