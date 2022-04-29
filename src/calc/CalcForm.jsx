/**
 * 
 * CalcForm - demo model to include multiple method calculator options in one module
 * 
 **/

import React from "react";
import { Form, Col, Row, Container, Dropdown, InputGroup, Button, ToggleButtonGroup, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle } from "react-icons/bs";
import { BsX } from "react-icons/bs";
import AdvancedOptions from './AdvancedOptions.jsx';


function CalcForm(props) {

	function changeIrrTech(event) {
		
		props.setIrrTech(event.target.value)

	}
	function changeSubVar(event) {

		props.setSubvariant(event.target.value);

	}
	

	return (
		<Container className="calc">
			<h1 className="mt-3" style={{"fontSize": "2.5em", "fontWeight": "lighter"}}>Input Options<BsX onClick={props.handleClose} /></h1>

			<hr />

			<Card style={{"backgroundColor": "rgba(255,255,255,0.2)"}} className="my-3 py-2">

			<Form>
			
			<Form.Group>


				<Row>
					<Col xs={12} lg={6}>
						Length of Project
					</Col>
					<Col xs={12} lg={6}>
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
						min="0.1"
						type="number"
						step="0.1"
						value={props.land}
						onChange = {(event) => {props.setLand(event.target.value)}} />
					</Col>
				</Row>

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
						onChange = {(event) => {props.setRate(parseFloat(event.target.value))}} />
					<InputGroup.Text>%</InputGroup.Text>
				</InputGroup>
					</Col>
				</Row>


			</Form.Group>



			</Form>
			
			<hr/>

			{/* Irrigation Specific Switch to Drip Irrigation */}
			{props.method === "irrigation" && 

			<ToggleButtonGroup className="mt-3" name="radioGroup">


				<Button variant="secondary" className={props.irrTech === "Sprinkler Irrigation" ? "btn.active" : ""} value={"Sprinkler Irrigation"} onClick = {(event) => {changeIrrTech(event)}}>Sprinkler Irrigation</Button>
				<Button variant="secondary" className={props.irrTech === "Drip Irrigation" ? "btn.active" : ""} value={"Drip Irrigation"} onClick = {(event) => {changeIrrTech(event)}}>Drip Irrigation</Button>
				

			</ToggleButtonGroup>

			}			

			{/* Silvopasture Specific Switch to Timber/Crop Silvopasture */}
			{props.method === "silvopasture" && 

			<ToggleButtonGroup className="mt-3" name="radioGroup">


				<Button variant="secondary" className={props.subVariant === "Crop Silvopasture" ? "btn.active" : ""} value={"Crop Silvopasture"} onClick = {(event) => {changeSubVar(event)}}>Crop Silvopasture</Button>
				<Button variant="secondary" className={props.subVariant === "Timber Silvopasture" ? "btn.active" : ""} value={"Timber Silvopasture"} onClick = {(event) => {changeSubVar(event)}}>Timber Silvopasture</Button>
				

			</ToggleButtonGroup>

			}		

			{/* Method Specific Calculator input here */}
			<AdvancedOptions {...props} />

			
			


			</Card>

		
		</Container>
		)
}

export default CalcForm;
