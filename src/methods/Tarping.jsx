/**
 * 
 * Tarping - Cover Page for Tarping adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Alert, Card, Row, Col, Container, Nav, Navbar, ListGroup, Tab, Image, Carousel, Overlay, Tooltip } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';

const variants = ["Overview", "Benefits", "More"];

const navs = ["Overview", "Visualizations", "Economic Tool"]; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Tarping image slides
const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));

// Tarping cover image is just the first from our one set
const sp = [tp[0]];

// Collection of elements for ImageSlider
let groups = [tp];

let labels = ["Tarping"];


function Tarping(props) {





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
            <Col xs={8}>



                <Card id="a0">

                <Card.Body>


                <hr/>
                <Card.Title id="2">Tarping</Card.Title>
                <hr/>
                <Alert variant={'warning'} className="mx-4">
                    Tarping is the practice of applying tarps to the soil surface and removing them prior to planting to manage or terminate weeds, crops, and cover crops, aiding the transition between cash crops with minimal to no soil disturbance. The use of tarps to terminate cover crops in no-till and reduced tillage systems allows farms to achieve the benefits of integrating these practices without specialized equipment or the application of herbicides. 
                </Alert>
                <Row>
                <Col xs={12} md={6}>
                <Alert variant={'info'}>
                    This practice offers numerous climate change adaptation benefits. Tarping can help facilitate no-till, reduced tillage, and cover cropping, all of which build soil health and improve water holding capacity. Tarping can also facilitate the use of cover crop residue as a mulch for cash crops which helps to conserve moisture, increase water infiltration, prevent surface runoff, and protect soil from erosion. 
                </Alert>


                <Alert variant={'danger'}>
                    Given the logistical challenges of moving, securing, and storing the tarps, 
                    they are typically used on small farm operations of less than 5 acres.
                </Alert>


                <hr/>
                <Card.Title id="2">General Logistics of Tarping</Card.Title>
                <hr/>
                <Alert variant={'warning'} className="text-start">
                    A variety of tarps of varying thickness, material, durability and size can be used for 
                    this practice, including landscaping fabric, billboard and silage tarps, with a lifespan
                    ranging from 1-8 years. Sandbags and cinder blocks are often used to secure tarps
                    and prevent the tarp from blowing loose and becoming a hazard to equipment, animals
                    and people. At least two people are generally needed to apply, remove, and store
                    tarps, though this may vary depending on tarp and field size as well as weather
                    conditions.

                    <br/><br/>
                    <strong>
                    The use of tarping in cover crop and conservation tillage systems is a flexible multi-step process. One example of this is shown below. 
                    </strong>
                    <br/><br/>
                    <p className="text-left"><strong>Late August/Early September:</strong> plant perennial rye cover crop</p>
                    <p className="text-left"><strong>June:</strong> Roll down rye using either a lawn roller or a tractor driven roller crimper</p>
                    <p className="text-left"><strong>June:</strong> Place tarps, secure with sand bags</p>
                    <p className="text-left"><strong>June:</strong> Remove tarps after two weeks. Plant cash crop of brassica starts</p>
                    <p className="text-left"><strong>August/September:</strong> Harvest crops, plant cover crop</p>


                </Alert>


                </Col>
                <Col xs={12} md={6}>
                    <Image
                    className="d-block w-100"
                    src={sp[0][1].default} 

                    />
                <Alert variant={'success'} className={"mt-5"}>
Tarping may also reduce the need to use farm equipment which can be helpful in periods of rainy and wet periods when the soil is too wet to work. The potential to eliminate use of machinery to terminate cover crops or incorporate biomass may also be beneficial in a more variable climate as it allows farmers greater flexibility in the timing of cover crop termination.
                </Alert>

                </Col>
                </Row>
                </Card.Body>

                </Card>
                    {/* Tabbed view of method variants */}
                    <Card id="a1">
                    <hr/>
                    <Card.Title id="2">Visualizations</Card.Title>
                    <hr/>
                    <Card.Body>

                        <ImageSlider groups={groups} labels={labels} id="a1" />

                    </Card.Body>

                    </Card>  
                    <Card variant="light" bg="light">
                    

                    <hr/>
                        <Card.Title>Benefits and Costs</Card.Title>
                    <hr/>

                          <Alert variant={'info'} className="px-5 mx-5 mb-0">
                            Filler Text
                          </Alert>
      

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



                <hr/>
                    <Card.Title id="a2">Tarping Economic Tool</Card.Title>
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
                                    Interested in Tarping? View additional resources&nbsp;<a href="./resources">Here</a>.

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

export default Tarping;
