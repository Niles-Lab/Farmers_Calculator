import React, { useEffect } from 'react';
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

let rerender = 0;

// Define data and constants
const data = require('./data/weatherloss.json')
const margin = {top: 30, right: 20, bottom: 30, left: 20},
width = 400 - (margin.right+margin.left),
height = 400 - (margin.top+margin.bottom);

let domain = d3.group(data, d => d.Cause);
let color = d3.scaleOrdinal().domain(domain)
	.range(["CornflowerBlue", "DarkSeaGreen", "BlanchedAlmond", "Salmon", "lightblue", "Orange"]);

function CropLossTM(props) {



	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {

		drawChart();

	});

	// Fill the chart with data by changing the width of all bars via webkit animation
	function fillChart() {
		//const svg = d3.select("#treecht").selectAll("svg").selectAll("g");

		// Animate graph on page load
		// svg.selectAll("rect")
		// .transition()
		// .duration(600)
		// .attr("opacity", 0.7)
		// .delay((d,i) => (i*100))


	}
	// Change all bar widths to 0 via webkit transition for un-loading effect
	function unfillChart() {

		//const svg = d3.select("#treecht").selectAll("svg").selectAll("g");

		// Un-draw chart on scrollout
		// svg.selectAll("rect")
		// .transition()
		// .duration(100)
		// .attr("opacity", 0)
		// .delay((d,i) => (i*100))


	}
	// Safety function to wrap title text to avoid overflow
	// This is the bit about React and D3 both wanting to control the DOM
	// Call this up to two times on rendering of the graph
	function populateChart() {
		if(rerender > 0) return;
		d3.select(".title")
		.call(wrap, width);
		rerender++;
	}
	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

	// Transform data to usable format
	const data_ready = {
	    children: data.map(item => ({Cause: item.Cause, Value: item.Value}))
	};

	// Create data hierarchy for tree map
	var root = d3.hierarchy(data_ready).sum(d => d.Value).sort((a,b) => b.Value - a.Value);

		// Generate treemap model with given hierarchy
		d3.treemap()
			.size([width, height])
			.padding(2)
			(root);

		// Append SVG, do the usual spacing and margin stuff
		const svg = d3.select("#treecht")
		.append("svg")
			.attr("width",width + margin.left + margin.right)
			.attr("height",height + margin.top + margin.bottom)
		.append("g")
			.attr("width",width)
			.attr("height",height);

		svg.selectAll("rect")
				.data(root.leaves())
				.join("rect")
	  		.attr("transform",
	        d => "translate(" + d.x0 + "," + (d.y0+margin.top+margin.bottom/2) + ")")
				.attr("width", d => d.x1 - d.x0)
				.attr("height", d => d.y1 - d.y0)
				.attr("fill", d => color(d.data.Cause));

		svg.selectAll("text")
			.data(root.leaves())
			.join("text")
				.attr("stroke", "none")
				.text(d => (d.data.Cause + " (" + d.data.Value + "%)"))
				.attr("x", function(d){ return d.x0})
      	.attr("y", function(d){ return (d.y0+margin.top+margin.bottom+20)})
		    .style("font-weight", "bold")
				.style("font-size", "12px")
		    .style("text-anchor", "start");

		// Graph Title
		svg.append("text")
			.attr("class", "title")
			.attr("text-anchor", "start")
			.attr("x", 0)
			.attr("y", margin.top)
			.attr("dy", 0)
			.style("font-weight", "bold")
			.text("Weather-Related Crop Loss Data, Northeastern USA(2013-2016)")
			.call(wrap, width);

		// Subtitle under chart
		d3.select("svg").append("a")
			.attr("href", "https://link.springer.com/article/10.1007/s10584-017-2109-7/figures/1")
			.attr("target", "_blank")
			.append("text")
			.style("font-size", "12px")
			.attr("x", 0)
			.attr("y", height + margin.bottom + margin.top)
			.text("Data sourced from Wolfe et al. 2018");


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


		<div id="treecht" className="m-3">
			<ViewportBlock onEnterViewport={() => {fillChart(); populateChart()}} onLeaveViewport={() => {unfillChart()}} />
{/*			<ViewportBlock />*/}
		</div>


		)
}

export default CropLossTM;
