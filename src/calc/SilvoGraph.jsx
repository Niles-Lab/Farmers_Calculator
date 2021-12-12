import React, { useEffect, useRef, useState } from 'react';
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
//const acreFt = 43560;

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

const legendX = parseFloat((width)-margin.left-margin.right-140);
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
// netRevenue = props.sp.grazingRevenue[0] - props.sp.baseGrazingCost[0];
// d3.range(0, parseInt(props.length)+1).forEach(d =>
//   data.push({
//     year: d,
//     revenue: (parseInt(d) >= maturingYears ? (props.sp.treesPerAcre[0]*props.sp.treeCropPrice[0]*props.sp.treeCropYield[0]) : 0) + (netRevenue*productivity),
//     cost: (parseInt(d) <= 1 ? props.sp.treesPerAcre[0]*props.sp.treePlantingCost[0] : props.sp.treesPerAcre[0] * props.sp.treeCost[0])
// }));


// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {

  let npvr = 0;
  let npvc = 0;

  
  for(var i = 0; i<props.data.length;i++) {
    npvr += (props.data[i].revenue/((1+props.rate)**i));
    npvc += (props.data[i].cost/((1+props.rate)**i));
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

  useEffect(() => {



    // Update axes
    x.domain(props.xDom);
    y.domain(props.yDom);

    d3.select("#xAxis")
    .call(d3.axisBottom(x));

    d3.select("#yAxis")
      .call(d3.axisLeft(y));


    // Update trees matured line
    d3.selectAll(".matured")
      .attr("dx", x(maturingYears)+5)
      .attr("x1", x(maturingYears))
      .attr("x2", x(maturingYears));
  
    // Update individual lines
    d3.select("#revenue")
      .datum(props.data)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.revenue))
      .curve(d3.curveBasis));


    d3.select("#cost")
      .datum(props.data)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.cost))
      .curve(d3.curveBasis));

    d3.select("#trend")
      .datum(props.data)
      .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y((d.cost + d.revenue) / 2))
      .curve(d3.curveBasis));




  }, [data])


  // Create and label axes of chart, append rectangles with 0 width
	function drawChart() {


    let x = d3.scaleLinear()
    .range([0,width-((margin.right+margin.left))])

    let y = d3.scaleLinear()
    .range([height-margin.top-margin.bottom,0])


    // Create domain from props
    x.domain(props.xDom);
    y.domain(props.yDom);

      // .attr("class", "line matured")
      // .attr("x1", x(maturingYears))
      // .attr("x2", x(maturingYears))
      // .attr("y1", y(0))
      // .attr("y2", y(range))
      // .style("stroke-width", 2)
      // .style("stroke", "black")

    // Create the X axis:
    const svg = d3.select("#pgcht")
    .append("svg")
    .attr("width",width)
    .attr("height",height+30)
    .on("pointerover", d => {

      d3.select("#ttline")
      .attr("opacity", 1);

      d3.select("#ttlbl")
      .attr("opacity", 1);

    })
    .on("pointerout", d => {

      d3.select("#ttline")
      .attr("opacity", 0);

      d3.select("#ttlbl")
      .attr("opacity", 0);

    })
    .on("pointermove", (d) => {

      let position = d3.pointer(d);

      let idx = Math.floor(x.invert(position[0]-(margin.right+margin.left+10)));

      d3.select("#ttline")
      .attr("opacity", idx < 0 ? 0 : 1);

      d3.select("#ttlbl")
      .attr("opacity", idx < 0 ? 0 : 1);

      // Get point on graph by inverting the mouse's x coordinate, converting it to an integer
      // and making sure its positive to convert into an index for data array
      //let idx = Math.floor(d3.max([0,x.invert(position[0]-(margin.right+margin.left+10))-1]));



      //let minY = d3.min([props.data[idx].revenue, props.data[idx].cost]);
      //let maxY = d3.max([props.data[idx].revenue, props.data[idx].cost]);


      d3.select("#ttline")
      .attr("x1", position[0]-(margin.right+margin.left+10))
      .attr("x2", position[0]-(margin.right+margin.left+10));
      // .attr("y1", y(minY))
      // .attr("y2", y(maxY));

      d3.select("#ttlbl")
      .selectAll("text")
      .attr("x", position[0]-(margin.right+margin.left))
      .attr("y", position[1]-30);


      //.attr("transform", (d,idx) => "translate(" + position[0]-(margin.right+margin.left)  + "," + parseFloat((idx * 20)) + ")")

    })
    .append("g")
    .attr("class", "main")


    .attr("transform",
      "translate(" + margin.left*2 + "," + margin.top + ")");
    //.on("movemove", event => mousemove(event));    


    svg.selectAll("*").remove();

    svg.append("g")
      .attr("id", "xAxis")
      .attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
      .call(d3.axisBottom(x));

    svg.append("g")
      .attr("id", "yAxis")
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
      .datum(props.data)
      .attr("class", "line")
      .attr("id", "revenue")
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
      .datum(props.data)
      .attr("class", "line")
      .attr("id", "costs")
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
      .datum(props.data)
      .attr("class", "line")
      .attr("id", "trend")
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
      .attr("class", "line matured")
      .attr("x1", x(maturingYears))
      .attr("x2", x(maturingYears))
      .attr("y1", y(0))
      .attr("y2", y(range))
      .style("stroke-width", 2)
      .style("stroke", "black")
      .style("stroke-dasharray", ("5, 5"));

      // Tree Matured Label
      svg.append("text")
        .attr("class", "label matured")
        .attr("text-anchor", "start")
        .attr("x", 0)
        .attr("y", (height/3)-margin.top-margin.bottom+20)
        .attr("dx", x(maturingYears)+5)
        .attr("dy", 0)
        .style("font-weight", "bold")
        .text("Trees Matured");



    // Easy Data View Line
    svg.append("svg:line")
    .attr("class", "line")
    .attr("id", "ttline")
    .attr("opacity", 0)
    .attr("x1", 0)
    .attr("x2", 0)
    .attr("y1", y(0))
    .attr("y2", y(props.range))
    .style("stroke-width", 2)
    .style("stroke", "black");


    svg.append("g")
      .attr("class", "tooltip")
      .attr("id", "ttlbl")
      .attr("opacity", 0)
      //.attr("x", 0)
      //.attr("y", 0)
      .selectAll("text")
      .data(lines)
      .join("text")
      //.style("background-color", "black")
      .attr("text-anchor", "start")
      .style("font-weight", "bold")
      // .style("border", "solid")
      // .style("border-width", "2px")
      // .style("border-radius", "5px")
      .attr("transform", (d,idx) => "translate(0," + parseFloat((idx * 20)) + ")")
      .text(d => d)
      .raise();




            // <tr key={idx}>
            //   <td>{d.year}</td>
            //   <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.revenue)}</td>
            //   <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.cost)}</td>
            //   <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d.revenue-d.cost)}</td>
            // </tr>


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
      .attr("y", (d,idx) => parseFloat((legendY) + (idx * 20)));







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
          {props.data.map((d,idx) => (

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
