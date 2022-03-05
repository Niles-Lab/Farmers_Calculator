/**
 * 
 * ImageSlider - Contains a series of visualizations, a slider to gradually change one in focus
 * and a title / series of captions per image
 * 
 * NOTES:
 * - Images are set up to be pulled from their folders alphabetically. It does not matter what these images are named, so long as their alphabetical name allows them to be sorted into the correct sequence.
 * - Images on the site will keep their native aspect ratio. Consider updating visualizations in the future to have the same size, or same aspect ratio to make them flush.
 * 
 **/

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as d3 from "d3";

// Marks on slider for concrete images
let marks = [];

// Initial opacity state for the fist slider image
let def = [1];


function ImageSlider(props) {


    function setHeight() {
      d3.select("#imgContain")
        .style("height", (imgRef.current ? (imgRef.current.clientHeight+50) : 500))  

      imgStyle = {
        height: (imgRef.current ? (imgRef.current.clientHeight) : 500)
        }  
    }

    useEffect(() => {
        setHeight();
    }, [])

    const imgRef = React.useRef(null);

    var imgStyle = {
        height: (imgRef.current ? (imgRef.current.clientHeight) : 500)
    };

    // What value the opacity slider is at
    const [timeSl, setTimeSl] = useState(0);


    // Which image array is active?
    const [active, setActive] = useState(props.groups);
    //if(typeof props.groups[0] == 'object') setActive(props.groups[0]);

    // Opacity container for images
    const [opacity, setOpacity] = useState(def);

    const [closest, setClosest] = useState(0)

    // Create an updated array for slider marks
    // This should generate 3 values
    function createMarks(arr) {

        marks = [];

        arr.forEach((d,idx) => {
            
            // Sneakily push more opacity values while creating marks
            // This will be a part of the state that holds opacity values for all mapped images
            def.push(0);

            // Push our mark position into the placeholder from [0,1]
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

        // These two opacity values will be modified
        let floor = Math.floor(scaled);
        let ceil = Math.ceil(scaled);


        // Iterate to update opacity of each image
        active.forEach((d,idx) => {

            opac[idx] = 0;


            // Set accordingly to opacity layering
            opac[floor] = (ceil-scaled)+0.2;
            opac[ceil] = (scaled-floor);


            });
            if(parseFloat(scaled-floor)%floor === 0 || scaled === 0) opac[visible] = 1;
            setClosest(Math.round(scaled));
            setOpacity(opac);

    }


	return (
	<Container fluid className="position-relative py-5 d-block h-auto">
        <hr/>        
        <Card.Title className="mt-5 mb-5">{props.title}</Card.Title>



        <Row>

        <Col xs={12} md={6} lg={4}>
         {active.length > 1 && 

            <Box sx={{ width: "100%" }}>
                <Typography className="text-center text-muted small" gutterBottom>Slide to Implement Practice</Typography>
            
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

        </Col>
        </Row>






        <Container fluid onLoad={() => setHeight()} className="h-auto clearfix position-relative pb75 px-0" id="imgContain">



                {/* Map the active image set to screen */}

                {active.map((d,idx) => (

                        <Image
                        rounded
                        key={d+idx}
                        ref={imgRef}
                        className="absImg d-block position-absolute h-100 w-100 clearfix"
                        style={{'opacity': opacity[idx]}}
                        src={d[1].default} 
                        alt={d[0]} />

                    ))}

        </Container>
        <Container className="mt-3 position-relative d-block" style={{'minHeight': '2em'}}>

        {props.lbls &&
            <>

        {(typeof props.lbls[0] == 'string') && 
            <>

                {/* Map the active image labels */}
                {props.lbls.map((lbl,idy) => (

                <p key={idy}
                className="position-absolute text-muted d-block h-auto"
                style={{'opacity': idy === closest ? 1 : 0}}>
                    {lbl}
                </p>

                ))}
  
            </>

        }
        {(typeof props.lbls[0] == 'object') && 
            <>

                {/* Map the active image labels */}
                {props.lbls[props.groups.indexOf(active)].map((lbl,idy) => (

                <Card.Title key={idy}
                className="text-justify position-absolute pl-5 pt-3 d-block h-auto"
                style={{'opacity': idy === closest ? 1 : 0}}>
                    {lbl}
                </Card.Title>

                ))}
  
            </>

        }


          

            </>
        }

        </Container>  


      
	</Container>


		)
}

export default ImageSlider;
