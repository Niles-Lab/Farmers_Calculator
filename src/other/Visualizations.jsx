import React, { useState, useEffect } from 'react';
import { Alert, Card, Container, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';
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

const [group, setGroup] = useState(null);



const [key, setKey] = useState(0);



useEffect(() => {


if(key === "tarping") {


setGroup(tarping);


}


else if(key === "irrigation") {

setGroup(irrigation);


}
else {

setGroup(silvopasture);




}

console.log(key);
console.log(group);

console.log(silvopasture);
console.log(tarping);
console.log(irrigation);

}, [key])

















return (


<Container fluid >

<Row>
<Col xs={0} md={2}>
</Col>
<Col xs={12} md={8}>
  <hr/>
  <Card.Title id="2">Visualizations</Card.Title>
  <hr/>
  <Row>




  </Row>







</Col>
<Col xs={0} md={2}>
</Col>
</Row>

    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="silvopasture" title="Silvopasture">

      </Tab>
      <Tab eventKey="irrigation" title="Irrigation">

      </Tab>
      <Tab eventKey="tarping" title="Tarping">

      </Tab>
    </Tabs>




  <Card id="a1">

  <Card.Body>
    { group &&


      <>
      {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
      {group.images.map((e,idz) => (
          
          <>
          
          <ImageSlider groups={e} lbls={group.lbls[idz]} labels={labels} />

          </>

          ))}
      </>
    }
  </Card.Body>

  </Card>  



<br/><br/><br/><br/><br/><br/><br/><br/><br/>
</Container>

);
}
export default About;