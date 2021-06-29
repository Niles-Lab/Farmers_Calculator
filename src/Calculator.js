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


	return (

	<Row>
		<Col>
			<div>
				<p>{this.state.land + this.state.acres} Total Land!</p>
			</div>
		</Col>
	</Row>


		)
}


}
export default Calculator;
