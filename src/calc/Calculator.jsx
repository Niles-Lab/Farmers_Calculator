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





// Derive calculated values from props
let netRevenue = props.sp.grazingRevenue[0] - props.sp.baseGrazingCost[0];
let productivity = props.sp.effectiveProperty[0] / 100;




//let treesPerAcre = props.silvoPasture[4][0];
//let treesPerAcre = acreFt / (props.sp.treeSpacing ** 2);

// Create data per year for returns/costs
let data = [];


// Map each data point with:
// x -> year
// y -> revenue from trees
netRevenue = props.sp.grazingRevenue[0] - props.sp.baseGrazingCost[0];
d3.range(0, parseInt(props.length)+1).forEach(d =>
  data.push({
    year: d,
    revenue: (parseInt(d) >= maturingYears ? (props.sp.treesPerAcre[0]*props.sp.treeCropPrice[0]*props.sp.treeCropYield[0]) : 0) + (netRevenue*productivity),
    cost: (parseInt(d) <= 1 ? props.sp.treesPerAcre[0]*props.sp.treePlantingCost[0] : props.sp.treesPerAcre[0] * props.sp.treeCost[0])
}));

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