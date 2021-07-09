// ATTN: THIS CLASS IS DEPRECATED - PLEASE USE CalcForm.jsx INSTEAD
// Component Class for Calculator Form - constructing a container form for land use calculation
import React from "react"
import { Form, Dropdown, ButtonGroup, Col, Row, Container, Button, Tabs, Tab } from 'react-bootstrap';
import CropInput from './CropInput.jsx'
import Calculator from './Calculator.js'

let MAX_CROPS = 10;




class CalcForm extends React.Component {

// Global variables for option selections
null_crop = {type: "Unknown", amount: 0, idx: null};
options = ["Method A", "Method B", "Method C", "Method D"];
opts = { // Calculate Options for "Category": ["Methods..."]
		"Livestock": ["Method L-1", "Method L-2"], 
		"Climate": ["Method C-1", "Method C-2"], 
		"Other": ["Support Local Music", "Irrigation"]
	};


state = {
	isSubmitted: false,
	acres: 12.345,
	land: 23.456,
	dairy: false,
	method: [],
	selected: [],
	crops: [{type: "Unknown", amount: 0, idx: 0}]
};	


constructor(props) {
	super(props);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.handleCropChange = this.handleCropChange.bind(this);
	this.calcRef = React.createRef();
}

handleCropChange(event) { // Special handler for the CropInput Component
	const target = event.target;
	const name = target.name;
	const value = target.value;
	const idx = target.attributes.idx.value;

	const crops = [...this.state.crops];

	crops[idx][name] = value; // Set dictionary value from master record of crops

	this.setState({
		crops,
	});
}

handleInputChange(event) { // Generalized event handler for most components - use this when possible

	const target = event.target;
	const name = target.name;
	let value;

	if(target.type === 'checkbox') {
		value = target.checked;
	} else if(target.type === 'select-multiple') {
		// Get all selected values for methods
		//value = Array.from(target.options).filter(d => d.selected === true).map(s => s.value);
	} else {
		value = target.value;
	}

	this.setState({
		[name]: value
	});


}
handleSubmit(event) {
	
	event.preventDefault();
	console.log(this.state);

	const vals = this.state;
	const target = event.target;
	const name = target.name;
	let value;

	if(target.type === 'checkbox') {
		value = target.checked;
	} else if(target.type === 'select-multiple') {
		// Get all selected values for methods
		value = Array.from(target.options).filter(d => d.selected === true).map(s => s.value);
	} else {
		value = target.value;
	}

	
	this.setState({
		[name]: value,
		["isSubmitted"]: true
	});


	this.scrollTo();


}

addCrop() {
	let len;
	if((len = this.state.crops.length) >= MAX_CROPS) { // Max of 10 crops
		return;
	}

	const crops = [...this.state.crops,
				{ type: "Unknown", amount: 0, idx: len }
				];
	this.setState({
		crops,
	});

}
removeCrop() {
	
	let len;
	if((len = this.state.crops.length) <= 1) {
		return;
	}

	const crops = [...this.state.crops];
	crops.splice(len-1,1);
	this.setState({
		crops,
	});
	
}

scrollTo() {
	// Add auto-scroll functionality on form submission -> yes, I know 999999 is a hack
	// This ref is called in the instantiation of <Calculator> and in this classes Constructor
	window.scrollTo({
		behavior: "smooth",
		top: 99999
	});
}

 

render() {

	return (

		<Container>
		<Form onSubmit={this.handleSubmit}>
		<Form.Group>
			<h1>Calculator</h1>
			<hr>
			</hr>

			{
			// Numerical input
			}

			<Row>
				<Col>
					Acres:
				</Col>
				<Col className="ml-auto">
					<Form.Control
						name="acres"
						min="0"
						type="number"
						step="0.001"
						value={this.state.acres}
						onChange={this.handleInputChange} />
				</Col>
			</Row>

			<Row>
				<Col>
					Land(Acres):
				</Col>
				<Col className="ml-auto">
				<Form.Control
					name="land"
					min="0"
					type="number"
					step="0.001"
					value={this.state.land}
					onChange={this.handleInputChange} />
				</Col>
			</Row>

			{
			// Check box
			}

			<Row>
				<Col className="mx-auto">
					Dairy:
				</Col>
				<Col className="mx-auto">
				<Form.Control
					name="dairy"
					type="checkbox"
					value={this.state.dairy}
					onChange={this.handleInputChange} />

				</Col>
			</Row>

			{
			// Multi-select for different techniques
			}
			<Form.Group>

				<Form.Label>Calculate Costs For:</Form.Label>
			
				<Form.Control as="select" multiple
					name="method"
					type="select"
					onChange={this.handleSubmit}>
					{this.options.map(option => ( // Map state options to multi-select
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>

			<Row>
				<Col>
				Calculate Costs For:  
				</Col>
				<Col>
				<Dropdown 
					className="ml-auto"
					as={ButtonGroup}
				>

					<Dropdown.Toggle>
						Select
					</Dropdown.Toggle>
						<Dropdown.Menu>

						<Dropdown.Divider />
						<Dropdown.Divider />
							{Object.entries(this.opts).map(options => ( // Map state options to multi-select
								<span>
									<Dropdown.ItemText key={options[0]}>
										<b>{options[0]}</b>
									</Dropdown.ItemText>
										{options[1].map(d => ( // Map each category's options
											<Dropdown.Item
											value={d}
											key={d} 
											name="costs"
											type="select"
											onChange={this.handleInputChange}>
												{d}
											</Dropdown.Item>
											))}
									<Dropdown.Divider />
									<Dropdown.Divider />
								</span>
							))}
						</Dropdown.Menu>
				</Dropdown>
				</Col>
			</Row>


			<Form.Label>I Own...</Form.Label>

				<Container>

					{this.state.crops.map(cr => ( // Map Variate Crop Inputs
						<CropInput onChange={this.handleCropChange} name="crops" id={cr.idx} />
					))}
				
				</Container>	

					<Row className="rightAlgn">
						<Col>
						    <Button onClick={() => {this.addCrop()}}>
						      	Add...
						    </Button>
					    </Col>
					    <Col>
						    <Button onClick={() => {this.removeCrop()}}>
						    	Remove...
						    </Button>
					    </Col>
				    </Row>

			
			{
			// Submit for calculation
			}

			<Row>
				<button
					className="btn btn-primary my-4"
					name="submit"
					value="Submit"
					type="submit"
					onClick={this.scrollTo}>
					Submit
				</button>
			</Row>
		</Form.Group>
		</Form>
		
		<Container hidden={this.state.isSubmitted ? '' : 'hidden'}>
			<div>
				<Tabs id="method-tabs">
					{this.state.method.map(tab => (
						<Tab eventKey={tab} title={tab}>
							<Calculator method={tab} vals={this.state} />
						</Tab>
						))}
					<div ref={this.calcRef}></div>
				</Tabs>
			</div>
		</Container>
		
		</Container>
		)
}


}

export default CalcForm;
