import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";


class Chart extends Component {



	componentDidMount() {
		// // Safeguard for browsers not supporting Observer API - for viewport detection
		// require('intersection-observer');
		this.drawChart();
	}

	drawChart() {



        // GHG Mitigaton(tCO2e/yr)

        // Define data and constants
        let data = require('./data.json')

		const margin = {top: 20, right: 20, bottom: 20, left: 180},
    	width = 1024 - (margin.right+margin.left),
    	height = 600 - margin.top - margin.bottom;

		var x = d3.scaleLinear()
		.range([0,width-((margin.right+margin.left))])

		var y = d3.scaleBand()
		.range([height-margin.top-margin.bottom, 0])


		const svg = d3.select("#cht")
		.append("svg")
		.attr("width",width)
		.attr("height",height)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");



	  x.domain([0, d3.max(data, function(d){ return d.Value; })])
	  y.domain(data.map(function(d) { return d.Method; }));


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

		svg.append("g")
			.attr("transform", "translate(0," + (height - margin.bottom - margin.top) + ")")
			.call(d3.axisBottom(x))
			.selectAll("text")
		    .style("font-weight", "bold");

		svg.append("g")
			.call(d3.axisLeft(y))
			.selectAll("text")
		    .style("font-weight", "bold");

		// Animate graph on page load
		svg.selectAll("rect")
		.transition()
		.duration(800)
		.attr("x", d => x(0))
		.attr("width", d => x(d.Value))
		.delay((d,i) => (i*100))

		//selection.attr("property", (d,i) => {})
	}

	render() {
		return (

		<>
		<div id="cht">

		</div>
		</>

		)}
}

export default Chart;
