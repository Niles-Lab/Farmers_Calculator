import React from "react"
import { Table } from 'react-bootstrap';
import SilvoGraph from './SilvoGraph.jsx'

const yrs = 2;

const opts = ["WP", "WOP"];

const labels = ["",
				"Area", 
				"Inputted Land", 
				"Cost Per...", 
				"Cost Per...(" + yrs + " yrs)", 
				"Return Per...", 
				"Return Per...(" + yrs + " yrs)", 
				"Profit Per...", 
				"Profit Per...(" + yrs + " yrs)", 
				"Total Cost",
				"Total Cost...(" + yrs + " yrs)",
				"Total Revenue",
				"Total Revenue...(" + yrs + " yrs)",
				"NPV"]



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
	return [land.toFixed(2), 0];
}
costPer() {
	return [(this.prop.land * 5).toFixed(2), (this.prop.land * 3).toFixed(2)];
}
costPerYr(yrs) {
	const costs = this.costPer();
	return [(costs[0] * 365).toFixed(2), 0];
}
returnPer() {
	return [100, 100];
}
returnPerYr(yrs) {
	const costs = this.returnPer();
	return [costs[0] * 365, costs[1] * 365];
}
profitPer() {
	return [100, 100];
}
profitPerYr(yrs) {
	const costs = this.profitPer();
	return [costs[0] * 365, costs[1] * 365];
}
totalProjArea(area) {
	return [area, area];
}
totalCost() {
	return [100, 100];
}
totalCostYr(yrs) {
	const costs = this.totalCost();
	return [costs[0] * 365, costs[1] * 365];
}
totalRevenue(yrs) {
	return [101010, 100000];
}
// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
npv() {
	var revenue = this.totalRevenue();
	var cost = this.totalCost();
	return [revenue[0]-cost[0], revenue[1]-cost[1]];
}

constructor(props) {
	super(props);
	this.prop = this.props;
}

render() {

	this.prop = this.props;
	const rows = this.calculate(this.prop.land, 2);

	return (

		<>
			<SilvoGraph {...this.props} />
			<Table className="box" className="mt-5" responsive="lg" flush striped bordered hover>
				<thead>

				</thead>
				<tbody>
						<tr>
							<td></td>

							<tr>
							{labels.map((label,idx) => (
								
									<th key={idx}>
										{label}
									</th>
								
								))}
							</tr>

						</tr>
						{this.props.options.map((opt,i) => (
							<tr key={i}>
								<td>
								{opt}
								</td>
									{opts.map((wp,j) => (
									<tr>
										<td>{wp}</td>
										{rows.map((row,k) => (

											<td key={k}>
												{row[j]}
											</td>

											))}
									</tr>
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