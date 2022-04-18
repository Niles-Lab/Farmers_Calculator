import React from 'react';
import { Card, Row, Col, Image, Navbar, Nav, Alert } from 'react-bootstrap';

import tools from './../images/research/tools.png';

import phase_2 from './../images/research/phase_2.png';
import research_graph from './../images/research/research_graph.png'


const Research = (props, ref) => {

const navs = ["Research", "Interviews", "Focus Groups", "Tools"];

return (


        <div>
        <Row>
            <Col>
                <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
                    <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (

                            <a key={"navItem#"+idx} href={"#a" + idx} className="text-decoration-none">
                                <Nav.Link as={Card.Title} className="font-weight-light">
                                <p className="my-0 py-0">{d}</p>
                                </Nav.Link>
                            </a>

                            ))}
                      </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
            <Col xs={12} md={8} id="0">
   
            <hr/>
                    <h2 className='display-4' id="a0">About the Research</h2>
                <hr/>


                            <blockquote className="blockquote mt-5 mb-0 ">


                <Alert variant={'success'} className="mx-4">
                  <em className="small">

                    The long-term goal of this project is to enhance the success of small, medium and beginning farmers in the Northeastern United 
                    States (specifically Maine and Vermont) by developing climate change resources that consider farmers' own perceptions, concerns, 
                    experience, and needs. We focus on these states because of the high percent of small, medium and beginning farmers in this region
                     and the unique climate change challenges facing the Northeast.
                  </em>

                  <footer className="blockquote-footer small">
                        <a target="_blank" rel="noreferrer" href="https://training-portal.nifa.usda.gov/web/crisprojectpages/1015771-assessing-climate-perceptions-and-developing-adaptation-resources-for-small-medium-and-beginning-farms.html">
                            <cite>USDA Grant Summary</cite>
                        </a>
                  </footer>
 
                </Alert>



                            </blockquote>




                <hr/>
                    <h2 className='display-4' id="a1">Phase 1 - Interviews</h2>
                <hr/>

                <Row className="d-block">







                        <Image src={research_graph} className={"w-75"} />
                        <br/>

                        <Col  md={{ span: 6, offset: 3 }}>

                        <cite className="text-muted small">Graph showing the percent of respondents who mentioned a
                            concept or outcome for a given farm during mental model exercise,
                            separated by occupation. Statistically significant mention scores are
                            noted with an asterisk (*). (X squared =4.27, p=0.039).</cite>

                        </Col>

                        <Row className="d-block">

                        <p>


                        Successful climate adaptation will depend in part on communication 
                        between farmers and outreach professionals that is framed by farmers’ 
                        perceptions and values. Differences between these stakeholder perceptions were 
                        identified by conducting mental modeling interviews with 33 small- to medium-scale 
                        farmers in Maine and Vermont, as well as 16 outreach professionals.


                        </p>
                       
                        <p>


                     Farmers were asked to construct mental models of their farming systems, while outreach
                      professionals were asked to construct models of a farming system they typically work with.

                        </p>

                        <p>
                         Three key differences arose between 
                         the mental models: 
                        </p>

                        <p>
                        <li className="ml-5">
                            Farmers mentioned community well-being, public education, and farm success significantly more than did outreach professionals.
                        </li>
                        </p>
                        <p>
                        <li className="ml-5">
                            Quality of life, community well-being, environmental stewardship, and farm success were more influential in the farmer mental model.
                        </li>
                        </p>
                        <p>
                        <li className="ml-5">  
                            Climate was a direct driver of yields and product quality in the outreach professional model but was only indirectly 
                            connected to these factors in the farmer model.
                        </li>
                        </p>
                        <p>
                          The importance of social dimensions in farmers’ mental models suggests that climate change communication 
                          and adaptation outreach should consider how adaptation strategies, practices, tools, and resources may affect 
                          social outcomes, which may be critical for farmers prior to adoption.
                       </p>

                </Row>



                <hr/>
                    <h2 className='display-4' id="a2">Phase 2 - Focus Groups</h2>
                <hr/>

                    <Row className="d-block pb-0 mb-0">
                      <Image src={phase_2} className="w-100" fluid />
                    </Row>
                    <Row className="d-block mt-0 pt-0 pb-3">
                      <cite className="text-muted small">Focus Group Summary Image</cite>
                    </Row>
                    <Row>
                        <p>
                          Farmer focus groups were conducted in the winter of 2019-2020 in Maine, Vermont, and New Hampshire
                           to pilot and gather feedback on several climate change adaptation resources, including virtual tours,
                            a climate change resource database, visualizations of climate change adaptation practices, and an economic
                             tool to aid farmers in budgeting and planning for climate change adaptation.
                        </p>
                        <p>
                            Twenty-eight farmers from across New England (Vermont, Maine, and Massachusetts) 
                            and New York provided feedback on these tools through small group discussions and surveys.
                        </p>
                    </Row>
                                          

                <hr/>
                    <h2 className='display-4' id="a3">Phase 3 - Tools</h2>
                <hr/>

                    <Row className="d-block">
                      <Image src={tools} className="w-75" />
                    </Row>
                    <Row className="d-block">
                      <cite className="text-muted small">Example of Silvopasture Economic Tool</cite>
                    </Row>
                    <Row>
                        <p>
                          Based on farmer and agricultural expert interviews, farmer feedback from the focus groups, 
                          a review of New England farmers’ plans and needs for climate change adaptation, and an assessment 
                          of available climate change adaptation resources, the research team identified three agricultural 
                          practices (silvopasture, irrigation, and tarping) and two tools (visualizations and economic tool) 
                          that are of particular need and interest to New England farmers.
                        </p>
                        <p>
                            Visualization and economic tools and an overview brief with additional resources were developed 
                            for each agricultural practice and shared with the New England farming community through webinars, 
                            workshops, and regional conferences in winter 2021-2022.
                        </p>
                    </Row>
                                  

                </Row>





            </Col>
            <Col>

            </Col>
        </Row>
        </div>



)
}
export default Research;