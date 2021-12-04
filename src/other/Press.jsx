import React from 'react';
import { Container, Row, Card, Col, Image, Alert } from 'react-bootstrap';
import { BsBoxArrowUpRight } from "react-icons/bs";

function Press(props) {


const press = [

	["New research project to help small farms get needed climate adaptation information resources", "https://umaine.edu/news/blog/2018/10/31/new-research-project-to-help-small-farms-get-needed-climate-adaptation-information-resources/"],
		["New research project to help small farms get needed climate adaptation information resources", "https://umaine.edu/news/blog/2018/10/31/new-research-project-to-help-small-farms-get-needed-climate-adaptation-information-resources/"]


];

	return (
		<>



<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>

<Col xs={12} md={8}>

  <Row>


  <Col xs={12} md={12}>
  	
    <hr/>
    <Card.Title>Press</Card.Title>
    <hr/>
  		<hr/>

      {press.map(d => (

        <>
        <Row>

          <Col xs={10} className="d-flex text-start">
            {d[0]}
          </Col>
          <Col xs={2}>
            <a className="d-flex align-items-center align-middle" target="_blank" rel="noreferrer" href={d[1]}>
               <BsBoxArrowUpRight />
            </a>

          </Col>


        </Row>
                <hr/>
        </>
      ))}



  </Col>



  </Row>







</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>


		</>
		)
}

export default Press;
