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

function CropLossPie(props) {



	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {

		drawChart();

	}, []);

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {
		const svg = d3.select("#piecht").selectAll("svg").selectAll("g");

		// Animate graph on page load
		svg.selectAll("path")
		.transition()
		.duration(600)
		.attr("opacity", 0.7)
		.delay((d,i) => (i*100))

		// Animate graph on page load
		svg.selectAll("text")
		.transition()
		.duration(600)
		.attr("opacity", 0.7)
		.delay((d,i) => (i*100))

	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		const svg = d3.select("#piecht").selectAll("svg").selectAll("g");

		// Un-draw chart on scrollout
		svg.selectAll("path")
		.transition()
		.duration(100)
		.attr("opacity", 0)
		.delay((d,i) => (i*100))

		// Un-draw chart on scrollout
		svg.selectAll("text")
		.transition()
		.duration(100)
		.attr("opacity", 0)
		.delay((d,i) => (i*100))

	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

		const radius = Math.min(width, height) / 2;
		const arc = d3.arc()
							.innerRadius(0)
							.outerRadius(radius);
		let pie = d3.pie().value(d => d.Value);
		const data_ready = pie(data);

		const svg = d3.select("#piecht")
		.append("svg")
		.attr("width",width)
		.attr("height",height);

		svg.append("g")
			.attr("stroke", "white")
    	.attr("transform", "translate(" + width / 2 + "," + ((height / 2)) + ")")
			.selectAll("path")
				.data(data_ready)
				.join("path")
					.attr("fill", d => color(d.data.Cause))
					.attr("d", arc)
					.attr("opacity", 0);

		svg.select("g")
		.selectAll("text")
			.data(data_ready)
			.join("text")
				.attr("stroke", "none")
				.text(d => d.data.Cause)
		    .style("font-weight", "bold")
 			 	.attr("transform", d => "translate(" + arc.centroid(d) + ")")
		    .style("text-anchor", "middle");

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


		<div id="piecht" className="m-5">
			<ViewportBlock onEnterViewport={() => {fillChart()}} onLeaveViewport={() => {unfillChart()}} />
{/*			<ViewportBlock />*/}
		</div>


		)
}

export default CropLossPie;
