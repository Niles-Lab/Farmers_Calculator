import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { geoMercator, geoPath  } from 'd3-geo';
import usGeoData from './vt-county.json';
import { Accordion, Card } from 'react-bootstrap';
//import "https://d3js.org/topojson.v1.min.js"

const width = 500;
const height = 500;
let zoomTransform = null;

function CountyMap(props) {


  useEffect(() => {
    drawChart();
  })




function drawChart() {
    
  const svg = d3.select("#vt-map")
    .append("svg")
    .attr("width",width)
    .attr("height",height);

  //let g = svg.append("g");


// Define projection and map generation
  const projection = geoMercator()
      .scale(width * 16)
      .translate([width / 2, height / 2])
      .center([-72.5, 43.85])

  const pathGenerator = geoPath().projection(projection);


  svg.selectAll("path")
    .data(usGeoData.features)
    .enter()
    .append("path")
    .attr("key", (d,i) => "path" + i)
    .attr("d", (d,i) => pathGenerator(d.geometry))
    .attr("class", "states")
    .style("cursor", "pointer")
    .style("fill", "rgba(0, 113, 85, 0.0)")
    .style("stroke", "black")
    .style("stokeOpacity", 1)
    .style("stokeWidth", 2)


}


// Define projection and map generation
  // const projection = geoMercator()
  //     .scale(width * 0.9)
  //     .translate([width / 2, height / 2])
  //     .center([-98.35, 39.5])

  // const pathGenerator = geoPath().projection(projection);


  // const states = usGeoData.features
  //     .map((feature, idx) => {
  //         const fakeData = Math.random();
  //         return <path
  //             key={"path" + idx}
  //             d={pathGenerator(feature)}
  //             style={{ fill: "#dedede", fillOpacity: fakeData, stroke: "black", strokeWidth: 2, strokeOpacity: 1, cursor: "pointer" }}
  //             className="states"
  //     />})

return (

            <>
                <div id="vt-map" className="map">
{/*      {usGeoData.features
      .map((feature, idx) => {
          const fakeData = Math.random();
          return <path
              key={"path" + idx}
              d={pathGenerator(feature)}
              style={{ fill: "#dedede", fillOpacity: fakeData, stroke: "black", strokeWidth: 2, strokeOpacity: 1, cursor: "pointer" }}
              className="states"
      />})}*/}
                </div>
            </>


)
}
export default CountyMap;