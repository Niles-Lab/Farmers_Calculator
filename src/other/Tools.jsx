import React, { useState } from 'react';
import { Card, Container, Row, Col, Nav, Navbar } from 'react-bootstrap';

import FormController from "./../calc/FormController.jsx"






const Tools = (props, ref) => {


const [key, setKey] = useState("silvopasture");







return (


<Container fluid >

<Row>
<Col xs={12} md={2}>
</Col>
<Col xs={12} md={8}>
  <hr/>
    <h2>Economic Tools</h2>
  <hr/>



</Col>
<Col xs={0} md={2}>
</Col>
</Row>






<Row>
<Col xs={12} md={2}>

      <Navbar.Brand className="ml-0">Select Economic Tool</Navbar.Brand> 
      <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light py-4" className="flex-column d-block">



      <Nav 
      id="navbtns"
      variant="pills" 
      className="d-block"
      activeKey={key}
      onSelect={(k) => setKey(k)}>

   


        <Nav.Item>
          <Nav.Link eventKey="silvopasture">Silvopasture</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="irrigation">Irrigation</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tarping">Tarping</Nav.Link>
        </Nav.Item>
      </Nav>

      </Navbar>


</Col>
<Col xs={12} md={8}>




  <Card id="a1">

  <Card.Body>

      <FormController key={key} variant={key} />

  </Card.Body>

  </Card>  




</Col>
<Col xs={0} md={2}>
</Col>
</Row>



</Container>

);
}
export default Tools;