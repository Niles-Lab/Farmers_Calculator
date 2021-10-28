import { React } from 'react';
import { Card, Row, Col, Container, Navbar, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
import Chart from "./viz/Chart.jsx"
import mental_map from './images/mental_map.png';
import code from './images/code.png';
import focus_group from './images/focus_group.png';


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
            <Col xs={6}>
   



                            <blockquote className="blockquote mt-5 mb-0 mx-5">
                              <p>
                              <em>
                                {' '}
                                The long term goal of this project is to enhance the success of small, medium and beginning farmers in the Northeastern United States(specifically Maine and Vermont) by developing climate change resources that consider farmer&#39;s own 
                                perceptions, concerns, experience, and needs. We focus on these states because of the high percent of small, medium and beginning farmers in this region and the unique climate change challenges facing the Northeast. 
                                {' '}
                              </em>
                              </p>

                              <footer className="blockquote-footer">
                                    <a target="_blank" rel="noreferrer" href="https://training-portal.nifa.usda.gov/web/crisprojectpages/1015771-assessing-climate-perceptions-and-developing-adaptation-resources-for-small-medium-and-beginning-farms.html">
                                        <cite>USDA Grant Summary</cite>
                                    </a>
                              </footer>
                            </blockquote>

                                <Row>
                                    <Col>

                                    </Col>
                                    <Col>
   
                                    </Col>
                                </Row>




                        <hr/>
                        <Card.Title id="1">Project Goals</Card.Title>
                        <hr/>
                    

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
                                          <Image src={focus_group} fluid />

                                          <cite>

                                              Farmer focus groups were conducted in the winter of 2019-2020 in Maine, Vermont, 
                                              and New Hampshire to pilot and gather feedback on several climate change 
                                              adaptation resources, including virtual tours, a climate change resource database,
                                              visualizations of climate change adaptation practices, and an economic tool to aid
                                               farmers in budgeting and planning for climate change adaption.

                                            <br />
                                                Twenty-eight farmers
                                               from across New England (Vermont, Maine, Massachusetts, and New York) provided 
                                               feedback on these tools through small group discussions and surveys. 

                                          </cite>


                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l2">
                                          <Image src={code} fluid />
                                          <cite>
                                            Based on interviews, feedback from 
                                            focus groups, a review of New England farmers’ plans for 
                                            climate change adaptation, and an assessment of resources, the research team identified agricultural 
                                            practices and tools that are of particular need and interest to New England farmers. 

                                            <br /><br />
                                            Visualization and economic
                                             tools and an overview brief with additional resources were developed 
                                             for each practice area and shared with the New England farming 
                                                community through webinars, workshops, and regional conferences
                                                 in winter 2021-2022.

                                          </cite>
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



            </Col>
            <Col>

            </Col>
        </Row>
        </div>



)
}
export default Research;