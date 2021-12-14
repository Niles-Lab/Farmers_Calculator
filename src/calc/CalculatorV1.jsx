import React, { useEffect } from "react"
import EconomicTool from './EconomicTool.jsx'
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


// Create data per year for returns/costs
let data = [];

// Total profit gained over time
let totalProfit = 0;


// Derive calculated values from props
let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
let productivity = props.opts.effectiveProperty[0] / 100;



if(props.method === "silvopasture") {


// Overview of options
// let silvoptions = {
//   baseCropRevenue: [450, "$", "Grazing Revenue"],
//   baseCropCost: [300, "$", "Base Grazing Cost"],
//   treeSpacing: [30, "ft", "Tree Spacing"],
//   treePlantingCost: [9.5, "$", "Tree Planting Cost"],
//   treesPerAcre: [48, "Tr/Acre", "Trees Per Acre"],
//   treeCost: [2.50, "$/yr", "Tree Maintenance Cost"],
//   treeCropYield: [2, "$/Unit", "Tree Crop Yield"],
//   treeCropPrice: [5, "$/Unit", "Tree Crop Price"],
//   effectiveProperty: [80, "%", "Effective Property"]
// }



// // Derive calculated values from props
// let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
// let productivity = props.opts.effectiveProperty[0] / 100;

// Map each data point with:
// x -> year
// y -> revenue from trees
netRevenue = props.opts.grazingRevenue[0] - props.opts.baseGrazingCost[0];
d3.range(0, parseInt(props.length)+1).forEach(d => {

  let rev = (parseInt(d) >= maturingYears ? parseFloat(props.opts.treesPerAcre[0]*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]) : 0) + parseFloat(netRevenue*productivity);
  let cst = (parseInt(d) < 1 ? props.opts.treesPerAcre[0]*props.opts.treePlantingCost[0] : props.opts.treesPerAcre[0] * props.opts.treeCost[0])

  totalProfit += rev-cst;


  data.push({
    year: d,
    revenue: rev,
    cost: -cst,
    value: totalProfit
  })
});

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


// let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
// let productivity = props.opts.effectiveProperty[0] / 100;

d3.range(0, parseInt(props.length)+1).forEach(d => {
  
  let rev = props.opts.baseCropRevenue[0] * (productivity-1)
  let cst = parseInt(d) === 0 ? (parseFloat(props.opts.sprinklerCount[0]*props.opts.sprinklerCost[0]) + parseFloat(props.opts.pipeLength[0]*props.opts.pipeCost[0]) + parseFloat(props.opts.pumpSize[0]*props.opts.pumpCost[0])): // First year costs
    props.opts.maintenanceCost[0]; // Ongoing maintenance

  totalProfit += rev-cst;


  data.push({
    year: d,
    revenue: rev,
    cost: -cst,
    value: totalProfit
  })
}
);


}
else {


// let tarpoptions = {
//   baseCropRevenue: [2500, "$", "Base Crop Revenue"],
//   baseCropCost: [1500, "$", "Base Crop Cost"],
//   bedSpacing: [8, "Ft", "Bed Spacing"],
//   tarpLength: [5445, "Ft", "Tarp Length"],
//   tarpCost: [0.70, "$/Ft", "Tarp Cost"],
//   coverCropCost: [150, "$/Ac", "Cover Crop Cost"], // Effective every OTHER year, starting with 0
//   maintenanceCost: [50, "$/Acre/Yr", "Maintenance Cost"],
//   effectiveProperty: [120, "%", "Productivity With Tarp & Cover Crop"]
// }

// let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
// let productivity = props.opts.effectiveProperty[0] / 100;


d3.range(0, parseInt(props.length)+1).forEach((d,idx) => {
  
  let rev = props.opts.baseCropRevenue[0] * (productivity-1);
  let cst = (parseInt(d) === 0 ? props.opts.tarpLength[0] * props.opts.tarpCost[0] :
    props.opts.maintenanceCost[0]) // Ongoing Maintenance
    + (parseInt(d) % 2 == 0 ? props.opts.coverCropCost[0] : 0); // Is this a maintenance year?

  totalProfit += rev-cst;


  data.push({
    year: d,
    revenue: rev,
    cost: -cst,
    value: totalProfit
  })
});

}


let range = 1000;
let largest = 0;
let smallest = 0;

// X / Y Domains
let xDom = [0,parseInt(props.length)+1];
let yDom = [-range,range];

data.forEach(d => {

  let ts = d3.min([d.revenue, d.cost, d.value]);
  let tl = d3.max([d.revenue, d.cost, d.value]);
  largest = largest < tl ? tl : largest;
  smallest = smallest > ts ? ts : smallest;
  // if(d.revenue >= largest) largest = d.revenue;
  // if(d.cost >= largest) largest = d.cost;
  // if(d.value >= largest) largest = d.value;
});

// Resize graph if largest value exceeds current domain
// if(range <= largest) {
//   range = largest*1.25;
//   yDom = [-range,range];
// } else {
//   yDom = [-range,range];
// }
yDom = [smallest*1.25, largest*1.25];



// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {

  let npvr = 0;
  let npvc = 0;


  for(var i = 0; i<data.length;i++) {
    npvr += (data[i].revenue)/(1+props.rate)**(i+1);
    npvc += (data[i].cost)/(1+props.rate)**(i+1);
  }

  return [

  ["Revenue", npvr],
  ["Costs", npvc]

  ];
}

console.log(data);
return (

	<EconomicTool key={props.key} npv={npv()} width={graphWidth} range={range} data={data} xDom={xDom} yDom={yDom} {...props} />

)


}
export default Calculator;