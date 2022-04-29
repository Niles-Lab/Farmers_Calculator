import React, { useEffect, useState } from "react"
import EconomicTool from './EconomicTool.jsx'
//import SilvoBar from './SilvoBar.jsx'
import * as d3 from "d3";


function Calculator(props) {

// D3 visualization graph width
const graphWidth = 800;
//const graphWidth = this.sizeRef.current.offsetWidth;


var annualDieselCost;

// Create data per year for returns/costs
//let data = [];
const [data, setData] = useState([]);

const [yIntercept, setYIntercept] = useState(0);

var acreFt = props.unit === "Acres" ?  43560 : 107639;

// Derive calculated values from props
let productivity = props.opts.effectiveProperty[0] / 100;

// Set calculated values before using them later
if(props.method === "silvopasture") {

  if(props.subVariant === "Crop Silvopasture") {

    
    var netRevenue = props.opts.baseCropRevenue[0] - props.opts.baseCropCost[0];
    props.opts["netRevenueDisabled"][0] = netRevenue;

    var treePlantingCost = props.opts.treeSeedlingCost[0] + props.opts.treeLaborCost[0];
    props.opts["treePlantingCostDisabled"][0] = treePlantingCost;

    var treesPerAcre = acreFt / (props.opts.treeSpacing[0]**2);
    props.opts["treesPlantedDisabled"][0] = treesPerAcre;

    var pastureArea = (acreFt-(treesPerAcre*(Math.PI)*(3**2)))/acreFt;
    props.opts["pastureAreaDisabled"][0] = pastureArea;

  } else {

  }

}
if(props.method === "irrigation") {

  if(props.irrTech === "Sprinkler Irrigation") {

    if(props.opts.sprinklerSpacing) {

    var sprinklerCount = acreFt / (props.opts.sprinklerSpacing[0]**2);
    props.opts["sprinklerCountDisabled"][0] = sprinklerCount;
    
    annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
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

    annualDieselCost = (1.15*props.opts.dieselCost[0]/16.49)*props.opts.hourlyPump[0]*props.opts.pumpSize[0]*props.opts.dailyPumpUse[0];
    props.opts["annualDieselCostDisabled"][0] = annualDieselCost;

    }

  }
}
if(props.method === "tarping") {

  //var tarpArea = acreFt / (props.opts.bedSpacing[0]/2);
  var tarpArea = acreFt * (props.opts.tarpAreaUsr[0]/100);
  props.opts["tarpAreaDisabled"][0] = tarpArea;

  // To get total tarp square footage
  // var costTotal = props.opts.costPerFt[0] / tarpArea;
  var costTotal = props.opts.costPerFt[0];
  props.opts["tarpCostDisabled"][0] = costTotal;

  var tarpLabor = props.opts.tarpLabor[0]*props.opts.tarpLaborCost[0];
  props.opts["totalLaborDisabled"][0] = tarpLabor;

}



useEffect(() => {

// 43560 feet in an acre, 107639 in a hectare
acreFt = props.unit === "Acres" ?  43560 : 107639;
var totalProfit = 0;
let tmpData = [];


// Map each data point with:
// x -> year
// y -> revenue, cost, net gain
d3.range(0, parseInt(props.length)).forEach(d => {


  let rev = 0;
  let cst = 0;

  if(props.method === "silvopasture") {
  

    if(props.subVariant === "Crop Silvopasture") {

      // rev = (parseInt(d) >= props.opts.maturingYears[0] ? parseFloat(treesPerAcre*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]) : 0) + (parseFloat(productivity*netRevenue*pastureArea));
      if(parseInt(d) >= props.opts.maturingYears[0]) { // Tree has matured
        rev = parseFloat(treesPerAcre*props.opts.treeCropPrice[0]*props.opts.treeCropYield[0]*productivity) + parseFloat(netRevenue*pastureArea);
      } else { // Tree has not yet matured
        rev = parseFloat(productivity*netRevenue*pastureArea);
      }


      cst = (parseInt(d) < 1 ? (treesPerAcre*treePlantingCost)+(props.opts["fencingLength"][0] * props.opts["fencingCost"][0]) : treesPerAcre * props.opts.treeCost[0])    

    } else { // Timber silvopasture


      rev = 0;
      cst = 0;

    }

  
  }
  else if(props.method === "irrigation") {
  

    // Calculate individually for spray and drip irrigation
    if(props.irrTech === "Sprinkler Irrigation") {
  
      rev = (props.opts.baseCropRevenue[0] * (productivity-1)) + ((props.opts.cropLoss[0]/100)*props.opts.baseCropRevenue[0]);

      cst = parseInt(d) === 0 
      ? ((sprinklerCount*props.opts.sprinklerCost[0]) + (props.opts.pipeCost[0]*pipeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) // First year costs
      : props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   

    } else { // Drip irrigation calculation


      rev = (props.opts.baseCropRevenue[0] * (productivity-1)) + ((props.opts.cropLoss[0]/100)*props.opts.baseCropRevenue[0]);
      cst = parseInt(d) === 0 
      ? ((fittingCount*props.opts.fittingCost[0]) + (props.opts.tapeCost[0]*tapeLength) + (props.opts.pumpSize[0]*props.opts.pumpCost[0]) + annualDieselCost) // First year costs
      : props.opts.maintenanceCost[0]+annualDieselCost; // Ongoing maintenance   


    }



  } else if(props.method === "tarping") {

    let cost = 0;

    cost += ((d%Math.round(props.opts.tarpDurability[0])) === 0) ? (tarpArea * costTotal)+props.opts.tarpSecuringCost[0] : 0; // Cost to replace tarp after durability expires

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

/**
 * 
 * The precise break-even point between cumulative revenue points x1 and x2, such that
 * x1 <= 0 && x2 > 0 is attained by:
 * 1. Find x1 by bisecting 0 into the sorted array 
 * 2. Given index of x1 and x2, find difference between y1 and y2
 * 3. Find distance from y1 to 0 to see how far from x1 our point is
 * 4. Divide (0-y1)/(y2-y1)
 * 5. yee haw!
 * 
 */
let pt = d3.bisect(tmpData.map(d => d.value), 0);
let diff;

if(pt >= 1 && pt < tmpData.length) {
  diff = (0-tmpData[pt-1].value)/(tmpData[pt].value - tmpData[pt-1].value);
  setYIntercept(pt+diff);
} else {
  setYIntercept(-1);
}







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