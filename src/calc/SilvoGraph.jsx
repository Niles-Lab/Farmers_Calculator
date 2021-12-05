import React, { useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import * as d3 from "d3";
//import handleViewport from 'react-in-viewport';
//import $ from 'jquery';


// FOR REFERENCE - Here are the options provided in props.silvoPasture
// These must be referenced by index
// let silvoptions = [
	// [450, "$", "Grazing Revenue"],
	// [300, "$", "Base Grazing Cost"],
	// [30, "ft", "Tree Spacing"],
	// [9.5, "$", "Tree Planting Cost"],
	// [48, "tr/acre", "Trees Per Acre"],
	// [2.50, "$/yr", "Tree Maintenance Cost"],
	// [2, "units/tree", "Tree Crop Yield"],
	// [80, "%", "Effective Property"],
	// [5, "$/unit", "Tree Crop Price"]
// ]




// At what age is a tree mature enough to start producing profits
const maturingYears = 10;

// const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
// Define data and constants

// How many sq ft in an acre
const acreFt = 43560;

const labels = ["", "Per Acre", 
        "Total Area"];

let range = 1000;

function SilvoGraph(props) {


const sizeRef = useRef(d3.select("#pgcht"));

// Update margin once size ref is created
const margin = {top: 50, right: 20, bottom: 30, left: 30},
width = 800 - margin.right - margin.left,
height = 500 - (margin.top+margin.bottom);


// Data for legend
const lines = ["Revenue", "Costs", "Average"];

const yearColors = d3.scaleOrdinal().domain(lines)
  .range(["steelblue", "red", "orange"]);

const legendX = parseFloat((width)-margin.left-margin.right-100);
const legendY = parseFloat(margin.top);


let x = d3.scaleLinear()
.range([0,width-((margin.right+margin.left))])

let y = d3.scaleLinear()
.range([height-margin.top-margin.bottom,0])
//let y = d3.scaleBand()
//.range([height-margin.top-margin.bottom, 0])

// Derive calculated values from props
let netRevenue;
let productivity = props.sp.effectiveProperty[0] / 100;

// // Read other props in for easier access

//let treesPerAcre = props.silvoPasture[4][0];
//let treesPerAcre = acreFt / (props.sp.treeSpacing ** 2);

let data = [];

// const legendX = parseFloat((width)-margin.left-margin.right);
// const legendY = parseFloat(margin.top);


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


	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {


    // function handleResize() {
    //   setDimensions({
    //     height: window.innerHeight,
    //     width: window.innerWidth
    //   })
    // }

    // Update margin once size ref is created
    const margin = {top: 50, right: 20, bottom: 30, left: 30},
    width = sizeRef.current.offsetWidth - margin.right - margin.left,
    height = 500 - (margin.top+margin.bottom);

		// Draw physical chart
		drawChart();


	 }, []);




  // Create and label axes of chart, append rectangles with 0 width
	function drawChart() {


    data = [];

    // Map each data point with:
    // x -> year
    // y -> revenue from trees
    netRevenue = props.sp.grazingRevenue[0] - props.sp.baseGrazingCost[0];
    d3.range(1, parseInt(props.length)+1).forEach(d =>
      data.push({
        year: d,
        revenue: (parseInt(d) >= maturingYears ? (props.sp.treesPerAcre[0]*props.sp.treeCropPrice[0]*props.sp.treeCropYield[0]) : 0) + (netRevenue*productivity),
        cost: (parseInt(d) <= 1 ? props.sp.treesPerAcre[0]*props.sp.treePlantingCost[0] : props.sp.treesPerAcre[0] * props.sp.treeCost[0])
    }));

    let x = d3.scaleLinear()
    .range([0,width-((margin.right+margin.left))])

    let y = d3.scaleLinear()
    .range([height-margin.top-margin.bottom,0])


    // Create range and domain arbitrarily
    x.domain([0,parseInt(props.length)+1]);
    y.domain([0,range]);



    // Create the X axis:
    let svg = d3.select("#pgcht")
    .append("svg")
    .attr("width",width)
    .attr("height",height+30)
    .append("g")
    .attr("class", "main")
    .attr("transform",
      "translate(" + margin.left*2 + "," + margin.top + ")");
    //.on("movemove", event => mousemove(event));    


    svg.selectAll("*").remove();

    svg.append("g")
      .attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
      .call(d3.axisBottom(x));

    svg.append("g")

      .call(d3.axisLeft(y));



    //Optional axis labels
    svg.append("text")
      .attr("class", "x label position-absolute")
      .style("font-weight", "bold")
      .attr("text-anchor", "end")
      .attr("x", width/2)
      .attr("y", 0)
      .attr("dy", height-margin.bottom)
      .text("Project Year");


    svg.append("text")
        .attr("class", "y label")
        .style("font-weight", "bold")
        .attr("text-anchor", "end")
        .attr("x", -(height/2)+margin.bottom+margin.top)
        .attr("y", -margin.left)
        .attr("transform", "rotate(-90)")
        .text("Revenue($)");


      // Revenue Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.revenue))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));

      // Costs line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.cost))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));

      // Trend Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y((d.cost + d.revenue) / 2))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));


      // Tree Matured Line
      svg.append("svg:line")
      .attr("class", "line")
      .attr("x1", x(maturingYears))
      .attr("x2", x(maturingYears))
      .attr("y1", y(0))
      .attr("y2", y(range))
      .style("stroke-width", 2)
      .style("stroke", "black")
      .style("stroke-dasharray", ("5, 5"));

      // Tree Matured Label
      svg.append("text")
        .attr("class", "lalel")
        .attr("text-anchor", "start")
        .attr("x", 0)
        .attr("y", (height/3)-margin.top-margin.bottom+20)
        .attr("dx", x(maturingYears)+5)
        .attr("dy", 0)
        .style("font-weight", "bold")
        .text("Trees Matured");

      // Graph Legend

    const legend = svg.append("g")
    .attr("class", "legend");

    // Add arc shape for legend
    legend.selectAll("path")
    .data(lines)
    .join("path")
      // Manually add offset based on index of year
      // Oh boy is this some spaghetti
      // Note - 20 is the offset in this case, as each index is multiplied by 20
      .attr("transform", (d,idx) => "translate(" + parseFloat(legendX-5) + "," + parseFloat((legendY-5) + (idx * 20)) + ")")
      .attr("d", d3.arc()
        .innerRadius(5)
        .outerRadius(10)
        .startAngle(3.14 * (3/4))
        .endAngle(3.14 * 2)
        )
      .attr("fill", d => yearColors(d));


    // Add legend text
    legend.selectAll("text")
    .data(lines)
    .join("text")
      .text(d => d)
      .attr("x", legendX)
      // Manually added text offset - see above comment
      .attr("y", (d,idx) => parseFloat((legendY) + (idx * 20)))







}


update(data);







// Update domain, range and data on change
function update(data) {

    let svg = d3.select("#pgcht").select("svg").select(".main");

    const margin = {top: 50, right: 20, bottom: 30, left: 30},
    width = sizeRef.current.offsetWidth - margin.right - margin.left,
    height = 500 - (margin.top+margin.bottom);


    svg.attr("width", width);

    data = [];

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


    let largest = 0;

    let currRange = 1500;

    data.forEach(d => {
      if(d.revenue >= largest) largest = d.revenue;
      if(d.cost >= largest) largest = d.cost;
    });

    // Resize graph if largest value exceeds current domain
    if(range <= largest) {
      y.domain([0,largest*1.25]);
      range = largest*1.25;
    } else {
      y.domain([0,range]);
    }

    x.domain([0,parseInt(props.length)+1]);
    

    svg.selectAll("*").remove();

    svg.append("g")
      .attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .call(d3.axisLeft(y));



    //Optional axis labels
    svg.append("text")
      .attr("class", "x label position-absolute")
      .style("font-weight", "bold")
      .attr("text-anchor", "end")
      .attr("x", width/2)
      .attr("y", 0)
      .attr("dy", height-margin.bottom)
      .text("Project Year");

    svg.append("text")
        .attr("class", "y label")
        .style("font-weight", "bold")
        .attr("text-anchor", "end")
        .attr("x", -(height/2)+margin.bottom+margin.top)
        .attr("y", -margin.left)
        .attr("transform", "rotate(-90)")
        .text("Revenue($)");


      // Revenue Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.revenue))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));

      // Costs line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.cost))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));

      // Trend Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y((d.cost + d.revenue) / 2))
      .curve(d3.curveBasis));
      //.curve(d3.curveCatmullRom));
      //.curve(d3.curveMonotoneX));

      // Tree Matured Line
      svg.append("svg:line")
      .attr("class", "line")
      .attr("x1", x(maturingYears))
      .attr("x2", x(maturingYears))
      .attr("y1", y(0))
      .attr("y2", y(range))
      .style("stroke-width", 2)
      .style("stroke", "black")
      .style("stroke-dasharray", ("5, 5"));

      // Tree Matured Label
      svg.append("text")
        .attr("class", "lalel")
        .attr("text-anchor", "start")
        .attr("x", 0)
        .attr("y", (height/3)-margin.top-margin.bottom+20)
        .attr("dx", x(maturingYears)+5)
        .attr("dy", 0)
        .style("font-weight", "bold")
        .text("Trees Matured");

      const legend = svg.append("g")
      .attr("class", "legend");

      // Add arc shape for legend
      legend.selectAll("path")
      .data(lines)
      .join("path")
        // Manually add offset based on index of year
        // Oh boy is this some spaghetti
        // Note - 20 is the offset in this case, as each index is multiplied by 20
        .attr("transform", (d,idx) => "translate(" + parseFloat(legendX-5) + "," + parseFloat((legendY-5) + (idx * 20)) + ")")
        .attr("d", d3.arc()
          .innerRadius(5)
          .outerRadius(10)
          .startAngle(3.14 * (3/4))
          .endAngle(3.14 * 2)
          )
        .attr("fill", d => yearColors(d));


      // Add legend text
      legend.selectAll("text")
      .data(lines)
      .join("text")
        .text(d => d)
        .attr("x", legendX)
        // Manually added text offset - see above comment
        .attr("y", (d,idx) => parseFloat((legendY) + (idx * 20)))

  // // Create a update selection: bind to the new data
  // var u = svg.selectAll(".lineTest")
  //   .data([data], function(d){ return d.ser1 });

  // // Updata the line
  // u
  //   .enter()
  //   .append("path")
  //   .attr("class","lineTest")
  //   .merge(u)
  //   .transition()
  //   .duration(3000)
  //   .attr("d", d3.line()
  //     .x(function(d) { return x(d.ser1); })
  //     .y(function(d) { return y(d.ser2); }))
  //     .attr("fill", "none")
  //     .attr("stroke", "steelblue")
  //     .attr("stroke-width", 2.5)
}










