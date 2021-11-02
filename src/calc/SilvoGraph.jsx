import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import * as d3 from "d3";
import handleViewport from 'react-in-viewport';



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
const acreFt = 43560;

const labels = ["", "Per Acre", 
        "Total Area"];


const data = [];



function SilvoGraph(props) {


// Optional table view
const [tableView, setTableView] = useState(false);


const margin = {top: 50, right: 20, bottom: 20, left: 40},
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


const legendX = parseFloat((width)-margin.left-margin.right);
const legendY = parseFloat(margin.top);



// Net Present Value(NPV) = Benefits(B) - Costs(C)
// NPV = PV(B) - PV(C)
function npv() {

  let npvr = 0;
  let npvc = 0;

  
  for(var i = 0; i<data.length;i++) {
    npvr += (data[i].revenue/((1+props.rate)**i));
    npvc += (data[i].cost/((1+props.rate)**i));
  }

  return [

  ["Revenue", npvr],
  ["Costs", npvc]

  ];
}




	// Render and fill chart on page load, regardless of viewport
	useEffect(() => {

		// Map each data point with:
		// x -> year
		// y -> revenue from trees
		d3.range(1, props.length+1).forEach(d =>
			data.push({
				year: d,
				revenue: (parseInt(d) >= maturingYears ? (treesPerAcre*cropPrice*treeYield) : 0) + netRevenue*productivity,
				cost: (parseInt(d) === 1 ? treesPerAcre*plantingCost : treesPerAcre * maintenance)
		}));

		// Draw physical chart
		drawChart();
		//populateChart();
	}, []);



	// Create and label axes of chart, append rectangles with 0 width
	function drawChart() {

		const svg = d3.select("#pgcht")
		.append("svg")
		.attr("width",width)
		.attr("height",height+30)
		.append("g")
		.attr("transform",
			"translate(" + margin.left + "," + margin.top + ")");
		//.on("movemove", event => mousemove(event));

	  x.domain([0,props.length+1]);
	  y.domain([0,1000]);


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


		 	// Revenue Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
    	.x(d => x(d.year))
    	.y(d => y(d.revenue))
    	.curve(d3.curveMonotoneX));

      // Costs line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "red")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
    	.x(d => x(d.year))
    	.y(d => y(d.cost))
    	.curve(d3.curveMonotoneX));

      // Trend Line
      svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("fill", "none")
      .attr("stroke", "orange")
      .attr("stroke-width", 6)
      .attr("opacity", 0.5)
      .attr("d", d3.line()
    	.x(d => x(d.year))
    	.y(d => y((d.cost + d.revenue) / 2))
    	.curve(d3.curveMonotoneX));



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

  // svg
  //   .append('rect')
  //   .style("fill", "none")
  //   .style("pointer-events", "all")
  //   .attr('width', width)
  //   .attr('height', height)
  //   .on('mouseover', mouseover)
  //   .on('mousemove', d => {
	   
	 //    // recover coordinate we need
	 //    //var x0 = x.invert(d3.pointer(d)[0]);
	 //    var x0 = x.invert(d.pageX - document.getElementById("pgcht").getBoundingClientRect().x + 10);
	 //    var i = bisect(data, x0, 1);
	    
	 //    var selectedData = data[i];
	 //    focus
	 //      .attr("cx", x(selectedData.year))
	 //      .attr("cy", y(selectedData.revenue))
	 //    focusText
	 //      .html("x:" + selectedData.year + "  -  " + "y:" + selectedData.revenue)
	 //      .attr("x", x(selectedData.year)+15)
	 //      .attr("y", y(selectedData.revenue))


  //   	})
  //   .on('mouseout', mouseout);

  // This allows to find the closest X index of the mouse:
  // var bisect = d3.bisector(function(d) { return d.x; }).left;

  // // Create the circle that travels along the curve of chart
  // var focus = svg
  //   .append('g')
  //   .append('circle')
  //     .style("fill", "none")
  //     .attr("stroke", "black")
  //     .attr('r', 8.5)
  //     .style("opacity", 0)

  // // Create the text that travels along the curve of chart
  // var focusText = svg
  //   .append('g')
  //   .append('text')
  //     .style("opacity", 0)
  //     .attr("text-anchor", "left")
  //     .attr("alignment-baseline", "middle")


  // // What happens when the mouse move -> show the annotations at the right positions.
  // function mouseover() {
  //   focus.style("opacity", 1)
  //   focusText.style("opacity",1)
  // }

  // function mousemove() {

  //   }
  // function mouseout() {
  //   focus.style("opacity", 0)
  //   focusText.style("opacity", 0)
  // }


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










    // var mouseG = svg.append("g")
    //   .attr("class", "mouse-effects");

    // mouseG.append("path")
    //   .attr("class", "mouse-line")
    //   .style("stroke", "black")
    //   .style("stroke-width", "1px")
    //   .style("opacity", "0");
      
    // var lines = document.getElementsByClassName('line');

    // var mousePerLine = mouseG.selectAll('.mouse-per-line')
    //   .data(data)
    //   .enter()
    //   .append("g")
    //   .attr("class", "mouse-per-line");

    // mousePerLine.append("circle")
    //   .attr("r", 7)
    //   .style("stroke", function(d) {
    //     return "red";
    //   })
    //   .style("fill", "none")
    //   .style("stroke-width", "1px")
    //   .style("opacity", "0");

    // mousePerLine.append("text")
    //   .attr("transform", "translate(10,3)");

    // mouseG.append('svg:rect') // append a rect to catch mouse movements on canvas
    //   .attr('width', width) // can't catch mouse events on a g element
    //   .attr('height', height)
    //   .attr('fill', 'none')
    //   .attr('pointer-events', 'all')
    //   .on('mouseout', function() { // on mouse out hide line, circles and text
    //     d3.select(".mouse-line")
    //       .style("opacity", "0");
    //     d3.selectAll(".mouse-per-line circle")
    //       .style("opacity", "0");
    //     d3.selectAll(".mouse-per-line text")
    //       .style("opacity", "0");
    //   })
    //   .on('mouseover', function() { // on mouse in show line, circles and text
    //     d3.select(".mouse-line")
    //       .style("opacity", "1");
    //     d3.selectAll(".mouse-per-line circle")
    //       .style("opacity", "1");
    //     d3.selectAll(".mouse-per-line text")
    //       .style("opacity", "1");
    //   })
    //   .on('mousemove', function(d) { // mouse moving over canvas
    //     var mouse = d3.pointer(d);
    //     d3.select(".mouse-line")
    //       .attr("d", function() {
    //         var d = "M" + mouse[0] + "," + height;
    //         d += " " + mouse[0] + "," + 0;
    //         return d;
    //       });

    //     d3.selectAll(".mouse-per-line")
    //       .attr("transform", function(d, i) {
    //         console.log(width/mouse[0])
    //         var xDate = x.invert(mouse[0]),
    //             bisect = d3.bisector(function(d) { return d.date; }).right;
    //             let idx = bisect(d.values, xDate);
            
    //         var beginning = 0,
    //             end = lines[i].getTotalLength(),
    //             target = null;

    //         while (true){
    //           target = Math.floor((beginning + end) / 2);
    //           let pos = lines[i].getPointAtLength(target);
    //           if ((target === end || target === beginning) && pos.x !== mouse[0]) {
    //               break;
    //           }
    //           if (pos.x > mouse[0])      end = target;
    //           else if (pos.x < mouse[0]) beginning = target;
    //           else break; //position found
    //         }
            
    //         d3.select(this).select('text')
    //           .text(y.invert(d3.pointer(d)[1]).toFixed(2));
              
    //         return "translate(" + mouse[0] + "," + mouse[1] +")";
    //       });
    //   });











}
// let mouseOver = function(d) {

// }

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

      <h4 style={{'cursor': 'pointer'}} onClick={() => setTableView(!tableView)}>View as {tableView ? "Graph": "Table"}</h4>

      <div id="pgcht" hidden={tableView}>
        {/*<ViewportBlock  onEnterViewport={() => {populateChart(); fillChart()}} onLeaveViewport={() => {unfillChart()}} />*/}


      {/* Table accompanying graph */}
      <Table hover className="float-right" style={{'position': 'absolute', 'maxWidth': '20%', 'right': '0'}}>
        <thead>
          <tr>
          {labels.map((label,idx) => (
              <th key={idx}>
                {label}
              </th>
            
            ))}
          </tr>   
        </thead>
        <tbody>
          {npv().map((d,idx) => (
            <tr key={idx}>
              <td>{d[0]}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1])}</td>
              <td>{new Intl.NumberFormat('en-US',{ style: 'currency', currency: 'USD' }).format(d[1]*props.land)}</td>
            </tr>

            ))}

        </tbody>
      </Table>

      </div>



{ tableView ? (


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
                <td>Year</td>
                <td>Revenue</td>
                <td>Cost</td>
                <td>Value</td>
              </tr>
            </thead>
            <tbody>
          {data.map((d,idx) => (
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
