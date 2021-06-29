import React from "react"
import { Form, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

class CalcForm extends React.Component {

// Global variables for option selections
options = ["Land", "Vegetables", "Fruits", "Livestock"];

state = {
	type: "Unknown",
	amount: 0
};	


constructor(props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
}


handleChange(event) {

	this.props.onChange(event); 
	// const target = event.target;
	// const name = target.name;
	// let value = target.value;


	// this.setState({
	// 	[name]: value
	// });
}

render() {

	const type = this.props.type;
	const amount = this.props.amount;
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
				value={this.state.acres}
				onChange={this.handleChange}>
			</Form.Control>
		</Col>
		<Col>
			<span>Acres of...</span>
		</Col>
		<Col>
			<Form.Control

				as="select"
				name="type"
				type="select"
				idx={this.props.id}
				onChange={this.handleChange}>
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
