import React, { useState, useEffect } from 'react';
import { Alert, Card, Container, Row, Col, Image, Tabs, Tab, Nav, Navbar } from 'react-bootstrap';

import FormController from "./../calc/FormController.jsx"






const Tools = (props, ref) => {


const [group, setGroup] = useState(null);



const [key, setKey] = useState("irrigation");



function handleChange(d) {

}



return (


<Container fluid >

<Row>
<Col xs={12} md={2}>
</Col>
<Col xs={12} md={8}>
  <hr/>
  <Card.Title id="2">Economic Tools</Card.Title>
  <hr/>



</Col>
<Col xs={0} md={2}>
</Col>
</Row>






<Row>
<Col xs={12} md={2}>

      
      <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light py-4" className="mx-auto text-wrap">



      <Nav 
      id="navbtns"
      variant="pills" 
      className="flex-column text-wrap"
      activeKey={key}
      onSelect={(k) => setKey(k)}>

   
      <Navbar.Brand className="pb-3">Select Economic Tool</Navbar.Brand>

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





<br/><br/><br/><br/><br/><br/><br/><br/><br/>
</Container>

);
}
export default Tools;