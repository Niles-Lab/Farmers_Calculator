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
  titles: ["Aerial view of a drip irrigation system on a New England vegetable farm", "Perspective view of a drip and sprinkler irrigation system on a New England vegetable farm"],
  images: [ig, pd],
  lbls: [
  ["New England vegetable farm without irrigation", "Pond is established as a water source for a future irrigation system", "Water is pumped from the pond to the driplines in fields through an irrigation pipe"],
  ["New England vegetable farm without irrigation", "Pond is established as a water source for a future irrigation system", "Water is pumped from the pond to a combined drip and sprinkler irrigation system in the vegetable fields through an irrigation pipe"]
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
  titles: ["Tarping in cover crop and conservation tillage systems"],
  images: [tp],
  lbls: [
["Late August/Early September: plant perennial rye cover crop",
"June: Roll down rye using either a lawn roller or a tractor driven roller crimper",
"June: Place tarps, secure with sand bags",
"June: Remove tarps after two weeks. Plant cash crop of brassica starts",
"August/September: Harvest crops, plant cover crop"]
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
//const av1 = importAll(require.context('./../images/silvopasture/av1', false, /\.(png|jpe?g|svg)$/));

// Pasture Enrichment Images 2
const pe2 = importAll(require.context('./../images/silvopasture/pe2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
//const av2 = importAll(require.context('./../images/silvopasture/av2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
//const fc = importAll(require.context('./../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));


//labels = ["Pasture Enrichment 1", "Aerial View", "Pasture Enrichment 2", "Aerial View"];



const silvopasture = {
  titles: ["____ trees in cattle pasture", "Pasture Enrichment – Apple orchard in sheep pasture"],
  images: [pe,pe2],
  lbls: [
  ["Cattle graze in a pasture on a New England farm. Livestock density is average for a small-medium size farm.", "Trees are planted at 17-21 basal density in the pasture.", "Mature trees in the pasture 15-20 years after planting. Cattle graze among the trees, and trees are selectively harvested"],
  ["Sheep and cattle graze in adjacent pastures on a New England farm.","Apple seedlings are planted (density?) in the sheep pasture.","Mature apple trees in the pasture 15-20 years after planting.  "]
  ]
}





const Visualizations = (props, ref) => {




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
      id="navbtns"
      variant="pills" 
      className="flex-column text-wrap"
      activeKey={key}
      onSelect={(k) => handleChange(k)}>

   
      <Navbar.Brand className="pb-3">Select Visualizations</Navbar.Brand>

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
<Col xs={12} md={8}>




  <Card id="a1">

  <Card.Body>
    { group &&


      <>
      {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
      {group.images.map((e,idz) => (
          

          
          <ImageSlider key={e+idz} groups={e} lbls={group.lbls[idz]} title={group.titles[idz]} />



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
export default Visualizations;