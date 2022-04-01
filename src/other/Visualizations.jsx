import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Alert } from 'react-bootstrap';
import ImageController from '../viz/ImageController.jsx';








const Visualizations = (props, ref) => {






const [key, setKey] = useState("silvopasture");


function handleChange(d) {

setKey(d);


}




return (


<Container fluid >

<Row>
<Col xs={12} md={1} lg={2}>
</Col>
<Col xs={12} md={10} lg={8}>
  <hr/>
    <h2>Visualizations</h2>
  <hr/>


<Alert variant={"success"}>
	<p>
	These visualizations are designed to help the viewer picture how the implementation of 
	silvopasture appears in the context of a real New England farm. These images depict the 
	different stages of practice implementation and help the viewer anticipate how silvopasture 
	will appear over time and what implications it may have for the farm. 
    <cite> To use these images, please request permission from Stephanie Hurley (stephanie.hurley@uvm.edu).</cite></p>
</Alert>





</Col>
<Col xs={0} md={1} lg={2}>
</Col>
</Row>



<Row>
<Col xs={12} md={2}>

  
      <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light py-4" className="flex-column">


      <Navbar.Brand className="mt-5 mb-3 d-flex justify-content-center mx-0">Select Visualizations</Navbar.Brand>

      <Nav 
      id="navbtns"
      variant="pills" 
      className="flex-column"
      activeKey={key}
      onSelect={(k) => handleChange(k)}>

   

        <Nav.Item>
          <Nav.Link id="navbtns" eventKey="silvopasture">Silvopasture</Nav.Link>
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
<Col xs={12} md={10} lg={8}>



  <ImageController variant={key} />





</Col>
<Col xs={0} lg={2}>
</Col>
</Row>




</Container>

);
}
export default Visualizations;