import React, { useState } from 'react';
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
//  TARPING DATA
// 
// 
// Tarping image slides
const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));

// Tarping cover image is just the first from our one set
const sp = [tp[0]];

// Collection of elements for ImageSlider
let groups = [tp];

let labels = ["Tarping"];
let lbls = [
["Late August/Early September: plant perennial rye cover crop",
"June: Roll down rye using either a lawn roller or a tractor driven roller crimper",
"June: Place tarps, secure with sand bags",
"June: Remove tarps after two weeks. Plant cash crop of brassica starts",
"August/September: Harvest crops, plant cover crop"],
["Ex One", "Ex Two", "Ex Three"],
["ab", "test"],
["abc","asfse","fakjsf"]
];









// Irrigation Cover Image(s)
//const sp = importAll(require.context('../images/irrigation/', false, /\.(png|jpe?g|svg)$/));

// Ponds images
const pd = importAll(require.context('../images/irrigation/pd/', false, /\.(png|jpe?g|svg)$/));

// Irrigation images
const ig = importAll(require.context('../images/irrigation/ig/', false, /\.(png|jpe?g|svg)$/));

groups = [ig, pd];


labels = ["Irrigation", "Irrigation With Ponds"];
lbls = [
["Testng One", "Step Two", "And yYp Three"],
["Ex One", "Ex Two", "Ex Three"],
["ab", "test"],
["abc","asfse","fakjsf"]
];









const About = (props, ref) => {

var activeKey = 0;

const [group, setGroup] = useState(null);

const [key, setKey] = useState(0);

return (


<Container fluid >

<Row>
<Col xs={0} md={2}>
</Col>
<Col xs={12} md={8}>
    <hr/>
    <Card.Title>About</Card.Title>
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
      <Tab eventKey="home" title="Silvopasture">

      </Tab>
      <Tab eventKey="profile" title="Irrigation">

      </Tab>
      <Tab eventKey="contact" title="Tarping">

      </Tab>
    </Tabs>




  <Card id="a1">
  <hr/>
  <Card.Title id="2">Visualizations</Card.Title>
  <hr/>
  <Card.Body>

      {/*<ImageSlider groups={groups} labels={labels} lbls={lbls} id="a1" />*/}
      {groups.map((e,idz) => (
          
          <>
          
          <ImageSlider groups={e} lbls={lbls[idz]} labels={labels} />

          </>

          ))}

  </Card.Body>

  </Card>  



<br/><br/><br/><br/><br/><br/><br/><br/><br/>
</Container>

);
}
export default About;