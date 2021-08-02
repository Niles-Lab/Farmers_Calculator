import React from "react"
import { Form, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



class CalcForm extends React.Component {



// Global variables for option selections
options = ["Land", "Vegetables", "Hay", "Livestock", "Dairy", "Maple", "Hay", "Perennials", "Annuals"];

state = {
	type: "Unknown",
	amount: 0,
	invalid: false
};	





handleChange(event) {


	// const target = event.target;
	// const name = target.name;
	// let value = target.value;

	// Form validation - turn input form red
	if(event.target.type === "number") {
		let val = parseFloat(event.target.value);
		let invd = (val >= 0 || isNaN(val)) ? false : true;

		this.setState({
			invalid: invd,
		})
	}

	this.props.onChange(event); // Update the UI
}

render() {

	return (

	<Row>
		<Col>
			<Form.Control
				placeholder="Enter..."
				name="amount"
				type="number"
				min="0"
				step="0.01"
				idx={this.props.id}
				isInvalid={this.state.invalid}
				onChange={(event) => this.handleChange(event)}
				>
			</Form.Control>
		</Col>
		<Col>
			<span>{this.props.unit} of...</span>
		</Col>
		<Col>
			<Form.Control

				as="select"
				name="type"
				type="select"
				idx={this.props.id}
				onChange={(event) => this.handleChange(event)}>
				{this.options.map(option => ( // Map state options to multi-select
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</Form.Control>
		</Col>
	</Row>


		)
}


}
export default CalcForm;
