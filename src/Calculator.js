import React from "react"
import { Row, Col, Container, Table } from 'react-bootstrap';


const opts = ["", "WP", "WOP"]


class Calculator extends React.Component {



// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree", "$5", "$2"]
calculate(acres, yrs) {
	var rows = [
	this.costPer(),
	this.costPerYr(yrs),
	this.returnPer(),
	this.returnPerYr(yrs),
	this.profitPer(),
	this.profitPerYr(yrs),
	this.totalProjArea(acres),
	this.totalCost(),
	this.totalCostYr(yrs),
	this.totalRevenue(),
	this.totalRevenue(yrs),
	this.npv()
	];

	return rows;
}



costPer() {
	return ["Cost Per " + "Tree", "5", "3"];
}
costPerYr(yrs) {
	const costs = this.costPer();
	return [costs[0] + "(" + yrs + " yrs)", costs[1] * 365, costs[2] * 365];
}
returnPer() {
	return ["Return Per " + "Tree", 100, 100];
}
returnPerYr(yrs) {
	const costs = this.returnPer();
	return [costs[0] + "(" + yrs + " yrs)", costs[1] * 365, costs[2] * 365];
}
profitPer() {
	return ["Profie Per " + "Tree", 100, 100];
}
profitPerYr(yrs) {
	const costs = this.profitPer();
	return [costs[0] + "(" + yrs + " yrs)", costs[1] * 365, costs[2] * 365];
}
totalProjArea(area) {
	return ["Area", area, area];
}
totalCost() {
	return ["Total Cost", 100, 100];
}
totalCostYr(yrs) {
	const costs = this.totalCost();
	return [costs[0] + "(" + yrs + " yrs)", costs[1] * 365, costs[2] * 365];
}
totalRevenue(yrs) {
	return ["Total Revenue", 100000, 100000];
}
// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
npv() {
	var revenue = this.totalRevenue();
	var cost = this.totalCost();
	return ["NPV", revenue[1]-cost[1], revenue[2]-cost[2]];
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
	const rows = this.calculate(this.state.acres);


	return (

		<Row>
			<Table responsive striped bordered hover>
				<thead>
					<tr>
					{opts.map(opt => (
						<td key={opt}>{opt}</td>
						))}
					</tr>

					{rows.map(row => (
						<tr>
						{row.map(col => (


								<td>{col}</td>


							))}
						</tr>
						))}
				</thead>
			</Table>
		</Row>



		)
}


}
export default Calculator;
