import { React } from 'react';
import { Card, Row, Col, Container, Navbar, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
import Chart from "./viz/Chart.jsx"
import mental_map from './images/mental_map.png';

const Research = (props, ref) => {

//const scroll = (ref) => props.refProp.scrollIntoView()
//const ref4 = props.refs[3];
const navs = ["Abstract", "Project Goals", "Methods", "Focus Group"];

return (


        <div>
        <Row>
            <Col>
                <Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (
                            <Nav.Link href={"#" + idx}>
                            {d}
                            </Nav.Link>
                            ))}
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
            <Col>
                    <Card>


                        <Card.Title id="0" className="mt-5"></Card.Title>

                            <blockquote className="blockquote mb-0 mx-5">
                              <p>
                              <em>
                                {' '}
                                The long term goal of this project is to enhance the success of small, medium and beginning farmers in the Northeastern United States(specifically Maine and Vermont) by developing climate change resources that consider farmer&#39;s own 
                                perceptions, concerns, experience, and needs. We focus on these states because of the high percent of small, medium and beginning farmers in this region and the unique climate change challenges facing the Northeast. 
                                {' '}
                              </em>
                              </p>

                              <footer className="blockquote-footer">
                                    <a target="_blank" href="https://training-portal.nifa.usda.gov/web/crisprojectpages/1015771-assessing-climate-perceptions-and-developing-adaptation-resources-for-small-medium-and-beginning-farms.html">
                                        <cite>USDA Grant Summary</cite>
                                    </a>
                              </footer>
                            </blockquote>
                            <Card.Body>
                                <Row>
                                    <Col>

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
                                          <Image src={mental_map} fluid />
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
                                <Chart />
                            </Container>
                            </Card.Body>

                    </Card>

            </Col>
            <Col>

            </Col>
        </Row>
        </div>



)
}
export default Research;