// Mike Bostock's long label wrap example - thanks Mike!
function wrap(text, width) {
  text.each(function() {
    var text = d3.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.0, // ems
        y = text.attr("y"),
        dy = parseFloat(text.attr("dy")),
        tspan = text.text(null).append("tspan").attr("x", 1).attr("y", y).attr("dy", dy + "em");
    while (word = words.pop()) {
      line.push(word);
      tspan.text(line.join(" "));
      if (tspan.node().getComputedTextLength() > width) {
        line.pop();
        tspan.text(line.join(" "));
        line = [word];
        tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
      }
    }
  });
}

		return (

      <>

      <div id="pgcht" hidden={props.tableView} ref={sizeRef}>
        {/*<ViewportBlock  onEnterViewport={() => {populateChart(); fillChart()}} onLeaveViewport={() => {unfillChart()}} />*/}


      {/* Table accompanying graph */}
{/*      <Table hover className="float-right" style={{'position': 'absolute', 'maxWidth': '20%', 'right': '0'}}>
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
      </Table>*/}

      </div>



{ props.tableView ? (


      <Table bordered striped hover size={'sm'}>
            <thead>


          {npv().map((d,idx) => (
            <tr key={idx}>
              <th>{d[0]}</th>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1])}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1]*props.land)}</td>
              <td></td>
            </tr>

            ))}
              <tr>
                <th>Year</th>
                <th>Revenue</th>
                <th>Cost</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
          {data.map((d,idx) => (
            <tr key={idx}>
              <td>{d.year}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.revenue)}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.cost)}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.revenue-d.cost)}</td>
            </tr>

            ))}
            </tbody>
      </Table>


  ) : null

}







    </>

		)

}

export default SilvoGraph;
