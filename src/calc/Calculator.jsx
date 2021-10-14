import React from "react"
import { Table, Container, Col, Row, Card } from 'react-bootstrap';
import SilvoGraph from './SilvoGraph.jsx'
import SilvoBar from './SilvoBar.jsx'
import * as d3 from "d3";

const yrs = 2;

const opts = ["WP", "WOP"];

// const labels = ["",
// 				"Return Per...", 
// 				"Return Per...(" + yrs + " yrs)", 
// 				"Profit Per...", 
// 				"Profit Per...(" + yrs + " yrs)", 
// 				"Total Cost",
// 				"Total Cost...(" + yrs + " yrs)",
// 				"Total Revenue",
// 				"Total Revenue...(" + yrs + " yrs)",
// 				"NPV"]


const labels = ["", "Per Acre", 
				"Total Area"]


// D3 visualization graph width
const graphWidth = 800;

function Calculator(props) {

// How many sq ft in an acre
const acreFt = 43560;

// At what age is a tree mature enough to start producing profits
const maturingYears = 10;


// Derive calculated values from props
let netRevenue = props.silvoPasture[0][0] - props.silvoPasture[1][0];
let productivity = props.silvoPasture[7][0] / 100;

// Read other props in for easier access
let plantingCost = props.silvoPasture[3][0];
let maintenance = props.silvoPasture[5][0];
let cropPrice = props.silvoPasture[8][0];
let treeYield = props.silvoPasture[6][0];
let treeSpacing = props.silvoPasture[2][0];

//let treesPerAcre = props.silvoPasture[4][0];
let treesPerAcre = acreFt / (treeSpacing ** 2);




// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree", "$5", "$2"]
function calculate(land, yrs) {
	var rows = [
	npv()
	];

	return rows;
}

// Create data per year for returns/costs
let data = [];

d3.range(1, props.length+1).forEach(d =>
	data.push({
		year: d,
		revenue: (parseInt(d) >= maturingYears ? (treesPerAcre*cropPrice*treeYield) : 0) + netRevenue*productivity,
		cost: (parseInt(d) === 1 ? treesPerAcre*plantingCost : treesPerAcre * maintenance)
}));

// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {

	let npvr = 0;
	let npvc = 0;

	
	for(var i = 0; i<data.length;i++) {
		npvr += (data[i].revenue/((1+props.rate)**i));
		npvc += (data[i].cost/((1+props.rate)**i));
	}

	return [

	["Revenue", npvr],
	["Costs", npvc]

	];
}


const rows = calculate(props.land, 2);

// Set table / graph view for output
let viewAsGraph = true;
function setView(event) {
	let thisView = event.target.innerHTML;
	viewAsGraph = !viewAsGraph;
	let view = (viewAsGraph ? "View as Table" : "View as Graph");

	event.target.innerHTML = view;
	//view = (thisView === "View as Table") ? "View as Graph" : "View as Table";
	return view;
}

let rendered;
if(viewAsGraph) {

//rendered = 


}

return (



		<Row className="mt-5">
			<Col xs={3}>

			</Col>
			<Col xs={6}>

			<Card>
				<a style={{'cursor': 'pointer'}} onClick={e => setView(e)}>View as Table</a>


				{viewAsGraph ? (
					

				<SilvoGraph width={graphWidth} {...props} />
				// <SilvoBar width={graphWidth} {...props} />
				// <SilvoBar width={graphWidth} {...props} />
				// <SilvoBar width={graphWidth} {...props} />
				// <SilvoBar width={graphWidth} {...props} />
				)
					:


				(<Table bordered striped hover>
					<thead>
						<tr>
							<td>Year</td>
							<td>Revenue</td>
							<td>Cost</td>
						</tr>
					</thead>
					<tbody>
				{data.map((d,idx) => (
					<tr key={idx}>
						<td>{d.year}</td>
						<td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.revenue)}</td>
						<td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.cost)}</td>
					</tr>

					))}
					</tbody>
				</Table>)


				}





			</Card>
			</Col>
			<Col>
				<Container className="mt-5 pt-5" style={{'position': 'sticky', 'top': 0}}>
				<Table hover>
					<thead>
						<tr>
						{labels.map((label,idx) => (
							
								<th key={idx}>
									{label}
								</th>
							
							))}
						</tr>		
					</thead>
					<tbody>
						{npv().map((d,idx) => (
							<tr key={idx}>
								<td>{d[0]}</td>
								<td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1])}</td>
								<td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1]*props.land)}</td>
							</tr>

							))}

					</tbody>
				</Table>
				</Container>
			</Col>
		</Row>



)


}
export default Calculator;