import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";

class Chart extends Component {


	componentDidMount() {
		this.drawChart();
	}
	drawChart() {

		// Define data and constants


        // GHG Mitigaton(tCO2e/yr)
        let data = require('./data.json')
		console.log(data);
		const margin = {top: 20, right: 20, bottom: 30, left: 200},
    	width = 1024 - margin.left - margin.right,
    	height = 600 - margin.top - margin.bottom;

		var x = d3.scaleLinear()
		.range([0,width])


		var y = d3.scaleBand()
		.range([height, 0])


		const svg = d3.select("#cht")
		.append("svg")
		.attr("width",width)
		.attr("height",height)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");

	  data.forEach(function(d) {
	    d.Value = +d.Value;
	  });

	  x.domain([0, d3.max(data, function(d){ return d.Value; })])
	  y.domain(data.map(function(d) { return d.Method; }));


		svg.selectAll("bar")
		.data(data)
		.enter()
		.append("rect")
		.attr("class", "bar")
		.attr("x", function(d) { return x(0); })
		.attr("width", function(d) { return x(d.Value); })
		.attr("y", function(d) { return y(d.Method); }) 
		//.attr("height", ((height - (margin.top + margin.bottom)) / data.length))
      	.attr("height", y.bandwidth())
      	.attr("stroke", "#000000")
		.attr("fill", "green");

		svg.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		svg.append("g")
			.call(d3.axisLeft(y));


		//selection.attr("property", (d,i) => {})
	}

	render() {
		return (

		<>

		<Container id="cht">

		</Container>
		
		</>

		)}
}

export default Chart;
