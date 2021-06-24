import React from "react"
import { Form, Dropdown, ButtonGroup } from 'react-bootstrap';
import CropInput from './CropInput.jsx'

class CalcForm extends React.Component {

// Global variables for option selections
options = ["Method A", "Method B", "Method C", "Method D"];
opts = { // Calculate Options for "Category": ["Methods..."]
		"Livestock": ["Method L-1", "Method L-2"], 
		"Climate": ["Method C-1", "Method C-2"], 
		"Other": ["Support Local Music", "Irrigation"]
	};


state = {
	acres: 12.345,
	land: 23.456,
	dairy: false,
	name: "Nedrick",
	method: [],
	selected: [],

};	


constructor(props) {
	super(props);
	this.handleInputChange = this.handleInputChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
}


handleInputChange(event) {


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


	// for(const sel of target.options) {
	// 	if(sel.selected) {
	// 		method.push(sel.value);
	// 	}
	// }
	// console.log(method);

	this.setState({
		[name]: value
	});

}
handleSubmit(event) {
	event.preventDefault();
	console.log(this.state);
}

render() {
	return (

		<Form onSubmit={this.handleSubmit}>

			<h1>Calculator</h1>
			<hr>
			</hr>

			{
			// Numerical input
			}

			<label className="row">
				Acres:
				<input
					className="ml-auto col-4"
					width="33%"
					name="acres"
					type="number"
					step="0.001"
					value={this.state.acres}
					onChange={this.handleInputChange} />
			</label>

			<label className="row">
				Land:
				<input
					className="ml-auto col-4"
					name="land"
					type="number"
					step="0.001"
					value={this.state.land}
					onChange={this.handleInputChange} />
				Acres
			</label>

			{
			// Check box
			}

			<label className="row">
				Dairy:
				<input
					className="ml-auto col-4"
					name="dairy"
					type="checkbox"
					value={this.state.dairy}
					onChange={this.handleInputChange} />
			</label>

			{
			// Multi-select for different techniques
			}
			<Form.Group className="row">

				<Form.Label>Calculate Costs For:</Form.Label>
			
				<Form.Control as="select" multiple
					name="method"
					type="select"
					onChange={this.handleInputChange}>
					{this.options.map(option => ( // Map state options to multi-select
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>
			
			<Form.Label>I Grow...</Form.Label>
			<CropInput />


			<label className="row">
				Calculate Costs For:  

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


			</label>
			
			{
			// Submit for calculation
			}

			<label>
				<button
					className="btn btn-primary"
					name="submit"
					value="Submit"
					type="submit">
					Submit
				</button>
			</label>
		</Form>

		)
}


}
export default CalcForm;
