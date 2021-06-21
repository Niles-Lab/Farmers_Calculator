//import React, {Component} from 'react';
import React from "react"
import { Form, Dropdown, ButtonGroup } from 'react-bootstrap';

class CalcForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acres: 12.345,
			land: 23.456,
			dairy: false,
			name: "Nedrick",
			selected: [],
			options: ["Method A", "Method B", "Method C", "Method D"],
			opts: { // Calculate Options for "Category": ["Methods..."]
				"Livestock": ["Method L-1", "Method L-2"], 
				"Climate": ["Method C-1", "Method C-2"], 
				"Other": ["Support Local Music", "Irrigation"]
			}
		};	

	this.handleInputChange = this.handleInputChange.bind(this);

}



handleInputChange(event) {
	console.log(event);
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	const result = target.type === 'submit' ? true : false;
	console.log(target);
	console.log(value);
	console.log(name);

	this.setState({
	[name]: value
	});
}
handleSubmit(event) {
	console.log(this.state);
}

render() {
	return (


		<form>
	

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
					name="costs"
					type="select"
					value={this.state.costs}
					onChange={this.handleInputChange}>
					{this.state.options.map(option => ( // Map state options to multi-select
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</Form.Control>
			</Form.Group>

			<label className="row">
				Calculate Costs For:  

				<Dropdown 
					className="ml-auto"
					name="costs"
					type="select"
					value={this.state.selected}
					onChange={this.handleInputChange}
					as={ButtonGroup}
				>

					<Dropdown.Toggle drop={'up'}>
						Select
					</Dropdown.Toggle>

						<Dropdown.Menu
							name="costs"
							type="select"
							value={this.state.selected}
							onChange={this.handleInputChange}>
						<Dropdown.Divider />
						<Dropdown.Divider />
							{Object.entries(this.state.opts).map(option => ( // Map state options to multi-select
								<span>
									<Dropdown.ItemText>
										<b>{option[0]}</b>
									</Dropdown.ItemText>
										{option[1].map(d => (
											<Dropdown.Item key={d} value={d}>
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
					type="submit"
					onChange={this.handleSubmit}>
					Submit
				</button>
			</label>
		</form>

		)
}


}
export default CalcForm;
