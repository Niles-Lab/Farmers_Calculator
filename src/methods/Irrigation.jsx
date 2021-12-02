/**
 * 
 * Irrigation - Cover Page for Irrigation adaptation method
 * 
 **/

//import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Card, Row, Col, Navbar,Container, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
import { BsBoxArrowUpRight } from "react-icons/bs";
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';

const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources"]; 

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
let lbls = [
["Testng One", "Step Two", "And yYp Three"],
["Ex One", "Ex Two", "Ex Three"],
["ab", "test"],
["abc","asfse","fakjsf"]
];


function Irrigation(props) {





	return (
		<>
        <Row>


            <Col xs={2}>
                <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
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
            <Col xs={10} lg={8}>



                <Card id="a0">

                <Card.Body>


                <hr/>
                <Card.Title id="2">Irrigation</Card.Title>
                <hr/>

                <Row>
                <Col xs={12} md={6}>

                    <br/>



{/*                <Alert variant={'warning'}>
                    Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear. As climate change increases the frequency and severity of extreme weather patterns, such as heat and drought interspersed with heavy precipitation events, the need for and benefits of irrigation are likely to increase. 
                </Alert>*/}
                    Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear. As climate change increases the frequency and severity of extreme weather patterns, such as heat and drought interspersed with heavy precipitation events, the need for and benefits of irrigation are likely to increase. 
                    <br/>
                    <br/>



{/*                <Alert variant={'success'}>
                    Solid set irrigation is a sprinkler system that uses higher pressure and water volume than drip irrigation. It is frequently used on small and medium farms due to its adaptability to a variety of soil and field conditions, the ability to easily automate it, and for its additional use for frost prevention. Due to the high water flow, a substantial water supply, such as that from a pond or large well, is required to support this sprinkler system. Weed control around the sprinkler risers is also needed to maintain their visibility and prevent accidental damage from farm equipment operated nearby. Solid set sprinkler systems may also require close management, ensuring that the rate of application does not exceed the rate of soil absorption to prevent overwatering and subsequent runoff and erosion. Since uniform application of water can be a challenge with sprinklers, attention should be given to all areas of the irrigation system, as some areas may be underwatered while others are overwatered.            
                </Alert>*/}
                    Solid set irrigation is a sprinkler system that uses higher pressure and water volume than drip irrigation. It is frequently used on small and medium farms due to its adaptability to a variety of soil and field conditions, the ability to easily automate it, and for its additional use for frost prevention. Due to the high water flow, a substantial water supply, such as that from a pond or large well, is required to support this sprinkler system.
                    <br/>
                    <br/>

                    Weed control around the sprinkler risers is also needed to maintain their visibility and prevent accidental damage from farm equipment operated nearby. Solid set sprinkler systems may also require close management, ensuring that the rate of application does not exceed the rate of soil absorption to prevent overwatering and subsequent runoff and erosion. Since uniform application of water can be a challenge with sprinklers, attention should be given to all areas of the irrigation system, as some areas may be underwatered while others are overwatered.            


                </Col>
                <Col xs={12} md={6}>


                    <Image
                    className="d-block w-100 mb-3"
                    src={sp[0][1].default} 

                    />


            

{/*                <Alert variant={'info'} className={"mt-3"}>
                    There are a variety of irrigation systems that farmers may consider installing. Two options suitable for small and medium New England farms are drip and solid set sprinkler irrigation. 
                </Alert>*/}
                    There are a variety of irrigation systems that farmers may consider installing. Two options suitable for small and medium New England farms are drip and solid set sprinkler irrigation. 
                    <br/>
                    <br/>
                    <br/>
                    <br/>

{/*                <Alert variant={'danger'}>
                    Drip irrigation brings water to crop root zones through low pressure devices, such as micro spray, bubblers and tape, that are operated just above or directly on the ground, or just under the soil surface. This option works well in orchards and vineyards and in vegetable and flower production. While drip irrigation is easy to install, efficient, effective on sloping fields, and unaffected by wind, it also has high management and maintenance needs, including those related to issues such as clogging and bacterial and algal growth.  
                </Alert>*/}
                    Drip irrigation brings water to crop root zones through low pressure devices, such as micro spray, bubblers and tape, that are operated just above or directly on the ground, or just under the soil surface. This option works well in orchards and vineyards and in vegetable and flower production. While drip irrigation is easy to install, efficient, effective on sloping fields, and unaffected by wind, it also has high management and maintenance needs, including those related to issues such as clogging and bacterial and algal growth.  

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
                                  <ListGroup.Item variant="light" action href="">Drip irrigation is easy to install, efficient, effective on sloping fields, and unaffected by wind</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Solid set sprinkler irrigation is adaptable to a variety of field and soil conditions, can be used for frost prevention, and is easily automated</ListGroup.Item> 
                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="danger"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Upfront investment required to install pond irrigation system</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Ongoing maintenance and labor costs</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Adequate and reliable water source required, yet are specific to unique farm settings and locations</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Drip irrigation is susceptible to clogging and bacterial and algal growth </ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Solid set sprinkler systems require a substantial water supply, weed control around the risers, and management to prevent overwatering</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Uniform water application can be a challenge with solid set sprinklers</ListGroup.Item>


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

                <ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />

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
                        <Card.Title id="a3">Additional Resources</Card.Title>
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
            <Col xs={0} lg={2}>

            </Col>
        </Row>
	</>
		)
}

export default Irrigation;
