/**
 * 
 * Silvopasture - Cover Page for Silvopasture adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Container, Nav, Navbar, Alert, ListGroup, Tab, Image, Carousel, Overlay, Tooltip, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
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

// What value the slider is at, for image opacity filtering
// let timeSl;

// Marks on slider for concrete images
let marks = [];

// Initial opacity state for the fist slider image
let def = [1];


function Silvopasture(props) {

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
        <Row>


            <Col>
                <Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (
                            <Nav.Link href={"#a" + idx}>
                            {d}
                            </Nav.Link>
                            ))}
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
            <Col md={8}>



                    {/* Tabbed view of method variants */}
                    <Card id="a0">

                    <Card.Body>

                        <Tab.Container defaultActiveKey="0">
                          <Row>
                            <Col md={3}>
                              <Nav variant="pills" className="flex-column">
                                {variants.map((d,idx) => (
                                    <Nav.Item key={idx}>

                                        <Nav.Link eventKey={idx} variant="success" onClick={function(d) {
                                            // Manually set active image set on select
                                            if(idx === 0) setActive(sp);
                                            if(idx === 1) setActive(pe);
                                            if(idx === 2) setActive(fc);

                                            // Reset opacity / slider settings
                                            setTimeSl(0);
                                            setOpacity(() => {let opac = opacity; opac[0] = 1; return opac;});

                                        }}>
                                            {d}
                                        </Nav.Link>

                                    </Nav.Item>
                                    ))}
                              </Nav>
                            </Col>
                            <Col md={9}>
                              <Tab.Content>
                                {/*Silvopasture Tab*/}
                                <Tab.Pane eventKey="0">

                                    <hr/>
                                    <Card.Title id="2">What is Silvopasture?</Card.Title>
                                    <hr/>

                                    Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest products on the same parcel of land
                                    
                            
                                </Tab.Pane>
                                {/*Pasture Enrichment Tab*/}
                                <Tab.Pane eventKey="1">

                                    <hr/>
                                    <Card.Title id="2">Pasture Enrichment</Card.Title>
                                    <hr/>

                                  Pasture enrichment involves adding trees into the pasture area.
                                </Tab.Pane>

                                {/*Forest Conversion Tab*/}
                                <Tab.Pane eventKey="2">

                                    <hr/>
                                    <Card.Title id="2">Forest Conversion</Card.Title>
                                    <hr/>

                                     In forest conversion, trees are thinned in uniform, patch, or irregular patterns, and pasture species are seeded. A variation of forest conversion is when forests are thinned along a field edge, creating “open field edge” silvopasture.
                            
                                </Tab.Pane>


                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>

                    <ButtonToolbar aria-label="Slideshow Selection Toolbar">

                      <ButtonGroup className="ml-5 float-right align-right">
                        Select Images&nbsp;
                        <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
                      </ButtonGroup>
                    </ButtonToolbar>

                     {active.length > 1 && 
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

                    </Card>  

                    <Card variant="light" bg="light">

      
                        <Card.Title id="a1" className="mt-4">Benefits and Costs</Card.Title>


                          <Alert variant={'info'} className="px-5 mx-5 mb-0">
                            Before installing silvopasture systems, trade-offs should be carefully considered. It may not be
                            possible to realize all or even some of these potential benefits, while potential challenges may
                            be mitigated through management and/or silvopasture system design.
                          </Alert>

                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Increased stocking capacity (when expanding grazing into wooded areas)</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Increased utilization of woodland</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Cost-effective vegetation control</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Diversified farm products and income</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Improved animal performance through greater comfort with shelter and shade</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Improved animal health through diversified diets</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Balancing of seasonal forage growth and increased forage availability during droughts</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Creation of high-value wildlife habitat</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Improved tree health and performance</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Improved soil health</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Improved water retention and quality</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Carbon sequestration</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Beneficial farm aesthetics</ListGroup.Item>   
                                </ListGroup>
                                </Col>
                                <Col>      
                      			<ListGroup>
                                  <ListGroup.Item variant="danger"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Livestock exposure to toxic plants, predators, parasites, diseases, physical hazards, hunters</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Silvopasture establishment and maintenance costs, time, and labor</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Managers’ lack of silvopasture management experience and knowledge </ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Reduced mobility of farm equipment in grazing areas</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Undesirable vegetation, including invasive plants</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Soil degradation and compaction</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Decreased water retention and qualitys</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Carbon release</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Damage to tree roots, bark, and branches</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Implementation of silvopasture may impact farms’ Current Use designation and enrollment</ListGroup.Item>  
                                </ListGroup>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>



                <hr/>
                    <Card.Title id="a2">Silvopasture Economic Tool</Card.Title>
                <hr/>
                {/* Calculator */}
                <FormController />

                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Additional Resources</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row className="text-center align-center">
                                	<Col></Col>
                                    <Col xs={8}>
                                    Interested in Silvopasture? View additional resources&nbsp;<a href="./resources">Here</a>.

                                    View our brief&nbsp;<Link to={{pathname: 
                                        "/resources/Silvopasture Two-Pager.pdf"
                                    }} target="_blank">Here <BsBoxArrowUpRight/></Link>
                                    </Col>
                                    <Col></Col>
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

export default Silvopasture;
