import { React } from "react"
import SilvoGraph from './SilvoGraph.jsx'
//import SilvoBar from './SilvoBar.jsx'
import * as d3 from "d3";

const yrs = 2;


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


// const labels = ["", "Per Acre", 
// 				"Total Area"];


// D3 visualization graph width
const graphWidth = 800;

function Calculator(props) {

console.log(props);

// How many sq ft in an acre
const acreFt = 43560;

// At what age is a tree mature enough to start producing profits
const maturingYears = 10;


// // Derive calculated values from props
// let netRevenue = props.silvoPasture[0][0] - props.silvoPasture[1][0];
// let productivity = props.silvoPasture[7][0] / 100;

// // Read other props in for easier access
// let plantingCost = props.silvoPasture[3][0];
// let maintenance = props.silvoPasture[5][0];
// let cropPrice = props.silvoPasture[8][0];
// let treeYield = props.silvoPasture[6][0];
// let treeSpacing = props.silvoPasture[2][0];



// Derive calculated values from props
let netRevenue = props.sp.grazingRevenue[0] - props.sp.baseGrazingCost[0];
let productivity = props.sp.effectiveProperty[0] / 100;

// // Read other props in for easier access
// let plantingCost = props.silvoPasture.treePlantingCost[0];
// let maintenance = props.silvoPasture.treeMaintenanceCost[0];
// let cropPrice = props.silvoPasture[8][0];
// let treeYield = props.silvoPasture[6][0];
// let treeSpacing = props.silvoPasture[2][0];



//let treesPerAcre = props.silvoPasture[4][0];
let treesPerAcre = acreFt / (props.sp.treeSpacing ** 2);




// Main method for calculations - this should be called on render to calculate all table cells
// Each individual calculation method will output a tuple of [Title(Unit), Value With Project(WP), Value Without Project(WOP)]
// e.g costPerTree() may return ["Cost Per Tree", "$5", "$2"]
// function calculate(land) {
// 	var rows = [
// 	npv()
// 	];

// 	return rows;
// }

// Create data per year for returns/costs
let data = [];

d3.range(1, props.length+1).forEach(d =>
	data.push({
		year: d,
		revenue: (parseInt(d) >= maturingYears ? (props.sp.treesPerAcre*props.sp.cropPrice*props.sp.treeYield) : 0) + netRevenue*productivity,
		cost: (parseInt(d) === 1 ? treesPerAcre*props.sp.plantingCost : props.sp.treesPerAcre * props.sp.treeMaintenance)
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






return (

		<SilvoGraph width={graphWidth} {...props} />


)


}
export default Calculator;