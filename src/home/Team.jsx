import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import cover from "./../images/cover.jpg";



let team = [
  ["adaigneault.jpg", "Dr. Adam Daigneault is an Associate Professor of Forest, Recreation, and Conservation Policy in the University of Maine School of Forest Resources. He received his Ph.D. in Environmental and Natural Resource Economics from The Ohio State University in 2006 and has spent the past 15 years developing quantitative models to assess the impacts of environmental and land use policy on the natural resource sectors. His research focuses on a wide range of issues, including sustainable timber supply, climate change mitigation and adaptation, and valuing ecosystem services. Prior to UMaine, he was a Senior Economist at Landcare Research New Zealand and an Economist for the U.S. Environmental Protection Agency. While in both roles, Dr. Daigneault worked extensively on policy analysis relating to climate change, biofuels, and land use change. Adam is a native Mainer who returned home after several years living and working in Ohio, Oregon, Washington DC, India, and New Zealand.  To see his faculty page, click here."],
  ["rschattman.jpg", "Dr. Rachel E. Schattman is an interdisciplinary agroecologist whose research focuses on climate change adaptation/mitigation, diversified cropping and food systems, food insecurity, and adult learning. She received her M.S. and Ph.D. from the University of Vermont in Natural Resources and Agroecology, respectively. She is an Assistant Professor of Sustainable Agriculture at the University of Maine School of Food and Agriculture, a faculty fellow at the University of Maine Climate Change Institute, and a faculty affiliate of the George J. Mitchell Center for Sustainability Solutions. Dr. Schattman is a co-PI on this project, and is responsible for program evaluation."],
  ["jfaulkner.jpg", "Joshua Faulkner has coordinated the Farming and Climate Change Program in UVM Extension’s Center for Sustainable Agriculture for the past eight years.  He works with farmers across Vermont on best management practices for climate change resilience, with a focus on soil and water resources.  As a part of this project, he contributed to educational resources and presented project outputs to farmer groups in Vermont."]


]

const Team = (props, ref) => {

return (


<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>

<Col xs={12} md={8}>

  <Row>


  <Col xs={12} md={12}>
    
    <hr/>
    <Card.Title>About the Team</Card.Title>
    <hr/>
      <hr/>

      {team.map(d => (

        <span key={d[0]}>
        <Row>

          <Col xs={3} className="d-flex text-start">
            <Image 
              // src={require(`./../images/team/${d[0]}.jpg`)}
              src={`./../images/team/${d[0]}`}
              alt={d[0]}
              />
          </Col>
          <Col xs={9}>
            {d[1]}
          </Col>


        </Row>
        <hr/>
        </span>
      ))}



  </Col>



  </Row>







</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>

);
}
export default Team;