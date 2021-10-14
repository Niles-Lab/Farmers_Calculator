import React, { useEffect } from 'react';

import * as d3 from "d3";
import handleViewport from 'react-in-viewport';

// Only update the chart twice after loading
let rerender = 0;

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="viewport-block" ref={forwardedRef}>

    </div>
  );
};

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

const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
// Define data and constants

// How many sq ft in an acre
const acreFt = 43560;




let data = [];

function SilvoBar(props) {

const margin = {top: 50, right: 20, bottom: 20, left: 50},
width = props.width - (margin.right+margin.left),
height = 500 - (margin.top+margin.bottom);

let x = d3.scaleLinear()
.range([0,width-((margin.right+margin.left))])

let y = d3.scaleLinear()
.range([height-margin.top-margin.bottom,0])
//let y = d3.scaleBand()
//.range([height-margin.top-margin.bottom, 0])


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


// Map each data point with:
// x -> year
// y -> revenue from trees
d3.range(1, props.length+1).forEach(d =>
	data.push({
		year: d,
		revenue: (parseInt(d) >= maturingYears ? (treesPerAcre*cropPrice*treeYield) : 0) + netRevenue*productivity,
		cost: (parseInt(d) === 1 ? treesPerAcre*plantingCost : treesPerAcre * maintenance)

	}));


// for(var i=0;i<props.length;i++) {

// 	data.push({
// 		year: i,
// 		revenue: (() => i >= maturingYears ? netRevenue*productivity : 0)
// 	})

// }
	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {
		drawChart();
		//populateChart();
	}, []);

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {

		// const svg = d3.select("#scht").selectAll("svg").selectAll("g");

		// // Animate graph on page load
		// svg.selectAll("rect")
		// .transition()
		// .duration(600)
		// .attr("x", d => x(0))
		// .attr("width", d => x(d.Value))
		// .delay((d,i) => (i*100))

		// // Animate rectangle labels on page load
		// svg.selectAll(".label")
		// .transition()
		// .duration(600)
		// .style("opacity", 1)
		// .delay((d,i) => (i*100))

	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		// const svg = d3.select("#pbcht").selectAll("svg");
		// var x = d3.scaleLinear()
		// .range([0,width-((margin.right+margin.left))])

		// // Un-draw chart on scrollout
		// svg.selectAll("rect")
		// .transition()
		// .duration(100)
		// .attr("x", d => x(0))
		// .attr("width", d => x(0))
		// .delay((d,i) => (i*100))

		// // Un-draw rectangle labels
		// svg.selectAll(".label")
		// .transition()
		// .duration(100)
		// .style("opacity", 0)
		// .delay((d,i) => (i*100))

	}
	function populateChart() {

		if(rerender > 0) return;

		rerender++;
		//const svg = cht;
		const svg = d3.select("#pbcht").selectAll("svg").selectAll("g");

		svg.selectAll(".title")
		.call(wrap,(width-margin.right))
		// .call(wrap,(width-margin.left-margin.right))

		svg.selectAll(".left-axis")
		.call(wrap, margin.left)


	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

		const svg = d3.select("#pbcht")
		.append("svg")
		.attr("width",width)
		.attr("height",height+30)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	  x.domain([0,props.length+1]);
	  y.domain([0,1000]);


		var gradient = svg.append("defs")
			.append("linearGradient")
			.attr("id", "bg-gradient")
			.attr("x1", "0")
			.attr("x2", "1")
			.attr("y1", "0")
			.attr("y2", "1.5")


		// Define gradient starts and stops
		gradient.append("stop")
			.attr("stop-color", "#9ebcda")
			.attr("offset", "0")

		gradient.append("stop")
			.attr("stop-color", "lightgreen")
			.attr("offset", "1")

		svg.selectAll("bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(d.year)-2.5; })
		.attr("width", 5)
		.attr("y", function(d) { return y(d.revenue); }) 
      	.attr("height", d => y(0) - y(d.revenue))
      	.attr("stroke", "green")
    .on("mouseover", mouseOver)
		.attr("fill", "url(#bg-gradient)");


		svg.append("g")
			.attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
			.call(d3.axisBottom(x));
			// .selectAll("text")
		 //    .style("font-weight", "bold");

		svg.append("g")
			.call(d3.axisLeft(y));
			// .selectAll("text")
			// .attr("class", "left-axis")
		 //    .style("font-weight", "bold")
		 //    .attr("transform", "translate(-10,-10)")
		 //    .attr("dy", 0)
		 //    .attr("y", 0);

    // // Add the line
    // svg.append("path")
    //   .data(data)
    //   .attr("fill", "none")
    //   .attr("stroke", "steelblue")
    //   .attr("stroke-width", 1.5)
    //   .attr("d", d => lineRev(d))

    // Add the line
    // svg.append("path")
    //   .datum(data)
    //   .attr("fill", "none")
    //   .attr("stroke", "steelblue")
    //   .attr("stroke-width", 1.5)
    //   .attr("d", d3.line()
    //     .x(function(d) { return xS(d.year) })
    //     .y(function(d) { return yS(d.revenue) })
    //     .curve(d3.curveCatmullRom.alpha(0.5))
    //     )

		// Title of chart
		svg.append("text")
			.attr("class", "title")
			.attr("text-anchor", "start")
			.attr("x", 0)
			.attr("y", -margin.top/2)
			.attr("dx", margin.right)
			.attr("dy", 0)
			.style("font-weight", "bold")
			.text("Silvopasture Cash Flow($/Acre)");

		// Subtitle under chart
		svg.append("a")
			.attr("href", "https://agriculture.vermont.gov/sites/agriculture/files/doc_library/Vermont%20Agriculture%20and%20Food%20System%20Plan%202020.pdf")
			.attr("target", "_blank")
			.append("text")
			.style("font-size", "12px")
			.attr("x", 0)
			.attr("y", 0)
			.attr("dx", -margin.left/4)
			.attr("dy", height-margin.bottom-10)
			.text("Data sourced from Vermont Agricultural and Food System Plan 2020");

//-(height+margin.bottom)

		// Optional axis labels
		// svg.append("text")
		// 	.attr("class", "x label")
		// 	.attr("text-anchor", "end")
		// 	.attr("x", width / 2)
		// 	.attr("y", height + 6)
		// 	.attr("dx", ".75em")
		// 	.text("")

		// svg.append("text")
		//     .attr("class", "y label")
		//     .attr("text-anchor", "end")
		//     .attr("x", -height / 3)
		//     .attr("y", -margin.left)
		//     .attr("dy", ".75em")
		//     .attr("transform", "rotate(-90)")
		//     .call(wrap, 86.67);

	}

let mouseOver = function(d) {

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


		<div id="pbcht">
			<ViewportBlock  onEnterViewport={() => {populateChart(); fillChart()}} onLeaveViewport={() => {unfillChart()}} />
		</div>


		)
}

export default SilvoBar;
