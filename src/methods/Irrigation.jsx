/**
 * 
 * Irrigation - Cover Page for Irrigation adaptation method
 * 
 **/

//import React, { useState, useRef } from 'react';

import { Card, Row, Col, Navbar,Container, Nav, ListGroup, Tab, Image, Alert } from 'react-bootstrap';

import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';
import ExternalLink from './../other/ExternalLink';

const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources"]; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Irrigation Cover Image(s)
const sp = importAll(require.context('../images/irrigation/', false, /\.(png|jpe?g|svg)$/));

// Ponds images
const pd = importAll(require.context('../images/irrigation/pd/', false, /\.(png|jpe?g|svg)$/));

// Irrigation images
const ig = importAll(require.context('../images/irrigation/ig/', false, /\.(png|jpe?g|svg)$/));

let groups = [ig, pd];


const titles = ["Aerial view of a drip irrigation system on a New England vegetable farm", "Perspective view of a drip and sprinkler irrigation system on a New England vegetable farm"];
let lbls = [
["New England vegetable farm without irrigation", "Pond is established as a water source for a future irrigation system", "Water is pumped from the pond to the driplines in fields through an irrigation pipe"],
["New England vegetable farm without irrigation", "Pond is established as a water source for a future irrigation system", "Water is pumped from the pond to a combined drip and sprinkler irrigation system in the vegetable fields through an irrigation pipe"]
];


