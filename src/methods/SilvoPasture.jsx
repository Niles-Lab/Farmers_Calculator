/**
 * 
 * Silvopasture - Cover Page for Silvopasture adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Container, Nav, Navbar, Alert, ListGroup, Tab, Image, Button } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';

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

// Pasture Enrichment Images 2
const pe2 = importAll(require.context('../images/silvopasture/pe2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const fc = importAll(require.context('../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));

const groups = [pe,pe2,fc];
const labels = ["Pasture Enrichment", "Example 2", "Forest Conversion"];



// Initial opacity state for the fist slider image
let def = [1];


function Silvopasture(props) {




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


                <hr/>
                <Card.Title id="2">Silvopasture</Card.Title>
                <hr/>
                <Alert variant={'warning'} className="mx-4">
                    Silvopasture is an agroforestry system that combines well-managed woodlands and
                    pastures to generate both livestock and forest products on the same parcel of land
                </Alert>
                <Row>
                <Col xs={12} md={6}>
                <Alert variant={'info'}>
                    Two approaches to silvopasture are pasture enrichment and forest conversion. Pasture
                    enrichment involves adding trees into the pasture area. In forest conversion, trees are
                    thinned in uniform, patch, or irregular patterns, and pasture species are seeded. A
                    variation of forest conversion is when forests are thinned along a field edge, creating
                    “open field edge” silvopasture. Additional approaches to silvopasture include introducing
                    livestock into orchards and maple sugarbush forests, and the creation of outdoor living
                    barns. Living barns are high density stands of trees, often conifers, planted into pastures
                    primarily to provide shelter.
                </Alert>


                <Alert variant={'danger'}>
                    Silvopasture offers numerous climate change adaptation benefits that address
                    challenges such as increased frequency and severity of weather extremes (i.e. drought,
                    heat, and heavy rains). Combining woodland with pasture provides shade and protection
                    for livestock, may enhance carbon sequestration, and can improve water filtration and
                    retention.
                    <br/><br/>
                    Skilled and active management of pasture and woodland together with sound livestock
                    husbandry are essential to achieving a sustainable and successful silvopasture system.
                </Alert>







                </Col>
                <Col xs={12} md={6}>
                    <Image
                    className="d-block w-100"
                    src={sp[0][1].default} 

                    />
                <Alert variant={'success'} className={"mt-5"}>
                     Silvopasture systems are diverse and varied and can be designed to meet farmers’
                    unique goals and complement existing and desired farm characteristics. Accounting for
                    these goals and local conditions can help determine which approach to establishing
                    silvopasture is appropriate for each farm. Considerations include the desired
                    composition of forage, tree and livestock species, and what forest and livestock products
                    will be produced.
                </Alert>
                </Col>
                </Row>
                </Card.Body>

                </Card>






                    <Card variant="light" bg="light">

                        <hr/>
                        <Card.Title>Components of Silvopasture</Card.Title>
                        <hr/>

                          <Alert variant={'info'} className="px-5 mx-5 mb-0">
                            Components of Northeast Silvopasture systems may include but are not limited to these elements
                          </Alert>

                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="info">Tree Species</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Oaks</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Maples</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Fruit Trees</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Eastern White Pine</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Hickories</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Eastern Hemlock</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Commercial Nut Trees</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Black Locust</ListGroup.Item>  


                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success">Forest Products</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Firewood</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Sawtimber</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Fence Posts</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Scion Wood</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Fruit</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Nuts</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Maple Sap</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Tree Nursery</ListGroup.Item>

                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="danger">Livestock Species</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Cattle (beef, dairy)</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Goats (meat, dairy)</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Pigs</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Sheep (meat, fiber)</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Chicken (meat, eggs)</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Turkeys</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Horses</ListGroup.Item>  


                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="secondary">Forages</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Red Clover</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">White Clover</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Orchardgrass</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Bentgrasses</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Fescues</ListGroup.Item>  
                                  <ListGroup.Item variant="light" action href="">Timothy</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Ryegrasses</ListGroup.Item>  

                                </ListGroup>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>
 

            {/* Tabbed view of method variants */}
            <Card id="a1">

            <Card.Body>

                <ImageSlider groups={groups} labels={labels} id="a1" />

            </Card.Body>

            </Card>  
                    <Card variant="light" bg="light">

                    <hr/>
                        <Card.Title>Benefits and Costs</Card.Title>
                    <hr/>

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
