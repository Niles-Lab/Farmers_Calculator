import React from "react"
import { Form, Dropdown, ButtonGroup, ControlLabel, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class CalcForm extends React.Component {

// Global variables for option selections
options = ["Unknown", "Vegetables", "Fruits", "Livestock"];

state = {
	value: []
};	


constructor(props) {
	super(props);
	this.handleInputChange = this.handleInputChange.bind(this);
}


handleInputChange(event) {


	const target = event.target;
	const name = target.name;
	let value = target.value;


	this.setState({
		[name]: value
	});

}

render() {
	return (

	<div className="container">
		<Form.Group className="row mx-auto">

			<Form.Control
				placeholder="100.00"
				name="acres"
				type="number"
				step="0.01"
				value={this.state.acres}
				onChange={this.handleInputChange}>
			</Form.Control>

			<div className="mx-2">Acres of...</div>

			<Form.Control
				as="select"
				className=""
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
	</div>

		)
}


}
export default CalcForm;
