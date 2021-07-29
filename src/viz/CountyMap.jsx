import React, { useState, useEffect } from 'react';
import * as d3 from "d3";
import { geoMercator, geoPath, geoCentroid  } from 'd3-geo';
import usGeoData from './vt-county.json';
//import usGeoData from './vt-county-final.json';
//import * as usGeoData from './vt-county2.geojson';
import { Accordion, Card } from 'react-bootstrap';
import * as topojson from "topojson-client";
import { feature } from "topojson-client"
//import "https://d3js.org/topojson.v1.min.js"

const width = 500;
const height = 500;
let zoomTransform = null;

const CountyMap = () => {



  // const [geographies, setGeographies] = useState([])

  // useEffect(() => {
  //   fetch("/map.topojson")
  //     .then(response => {
  //       if (response.status !== 200) {
  //         console.log(`There was a problem: ${response.status}`)
  //         return
  //       }
  //       response.json().then(worlddata => {
  //         setGeographies(feature(worlddata, worlddata.objects.countries).features)
  //       })
  //     })
  // }, [])


useEffect(() => {
  
  console.log(usGeoData);  
  const svg = d3.select("#vt-map")
    .append("svg")
    .attr("preserveAspectRatio", "none")
    .attr("viewBox", "0 0 500 500")
    //.attr("viewBox", "500 475 50 50");
    .attr("width",width)
    .attr("height",height);


// Define projection and map generation
  const projection = geoMercator()
  //const projection = d3.geoEquirectangular() 
      .scale(1)
      .translate([width/2, height/2])
      .center([-82.5, 43.85]);

  // projection.fitExtent(
  //       [
  //         [0,0],
  //         [width/2, height/2],

  //       ],
  //       usGeoData
  //       )
   projection.fitSize([width,height],usGeoData);


  const path = d3.geoPath().projection(projection);

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
    //.attr("transform", "scale(4)")
    //.attr("transform", "scale(0.2)")
    .style("cursor", "pointer")
    .style("fill", "rgba(0, 113, 85, 0.0)")
    .style("stroke", "black")
    .style("stokeOpacity", 1)
    //.attr("style", "200px")
    //.attr("style", "200px")
    .attr("key", (d,i) => "path" + i)
    .attr("d", (d) => path(d.geometry))
    .on("mouseover", mouseOver)
    .on("mouseleave", mouseLeave)



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

})

return (

            <>
                <div id="vt-map" className="map">

                </div>
            </>


)

  // return (
  //   <svg width={ 800 } height={ 450 } viewBox="0 0 800 450">
  //     <g className="countries">
  //       {
  //         geographies.map((d,i) => (
  //           <path
  //             key={ `path-${ i }` }
  //             d={ d3.geoPath().projection(projection)(d) }
  //             className="country"
  //             fill={ `rgba(38,50,56,${ 1 / geographies.length * i})` }
  //             stroke="#FFFFFF"
  //             strokeWidth={ 0.5 }
  //           />
  //         ))
  //       }
  //     </g>

  //   </svg>
  // )


}
export default CountyMap;