import React from "react"
import SilvoGraph from './SilvoGraph.jsx'
//import SilvoBar from './SilvoBar.jsx'
import * as d3 from "d3";






function Calculator(props) {

// D3 visualization graph width
const graphWidth = 800;
//const graphWidth = this.sizeRef.current.offsetWidth;

// How many sq ft in an acre
const acreFt = 43560;

// At what age is a tree mature enough to start producing profits
const maturingYears = 10;










//let treesPerAcre = props.silvoPasture[4][0];
//let treesPerAcre = acreFt / (props.opts.treeSpacing ** 2);

// Create data per year for returns/costs
let data = [];

if(props.method === "silvopasture") {


// Overview of options
// let silvoptions = {
//   grazingRevenue: [450, "$", "Grazing Revenue"],
//   baseGrazingCost: [300, "$", "Base Grazing Cost"],
//   treeSpacing: [30, "ft", "Tree Spacing"],
//   treePlantingCost: [9.5, "$", "Tree Planting Cost"],
//   treesPerAcre: [48, "Tr/Acre", "Trees Per Acre"],
//   treeCost: [2.50, "$/yr", "Tree Maintenance Cost"],
//   treeCropYield: [2, "$/Unit", "Tree Crop Yield"],
//   treeCropPrice: [5, "$/Unit", "Tree Crop Price"],
//   effectiveProperty: [80, "%", "Effective Property"]
// }



// Derive calculated values from props
let netRevenue = props.opts.grazingRevenue[0] - props.opts.baseGrazingCost[0];
let productivity = props.opts.effectiveProperty[0] / 100;

// Map each data point with:
// x -> year
// y -> revenue from trees
netRevenue = props.opts.grazingRevenue[0] - props.opts.baseGrazingCost[0];
d3.range(0, parseInt(props.length)+1).forEach(d =>
  data.push({
    year: d,
    revenue: (parseInt(d) >= maturingYears ? (props.opts.treesPerAcre[0]*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]) : 0) + (netRevenue*productivity),
    cost: (parseInt(d) <= 1 ? props.opts.treesPerAcre[0]*props.opts.treePlantingCost[0] : props.opts.treesPerAcre[0] * props.opts.treeCost[0])
}));

} else if(props.method === "irrigation") {


// Overview of irrigation options
// let irroptions = {
//   baseCropRevenue: [2500, "$/Acre", "Base Crop Revenue"],
//   baseCropCost: [1500, "$/Acre", "Base Crop Cost"],
//   sprinklerSpacing: [40, "Ft", "Sprinkler Spacing"],
//   sprinklerCount: [27, "Head/Acre", "Sprinkler Count"],
//   sprinklerCost: [62.50, "$/Head", "Sprinkler Cost"],
//   pipeLength: [1089, "Ft/Ac", "Pipe Length"],
//   pipeCost: [2.80, "$/Ft", "Pipe Cost"],
//   pumpSize: [10, "HP", "Pump Size"],
//   pumpCost: [710, "$/HP", "Pump Cost"],
//   maintenanceCost: [100, "$/Acre/Yr", "Maintenance Cost"],
//   effectiveProperty: [140, "%", "Productivity With Irrigation"]
// }


let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
let productivity = props.opts.effectiveProperty[0] / 100;

d3.range(0, parseInt(props.length)+1).forEach(d =>
  data.push({
    year: d,
    revenue: props.opts.baseCropRevenue * productivity,
    cost: parseInt(d) === 0 ? 1000 : props.opts.maintenanceCost
}));



}
else {

d3.range(0, parseInt(props.length)+1).forEach(d =>
  data.push({
    year: d,
    revenue: 34235235,
    cost: 23523
}));

}


let range = 1000;
let largest = 0;

// X / Y Domains
let xDom = [0,parseInt(props.length)+1];
let yDom = [0,range];

data.forEach(d => {
  if(d.revenue >= largest) largest = d.revenue;
  if(d.cost >= largest) largest = d.cost;
});

// Resize graph if largest value exceeds current domain
if(range <= largest) {
  yDom = [0,largest*1.25];
  range = largest*1.25;
} else {
  yDom = [0,range];
}






return (

	<SilvoGraph width={graphWidth} range={range} data={data} xDom={xDom} yDom={yDom} {...props} />

)


}
export default Calculator;