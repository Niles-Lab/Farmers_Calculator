import React, { useEffect, useState } from "react"
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
//let data = [];
const [data, setData] = useState([]);

// Total profit gained over time
let totalProfit = 0;


// Derive calculated values from props
let netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
let productivity = props.opts.effectiveProperty[0] / 100;




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

// Overview of irrigation options
// const irroptions = {
//   baseCropRevenue: [2500, "$/Acre", "Base Crop Revenue"],
//   baseCropCost: [1500, "$/Acre", "Base Crop Cost"],
//   sprinklerSpacing: [40, "Ft", "Sprinkler Spacing"],
//   //sprinklerCount: [27, "Head/Acre", "Sprinkler Count"],
//   sprinklerCost: [62.50, "$/Head", "Sprinkler Cost"],
//   pipeLength: [1089, "Ft/Ac", "Pipe Length"],
//   pipeCost: [2.80, "$/Ft", "Pipe Cost"],
//   pumpSize: [10, "HP", "Pump Size"],
//   pumpCost: [710, "$/HP", "Pump Cost"],
//   dailyPumpUse : [8, "Hr/Day", "Daily Pump Use"],
//   hourlyPump: [90, "Days/Yr", "Hourly Pump"],
//   dieselCost: [3.40, "$/Gal", "Diesel Fuel Cost"],
//   maintenanceCost: [100, "$/Acre/Yr", "Maintenance Cost"],
//   effectiveProperty: [150, "%", "Productivity With Irrigation"]
// }

// const tarpoptions = {
//   baseCropRevenue: [2500, "$", "Base Crop Revenue"],
//   baseCropCost: [1500, "$", "Base Crop Cost"],
//   bedSpacing: [8, "Ft", "Bed Spacing"],
//   tarpLength: [5445, "Ft", "Tarp Length"],
//   tarpCost: [0.70, "$/Ft", "Tarp Cost"],
//   tarpLabor: [4, "Hr/Acre", "Tarp Labor"],
//   tarpLaborCost: [20.00, "$/Hr", "Tarp Labor Cost"],
//   coverCropCost: [150, "$/Ac", "Cover Crop Cost"], // Effective every OTHER year, starting with 0
//   maintenanceCost: [50, "$/Acre/Yr", "Maintenance Cost"],
//   effectiveProperty: [120, "%", "Productivity With Tarp & Cover Crop"]
// }



useEffect(() => {

let tmpData = [];

// Map each data point with:
// x -> year
// y -> revenue, cost, net gain
d3.range(0, parseInt(props.length)).forEach(d => {


  let rev = 0;
  let cst = 0;

  if(props.method === "silvopasture") {
  
    // Total Labor Costs
    let treePlantingCost = props.opts.treeSeedlingCost[0] + props.opts.treeLaborCost[0];

    rev = (parseInt(d) >= maturingYears ? parseFloat(props.opts.treesPerAcre[0]*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]) : 0) + parseFloat(netRevenue*productivity);
    cst = (parseInt(d) < 1 ? props.opts.treesPerAcre[0]*treePlantingCost : props.opts.treesPerAcre[0] * props.opts.treeCost[0])    
  
  }
  else if(props.method === "irrigation") {
  

    // Calculate individually for spray and drip irrigation
    if(props.irrTech === "Spray Irrigation") {

      let sprinklerCount = acreFt / (props.opts.sprinklerSpacing[0]**2);
      let annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
      let pipeLength = acreFt / props.opts.sprinklerSpacing[0];
  
      rev = props.opts.baseCropRevenue[0] * (productivity-1)
      cst = parseInt(d) === 0 ? ((sprinklerCount*props.opts.sprinklerCost[0]) + (props.opts.pipeCost[0]*pipeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) : // First year costs
      props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   

    } else {

      let tapeLength = acreFt / props.opts.cropRowSpacing[0];

      let fittingCount = Math.round(props.opts.fittingSpacing[0] > 0 ? tapeLength / props.opts.fittingSpacing[0] : 0);


      /// TODO: replace this calculator with updated drip irrigation calculator
      // let sprinklerCount = acreFt / (props.opts.sprinklerSpacing[0]**2);
      let annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
      //let pipeLength = acreFt / props.opts.sprinklerSpacing[0];
  
      console.log(fittingCount*props.opts.fittingCost[0])
      rev = props.opts.baseCropRevenue[0] * (productivity-1)
      cst = parseInt(d) === 0 ? ((fittingCount*props.opts.fittingCost[0]) + (props.opts.tapeCost[0]*tapeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) : // First year costs
      props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   


    }



  } else if(props.method === "tarping") {
    
    // To get total tarp square footage
    let costTotal = 0.7 / props.opts.bedSpacing[0];
    let tarpArea = acreFt / (props.opts.bedSpacing[0]/2);

    let labor = props.opts.tarpLabor[0]*props.opts.tarpLaborCost[0];
    let cost = 0;

    cost += ((d%Math.round(props.opts.tarpDurability[0])) === 0) ? (tarpArea * costTotal) : 0; // Initial cost, one time only

    cost += (d % 2 === 0) ? labor : props.opts.coverCropCost[0]; // Labor is paid every other year, cover crop cost is paid every other year

    cost += (d > 0 && (d % 2 === 0)) ? props.opts.maintenanceCost[0] : 0; //



    cst = cost;

    rev = props.opts.baseCropRevenue[0] * (productivity-1);

    // cst = ((parseInt(d) === 0 ? props.opts.tarpLength[0] * props.opts.tarpCost[0] : 0) + // Initial Investment
    //   (parseInt(d) % 2 == 0 ? labor // Ongoing Maintenance
    //     : props.opts.coverCropCost[0]); // Is this a maintenance year?


    // cst = (parseInt(d) === 0 ? props.opts.tarpLength[0] * props.opts.tarpCost[0] :
    //   props.opts.maintenanceCost[0]) // Ongoing Maintenance
    //   + (parseInt(d) % 2 == 1 ? props.opts.coverCropCost[0] : 0); // Is this a maintenance year?

  }
  
  totalProfit += rev-cst;

  tmpData.push({
    year: d+1,
    revenue: rev,
    cost: -cst,
    value: totalProfit
  })

  setData(tmpData);

});



}, [props.opts])






let range = 1000;
let largest = 0;
let smallest = 0;

// X / Y Domains
data.forEach(d => {

  let ts = d3.min([d.revenue, d.cost, d.value]);
  let tl = d3.max([d.revenue, d.cost, d.value]);
  largest = largest < tl ? tl : largest;
  smallest = smallest > ts ? ts : smallest;

});



// Resize graph if largest value exceeds current domain
let xDom = [1,parseInt(props.length)];
let yDom = [smallest*1.25, largest*1.25];



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

  ["PV Benefit", npvr],
  ["PV Cost", npvc],
  ["NPV", npvr+npvc]

  ];
}

return (

	<EconomicTool key={props.variant} npv={npv()} width={graphWidth} range={range} data={data} xDom={xDom} yDom={yDom} {...props} />

)


}
export default Calculator;