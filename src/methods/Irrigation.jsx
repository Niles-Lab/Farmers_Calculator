/**
 * 
 * Irrigation - Cover Page for Irrigation adaptation method
 * 
 **/

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, Row, Col, Navbar,Container, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';

const variants = ["Overview", "Ponds", "Irrigation"];

const navs = ["Overview", "Visualizations", "Economic Tool"]; 

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

let groups = [ig, pd];

let labels = ["Irrigation", "Irrigation With Ponds"];


function Irrigation(props) {





	return (
		<>
        <Row>


            <Col>
                <Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (
                            <Nav.Link key={d+idx} href={"#a" + idx}>
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
                <Card.Title id="2">Irrigation</Card.Title>
                <hr/>

                <Row>
                <Col xs={12} md={6}>

                <Alert variant={'warning'}>
                    Ponds can be a useful climate change adaptation tool. They help provide irrigation water during dry periods, and serve as landscape storage a reservoir for excess water and runoff during heavy precipitation events. 
                </Alert>

                <Alert variant={'info'}>
                   Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear.
                </Alert>


                <Alert variant={'danger'}>
                    As climate change increases the frequency and severity of extreme weather patterns, such as heat and drought interspersed with heavy precipitation events, the need for and benefits of irrigation are likely to increase. 
                </Alert>




                </Col>
                <Col xs={12} md={6}>
                    <Image
                    className="d-block w-100"
                    src={sp[0][1].default} 

                    />
                <Alert variant={'success'} className={"mt-5"}>
Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear.                </Alert>

                </Col>
                </Row>
                </Card.Body>
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


                </Card>
                <hr/>
                    <Card.Title id="a2">Irrigation Economic Tool</Card.Title>
                <hr/>
                {/* Calculator */}
                <FormController />

                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Additional Resources</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                    <Row>

                        <ListGroup>
                            <ListGroup.Item variant="info"></ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://www.uvm.edu/climatefarming/sites/default/files/files/uvm_dripirrigation.pdf">Getting started with drip irrigation: components and costs (University of Vermont Extension, Rachel Schattman and Chloe Boutelle, Updated November 2018)</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://www.climatehubs.usda.gov/hubs/northeast/topic/irrigation-pays-protecting-crop-revenues">Irrigation pays protecting crop revenues (USDA Northeast Climate Hub)
Benefits of Irrigation: Intervale Community Farm 
</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://www.uvm.edu/sites/default/files/media/IrrigationCaseStudy_Feb2018_cmyk_bleed.pdf">Partial Budget (USDA Northeast Climate Hub and University of Vermont Extension, September 2017) 
                            </ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://www.uvm.edu/sites/default/files/media/irrigation_case_study_intervale_july_2017_0.pdf">Case Study (Andy Jones, September 2017)
                            Benefits of Irrigation: Intervale Community Farm 
                            </ListGroup.Item> 
                        </ListGroup>


                    </Row>
                                <Row className="text-center align-center">
                                    <Col></Col>
                                    <Col xs={8}>
                                    Interested in Irrigation? View additional resources&nbsp;<a href="./resources">Here</a>.

                                    View our brief&nbsp;<Link to={{pathname: 
                                        "/resources/Pond and Irrigation Two-Pager.pdf"
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

export default Irrigation;
