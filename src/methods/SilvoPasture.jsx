/**
 * 
 * SilvopastureCalc - particular calculator component for Silvopasture data collection
 * 
 **/

import React, { useState, useRef } from 'react';
import { Card, Row, Col, Container, Nav, ListGroup, Tab, Image, Carousel, Overlay, Tooltip } from 'react-bootstrap';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import FormController from './../calc/FormController';

const variants = ["Silvopasture", "Pasture Enrichment", "Forest Conversion"];



function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  console.log(images);
  return images;
}

// Pasture Enrichment Images
const pe = importAll(require.context('../images/silvopasture/pe', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const fc = importAll(require.context('../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));

// What tab is active
let active;

// What value the slider is at, for image opacity filtering
let timeSl;

// Marks on slider for concrete images
let marks = [];

let peCount = Object.entries(pe).length;

let def = [0];

for(var h=0;h<peCount;h++) {

    def.push(0);

    marks.push({
       value: h/(peCount-1),
       //label: "img " + (parseInt(h)+1)
    });
}


function Silvopasture(props) {

    // Opacity container for images
    const [opacity, setOpacity] = useState(def);

    // Show state for overlay/tooltip
    const [show, setShow] = useState(false);

    // Also for overlay/tooltip
    const target = useRef(null);


    function handleChange(event,idx) {
        
        console.log(event.target)

        // Value from slider
        timeSl = event.target.value;
        
        // Number of pictures to divide into
        let divs = (peCount)-1;

        // Scaled number with range
        let scaled = idx*divs;

        // Local copy of opacity array
        let opac = {opacity};

        // Which element should be entirely opaque
        let visible = (Math.round(scaled));

        // Iterate to update opacity of each image
        Object.entries(pe).forEach((d,idx) => {

            opac[idx] = 0;

            // These two opacity values will be modified
            let floor = Math.floor(scaled);
            let ceil = Math.ceil(scaled);

            // Set accordingly to opacity layering
            opac[floor] = ceil-scaled;
            opac[ceil] = scaled-floor;


            });
            opac[visible] = 1;
            setOpacity(opac);

    }


	return (
		<>
        <Row>


            <Col>
                    
            </Col>
            <Col xs={7}>



                    {/* Tabbed view of method variants */}
                    <Card>

                    <Card.Body>

                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                          <Row>
                            <Col sm={3}>
                              <Nav variant="pills" className="flex-column">
                                {variants.map((d,idx) => (
                                    <Nav.Item key={idx}>

                                        <Nav.Link eventKey={idx} variant="success">
                                            {d}
                                        </Nav.Link>

                                    </Nav.Item>
                                    ))}
                              </Nav>
                            </Col>
                            <Col sm={9}>
                              <Tab.Content>
                                {/*Silvopasture Tab*/}
                                <Tab.Pane eventKey="0">

                                    <hr/>
                                    <Card.Title id="2">What is Silvopasture?</Card.Title>
                                    <hr/>

                                    Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest products on the same parcel of land
                                    
                            
                                </Tab.Pane>
                                {/*Pasture Enrichment Tab*/}
                                <Tab.Pane eventKey="1">
                                  adfasdf
                                </Tab.Pane>

                                {/*Forest Enrichment Tab*/}
                                <Tab.Pane eventKey="2">

                                    <hr/>
                                    <Card.Title id="2">Forest Enrichment</Card.Title>
                                    <hr/>

                                    Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest products on the same parcel of land
                            
                                </Tab.Pane>


                              </Tab.Content>
                            </Col>
                          </Row>
                        </Tab.Container>

                    {/* Tooltip */}
 {/*                     <Overlay target={target.current} show={show} placement="top">
                        {(props) => (
                          <Tooltip id="overlay-example" {...props} arrow>
                            Drag me!
                          </Tooltip>
                        )}
                      </Overlay>*/}


                          <Box sx={{ width: 250 }}>

                            Slide to change!
                            <Slider
                                ref={target} onClick={() => setShow(!show)}
                                getAriaLabel={() => 'Image Slider'}
                                defaultValue={timeSl}
                                min={0}
                                marks={marks}
                                max={1}
                                step={0.01}
                                style={{position: "relative"}}
                                onChange={(event,idx) => {handleChange(event,idx)}}
                            /> 


                          </Box>
                        {/* Fading images accompanying slider */}
                          <Box style={{'minHeight': '500px','position': 'relative'}}>

                                {Object.entries(pe).map((d,idx) => (
                                        <img
                                            className="d-block w-100"
                                            style={{'position': 'absolute', 'opacity': opacity[idx]}}
                                            src={d[1].default} 
                                            alt={d[0]}/>
                                    ))}

                                {Object.entries(fc).map((d,idx) => (
                                        <img
                                            className="d-block w-100"
                                            style={{'position': 'absolute', 'opacity': opacity[idx]}}
                                            src={d[1].default} 
                                            alt={d[0]}/>
                                    ))}

                          </Box>


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
