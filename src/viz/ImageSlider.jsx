/**
 * 
 * ImageSlider - Contains multiple sliders of visualizations, a slider to gradually change one in focus
 * and a button group to toggle between them
 * 
 **/

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Container, Nav, Navbar, Alert, ListGroup, Tab, Image, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import FormController from './../calc/FormController';

const variants = ["Silvopasture", "Pasture Enrichment", "Forest Conversion"];

const navs = ["Overview", "Visualizations", "Economic Tool"]; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Silvopasture Cover Image(s)
const sp = importAll(require.context('../images/silvopasture/sp', false, /\.(png|jpe?g|svg)$/));

// Pasture Enrichment Images
const pe = importAll(require.context('../images/silvopasture/pe', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const fc = importAll(require.context('../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));

const groups = [sp,pe,fc];


// Marks on slider for concrete images
let marks = [];

// Initial opacity state for the fist slider image
let def = [1];


function ImageSlider(props) {

    // What value the opacity slider is at
    const [timeSl, setTimeSl] = useState(0);

    // Which image array is active?
    const [active, setActive] = useState(sp);

    // Opacity container for images
    const [opacity, setOpacity] = useState(def);


    // Create an updated array for slider marks
    function createMarks(arr) {

        marks = [];

        arr.forEach((d,idx) => {
            
            def.push(0);

            marks.push({
               value: idx/(arr.length-1)
            });

        });

        return marks;
       
    }

    // event - mouesevent
    // idx - slider index
    // arr - what array of images are we modifying
    function handleChange(event,idx) {
        

        // Value from slider
        setTimeSl(event.target.value);

        // Number of pictures to divide into
        let divs = (active.length)-1;

        // Scaled number with range
        let scaled = idx*divs;

        // Local copy of opacity array
        let opac = {opacity};

        // Which element should be entirely opaque
        let visible = (Math.round(scaled));


        // Iterate to update opacity of each image
        active.forEach((d,idx) => {

            opac[idx] = 0;

            // These two opacity values will be modified
            let floor = Math.floor(scaled);
            let ceil = Math.ceil(scaled);

            // Set accordingly to opacity layering
            opac[floor] = ceil-scaled;
            opac[ceil] = scaled-floor;


            });
            opac[visible] = 1;
            setOpacity(opac);

    }


	return (
		<>



                    <Card.Body>

                        <Tab.Container defaultActiveKey="0">

                        </Tab.Container>
                          
                    <ButtonToolbar aria-label="Slideshow Selection Toolbar">

                      <ButtonGroup className="ml-5 float-right align-right">
                        Select Images&nbsp;

{/*                        {groups.map((d,idx) => (
                                <Button
                                    href={"#a" + idx}
                                    key={d+idx}
                                    className="d-block w-100"
                                    >{idx}</Button>
                            ))}*/}
                        {groups.map((d,idx) => (
                                <Button
                                    key={d+idx}
                                    className="d-block w-100"
                                    eventKey={idx} onClick={function(d) {
                                            // Manually set active image set on select
                                            if(idx === 0) setActive(sp);
                                            if(idx === 1) setActive(pe);
                                            if(idx === 2) setActive(fc);

                                            // Reset opacity / slider settings
                                            setTimeSl(0);
                                            setOpacity(() => {let opac = opacity; opac[0] = 1; return opac;});

                                        }}
                                    >{idx}</Button>
                            ))}




                      </ButtonGroup>
                    </ButtonToolbar>

                     {active.length > 1 && 

                        <Box sx={{ width: 250 }}>
                            <Typography gutterBottom>Slide to change</Typography>
                        
                            <Slider

                                getAriaLabel={() => 'Image Slider'}
                                min={0}
                                marks={createMarks(active)}
                                max={1}
                                step={0.01}
                                value={timeSl}
                                style={{position: "relative"}}
                                onChange={(event,idx) => handleChange(event,idx)}
                            />
                        </Box>
                            

                           }

                        {/* Fading images accompanying slider */}
                          <Box style={{'minHeight': '500px','position': 'relative'}}>

                                {/* Map the active image set to screen */}
                                {active.map((d,idx) => (

                                        <img
                                            key={d+idx}
                                            className="d-block w-100"
                                            style={{'position': 'absolute', 'opacity': opacity[idx]}}
                                            src={d[1].default} 
                                            alt={d[0]}
                                            />
                                    ))}

                          </Box>


                    </Card.Body>

   




	</>
		)
}

export default ImageSlider;
