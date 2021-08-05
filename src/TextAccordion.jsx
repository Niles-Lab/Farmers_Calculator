import React from 'react';
import { Accordion, Card, Row, Col } from 'react-bootstrap';
import CountyMap from "./viz/CountyMap.jsx"
import PriceChart from "./viz/PriceChart.jsx"
import DotPlotFarm from "./viz/DotPlotFarm.jsx"
import CropLossPie from "./viz/CropLossPie.jsx"

function TextAccordion(props) {

return (

            <>

                <div>

                    <Accordion>
                        <Card border="success">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Local Threat of Climate Change
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">

                                <Card.Body>
                                    <CropLossPie />
                                    CBA, or Cost Benefit Analysis, is a tool to identify problems, solutions, and strategies for overcoming challenges given limited resources.
                                    Identifying a long-term problem, assessing multiple strategies, and identifying the costs and benefits presented by each are among the steps taken to find the most efficient solution
                                    on a case-by-case basis.

                                    In a constantly changing world with data becoming evermore present, preparation and adaptation is necessary for the survival and evolution of many trades.
                                    Another goal of CBA is to find a solution that not only evolves a trade, but creates the most utility for society. Often times, there are external factors and outcomes
                                    beyond the purview of a study. These may not have an explicit numerical value, but are nonetheless important to consider and prioritize in a CBA.

                                    For example, imposing new laws and regulations on trade may have financial benefits, but will assuredly affect the livelihoods of many individuals. This "social cost" should be
                                    accounted for in CBA.
                                </Card.Body>
                            
                            </Accordion.Collapse>
                        </Card>
                        <Card border="success">

                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Individual Empowerment
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                     <Row>
                                         <Col>
                                            <PriceChart />
                                         </Col>                                    
                                         <Col>
                                            When talking about approaches to consumer-facing farms, it is often thought that sustainable switches will be funded only by government incentives, leaving a defecit in a farm's income for certain arbitrary consumer preferences.
                                            However, studies show that consumers will pay more to support farms that create sustainable change.
                                            <br/><br/>
                                            What's more, advertising quality of life increases(such as no pesticides keeping the soil more fertile) by certain practices may drive consumers to spend more, supporting an increase in quality of product, profit and practices. 
                                        </Col>
                                    </Row>
                                    Some more filler text
                                    <Row>
                                        <Col>
                                            Another common struggle for individual and beginning farms is the threat of well-established, larger farms in the area. Some may find it difficult to compete with corporate entities that have ubiquitous funding.
                                            However, Vermont is known for its natural beauty and ubiquitous community. Investing in sustainable practices not only keeps Vermont ahead of corporate farms, but drives adaptation and growth among other local farms.
                                        </Col>
                                        <Col>
                                            <DotPlotFarm/>
                                        </Col>
                                    </Row>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card border="success">
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                What is Cost Benefit Analysis?
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">

                            	<Card.Body>
                            		CBA, or Cost Benefit Analysis, is a tool to identify problems, solutions, and strategies for overcoming challenges given limited resources.
                            		Identifying a long-term problem, assessing multiple strategies, and identifying the costs and benefits presented by each are among the steps taken to find the most efficient solution
                            		on a case-by-case basis.

                            		In a constantly changing world with data becoming evermore present, preparation and adaptation is necessary for the survival and evolution of many trades.
                            		Another goal of CBA is to find a solution that not only evolves a trade, but creates the most utility for society. Often times, there are external factors and outcomes
                            		beyond the purview of a study. These may not have an explicit numerical value, but are nonetheless important to consider and prioritize in a CBA.

                            		For example, imposing new laws and regulations on trade may have financial benefits, but will assuredly affect the livelihoods of many individuals. This "social cost" should be
                            		accounted for in CBA.
                                </Card.Body>
                            
                            </Accordion.Collapse>
                        </Card>

                        <Card border="success">
                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                Our Mission
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="2">
                            
                                <Card.Body>

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
                                <CountyMap />
                                </Col>
                                </Row>
                                </Card.Body>
                            
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </>


)
}
export default TextAccordion;