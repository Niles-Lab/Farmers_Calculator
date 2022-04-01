import React, { useEffect, useState } from "react"
import EconomicTool from './EconomicTool.jsx'
//import SilvoBar from './SilvoBar.jsx'
import * as d3 from "d3";


function Calculator(props) {

// D3 visualization graph width
const graphWidth = 800;
//const graphWidth = this.sizeRef.current.offsetWidth;




// Create data per year for returns/costs
//let data = [];
const [data, setData] = useState([]);

const [yIntercept, setYIntercept] = useState(0);

var acreFt = props.unit === "Acres" ?  43560 : 107639;

// Derive calculated values from props
let productivity = props.opts.effectiveProperty[0] / 100;

// Set calculated values before using them later
if(props.method === "silvopasture") {

  var netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
  props.opts["netRevenueDisabled"][0] = netRevenue;

  var treePlantingCost = props.opts.treeSeedlingCost[0] + props.opts.treeLaborCost[0];
  props.opts["treePlantingCostDisabled"][0] = treePlantingCost;

  var treesPerAcre = acreFt / (props.opts.treeSpacing[0]**2);
  props.opts["treesPlantedDisabled"][0] = treesPerAcre;


}
if(props.method === "irrigation") {

  if(props.irrTech === "Spray Irrigation") {

    if(props.opts.sprinklerSpacing) {

    var sprinklerCount = acreFt / (props.opts.sprinklerSpacing[0]**2);
    props.opts["sprinklerCountDisabled"][0] = sprinklerCount;
    
    var annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
    props.opts["annualDieselCostDisabled"][0] = annualDieselCost;

    var pipeLength = acreFt / props.opts.sprinklerSpacing[0];
    props.opts["pipeLengthDisabled"][0] = pipeLength;

    }


  } else { // Drip Irrigation Calculated Values

    if(props.opts.cropRowSpacing) {

    var tapeLength = acreFt / props.opts.cropRowSpacing[0];
    props.opts["tapeLengthDisabled"][0] = tapeLength;

    var fittingCount = Math.round(props.opts.fittingSpacing[0] > 0 ? tapeLength / props.opts.fittingSpacing[0] : 0);
    props.opts["fittingCountDisabled"][0] = fittingCount;

    var annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
    props.opts["annualDieselCostDisabled"][0] = annualDieselCost;

    }

  }
}
if(props.method === "tarping") {

  var tarpArea = acreFt / (props.opts.bedSpacing[0]/2);
  props.opts["tarpAreaDisabled"][0] = tarpArea;

  // To get total tarp square footage
  var costTotal = props.opts.costPerFt[0] / props.opts.bedSpacing[0];
  props.opts["tarpCostDisabled"][0] = costTotal;

  
  var tarpLabor = props.opts.tarpLabor[0]*props.opts.tarpLaborCost[0];
  props.opts["totalLaborDisabled"][0] = tarpLabor;

}



useEffect(() => {

// 43560 feet in an acre, 107639 in a hectare
var acreFt = props.unit === "Acres" ?  43560 : 107639;
var totalProfit = 0;
let tmpData = [];


// Map each data point with:
// x -> year
// y -> revenue, cost, net gain
d3.range(0, parseInt(props.length)+1).forEach(d => {


  let rev = 0;
  let cst = 0;

  if(props.method === "silvopasture") {
  

    rev = (parseInt(d) >= props.opts.maturingYears[0] ? parseFloat(treesPerAcre*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]) : 0) + parseFloat(netRevenue*productivity);
    cst = (parseInt(d) < 1 ? treesPerAcre*treePlantingCost : treesPerAcre * props.opts.treeCost[0])    

    //cst = (parseInt(d) < 1 ? props.opts.treesPerAcre[0]*treePlantingCost : props.opts.treesPerAcre[0] * props.opts.treeCost[0])    
  
  }
  else if(props.method === "irrigation") {
  

    // Calculate individually for spray and drip irrigation
    if(props.irrTech === "Spray Irrigation") {
  
      rev = props.opts.baseCropRevenue[0] * (productivity-1)
      cst = parseInt(d) === 0 ? ((sprinklerCount*props.opts.sprinklerCost[0]) + (props.opts.pipeCost[0]*pipeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) : // First year costs
      props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   

    } else { // Drip irrigation calculation


      rev = props.opts.baseCropRevenue[0] * (productivity-1)
      cst = parseInt(d) === 0 ? ((fittingCount*props.opts.fittingCost[0]) + (props.opts.tapeCost[0]*tapeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) : // First year costs
      props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   


    }



  } else if(props.method === "tarping") {

    let cost = 0;

    cost += ((d%Math.round(props.opts.tarpDurability[0])) === 0) ? (tarpArea * costTotal) : 0; // Initial cost, one time only

    cost += (d % 2 === 0) ? tarpLabor : props.opts.coverCropCost[0]; // Labor is paid every other year, cover crop cost is paid every other year

    cost += (d > 0 && (d % 2 === 0)) ? props.opts.maintenanceCost[0] : 0; //

    cst = cost;

    rev = props.opts.baseCropRevenue[0] * (productivity-1);



  }
  
  totalProfit += rev-cst;

  tmpData.push({
    year: d+1,
    revenue: (rev*props.land),
    cost: -(cst*props.land),
    value: (totalProfit*props.land)
  })



});

setData(tmpData);

// Distance from x1 to x2 given y1 and y2 = ()
let pt = d3.bisect(tmpData.map(d => d.value), 0);
let diff = (0-tmpData[pt-1].value)/(tmpData[pt].value - tmpData[pt-1].value);

setYIntercept(pt+diff);



}, [props.opts, props.length, props.land, props.unit])






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
let xDom = [1,parseInt(props.length)+1];
let yDom = [smallest*1.25, largest*1.25];



// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {

  let npvr = 0;
  let npvc = 0;

  for(var i = 0; i<data.length-1;i++) {
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

	<EconomicTool key={props.variant}
   npv={npv()}
   width={graphWidth}
   range={range}
   data={data}
   xDom={xDom}
   yDom={yDom}
   yIntercept={yIntercept}
   {...props} />

)


}
export default Calculator;