/**
 * 
 * Tarping - Cover Page for Tarping adaptation method
 * 
 **/

import React, { useState } from 'react';
import { Alert, Card, Row, Col, Container, Nav, Navbar, ListGroup, Tab, Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';

const variants = ["Overview", "Benefits", "More"];

const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources"]; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Tarping image slides
const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));

// Tarping cover image is just the first from our one set
const sp = [tp[0]];

// Collection of elements for ImageSlider
let groups = [tp];

let labels = ["Tarping"];


function Tarping(props) {





	return (
		<>
        <Row>


            <Col xs={2}>
                <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
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
            <Col xs={10} lg={8}>



                <Card id="a0">

                <Card.Body>


                <hr/>
                <Card.Title id="2">Tarping</Card.Title>
                <hr/>
                <Alert variant={'warning'} className="mx-4">
                    Tarping is the practice of applying tarps to the soil surface and removing them prior to planting to manage or terminate weeds, crops, and cover crops, aiding the transition between cash crops with minimal to no soil disturbance. The use of tarps to terminate cover crops in no-till and reduced tillage systems allows farms to achieve the benefits of integrating these practices without specialized equipment or the application of herbicides. 
                </Alert>
                <Row>
                <Col xs={12} md={6}>
                <Alert variant={'info'}>
                    This practice offers numerous climate change adaptation benefits. Tarping can help facilitate no-till, reduced tillage, and cover cropping, all of which build soil health and improve water holding capacity. Tarping can also facilitate the use of cover crop residue as a mulch for cash crops which helps to conserve moisture, increase water infiltration, prevent surface runoff, and protect soil from erosion. 
                </Alert>


                <Alert variant={'danger'}>
                    Given the logistical challenges of moving, securing, and storing the tarps, 
                    they are typically used on small farm operations of less than 5 acres.
                </Alert>


                <hr/>
                <Card.Title id="2">General Logistics of Tarping</Card.Title>
                <hr/>
                <Alert variant={'warning'} className="text-start">
                    A variety of tarps of varying thickness, material, durability and size can be used for 
                    this practice, including landscaping fabric, billboard and silage tarps, with a lifespan
                    ranging from 1-8 years. Sandbags and cinder blocks are often used to secure tarps
                    and prevent the tarp from blowing loose and becoming a hazard to equipment, animals
                    and people. At least two people are generally needed to apply, remove, and store
                    tarps, though this may vary depending on tarp and field size as well as weather
                    conditions.

                    <br/><br/>
                    <strong>
                    The use of tarping in cover crop and conservation tillage systems is a flexible multi-step process. One example of this is shown below. 
                    </strong>
                    <br/><br/>
                    <p className="text-left"><strong>Late August/Early September:</strong> plant perennial rye cover crop</p>
                    <p className="text-left"><strong>June:</strong> Roll down rye using either a lawn roller or a tractor driven roller crimper</p>
                    <p className="text-left"><strong>June:</strong> Place tarps, secure with sand bags</p>
                    <p className="text-left"><strong>June:</strong> Remove tarps after two weeks. Plant cash crop of brassica starts</p>
                    <p className="text-left"><strong>August/September:</strong> Harvest crops, plant cover crop</p>


                </Alert>


                </Col>
                <Col xs={12} md={6}>
                    <Image
                    className="d-block w-100"
                    src={sp[0][1].default} 

                    />
                <Alert variant={'success'} className={"mt-5"}>
Tarping may also reduce the need to use farm equipment which can be helpful in periods of rainy and wet periods when the soil is too wet to work. The potential to eliminate use of machinery to terminate cover crops or incorporate biomass may also be beneficial in a more variable climate as it allows farmers greater flexibility in the timing of cover crop termination.
                </Alert>

                </Col>
                </Row>
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
                    

                    <hr/>
                        <Card.Title>Benefits and Costs</Card.Title>
                    <hr/>

                          <Alert variant={'info'} className="px-5 mx-5 mb-0">
                            Filler Text
                          </Alert>
      

                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Eliminates the need for herbicides and/or specialized equipment like a roller-crimper</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Provides flexibility in the timing of cover crop termination</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Augments the weed suppression provided by cover crop residue</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">May support long-term soil health goals, like protecting soil organic matter and building soil structure. Supporting soil health can also improve water holding capacity.</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Eliminates the need for field passes (especially beneficial when soils are too wet to operate equipment) </ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Reduces soil erosion</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Supports use of cover crops, some of which may add valuable nitrogen and reduce future need for fertilizer </ListGroup.Item> 
                                </ListGroup>
                                </Col>
                                <Col>      
                      			<ListGroup>
                                  <ListGroup.Item variant="danger"></ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Logistical challenges associated with handling tarps, including moving, securing, and storing tarps</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Scale-limited due to above challenges</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Ecological footprint of tarp material manufacturing</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Concerns associated with the disposal of plastic once it is no longer fit for use</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Concerns regarding release of microplastics into soil as tarps wear over time</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Loose tarps can become a hazard to farm equipment, animals, and people</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Pooling of water on and around edges of tarp</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">May create habitat for rodents, increasing this pest population and predators such as snakes</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Reusing tarps may introduce soil-borne diseases into uninfected fields if moving from an infected field</ListGroup.Item>


                                </ListGroup>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>



                <hr/>
                    <Card.Title id="a2">Tarping Economic Tool</Card.Title>
                <hr/>
                {/* Calculator */}
                {/*<FormController />*/}




                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="a3">Additional Resources</Card.Title>
                        <hr/>
                    
                    <Row>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item variant="info" href="">Research</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/abs/investigating-tarps-to-facilitate-organic-notill-cabbage-production-with-highresidue-cover-crops/007DC723EBB8BBF050763E36FB137FCF">Lounsbury NP, Warren ND, Wolfe SD, Smith RG (2018). Investigating tarps to facilitate organic no-till cabbage production with high-residue cover crops. Renewable Agriculture and Food Systems1–7.</ListGroup.Item> 

                        </ListGroup>

                        <br/>

                        <ListGroup>
                            <ListGroup.Item variant="info" href="">Books</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="">Mays, Daniel. The No-Till Organic Vegetable Farm: How to Start and Run a Profitable Market Garden That Builds Health in Soil, Crops, and Communities. Storey Publishing, LLC. November 10, 2020. ISBN-10: 1635861896.</ListGroup.Item> 

                        </ListGroup>

                        <br/>
                        <ListGroup>
                            <ListGroup.Item variant="info" href="">Videos</ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://www.youtube.com/watch?v=sWDxJhFlGE4">No-till and Cover Crops in Vegetable Systems with Natalie Lounsbury, Recorded Webinar, April 6, 2020</ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://mediaspace.msu.edu/media/CallingAllFarmersMarch092017/1_xgvmbzio">Reduced Tillage on Permanent Beds, Webinar in “Reduced Tillage Webinar Series” hosted by Cornell RT, Michigan State University, and the University of Maine. Ryan Maher and Brian Caldwell, Cornell University, Mark Hutton, University of Maine, Thursday, March 9, 2017.</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://www.youtube.com/watch?v=RgP9W44G5cE&t=16s">Silage Tarps to Reduce Tillage on Small Farms: Farmer Experiences, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, Dec 20, 2018</ListGroup.Item>  
                        </ListGroup>
                        
                    </Col>
                    <Col>
                        <ListGroup>
                            <ListGroup.Item variant="info" href="">Guides, Factsheets, Other</ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://projects.sare.org/wp-content/uploads/CC_Fact_Sheet_Vegetables_Northern_NE.pdf">Cover Cropping on Vegetable Farms in Northern New England, UVM Extension</ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://smallfarms.cornell.edu/2019/07/manage-weeds-with-tarping/">Manage Weeds With Tarping, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, July 15, 2019, Ryan Maher</ListGroup.Item> 
                            <ListGroup.Item variant="light" action href="https://smallfarms.cornell.edu/2019/01/reusable-black-tarps-suppress-weeds-and-make-organic-reduced-tillage-more-viable/">Reusable Black Tarps Suppress Weeds and Make Organic Reduced Tillage More Viable, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, January 14, 2019, Haley Rylander     </ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://smallfarms.cornell.edu/2016/10/small-scale-no-till-vegetables-at-seeds-of-solidarity-farm/">Small Scale No-Till Vegetables at Seeds of Solidarity Farm, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, October 3, 2016, Claire Cekander</ListGroup.Item>
                            <ListGroup.Item variant="light" action href="https://smallfarms.cornell.edu/2018/04/take-me-out-to-a-tarped-field-needs-sidebar/">Take Me Out to a Tarped Field, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, April 6, 2018, Ryan Maher</ListGroup.Item>

                        </ListGroup>

                    </Col>

                    </Row>



                            <Card.Body>
                            <Container>
                                <Row className="text-center align-center">
                                    <Col></Col>
                                    <Col xs={8}>
                                    Interested in Tarping? View additional resources&nbsp;<a href="./resources">Here</a>.

                                    View our brief&nbsp;<Link to={{pathname: 
                                        "/resources/Tarping_No-till_Cover Cropping Two-pager.pdf"
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

export default Tarping;
