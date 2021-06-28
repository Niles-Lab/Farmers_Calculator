import React from "react"
import { Form, Row, Col } from 'react-bootstrap';

class Calculator extends React.Component {


state = {
	type: ["a", "b"],
	amount: 0
};	


constructor(props) {
	super(props);
	this.handleChange = this.handleChange.bind(this);
}


handleChange(event) {

	//this.props.onChange(event); 
	// const target = event.target;
	// const name = target.name;
	// let value = target.value;


	// this.setState({
	// 	[name]: value
	// });
}

render() {


	return (

	<Row>
		<Col>
			<Form.Control

				as="select"
				name="type"
				type="select"
				onChange={this.handleChange}>
					{this.state.type.map(option => ( // Map state options to multi-select
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
export default Calculator;
