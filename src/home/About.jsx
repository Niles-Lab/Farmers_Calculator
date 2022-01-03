import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import cover from "./../images/cover.jpg";

import umaine from '../images/umaine.png';
import uvm from '../images/uvm.png';
import climatehub from '../images/climatehub.png';



const About = (props, ref) => {

return (


<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>
<Col xs={12} md={8}>


  <hr/>
  <Card.Title>Collaborators</Card.Title>
  <hr/>
  <Row>
      <Col xs={12} lg={4}>
      <Image fluid className="w-75" src={uvm} />
      </Col>

      <Col xs={12} lg={4}>
      <Image fluid className="w-75" src={umaine}/>
      </Col>

      <Col xs={12} lg={4}>
      <Image fluid className="w-75" src={climatehub}/>
      </Col>
  </Row>

    <hr className="mb-2" />
    <Card.Title>Background</Card.Title>
    <hr className="mt-2" />
  <Row>

  <Col xs={12} md={6}>
    <Image
    className="d-block w-100 mb-2"
    src={cover} />
  </Col>
  <Col xs={12} md={6} className="pt-2">


    <p>
      Climate change is one of the greatest environmental threats to future generations, and one that will have significant impacts on US agriculture. There is an increasing focus on the development of climate resources and information to help farmers plan for future changes. While the availability of climate resources may be growing, few are targeted towards small, medium and beginning farmers in New England and the unique production challenges they face. 
    </p>
         



  </Col>


    <p>
        The tools and resources found on this website were designed to address this gap in resources and respond to farmers’ expressed needs. The economic tools, visualizations, and accompanying overview briefs presented on this website were developed based on input from farmers and technical advisors in Vermont and Maine, and an assessment of existing resources and research. They incorporate farmers’ and agricultural experts’ management concerns and take into account farm scale, regional geographic and climate characteristics, and farmer experience level.
    </p>

  </Row>


</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>

);
}
export default About;