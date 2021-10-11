/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React from "react";
import { Card, Row, Col, Container, Navbar, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
import { BsXSquareFill, BsX } from "react-icons/bs";


function Silvopasture(props) {


	return (
		<>
        <Row>
            <Col>

            </Col>
            <Col xs={7}>
                    <Card>
                        <Card.Title id="0" className="mt-5">Silvopasture</Card.Title>

                            <Card.Body>
                                <Row>
                                    <Col>
Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest products on the same parcel of land
                                    </Col>
                                    <Col>
   
                                    </Col>
                                </Row>

                            </Card.Body>

                    </Card> 

                    <Card variant="light" bg="light">

                        <hr/>
                        <Card.Title id="1">Project Goals</Card.Title>
                        <hr/>
                    
                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>
                                <ListGroup>
                                  <ListGroup.Item variant="success">5-Stage Research Goals</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l0"> Assess farmer/agricultural advisor perceptions of Climate Change</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l1">Understand educational needs and learning styles with focus groups</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l2">Develop tools, resources and information to understand and plan for climate change</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l3">Work with community partners for outreach and evaluation of materials with small and medium farmers in Maine and Vermont</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l4">Expand the project through partnership with the USDA Northeast Climate Hub</ListGroup.Item>  
                                </ListGroup>
                                </Col>
                                <Col>      
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#l0">
                    
                                          <cite>Aggregated farmer mental model of the concepts and relationships mentioned by ≥ 10% of farmer
                                            participants (n = 33); “Relationship Mentions” and “Concept Mentions” reflect the percentage of farmers who
                                            included that relationship or concept in their mental model; color indicates the concept category</cite>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l1">
                                          <Image src="https://placekitten.com/g/1000" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l2">
                                          <Image src="https://placekitten.com/g/800" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l3">
                                          <Image src="https://placekitten.com/g/700" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l4">
                                          <Image src="https://placekitten.com/g/810" fluid />
                                        </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>
                    <Card>
                        <hr/>
                        <Card.Title id="2">What is Cost Benefit Analysis?</Card.Title>
                        <hr/>

                            <Card.Body>
                                CBA, or Cost Benefit Analysis, is a tool to identify problems, solutions, and strategies for overcoming challenges given limited resources.
                                Identifying a long-term problem, assessing multiple strategies, and identifying the costs and benefits presented by each are among the steps taken to find the most efficient solution
                                on a case-by-case basis.
                                <br/><br/>
                                In a constantly changing world with data becoming evermore present, preparation and adaptation is necessary for the survival and evolution of many trades.
                                Another goal of CBA is to find a solution that not only evolves a trade, but creates the most utility for society. Often times, there are external factors and outcomes
                                beyond the purview of a study. These may not have an explicit numerical value, but are nonetheless important to consider and prioritize in a CBA.
                                <br/><br/>
                                For example, imposing new laws and regulations on trade may have financial benefits, but will assuredly affect the livelihoods of many individuals. This "social cost" should be
                                accounted for in CBA.
                            </Card.Body>

                    </Card>  

                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Our Mission</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                    Approximately 20% of Vermont is farmland. Across many different techniques and lifestyles, agriculture is among the state's largest exports.
                                    While many people are aware of the dangers presented by climate change, there are very few accessible options to personally explore and tackle this issue.
                                    However, this task is increasinly imperative as the quality of land and natural beauty of the state is threatened.
                                    <br/><br/>
                                    The goal of our research is to understand the local perceptions, concerns, experience and needs of farmers in Vermont.

                                    This will help us to identify resource needs for this community, what information they need to make informed decisions on adaptation practices, and how to effectively translate research on these resources.
                                    Hopefully, this will help to preseve the trade, create sustainable change,
                                    and enhance the success of small, medium, and beginning farms.
                                    <br/><br/>
                                    https://www.nass.usda.gov/Quick_Stats/Ag_Overview/stateOverview.php?state=VERMONT
                                    </Col>
                                    <Col>
                                  
                                    </Col>
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