function Irrigation(props) {





	return (
		<>
        <Row>


            <Col xs={0} md={2}>
                <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">

                      <Nav id="sectionnav" className="mx-auto">
                        {navs.map((d, idx) => (
                            <Nav.Link key={d+idx} href={"#a" + idx}>
                            {d}
                            </Nav.Link>
                            ))}
                      </Nav>

                </Navbar>
            </Col>
            <Col xs={10} lg={8}>





                <hr/>
                <h2 id="a0">Irrigation</h2>
                <hr/>

                <Image
                rounded
                className="d-block w-100 mb-3"
                src={sp[0][1].default} />



                <Row>


                    <br/><br/>

                    <p>
                        Use of irrigation can prevent crop losses, support crop yield and quality, and allow for the production of a greater variety of crops. Even in areas where crops have historically been produced without supplemental irrigation (e.g. the Northeast United States), the economic benefits of using irrigation are now clear. As climate change increases the frequency and severity of extreme weather patterns, such as heat and drought interspersed with heavy precipitation events, the need for and benefits of irrigation are likely to increase. 
                    </p>


                    
                    <p>
                        There are a variety of irrigation systems that farmers may consider installing. Two options suitable for small and medium New England farms are drip and solid set sprinkler irrigation. 
                    </p>


                    
                    <p>
                        Drip irrigation brings water to crop root zones through low pressure devices, such as micro spray, bubblers and tape, that are operated just above or directly on the ground, or just under the soil surface. This option works well in orchards and vineyards and in vegetable and flower production. While drip irrigation is easy to install, efficient, effective on sloping fields, and unaffected by wind, it also has high management and maintenance needs, including those related to issues such as clogging and bacterial and algal growth.  
                    </p>

                    <br/>

                    <p>
                        Solid set irrigation is a sprinkler system that uses higher pressure and water volume than drip irrigation. It is frequently used on small and medium farms due to its adaptability to a variety of soil and field conditions, the ability to easily automate it, and for its additional use for frost prevention. Due to the high water flow, a substantial water supply, such as that from a pond or large well, is required to support this sprinkler system. 
                    </p>
                   


                    <p>
                        Weed control around the sprinkler risers is also needed to maintain their visibility and prevent accidental damage from farm equipment operated nearby. Solid set sprinkler systems may also require close management, ensuring that the rate of application does not exceed the rate of soil absorption to prevent overwatering and subsequent runoff and erosion. Since uniform application of water can be a challenge with sprinklers, attention should be given to all areas of the irrigation system, as some areas may be underwatered while others are overwatered. 
                    </p>


                </Row>


            <hr/>
            <Card.Title id="a1">Visualizations</Card.Title>
            <hr/>

<Alert variant={"success"}>
These visualizations are designed to help the viewer picture how the implementation of a practice appears
 in the context of a real New England farm. These images depict the different stages of practice implementation
  and help the viewer anticipate how the implementation of the practice will appear over time and what implications
   it may have for the farm. Use the slider tool to progress through the images and implement the practice.
</Alert>


                {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
                {groups.map((e,idz) => (
                    
                    <>
                    
                    <ImageSlider key={e+idz} groups={e} lbls={lbls[idz]} title={titles[idz]} />

                    </>

                    ))}




      
                        <Card.Title id="1" className="mt-4">Benefits and Costs</Card.Title>
                    

                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="success">Benefits</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Improves crop quality, consistency, and yield</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Supports the production of a greater variety of crops</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="">Prevents crop losses</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Drip irrigation is easy to install, efficient, effective on sloping fields, and unaffected by wind</ListGroup.Item> 
                                  <ListGroup.Item variant="light" action href="">Solid set sprinkler irrigation is adaptable to a variety of field and soil conditions, can be used for frost prevention, and is easily automated</ListGroup.Item> 
                                </ListGroup>
                                </Col>
                                <Col>      
                                <ListGroup>
                                  <ListGroup.Item variant="danger">Costs</ListGroup.Item>
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

                
                <hr/>
                    <Card.Title id="a2">Irrigation Economic Tool</Card.Title>
                <hr/>
                {/* Calculator */}
                <FormController variant={"irrigation"} />



                        <hr/>
                        <Card.Title id="a3">Additional Resources</Card.Title>
                        <hr/>
                    

                            <Container>
                    <Row>



                        <ExternalLink link={"https://sam.extension.colostate.edu/wp-content/uploads/sites/2/2017/04/sam-irr-guide.pdf"} label={"Small Acreage Irrigation Guide - (USDA Natural Resources Conservation Service and Colorado State University Extension, Boyd Byelich, Jennifer Cook, Chayla Rowley, Updated February 2019)"} />

                        <ExternalLink link={"https://www.nrcs.usda.gov/Internet/FSE_DOCUMENTS/stelprdb1167474.pdf"} label={"Selecting an Irrigation System: Small Scale Solutions for Your Farm (USDA Natural Resources Conservation Service, January 2009)"} />

                        <ExternalLink link={"https://www.uvm.edu/climatefarming/sites/default/files/files/uvm_dripirrigation.pdf"} label={"Getting started with drip irrigation: components and costs (University of Vermont Extension, Rachel Schattman and Chloe Boutelle, Updated November 2018)"} />
                        <ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/topic/irrigation-pays-protecting-crop-revenues"} label={"Irrigation pays protecting crop revenues (USDA Northeast Climate Hub) Benefits of Irrigation: Intervale Community Farm "} />
                        
                        <ExternalLink link={"https://www.nrcs.usda.gov/wps/portal/nrcs/main/national/technical/econ/tools/#Irrigation0"} label={"NRCS Economic Tools (USDA Natural Resources Conservation Service)"} />
                        
                        
                        <ExternalLink link={"https://www.maine.gov/dacf/ard/water_management/docs/boardmeetings/2021/20210712/maine-irrigation-guide.pdf"} label={"The Maine Irrigation Guide 2005, Information on Water-Source Development and Irrigation Practices (Central Aroostook Soil & Water Conservation District, 2005)"} />
                        <ExternalLink link={"https://www.uvm.edu/sites/default/files/media/IrrigationCaseStudy_Feb2018_cmyk_bleed.pdf"} label={"Partial Budget (USDA Northeast Climate Hub and University of Vermont Extension, September 2017) "} />
                        <ExternalLink link={"https://www.uvm.edu/sites/default/files/media/irrigation_case_study_intervale_july_2017_0.pdf"} label={"Case Study (Andy Jones, September 2017) Benefits of Irrigation: Intervale Community Farm "} />

                        <ExternalLink label={"(National Integrated Drought Information System and National Oceanic and Atmospheric Administration)"} link={"https://www.drought.gov/"} />
                        <ExternalLink link={"http://climatesmartfarming.org/tools/csf-water-deficit-calculator/"} label={"(Cornell University, Cornell Institute for Climate Smart Solutions, 2021)"} />
                        <ExternalLink link={"https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/home/?cid=stelprdb1245689"} label={"Drought Resources (USDA Natural Resources Conservation Service)"} />



                    </Row>

             
                            </Container>


            </Col>
            <Col xs={0} lg={2}>

            </Col>
        </Row>
	</>
		)
}

export default Irrigation;
