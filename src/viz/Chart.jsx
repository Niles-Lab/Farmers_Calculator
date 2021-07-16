import React, {Component} from 'react';
import { Container } from 'react-bootstrap';
import * as d3 from "d3";


class Chart extends Component {


	componentDidMount() {
		this.drawChart();
	}
	drawChart() {

		// Define data and constants
		const data = [1,2,3,4,5,6];
		const height = "500px";
		const width = "700px";


		const svg = d3.select("#cht")
		.append("svg")
		.attr("width",width)
		.attr("height",height);

		svg.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr("x", (d,i) => i * 70)
		.attr("y", (d,i) => height - 10 * d)
		.attr("width", 25)
		.attr("height", (d,i) => d * 40)
		.attr("fill", "green");


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
