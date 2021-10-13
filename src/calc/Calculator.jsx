import React from "react"
import { Table } from 'react-bootstrap';
import SilvoGraph from './SilvoGraph.jsx'
import SilvoBar from './SilvoBar.jsx'

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



function Calculator(props) {



// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree", "$5", "$2"]
function calculate(land, yrs) {
	var rows = [
	totalProjArea(land),
	totalManualLand(),
	costPer(),
	costPerYr(yrs),
	returnPer(),
	returnPerYr(yrs),
	profitPer(),
	profitPerYr(yrs),
	totalCost(),
	totalCostYr(yrs),
	totalRevenue(),
	totalRevenue(yrs),
	npv()
	];

	return rows;
}


function totalManualLand() {
	let land = 0;
	props.crops.forEach(crop => land += parseFloat(crop.amount))
	return [land.toFixed(2), 0];
}
function costPer() {
	return [(props.land * 5).toFixed(2), (props.land * 3).toFixed(2)];
}
function costPerYr(yrs) {
	const costs = costPer();
	return [(costs[0] * 365).toFixed(2), 0];
}
function returnPer() {
	return [100, 100];
}
function returnPerYr(yrs) {
	const costs = returnPer();
	return [costs[0] * 365, costs[1] * 365];
}
function profitPer() {
	return [100, 100];
}
function profitPerYr(yrs) {
	const costs = profitPer();
	return [costs[0] * 365, costs[1] * 365];
}
function totalProjArea(area) {
	return [area, area];
}
function totalCost() {
	return [100, 100];
}
function totalCostYr(yrs) {
	const costs = totalCost();
	return [costs[0] * 365, costs[1] * 365];
}
function totalRevenue(yrs) {
	return [101010, 100000];
}
// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {
	var revenue = totalRevenue();
	var cost = totalCost();
	return [revenue[0]-cost[0], revenue[1]-cost[1]];
}

const rows = calculate(props.land, 2);
return (


		<>
			<Table className="box" className="mt-5" responsive="lg" striped bordered hover>
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
						{props.options.map((opt,i) => (
							<tr key={i}>
								<td>
								{opt}
								</td>
									{opts.map((wp,j) => (
									<tr key={wp+"-"+(i+j+1)}>
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
			<SilvoGraph {...props} />
			<SilvoBar {...props} />
		</>

)


}
export default Calculator;