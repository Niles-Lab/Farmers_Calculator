import React, { useState, useEffect } from 'react';
import { select} from "d3";
import * as d3 from "d3-geo";
import { geoMercator, geoPath  } from 'd3-geo';
import usGeoData from './vt-county.json';
//import * as usGeoData from './vt-county2.geojson';
import { Accordion, Card } from 'react-bootstrap';
//import "https://d3js.org/topojson.v1.min.js"

const width = 1000;
const height = 1000;
let zoomTransform = null;

function CountyMap(props) {

  const rn = React.useRef(null);

  React.useEffect(() => {
    renderMap();
  }, [usGeoData]);
  console.log(usGeoData);
  const renderMap = () => {
    const node = rn.current;
    const width = node.width.animVal.value;
    const height = node.height.animVal.value;

    const projection = () => {
      return d3
        .geoMercator()
        .scale(150)
        .translate([width / 3, height / 3]);
    };
    select(node)
      .append("g")
      .classed("countries", true);
    const countries = select("g")
      .selectAll("path")
      .data(usGeoData.features);

    countries
      .enter()
      .append("path")
      .classed("country", true)
      .attr("stroke", "red")
      .attr("strokeWidth", 0.75)
      .each(function(d, i) {
        select(this).attr("d", d3.geoPath().projection(projection())(d));
      });
  };

  // return <svg width={1000} height={500} viewBox="0 0 400 100" ref={rn} />;
  return <svg width={1000} height={500} zoomAndPan="magnify" ref={rn} />;
}
export default CountyMap;