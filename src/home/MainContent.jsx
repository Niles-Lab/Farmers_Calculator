import React, { useState } from 'react';
import { Alert, Card, Container, Row, Col, Image } from 'react-bootstrap';
import ne from "./../images/ne.png";


const practices = ["Silvopasture", "Tarping", "Irrigation"];

const MainContent = (props, ref) => {


const practices = ["Silvopasture", "Tarping", "Irrigation"];








//const scroll = (ref) => props.refProp.scrollIntoView()


return (


<div className="px-5 mx-5 my-5">





                <hr/>

  
                    <Row>
                        <Image
                        className="position-absolute w-75"
                        style={{"zIndex": -1, "opacity": 0.3, "top": -100, "bottom": 100, "left": 0}}
                        src={ne} 

                        />


                        <p className="text-start justify-start">
                          Welcome to the *website title*, home to climate change adaptation resources for small, 
                          medium and beginning farmers in northern New England. The climate adaptation resources 
                          and tools on this website were created by a team of researchers and agricultural 
                          specialists from the University of Maine, the University of Vermont, and the United 
                          States Department of Agriculture (USDA) Climate Hub from 2019 to 2022 as part of an
                           Agriculture and Food Research Initiative grant from the USDA’s National Institute 
                           of Food and Agriculture (award number 2018-68006-28098). 
                        </p>

                           <br/><br/><br/><br/>

                    <p>
                    The economic tools, visualizations, and resources on this website were designed with and for small, medium, and 
                    beginning farmers in New England to address the unique challenges they face in adapting to climate change. These
                     resources are available for three agricultural practices - silvopasture, irrigation, and tarping - that were 
                     identified as areas of particular interest and need among New England farmers. To learn more about each practice
                      area and explore the tools and resources, visit the practice pages. The economic tool and visualizations can also 
                      be accessed on the Tools page. Visit the About page for more information on the purpose and focus of these tools
                       and resources. For an overview of the research and project that generated these resources, visit the Research page. 
                    </p>



    
                    </Row>
    





                <hr/>
                <Card.Title>Quick Links</Card.Title>
                <hr/>
                <Container>

                  {practices.map(d => (
                    <>

                    <Row>
                      <Col xs={8} className="d-flex text-start">
                        {d}
                      </Col>
                      <Col xs={2}>
                        <a href={"/" + d + "/#a2"}>
                        Economic Tool
                        </a>
                      </Col>
                      <Col xs={2}>
                        <a href={"/" + d + "/#a1"}>
                        Visualizations
                        </a>
                      </Col>
                    <hr/>
                    </Row>
                    <hr/>
                    </>
                  ))}

                </Container>



</div>

);
}
export default MainContent;