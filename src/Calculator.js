import React from "react"
import { Row, Col } from 'react-bootstrap';

class Calculator extends React.Component {

constructor(props) {
	super(props);
	//this.handleChange = this.handleChange.bind(this);
	this.state = this.props.vals;
}


// handleChange(event) {

// }

render() {

	this.state = this.props.vals;
	return (

	<Row>
		<Col>
			<div>
				<p>{parseFloat(this.state.land) + parseFloat(this.state.acres)} Total Land!</p>
				<p>{this.state.crops.reduce((a,v) => a + parseFloat(v.amount), 0)} Acres Total</p>

			</div>
		</Col>
	</Row>


		)
}


}
export default Calculator;
