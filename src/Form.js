//import React, {Component} from 'react';
import React from "react"
import { Form, Dropdown, ButtonGroup } from 'react-bootstrap';

class CalcForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			acres: 5,
			dairy: false,
			name: "Nedrick",
			options: ["a", "b", "c", "d"],
			opts: {"Livestock": ["a", "b"], "Climate": ["c", "d"], "Other": ["Support Local Music", "d"]}
		};	

	this.handleInputChange = this.handleInputChange.bind(this);

}



handleInputChange(event) {
	console.log(event);
	const target = event.target;
	const value = target.type === 'checkbox' ? target.checked : target.value;
	const name = target.name;
	const result = target.type === 'submit' ? true : false;

	this.setState({
	[name]: value
	});
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
					name="acres"
					type="number"
					value={this.state.acres}
					onChange={this.handleInputChange} />
			</label>

			{
			// Check box
			}

			<label className="row">
				Dairy
				<input
					name="dairy"
					type="checkbox"
					value={this.state.dairy}
					onChange={this.handleInputChange} />
			</label>

			{
			// Multi-select for different techniques
			}
			
			<label className="row">
				Calculate Costs For:
				<Form.Control as="select" multiple
					className="form-control"
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
			</label>

			<label className="row">
				Calculate Costs For:  
				<div className="ml-auto">
				<Dropdown as={ButtonGroup} multiple>
					<Dropdown.Toggle>
						Select
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.ItemText>Irrigation Techniques</Dropdown.ItemText>
						<Dropdown.Divider />
						<Dropdown.Item>abcd</Dropdown.Item>
						<Dropdown.Item>afdg</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Divider />
						<Dropdown.ItemText>Livestock Techniques</Dropdown.ItemText>
						<Dropdown.Divider />
						{console.log(this.state.opts)}

						<div>
						function mapper(props) {
							//let ret;
							console.log("abcd")
							return <label>LABEL</label>;
						}
						</div>

						{this.state.opts.map(option => ( // Map state options to multi-select

							<Dropdown.ItemText>
								{option}
							</Dropdown.ItemText>


						))}
						<Dropdown.Divider />
						<Dropdown.Divider />
						<Dropdown.ItemText>Other</Dropdown.ItemText>
						<Dropdown.Item>Climate Change</Dropdown.Item>
						<Dropdown.Item>Support Local Music</Dropdown.Item>
					</Dropdown.Menu>


				</Dropdown>
				</div>
			</label>
			
			{
			// Submit for calculation
			}

			<label>
				<button
					className="btn btn-primary"
					name="submit"
					type="submit"
					onChange={this.handleInputChange}>
					Submit
				</button>
			</label>
		</form>

		)
}


}
export default CalcForm;
