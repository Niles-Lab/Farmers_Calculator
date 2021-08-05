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
const data = require('./data/altmethods.json')
const margin = {top: 20, right: 20, bottom: 20, left: 180},
width = 1024 - (margin.right+margin.left),
height = 600 - margin.top - margin.bottom;
let x = d3.scaleLinear()
.range([0,width-((margin.right+margin.left))])

let y = d3.scaleBand()
.range([height-margin.top-margin.bottom, 0])

function Chart(props) {



	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {

		drawChart();

	});

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {
		const svg = d3.select("#cht").selectAll("svg").selectAll("g");

		// Animate graph on page load
		svg.selectAll("rect")
		.transition()
		.duration(600)
		.attr("x", d => x(0))
		.attr("width", d => x(d.Value))
		.delay((d,i) => (i*100))

	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		const svg = d3.select("#cht").selectAll("svg");
		var x = d3.scaleLinear()
		.range([0,width-((margin.right+margin.left))])

		// Un-draw chart on scrollout
		svg.selectAll("rect")
		.transition()
		.duration(100)
		.attr("x", d => x(0))
		.attr("width", d => x(0))
		.delay((d,i) => (i*100))


	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

		const svg = d3.select("#cht")
		.append("svg")
		.attr("width",width)
		.attr("height",height+30)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");


	  x.domain([0, d3.max(data, function(d){ return d.Value; })])
	  y.domain(data.map(function(d) { return d.Method; }));

		svg.append("g")
			.attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
		    .style("font-weight", "bold");

		svg.append("g")
			.call(d3.axisLeft(y))
			.selectAll("text")
		    .style("font-weight", "bold");

		svg.selectAll("bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(0); })
		.attr("width", function(d) { return x(0); })
		.attr("y", function(d) { return y(d.Method); }) 
      	.attr("height", y.bandwidth())
      	.attr("stroke", "green")
		.attr("fill", "lightgreen");

		svg.append("text")
			.attr("class", "x label")
			.attr("text-anchor", "end")
			.attr("x", width / 2)
			.attr("y", height + 6)
			.attr("dx", ".75em")
			.text("GHG Mitigaton(tCO2e/yr)")

		svg.append("text")
		    .attr("class", "y label")
		    .attr("text-anchor", "end")
		    .attr("x", -height / 3)
		    .attr("y", -margin.left)
		    .attr("dy", ".75em")
		    .attr("transform", "rotate(-90)")
		    .text("Method");


	}


		return (


		<div id="cht" className="m-5">
			<ViewportBlock onEnterViewport={() => {fillChart()}} onLeaveViewport={() => {unfillChart()}} />
		</div>


		)
}

export default Chart;
