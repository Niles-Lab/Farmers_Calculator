/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React from "react";
import { Card, Row, Col, Container, Nav, ListGroup, Tab, Image, Carousel } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';

const variants = ["Silvopasture", "Pasture Enrichment", "Forest Conversion"];

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

let timeSl = 2;

const pe = importAll(require.context('../images/silvopasture/pe', false, /\.(png|jpe?g|svg)$/));
//const fc = importAll(require.context('../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));

function Silvopasture(props) {

	return (
		<>
        <Row>
            <Col>

            </Col>
            <Col xs={7}>



                    {/* Tabbed view of method variants */}
                    <Card>

                        <Image src="../images/silvopasture/cover.jpg" />
                    
                    <ReactBootstrapSlider
                        value={timeSl}
                        //change={this.changeValue}
                        //slideStop={this.changeValue}
                        step={1}
                        max={1}
                        min={3}
                        orientation="vertical"
                        reversed={true}
                        disabled="disabled" />

                    <Card.Body>

                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                {variants.map((d,idx) => (
                                    <Nav.Item>

                                        <Nav.Link eventKey={idx} variant="success">
                                            {d}
                                        </Nav.Link>

                                    </Nav.Item>
                                    ))}
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                <Tab.Pane eventKey="0">

                                    <hr/>
                                    <Card.Title id="2">What is Silvopasture?</Card.Title>
                                    <hr/>

                                    Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest products on the same parcel of land
                                    
                            
                                </Tab.Pane>
                                <Tab.Pane eventKey="1">
                                  adfasdf
                                </Tab.Pane>
                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>


                    </Card.Body>

                    </Card>  

                    <Carousel>
                    	{Object.entries(pe).map(d => (

                    		<Carousel.Item>
                    			<img
                    				className="d-block w-100"
                    				src={d[1].default} 
                    				alt={d[0]}/>
                    		</Carousel.Item>


                    		))}
                    </Carousel>

                    <Card variant="light" bg="light">

      
                        <Card.Title id="1" className="mt-4">Benefits and Costs</Card.Title>
                    
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

                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Additional Resources</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row className="text-center">
                                	Interested in silvopasture?&nbsp;<a href="./formcontroller">Check out our economic tool</a>&nbsp;to determine your potential costs and revenue. See what silvopasture looks like &nbsp;<a href="./resources">here</a>.
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
