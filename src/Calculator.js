import React from "react"
import { Row, Col, Container, Table } from 'react-bootstrap';


const opts = ["", "Unit of measure", "WP", "WOP"]


class Calculator extends React.Component {

// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree(USD)", "$5", "$2"]
calculate() {

}

costPerTree() {

}
costPerTreeYr() {

}
returnPerTree() {

}
returnPerTreeYr() {

}
profitPerTree() {

}
profitPerTreeYr() {

}
totalProjArea() {

}
npv() {

}

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
	<Container>
		<Row>
			<Col>
				<div>
					<p>{parseFloat(this.state.land) + parseFloat(this.state.acres)} Total Land!</p>
					<p>{this.state.crops.reduce((a,v) => a + parseFloat(v.amount), 0)} Acres Total</p>

				</div>
			</Col>
		</Row>
		<Row>
			<Table responsive variant="dark">
				<thead>
					<tr>
						<td>1</td>
					{Array.from({ length: 12 }).map((_, index) => (
						<td key={index}>Table cell {index}</td>
						))}	
					</tr>
					<tr>
						<td>1</td>
					{Array.from({ length: 12 }).map((_, index) => (
						<td key={index}>Table cell {index}</td>
						))}	
					</tr>
					<tr>
						<td>2</td>
					{Array.from({ length: 12 }).map((_, index) => (
						<td key={index}>Table cell {index}</td>
						))}	
					</tr>
				</thead>
			</Table>
		</Row>
	</Container>


		)
}


}
export default Calculator;
