import React from "react"
import { Table } from 'react-bootstrap';


const opts = ["", "WP", "WOP"];
let keyCount = 0;

class Calculator extends React.Component {



// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree", "$5", "$2"]
calculate(land, yrs) {
	var rows = [
	this.totalProjArea(land),
	this.totalManualLand(),
	this.costPer(),
	this.costPerYr(yrs),
	this.returnPer(),
	this.returnPerYr(yrs),
	this.profitPer(),
	this.profitPerYr(yrs),
	this.totalCost(),
	this.totalCostYr(yrs),
	this.totalRevenue(),
	this.totalRevenue(yrs),
	this.npv()
	];

	return rows;
}


totalManualLand() {
	let land = 0;
	this.props.crops.forEach(crop => land += parseFloat(crop.amount))
	return ["Inputted Land", land.toFixed(2), 0];
}
costPer() {
	return ["Cost Per " + "Tree", (this.prop.land * 5).toFixed(2), (this.prop.land * 3).toFixed(2)];
}
costPerYr(yrs) {
	const costs = this.costPer();
	return [costs[0] + "(" + yrs + " yrs)", (costs[1] * 365).toFixed(2), (costs[2] * 365).toFixed(2)];
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
	this.prop = this.props;
	this.prop.land = this.prop.unit === "Acres" ? parseFloat(this.prop.land) : parseFloat(this.prop.land) * 2.47105;
}

genKey() {
	return keyCount++;
}

// handleChange(event) {

// }

render() {

	this.prop = this.props;
	let land = this.prop.unit === "Acres" ? parseFloat(this.prop.land) : parseFloat(this.prop.land) * 2.47105;
	//this.prop.land = land;
	const rows = this.calculate(land, 2);

	return (

		<>
			<Table className="box" responsive="lg" striped bordered hover>
				<thead>
					<tr>
					{opts.map(opt => (
						<td key={opts.indexOf(opt)}>{opt}</td>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map(row => (
						<tr key={'r'+rows.indexOf(row)}>
						{row.map(col => (
								<td key={this.genKey()}>{col}</td>
							))}
						</tr>
						))}
				</tbody>
			</Table>
		</>



		)
}


}
export default Calculator;
