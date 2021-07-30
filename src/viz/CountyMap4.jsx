import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { geoMercator, geoPath  } from 'd3-geo';
import usGeoData from './vt-county.json';
//import * as usGeoData from './vt-county2.geojson';
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
    .attr("preserveAspectRatio", "none")
    // .attr("width","100%")
    // .attr("height","100%")
    .attr("width",width)
    .attr("height",height)
    .attr("viewBox", "0 0 10000 10000");



// Define projection and map generation
  const projection = d3.geoMercator()
  //const projection = d3.geoEquirectangular() 
  //const projection = d3.geoAlbers()    
      //.scale(width / 4000)
       .scale(10000)
       .translate([width / 2, height / 2])
      .center([-82.5, 43.85]);

  // projection.fitExtent(
  //       [
  //         [0,0],
  //         [width/2, height/2],

  //       ],
  //       usGeoData
  //       )
  //projection.fitSize([width,height],usGeoData);


  const pathGenerator = d3.geoPath().projection(projection);
    // var pathGenerator = d3.geoPath()
    //     .projection(d3.geoMercator()
    //     .scale(50000)
    //     .translate([0, 3800]));

  let mouseOver = function(d) {
    console.log(d3.select(d.target).attr("county"));
  }

  let mouseLeave = function(d) {

  }

    svg.selectAll("path")
      .data(usGeoData.features)
      //.datum({type: "FeatureCollection", features: usGeoData.features})
      .enter()
      .append("path")
      .attr("county", (d) => d.properties.CNTYNAME)
      //.attr("transform", "scale(1.2)")
      //.attr("transform", "scale(0.2)")
      .style("cursor", "pointer")
      //.style("fill", "rgba(0, 113, 85, 0.0)")
      //.style("stroke", "black")
      //.style("stokeOpacity", 1)
      .attr("key", (d,i) => "path" + i)
      .attr("d", pathGenerator())
      .on("mouseover", mouseOver)
      .on("mouseleave", mouseLeave);







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
                <span id="vt-map" className="map">

                </span>
            </>


)
}
export default CountyMap;