import React from 'react';
import { Card, Container, Row, Col, Image } from 'react-bootstrap';

 function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}
const adlink = <a rel="noreferrer" target="_blank" href='https://forest.umaine.edu/faculty-staff/adam-daigneault/'>here.</a>;


/*
*
* Each array item is a team member consisting of:
* [
*  image file name w/ file extension
*  description - Note that this may be provided as a string or as markdown
*  (optional) Photo Credit
*  (optional) Team Role
* ]
*
*/
let team = [
  ["mniles.jpg", <p><b>Dr. Meredith Niles</b> is an Associate Professor of Food Systems in the College of Agriculture and Life Sciences at The University of Vermont.  She serves as the Principle Investigator on the grant, and studies ways to achieve sustainable food security, including how to help farmers adopt sustainable management practices across the US, New Zealand and low-income countries. Email: mtniles@uvm.edu</p>, "", "Principle Investigator"],
  ["adaigneault.jpg", <p><b>Dr. Adam Daigneault</b> is an Associate Professor of Forest, Recreation, and Conservation Policy in the University of Maine School of Forest Resources. He received his Ph.D. in Environmental and Natural Resource Economics from The Ohio State University in 2006 and has spent the past 15 years developing quantitative models to assess the impacts of environmental and land use policy on the natural resource sectors. His research focuses on a wide range of issues, including sustainable timber supply, climate change mitigation and adaptation, and valuing ecosystem services. Prior to UMaine, he was a Senior Economist at Landcare Research New Zealand and an Economist for the U.S. Environmental Protection Agency. While in both roles, Dr. Daigneault worked extensively on policy analysis relating to climate change, biofuels, and land use change. Adam is a native Mainer who returned home after several years living and working in Ohio, Oregon, Washington DC, India, and New Zealand.  To see his faculty page, click {adlink}</p>, "", "Co-Principle Investigator"],
  ["jfaulkner.jpg", <p><b>Dr. Joshua Faulkner</b> has coordinated the Farming and Climate Change Program in UVM Extension’s Center for Sustainable Agriculture for the past eight years.  He works with farmers across Vermont on best management practices for climate change resilience, with a focus on soil and water resources.  As a part of this project, he contributed to educational resources and presented project outputs to farmer groups in Vermont.</p>, "", "Co-Principle Investigator"],
  ["egallandt.png", <p><b>Dr. Eric Gallandt</b>, Professor of Weed Ecology and Management at the University of Maine, teaches in the Sustainable Agriculture Program and conducts research on ecological weed management in diversified organic vegetable and grain cropping systems.</p>, "", "Co-Principle Investigator"],
  // Josh Brown
  ["shurley.jpg", <p><b>Dr. Stephanie Hurley</b> is an Associate Professor of Ecological Landscape Design in the Department of Plant & Soil Science at the University of Vermont. Her background is in landscape architecture, with an emphasis on ecology, water quality, and ecosystem services. Dr. Hurley’s current research investigates the role that visual imagery can play in decision making about land management, including the use of landscape visualizations (photo-simulations) in stakeholder engagement about climate change adaptation and water management on farms, and green stormwater infrastructure in municipalities.</p>, "Josh Brown", "Co-Principle Investigator"],
  
  ["rschattman.jpg", <p><b>Dr. Rachel E. Schattman</b> is an interdisciplinary agroecologist whose research focuses on climate change adaptation/mitigation, diversified cropping and food systems, food insecurity, and adult learning. She received her M.S. and Ph.D. from the University of Vermont in Natural Resources and Agroecology, respectively. She is an Assistant Professor of Sustainable Agriculture at the University of Maine School of Food and Agriculture, a faculty fellow at the University of Maine Climate Change Institute, and a faculty affiliate of the George J. Mitchell Center for Sustainability Solutions. Dr. Schattman is a co-PI on this project, and is responsible for program evaluation.</p>, "", "Co-Principle Investigator"],

  ["sonja.jpg", <p><b>Dr. Sonja Birthisel</b> is a part-time faculty associate in the School of Forest Resources at University of Maine. Her research interests include farm adaptation to and mitigation of climate change, ecological weed and pest management, farmland food webs, and ecosystem services. She is committed to addressing practical questions posed by farmers, and enjoys partnering with stakeholders in research.</p>, "Johnny Sanchez", ""],
  ["bdemarest.png", <p><b>Dr. Bradford Demarest</b> is a postdoctoral associate at the University of Vermont's Neurobotics Lab.  He received his Ph.D. in Information Science from Indiana University's Luddy School of Informatics, Computing, and Engineering.  His research applies computational approaches to language analysis to study a wide range of topics including farmers' perspectives on climate change, clinician-patient conversations, and community norms in science and open-source coding communities.</p>, "", ""],
  ["tharrold.jpg", <p><b>Tim Harrold</b> is an undergraduate Computer Science student at UVM. He is interested in data visualization, and exploring ways to apply computing concepts in interdisciplinary studies. He has completed data visualization projects using methods such as speech analysis and graph theory. Current projects include designing this website, and exploring different visual and algorithmic approaches to modeling crop diversity and nutritional stability.</p>, "", ""],
  ["bholtzman.png", <p><b>Beth Holtzman</b> is a senior outreach professional with the University of Vermont Extension. As coordinator of the University of Vermont Extension <a rel="noreferrer" target="_blank" href="https://blog.uvm.edu/newfarmer/">New Farmer Project</a> and <a rel="noreferrer" target="_blank" href="https://www.uvm.edu/extension/agriculture/womens-agricultural-network">Women’s Agricultural Network</a> (WAgN), she has developed and managed education programs that help farmers achieve greater viability, resilience and satisfaction with their businesses and their quality of life. Since 2018, she has also served as the <a rel="noreferrer" target="_blank" href="https://blog.uvm.edu/vtsare/">Northeast SARE state coordinator for Vermont</a>. Email: beth.holtzman@uvm.edu</p>, "", ""],

  ["chricko.png", <p><b>Carolyn Hricko</b> is a Food Systems PhD student at the University of Vermont. Her research interests include the interactions between diet, health, agriculture and the environment, and the role of policy in supporting a more just, sustainable food system.</p>, "Keith MacDonald", ""],
  ["elane.jpg", <p><b>Erin Lane</b> has worked for the USDA Forest Service for 25 years, and has just started studying soil carbon.  She is the Coordinator of the USDA Northeast Climate Hub. The Hub focuses on communicating how we can adapt our farms and forests to climate change, and how working lands can contribute to climate mitigation. Her research is aimed at finding solutions to climate change by storing carbon in the soil. Erin is passionate about collaborating on teams and developing partnerships.</p>, "", ""]
 

]


let previousTeam = [
  "Ruthie Clements", "Devon Johnson", "Thomas Wentworth"
];


let acknowledged = [

  "Hamid Farhani, PhD, East National Technology Support Center, Natural Resources Conservation Service, United States Department of Agriculture",
  "Natalie Lounsbury, PhD, Postdoctoral Research Associate, University of New Hampshire Department of Agriculture, Nutrition, and Food Systems",
  "Joe Orefice, PhD, Lecturer and Director of Forest & Agricultural Operations, The Forest School at Yale School of the Environment",
  "Les Wright, PE, Civil Engineer, Natural Resources Conservation Service, United States Department of Agriculture",
  "Visualization design and creation by Holly Greenleaf, Greenleaf Design LLC"


];

const imgs = importAll(require.context('./../images/team', false, /\.(png|jpe?g|svg)$/));


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
    <h2>About the Team</h2>
    <hr/>
      <hr/>

      {team.map(d => (

        <span key={d[0]}>
        <Row>

          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center px-0">
            <Container className="px-0">
            <Row className="d-flex justify-content-center">
            <Image 
              style={{'maxHeight': '30vh'}}
              //style={{"object-fit": "fit"}}
              className="my-auto d-block"
              rounded
              fluid
              src={imgs.find(i => i[0]===d[0])[1].default}
              alt={d[0]}
              />
            </Row>
            {d[2] !== "" &&
            <>
            <Row className="d-block">
              
               <cite className="text-center">Photo Credit - {d[2]}</cite>
              
            </Row>
            </>
            }
            </Container>
          </Col>

          <Col xs={12} md={8} className="px-0 pt-3">
            <p>{d[1]}</p>
            
            {d[3] !== "" &&
              <em>{d[3]}</em>
            }

          </Col>


        </Row>
        <hr/>
        </span>
      ))}



  </Col>



  </Row>

  <Row>
    <hr/>
      <h3>Previous Team Members</h3>
    <hr/>

  </Row>
  <Row>
    {previousTeam.map(d => (

      <>
      <Col xs={12} md={4}>

      <p className="text-center">{d}</p>
      </Col>  
      </>

      ))}


  </Row>

  <hr/>

  <Row className="mb-0">
    <hr/>
      <h3>Acknowledgements</h3>
    <hr/>


  </Row>

  <Row className="mt-3">
    <b className="text-start">We thank the following contributors for their expert review of the agricultural practice materials and website:</b>
    <hr className="w-100" />

    {acknowledged.map((d,idx) => (



      <Row className="w-100">


        <p className="font-weight-normal mb-0"><p>{d}</p></p>
        {idx < acknowledged.length-1 &&
          <hr className="w-100" />
        }
        

      </Row>


      // <>
      // <Col xs={12} md={4}>
      // <Card.Title className="font-weight-normal">{d}</Card.Title>
      // </Col>  
      // </>

      ))}


  </Row>

  <hr/>

</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>

);
}
export default Team;