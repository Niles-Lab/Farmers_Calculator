import React, { useState, useEffect } from 'react';
import { Alert, Card, Container, Row, Col, Image, Tabs, Tab, Nav, Navbar } from 'react-bootstrap';
import cover from "./../images/cover.jpg";
import ImageSlider from "./../viz/ImageSlider.jsx"


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}






// 
// 
//  IRRIGATION DATA
// 
// 
// Irrigation Cover Image(s)
//const sp = importAll(require.context('../images/irrigation/', false, /\.(png|jpe?g|svg)$/));

// Ponds images
const pd = importAll(require.context('../images/irrigation/pd/', false, /\.(png|jpe?g|svg)$/));

// Irrigation images
const ig = importAll(require.context('../images/irrigation/ig/', false, /\.(png|jpe?g|svg)$/));




var labels = ["Irrigation", "Irrigation With Ponds"];


const irrigation = {
  images: [ig, pd],
  lbls: [
    ["Testng One", "Step Two", "And yYp Three"],
    ["Ex One", "Ex Two", "Ex Three"],
    ["ab", "test"],
    ["abc","asfse","fakjsf"]
    ]
}

// 
// 
//  TARPING DATA
// 
// 
// Tarping image slides
const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));

// Tarping cover image is just the first from our one set
const sp = [tp[0]];




const tarping = {
  images: [tp],
  lbls: [
    ["Late August/Early September: plant perennial rye cover crop",
    "June: Roll down rye using either a lawn roller or a tractor driven roller crimper",
    "June: Place tarps, secure with sand bags",
    "June: Remove tarps after two weeks. Plant cash crop of brassica starts",
    "August/September: Harvest crops, plant cover crop"],
    ["Ex One", "Ex Two", "Ex Three"],
    ["ab", "test"],
    ["abc","asfse","fakjsf"]
    ]
}

// 
// 
//  SILVOPASTURE DATA
// 
// 
// Pasture Enrichment Images
const pe = importAll(require.context('./../images/silvopasture/pe', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const av1 = importAll(require.context('./../images/silvopasture/av1', false, /\.(png|jpe?g|svg)$/));

// Pasture Enrichment Images 2
const pe2 = importAll(require.context('./../images/silvopasture/pe2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const av2 = importAll(require.context('./../images/silvopasture/av2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
//const fc = importAll(require.context('./../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));


//labels = ["Pasture Enrichment 1", "Aerial View", "Pasture Enrichment 2", "Aerial View"];



const silvopasture = {
  images: [pe,av1,pe2,av2],
  lbls: [
    ["Step One", "Step Two", "Step Three"],
    ["Ex One", "Ex Two", "Ex Three"],
    ["abdffffffffffffffffffffffffffffffffffffffffff", "test"],
    ["abc","asfse","fakjsf"]
    ]
}





const About = (props, ref) => {




var activeKey = 0;

const [group, setGroup] = useState(silvopasture);



const [key, setKey] = useState("silvopasture");


function handleChange(d) {

setGroup(null);
setKey(d);
 
if(d === "tarping") {
  setGroup(tarping);
}
else if(d === "irrigation") {
  setGroup(irrigation);
}
else {
  setGroup(silvopasture);
}

}




return (


<Container fluid >

<Row>
<Col xs={12} md={2}>
</Col>
<Col xs={12} md={8}>
  <hr/>
  <Card.Title id="2">Visualizations</Card.Title>
  <hr/>








</Col>
<Col xs={0} md={2}>
</Col>
</Row>






<Row>
<Col xs={12} md={2}>

      
      <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light py-4" className="mx-auto text-wrap">



      <Nav 
      variant="pills" 
      className="flex-column text-wrap"
      activeKey={key}
      onSelect={(k) => handleChange(k)}>

   
      <Navbar.Brand className="pb-3">Select Visualizations</Navbar.Brand>

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
    { group &&


      <>
      {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
      {group.images.map((e,idz) => (
          

          
          <ImageSlider key={e} groups={e} lbls={group.lbls[idz]} labels={labels} />



          ))}
      </>
    }
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
export default About;