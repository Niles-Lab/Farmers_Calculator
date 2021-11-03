/**
 * 
 * Irrigation - Cover Page for Irrigation adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Card, Row, Col, Container, Nav, ListGroup, Tab, Image, Carousel, Overlay, Tooltip } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormController from './../calc/FormController';

const variants = ["Overview", "Ponds", "Irrigation"];



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Irrigation Cover Image(s)
const sp = importAll(require.context('../images/irrigation/', false, /\.(png|jpe?g|svg)$/));

// Ponds images
const pd = importAll(require.context('../images/irrigation/pd/', false, /\.(png|jpe?g|svg)$/));

// Irrigation images
const ig = importAll(require.context('../images/irrigation/ig/', false, /\.(png|jpe?g|svg)$/));

// What value the slider is at, for image opacity filtering
let timeSl;

// Marks on slider for concrete images
let marks = [];

// Initial opacity state for the fist slider image
let def = [1];


function Irrigation(props) {

    // What value the opacity slider is at
    const [timeSl, setTimeSl] = useState(0);

    // Which image array is active?
    const [active, setActive] = useState(sp);

    // Opacity container for images
    const [opacity, setOpacity] = useState(def);

    // Show state for overlay/tooltip
    const [show, setShow] = useState(false);

    // Also for overlay/tooltip
    const target = useRef(null);

    // Create an updated array for slider marks
    function createMarks(arr) {

        marks = [];

        arr.forEach((d,idx) => {
            
            def.push(0);

            marks.push({
               value: idx/(arr.length-1),
               //label: "img " + (parseInt(h)+1)
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
        <Row>


            <Col>
                    
            </Col>
            <Col xs={7}>



                    {/* Tabbed view of method variants */}
                    <Card>

                    <Card.Body>

                        <Tab.Container defaultActiveKey="0">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                {variants.map((d,idx) => (
                                    <Nav.Item key={idx}>

                                        <Nav.Link eventKey={idx} variant="success" onClick={function(d) {
                                            // Manually set active image set on select
                                            if(idx === 0) setActive(sp);
                                            if(idx === 1) setActive(pd);
                                            if(idx === 2) setActive(ig);
                                        }}>
                                            {d}
                                        </Nav.Link>

                                    </Nav.Item>
                                    ))}
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                {/*Irrigation Tab*/}
                                <Tab.Pane eventKey="0">

                                    <hr/>
                                    <Card.Title id="2">What is Irrigation?</Card.Title>
                                    <hr/>

                                        Ponds can be a useful climate change adaptation tool. They help provide 
                                        irrigation water during dry periods, and serve as landscape storage for
                                         excess water and runoff during heavy precipitation events. 
                                        <br />
                                        <br />
                                        As climate change increases the frequency and severity of extreme
                                         weather patterns, such as heat and drought interspersed with heavy 
                                         precipitation events, the need for and benefits of irrigation are 
                                         likely to increase. 


                                </Tab.Pane>
                                {/*Pasture Enrichment Tab*/}
                                <Tab.Pane eventKey="1">

                                    <hr/>
                                    <Card.Title id="2">Ponds</Card.Title>
                                    <hr/>

                                  Pairing ponds with an irrigation system can help balance these cycles of water surplus and scarcity by collecting and storing runoff for later use as irrigation during hot, dry periods. 
                                </Tab.Pane>

                                {/*Forest Conversion Tab*/}
                                <Tab.Pane eventKey="2">

                                    <hr/>
                                    <Card.Title id="2">Irrigation</Card.Title>
                                    <hr/>

                                     
                                Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear.
                                </Tab.Pane>


                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>


                    <Card variant="light" bg="light">

      
                        <Card.Title id="1" className="mt-4">Benefits and Costs</Card.Title>
                    
                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Improves crop quality, consistency, and yield</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Supports the production of a greater variety of crops</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Prevents crop losses</ListGroup.Item> 
                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="danger"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Upfront investment required to install pond irrigation system</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Ongoing maintenance and labor costs for pond and irrigation system </ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Ponds require specific site conditions and are not possible or suitable for all farms</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Must comply with state and federal regulations regarding water usage for pond installation</ListGroup.Item>


                                </ListGroup>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>









                    {/* Tooltip */}
 {/*                     <Overlay target={target.current} show={show} placement="top">
                        {(props) => (
                          <Tooltip id="overlay-example" {...props} arrow>
                            Drag me!
                          </Tooltip>
                        )}
                      </Overlay>*/}


                     {active.length > 1 && 
                          <Box sx={{ width: 250 }} className={() => active.length <= 1 ? 'd-none' : 'd-none'}>
 
                            Slide to change!
           
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
                                            className="d-block w-100"
                                            style={{'position': 'absolute', 'opacity': opacity[idx]}}
                                            src={d[1].default} 
                                            alt={d[0]}/>
                                    ))}

                          </Box>


                    </Card.Body>

                    </Card>  




                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Additional Resources</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row className="text-center">
                                	Interested in Irrigation?&nbsp;<a href="./formcontroller">Check out our economic tool</a>&nbsp;to determine your potential costs and revenue. See what Irrigation looks like &nbsp;<a href="./resources">here</a>.
                                </Row>
             
                            </Container>
                            </Card.Body>
                    </Card>

            </Col>
            <Col>

            </Col>
        </Row>
	</>
		)
}

export default Irrigation;
