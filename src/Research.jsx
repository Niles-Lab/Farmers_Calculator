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
{/*                <Navbar sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (
                            <Nav.Link href={"#" + idx}>
                            {d}
                            </Nav.Link>
                            ))}
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>*/}
            </Col>
            <Col xs={12} md={8}>
   



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
                        <Card.Title id="1">Project Phases</Card.Title>
                        <hr/>
                    

                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col xs={12} md={3}>
                                <ListGroup>
                                  <ListGroup.Item variant="success"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l0">Phase 1 - Interviews</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l1">Phase 2 - Focus Groups</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l2">Phase 3 - Tools</ListGroup.Item>
                                </ListGroup>
                                </Col>
                                <Col>      
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#l0">
                                          <Image style={{'maxWidth': '50%'}} className="float-right" src={mental_map} fluid />
                                          <cite>Aggregated farmer mental model of the concepts and relationships mentioned by ≥ 10% of farmer
                                            participants (n = 33); “Relationship Mentions” and “Concept Mentions” reflect the percentage of farmers who
                                            included that relationship or concept in their mental model; color indicates the concept category</cite>
                                        
                                            <br /><br /><br />
                                            Successful climate adaptation will depend in part on communication between farmers and outreach professionals that is framed by farmers’ perceptions and values. Differences between these stakeholder perceptions were identified by conducting mental modeling interviews with 33 small- to medium-scale farmers in Maine and Vermont, as well as 16 outreach professionals.  Farmers were asked to construct mental models of their farming systems, while outreach professionals were asked to construct models of a farming system they typically work with. Three key differences arose between the mental models: 1) farmers mentioned community well-being, public education, and farm success significantly more than did outreach professionals; 2) quality of life, community well-being, environmental stewardship, and farm success were more influential in the farmer mental model, and 3) climate was a direct driver of yields and product quality in the outreach professional model, but was only indirectly connected to these factors in the farmer model. The importance of social dimensions in farmers’ mental models suggests that climate change communication and adaptation outreach should consider how adaptation strategies, practices, tools, and resources may affect social outcomes, which may be critical for farmers prior to adoption.

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l1">
                                          <Image style={{'maxWidth': '50%'}} className="float-right"  src={focus_group} fluid />
                                          <cite>Focus Group Summary Image</cite><br /><br />

                                              Farmer focus groups were conducted in the winter of 2019-2020 in Maine, Vermont, and New Hampshire 
                                              to pilot and gather feedback on several climate change adaptation resources, including virtual tours, 
                                              a climate change resource database, visualizations of climate change adaptation practices, and an 
                                              economic tool to aid farmers in budgeting and planning for climate change adaption. 

                                            <br />
                                                Twenty-eight 
                                              farmers from across New England (Vermont, Maine, Massachusetts, and New York) provided feedback 
                                              on these tools through small group discussions and surveys.  

                                          


                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l2">
                                          <Image style={{'maxWidth': '50%'}} className="float-right"  src={code} fluid />
                                          <cite></cite>
                                          Based on farmer and agricultural expert interviews, farmer feedback from the focus groups,
                                           a review of New England farmers’ plans and needs for climate change adaptation, and an 
                                           assessment of available climate change adaptation resources, the research team 
                                           identified three agricultural practices (silvopasture, irrigation, and tarping) and two 
                                           tools (visualizations and economic calculator) that are of particular need and interest
                                            to New England farmers. 

                                            <br /><br />
                                            Visualization and economic tools and an overview brief with 
                                            additional resources were developed for each practice area and shared with the New England
                                            farming community through webinars, workshops, and regional conferences in winter 2021-2022.

{/*                                            Based on interviews, feedback from 
                                            focus groups, a review of New England farmers’ plans for 
                                            climate change adaptation, and an assessment of resources, the research team identified agricultural 
                                            practices and tools that are of particular need and interest to New England farmers. 

                                            <br /><br />
                                            Visualization and economic
                                             tools and an overview brief with additional resources were developed 
                                             for each practice area and shared with the New England farming 
                                                community through webinars, workshops, and regional conferences
                                                 in winter 2021-2022.*/}


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