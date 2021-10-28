/**
 * 
 * Tarping - Cover Page for Tarping adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Card, Row, Col, Container, Nav, ListGroup, Tab, Image, Carousel, Overlay, Tooltip } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormController from './../calc/FormController';

const variants = ["Overview", "Benefits", "More"];



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Tarping Cover Image(s)
const sp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));



// What value the slider is at, for image opacity filtering
let timeSl;

// Marks on slider for concrete images
let marks = [];

let def = [0];


function Tarping(props) {

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

        def[0] = 1;

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
                                            // if(idx === 0) setActive(sp);
                                            // if(idx === 1) setActive(pd);
                                            // if(idx === 2) setActive(ig);
                                        }}>
                                            {d}
                                        </Nav.Link>

                                    </Nav.Item>
                                    ))}
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                {/*Tarping Tab*/}
                                <Tab.Pane eventKey="0">

                                    <hr/>
                                    <Card.Title id="2">What is Tarping?</Card.Title>
                                    <hr/>

                                        Tarping is the practice of applying tarps to the soil surface and removing 
                                        them prior to planting to manage or terminate weeds, crops, and cover crops, 
                                        aiding the transition between cash crops with minimal to no soil disturbance.

                                        <br />
                                        <br />
                                        The use of tarps to terminate cover crops in no-till and reduced tillage 
                                         systems allows farms to achieve the benefits of integrating these practices 
                                         without specialized equipment or the application of herbicides. 
                                        <br />
                                        <br />  
                                         Given the logistical challenges of moving, securing, and storing the tarps, they are typically used on small farm operations of less than 5 acres.


                                </Tab.Pane>
                                {/*Pasture Enrichment Tab*/}
                                <Tab.Pane eventKey="1">

                                    <hr/>
                                    <Card.Title id="2">Benefits</Card.Title>
                                    <hr/>

                                    Tarping may also reduce the need to use farm equipment which can 
                                    be helpful in periods of rainy and wet periods when the soil is 
                                    too wet to work. The potential to eliminate use of machinery to 
                                    terminate cover crops or incorporate biomass may also be beneficial
                                     in a more variable climate as it allows farmers greater flexibility
                                      in the timing of cover crop termination.

                                </Tab.Pane>

                                {/*Forest Conversion Tab*/}
                                <Tab.Pane eventKey="2">

                                    <hr/>
                                    <Card.Title id="2">More</Card.Title>
                                    <hr/>

                                This practice offers numerous climate change adaptation benefits. 
                                Tarping can help facilitate no-till, reduced tillage, and cover cropping, 
                                all of which build soil health and improve water holding capacity. Tarping 
                                can also facilitate the use of cover crop residue as a mulch for cash crops
                                 which helps to conserve moisture, increase water infiltration, prevent surface
                                  runoff, and protect soil from erosion. 
                                </Tab.Pane>


                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>

                    {/* Tooltip */}
 {/*                     <Overlay target={target.current} show={show} placement="top">
                        {(props) => (
                          <Tooltip id="overlay-example" {...props} arrow>
                            Drag me!
                          </Tooltip>
                        )}
                      </Overlay>*/}


                          <Box sx={{ width: 250 }}>

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

      
                        <Card.Title id="1" className="mt-4">Benefits and Costs</Card.Title>
                    
                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Eliminates the need for herbicides and/or specialized equipment like a roller-crimper</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Provides flexibility in the timing of cover crop termination</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Augments the weed suppression provided by cover crop residue</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">May support long-term soil health goals, like protecting soil organic matter and building soil structure. Supporting soil health can also improve water holding capacity.</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Eliminates the need for field passes (especially beneficial when soils are too wet to operate equipment) </ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Reduces soil erosion</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Supports use of cover crops, some of which may add valuable nitrogen and reduce future need for fertilizer </ListGroup.Item> 
                                </ListGroup>
                                </Col>
                                <Col>      
                      			<ListGroup>
                                  <ListGroup.Item variant="danger"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Logistical challenges associated with handling tarps, including moving, securing, and storing tarps</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Scale-limited due to above challenges</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Ecological footprint of tarp material manufacturing</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Concerns associated with the disposal of plastic once it is no longer fit for use</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Concerns regarding release of microplastics into soil as tarps wear over time</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Loose tarps can become a hazard to farm equipment, animals, and people</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Pooling of water on and around edges of tarp</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">May create habitat for rodents, increasing this pest population and predators such as snakes</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Reusing tarps may introduce soil-borne diseases into uninfected fields if moving from an infected field</ListGroup.Item>


                                </ListGroup>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>


                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Additional Resources</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row className="text-center">
                                	Interested in Tarping?&nbsp;<a href="./formcontroller">Check out our economic tool</a>&nbsp;to determine your potential costs and revenue. See what Tarping looks like &nbsp;<a href="./resources">here</a>.
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

export default Tarping;
