import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";
import handleViewport from 'react-in-viewport';


//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

// Only update the chart twice after loading
let rerender = 0;

const Block = (props: { inViewport: boolean }) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div className="viewport-block" ref={forwardedRef}>

    </div>
  );
};


const ViewportBlock = handleViewport(Block, /** options: {}, config: {} **/);
// Define data and constants
const data = require('./data/Price_CC.json')
// const margin = {top: 50, right: 20, bottom: 20, left: 200},
// width = 1024 - (margin.right+margin.left),
// height = 500 - (margin.top+margin.bottom);
const margin = {top: 50, right: 20, bottom: 20, left: 250},
width = 1000 - (margin.right+margin.left),
height = 500 - (margin.top+margin.bottom);
let x = d3.scaleLinear()
.range([0,width-((margin.right+margin.left))])

let y = d3.scaleBand()
.range([height-margin.top-margin.bottom, 0])



function PriceChart(props) {

  const forceUpdate = useForceUpdate();

	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {
		drawChart();
		populateChart();
	}, []);

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {

		const svg = d3.select("#pcht").selectAll("svg").selectAll("g");

		// Animate graph on page load
		svg.selectAll("rect")
		.transition()
		.duration(600)
		.attr("x", d => x(0))
		.attr("width", d => x(d.Value))
		.delay((d,i) => (i*100))

		// Animate rectangle labels on page load
		svg.selectAll(".label")
		.transition()
		.duration(600)
		.style("opacity", 1)
		.delay((d,i) => (i*100))

	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		const svg = d3.select("#pcht").selectAll("svg");
		var x = d3.scaleLinear()
		.range([0,width-((margin.right+margin.left))])

		// Un-draw chart on scrollout
		svg.selectAll("rect")
		.transition()
		.duration(100)
		.attr("x", d => x(0))
		.attr("width", d => x(0))
		.delay((d,i) => (i*100))

		// Un-draw rectangle labels
		svg.selectAll(".label")
		.transition()
		.duration(100)
		.style("opacity", 0)
		.delay((d,i) => (i*100))

	}
	function populateChart() {

		if(rerender > 1) return;

		rerender++;
		//const svg = cht;
		const svg = d3.select("#pcht").selectAll("svg").selectAll("g");

		svg.selectAll(".title")
		.call(wrap,(width-margin.left-margin.right))

		svg.selectAll(".left-axis")
		.call(wrap, margin.left)


	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

		const svg = d3.select("#pcht")
		.append("svg")
		.attr("width",width)
		.attr("height",height)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	  // x.domain([0, d3.max(data, function(d){ return d.Value; })])
	  x.domain([0, 75])
	  y.domain(data.map(function(d) { return d.Title; }));




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

		// Add bars to chart
		svg.selectAll("bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(0); })
		.attr("width", function(d) { return x(0); })
		.attr("y", function(d) { return y(d.Title); }) 
      	.attr("height", y.bandwidth())
      	.attr("stroke", "green")
    .on("mouseover", mouseOver)
		.attr("fill", "url(#bg-gradient)");

		// Append labels to bars
		svg.selectAll(".text")
		.data(data)
		.enter()
		.append("text")
		.attr("class", "label")
		.attr("y", d => y(d.Title) + y.bandwidth()/2)
		.attr("x", d => x(d.Value) + 10)
		.style("font-weight", "bold")
		.style("opacity", 0)
		.text(d => d.Value + "%")

		svg.append("g")
			.attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
		    .style("font-weight", "bold");

		svg.append("g")
			.call(d3.axisLeft(y))
			.selectAll("text")
			.attr("class", "left-axis")
		    .style("font-weight", "bold")
		    .attr("transform", "translate(-10,-10)")
		    .attr("dy", 0)
		    .attr("y", 0);

		// Title of chart
		svg.append("text")
			.attr("class", "title")
			.attr("text-anchor", "start")
			.attr("x", width/2)
			.attr("y", -margin.top/2)
			.attr("dx", -margin.left/2)
			.attr("dy", 0)
			.style("font-weight", "bold")
			.style("white-space", "normal")
			.style("word-break", "break-all")
			.text("Percent of Global Consumers Willing to Pay Higher-than-Average Prices For Products with Select Attributes (2018)");

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


		<div id="pcht" className="m-5">
			<ViewportBlock  onEnterViewport={() => {populateChart(); fillChart()}} onLeaveViewport={() => {unfillChart()}} />

		</div>


		)
}

export default PriceChart;
