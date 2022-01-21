import React, { useState } from 'react';
import { Container, Row, Col, Nav, Navbar, Alert } from 'react-bootstrap';
//import cover from "./../images/cover.jpg";
import ImageSlider from "./../viz/ImageSlider.jsx"


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
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


const irrigation = {
  titles: ["Aerial view of a drip irrigation system on a small-medium New England vegetable farm", "Perspective view of a drip and sprinkler irrigation system on a small-medium New England vegetable farm"],
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
//const sp = [tp[0]];




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
const av1 = importAll(require.context('./../images/silvopasture/av1', false, /\.(png|jpe?g|svg)$/));

// Pasture Enrichment Images 2
const pe2 = importAll(require.context('./../images/silvopasture/pe2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
const av2 = importAll(require.context('./../images/silvopasture/av2', false, /\.(png|jpe?g|svg)$/));

// Forest Conversion Images
//const fc = importAll(require.context('./../images/silvopasture/fc', false, /\.(png|jpe?g|svg)$/));


//labels = ["Pasture Enrichment 1", "Aerial View", "Pasture Enrichment 2", "Aerial View"];



const silvopasture = {
  titles: ["Perspective view of black walnut and black locust trees in cattle pasture", 
  "Aerial view of black walnut trees in pasture",
  "Perspective view of apple orchard in sheep pasture",
  "Aerial view of apple orchard in pasture"],
  images: [pe, av1, pe2, av2],
  lbls: [
["Cattle graze in a pasture on a New England farm. Livestock density is average for a small-medium size farm.", "Trees are planted at 17-21 basal density in the pasture.", "Mature trees in the pasture approximately 20 years after planting. Cattle graze among the trees, and trees (mostly black locust) are selectively harvested."],
["Aerial view of open pasture.","Aerial view of 40 year old black walnut trees planted in pasture. Silvopasture on right depicts selective harvest of black walnut."],
["Sheep and cattle graze in adjacent pastures on a New England farm.","Apple seedlings are planted approximately 15-20 feet apart in the sheep pasture.","Mature apple trees in the pasture 5-15 years after planting."],
["Aerial view of open pasture.", "Aerial view of apple trees at different maturities planted in adjacent pastures."]
]

}





const Visualizations = (props, ref) => {


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
    <h2>Visualizations</h2>
  <hr/>


<Alert variant={"success"}>
These visualizations are designed to help the viewer picture how the implementation of a practice appears
 in the context of a real New England farm. These images depict the different stages of practice implementation
  and help the viewer anticipate how the implementation of the practice will appear over time and what implications
   it may have for the farm. Use the slider tool to progress through the images and implement the practice.
    <br/>
   <cite>To use these images, please request permission from Stephanie Hurley (stephanie.hurley@uvm.edu)</cite>
</Alert>





</Col>
<Col xs={0} md={2}>
</Col>
</Row>






<Row>
<Col xs={12} md={2}>

  
      <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light py-4" className="flex-column d-block">


      <Navbar.Brand className="mt-5 text-wrap">Select Visualizations</Navbar.Brand>

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
<Col xs={12} md={8}>




    { group &&


      <>
      {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
      {group.images.map((e,idz) => (
          

          
          <ImageSlider key={e+idz} groups={e} lbls={group.lbls[idz]} title={group.titles[idz]} />



          ))}
      </>
    }




</Col>
<Col xs={0} md={2}>
</Col>
</Row>




</Container>

);
}
export default Visualizations;