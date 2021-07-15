import React from "react"
import { Form, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



class CalcForm extends React.Component {



// Global variables for option selections
options = ["Land", "Vegetables", "Fruits", "Livestock"];

state = {
	type: "Unknown",
	amount: 0,
	invalid: false
};	


constructor(props) {
	super(props);

}


handleChange(event) {
	this.props.onChange(event);

	// const target = event.target;
	// const name = target.name;
	// let value = target.value;

	if(event.target.type == "number") {
		console.log(parseFloat(event.target.value));
		let invd = parseFloat(event.target.value) >= 0 ? false : true;
		this.setState({
			invalid: invd
		})
	}
	// this.setState({
	// 	[name]: value
	// });
}
posNum(event) {
	//return event.target.value > 0 ? event.target.value : (-1 * parseFloat(event.target.value));

	return ;
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
				onChange={(event) => this.handleChange(event)}
				isInvalid={this.state.invalid}
				>
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
