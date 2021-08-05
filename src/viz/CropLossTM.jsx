import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";
import handleViewport from 'react-in-viewport';

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="viewport-block" ref={forwardedRef}>

    </div>
  );
};


const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);

// Define data and constants
const data = require('./data/weatherloss.json')
const margin = {top: 20, right: 20, bottom: 20, left: 20},
width = 500 - (margin.right+margin.left),
height = 600 - (margin.top+margin.bottom);

let domain = d3.group(data, d => d.Cause);
let color = d3.scaleOrdinal().domain(domain)
	.range(["Maroon", "DarkSeaGreen", "BlanchedAlmond", "Salmon", "lightblue", "CornflowerBlue"]);

function CropLossTM(props) {



	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {

		drawChart();

	});

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {
		const svg = d3.select("#treecht").selectAll("svg").selectAll("g");

		// Animate graph on page load
		// svg.selectAll("rect")
		// .transition()
		// .duration(600)
		// .attr("opacity", 0.7)
		// .delay((d,i) => (i*100))

	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		const svg = d3.select("#treecht").selectAll("svg").selectAll("g");

		// Un-draw chart on scrollout
		// svg.selectAll("rect")
		// .transition()
		// .duration(100)
		// .attr("opacity", 0)
		// .delay((d,i) => (i*100))


	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {


	const data_ready = {
	    children: data.map(item => ({Cause: item.Cause, Value: item.Value}))
	};

		var root = d3.hierarchy(data_ready).sum(d => d.Value).sort((a,b) => b.Value - a.Value);


		d3.treemap()
			.size([width, height])
			.padding(2)
			(root);

		const svg = d3.select("#treecht")
		.append("svg")
			.attr("width",width + margin.left + margin.right)
			.attr("height",height + margin.top + margin.bottom)
		.data(root.leaves())
		.join("g")
	  	.attr("transform",
	        d => "translate(" + d.x0 + "," + d.y0 + ")");

		svg.selectAll("rect")
				.data(root.leaves())
				.join("rect")
	  		.attr("transform",
	        d => "translate(" + d.x0 + "," + d.y0 + ")")
				.attr("width", d => d.x1 - d.x0)
				.attr("height", d => d.y1 - d.y0)
				.attr("fill", d => color(d.data.Cause));

		svg.selectAll("text")
			.data(root.leaves())
			.join("text")
				.attr("stroke", "none")
				.text(d => (d.data.Cause + "\n" + d.data.Value + "%"))
				.attr("x", function(d){ return d.x0+20})
      	.attr("y", function(d){ return d.y0+20})
		    .style("font-weight", "bold")
		    .style("text-anchor", "start");

		svg.append("text")
			.attr("class", "title")
			.attr("text-anchor", "start")
			.attr("x", 0)
			.attr("y", margin.top)
			.style("font-weight", "bold")
			.text("Reasons for Crop Failure(2013-2016)");

		// svg.append("g")
		// 	.call(d3.axisLeft(y))
		// 	.selectAll("text")
		//     .style("font-weight", "bold");

		// svg.selectAll("bar")
		// .data(data)
		// .enter()
		// .append("rect")
		// .attr("class", "bar")
		// .attr("x", function(d) { return x(0); })
		// .attr("width", function(d) { return x(0); })
		// .attr("y", function(d) { return y(d.Method); }) 
  //     	.attr("height", y.bandwidth())
  //     	.attr("stroke", "green")
		// .attr("fill", "lightgreen");

		// svg.append("text")
		// 	.attr("class", "x label")
		// 	.attr("text-anchor", "end")
		// 	.attr("x", width / 2)
		// 	.attr("y", height + 6)
		// 	.attr("dx", ".75em")
		// 	.text("GHG Mitigaton(tCO2e/yr)")

		// svg.append("text")
		//     .attr("class", "y label")
		//     .attr("text-anchor", "end")
		//     .attr("x", -height / 3)
		//     .attr("y", -margin.left)
		//     .attr("dy", ".75em")
		//     .attr("transform", "rotate(-90)")
		//     .text("Method");


	}


		return (


		<div id="treecht" className="m-5">
			<ViewportBlock onEnterViewport={() => {fillChart()}} onLeaveViewport={() => {unfillChart()}} />
{/*			<ViewportBlock />*/}
		</div>


		)
}

export default CropLossTM;
