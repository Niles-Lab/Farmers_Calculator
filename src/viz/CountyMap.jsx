import React from 'react';
import * as d3 from "d3";
import { geoMercator, geoPath  } from 'd3-geo';
import usGeoData from './states.geo';
//import "https://d3js.org/topojson.v1.min.js"

import { Accordion, Card } from 'react-bootstrap';

const width = 1024;
const height = 400;


function CountyMap(props) {


  const projection = geoMercator()
      .scale(width * 0.9)
      .translate([width / 2, height / 2])
      .center([-98.35, 39.5])

  const pathGenerator = geoPath().projection(projection);


  const states = usGeoData.features
      .map((feature, idx) => {
          const fakeData = Math.random();
          return <path
              key={"path" + idx}
              d={pathGenerator(feature)}
              style={{ fill: "#dedede", fillOpacity: fakeData, stroke: "black", strokeWidth: 2, strokeOpacity: 1, cursor: "pointer" }}
              className="states"
      />})

        var zoom_handler = d3.zoom()
            .on("zoom", zoomaction);

        zoom_handler(svg);

        function ticked() {
          link
              .attr("x1", function(d) { return d.source.x; })
              .attr("y1", function(d) { return d.source.y; })
              .attr("x2", function(d) { return d.target.x; })
              .attr("y2", function(d) { return d.target.y; });
          /*
          node
            .attr("transform", function(d) { return "translate(" + (d.x = Math.max(radius, Math.min(width - radius, d.x))) + "," + (d.y = Math.max(radius, Math.min(height - radius, d.y))) + ")";
             })
          */
          node
            .attr("transform", function(d) {
              return "translate(" + d.x + "," + d.y + ")";
        })  
        }


        function zoomaction() { //zoom functionality
          g.attr("transform", d3.event().transform);
        }





  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }


return (

            <>
                <div id="vt-map" className="map">
                  <svg width={'100%'} height={'100%'}>
                      {states}
                  </svg>
                </div>
            </>


)
}
export default CountyMap;