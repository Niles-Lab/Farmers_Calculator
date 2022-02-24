import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import greenleaf from '../images/logos/greenleaf_horizontal.png'

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
  // Alternative: mniles.jpg
  ["mnilesPortrait.png", <p><b>Dr. Meredith Niles</b> is an Associate Professor of Food Systems in the College of Agriculture and Life Sciences at The University of Vermont.  She serves as the Principal Investigator on the grant, and studies ways to achieve sustainable food security, including how to help farmers adopt sustainable management practices across the US, New Zealand and low-income countries. Email: mtniles@uvm.edu</p>, "", "Principal Investigator"],
  ["adaigneault.jpg", <p><b>Dr. Adam Daigneault</b> is an Associate Professor of Forest, Recreation, and Conservation Policy in the University of Maine School of Forest Resources. He received his Ph.D. in Environmental and Natural Resource Economics from The Ohio State University in 2006 and has spent the past 15 years developing quantitative models to assess the impacts of environmental and land use policy on the natural resource sectors. His research focuses on a wide range of issues, including sustainable timber supply, climate change mitigation and adaptation, and valuing ecosystem services. Prior to UMaine, he was a Senior Economist at Landcare Research New Zealand and an Economist for the U.S. Environmental Protection Agency. While in both roles, Dr. Daigneault worked extensively on policy analysis relating to climate change, biofuels, and land use change. Adam is a native Mainer who returned home after several years living and working in Ohio, Oregon, Washington DC, India, and New Zealand.  To see his faculty page, click {adlink}</p>, "", "Co-Principal Investigator"],
  ["nCheney.jpg", <p><b>Dr. Nick Cheney</b> is an Assistant Professor of Computer Science, and a core faculty in the Complex Systems and Data Science program at the University of Vermont.  His research aims at enabling the wide use of artificial intelligence by non-AI experts to accelerate science and practice by automating the design and implementation of robust, adaptable, and scalable data science and machine learning algorithms.</p>, "", "Co-Principal Investigator"],
  
  // Alternative: jfaulkner.jpg
  ["jfaulknerPortrait.png", <p><b>Dr. Joshua Faulkner</b> has coordinated the Farming and Climate Change Program in UVM Extension’s Center for Sustainable Agriculture for the past eight years.  He works with farmers across Vermont on best management practices for climate change resilience, with a focus on soil and water resources.  As a part of this project, he contributed to educational resources and presented project outputs to farmer groups in Vermont.</p>, "", "Co-Principal Investigator"],
  ["egallandt.png", <p><b>Dr. Eric Gallandt</b>, Professor of Weed Ecology and Management at the University of Maine, teaches in the Sustainable Agriculture Program and conducts research on ecological weed management in diversified organic vegetable and grain cropping systems.</p>, "", "Co-Principal Investigator"],
  // Alternative: shurley.jpg
  ["shurleyPortrait.png", <p><b>Dr. Stephanie Hurley</b> is an Associate Professor of Ecological Landscape Design in the Department of Plant & Soil Science at the University of Vermont. Her background is in landscape architecture, with an emphasis on ecology, water quality, and ecosystem services. Dr. Hurley’s current research investigates the role that visual imagery can play in decision making about land management, including the use of landscape visualizations (photo-simulations) in stakeholder engagement about climate change adaptation and water management on farms, and green stormwater infrastructure in municipalities.</p>, "Josh Brown", "Co-Principal Investigator"],
  
  // Alternative: rschattman.jpg
  ["rschattmanPortrait.png", <p><b>Dr. Rachel E. Schattman</b> is an interdisciplinary agroecologist whose research focuses on climate change adaptation/mitigation, diversified cropping and food systems, food insecurity, and adult learning. She received her M.S. and Ph.D. from the University of Vermont in Natural Resources and Agroecology, respectively. She is an Assistant Professor of Sustainable Agriculture at the University of Maine School of Food and Agriculture, a faculty fellow at the University of Maine Climate Change Institute, and a faculty affiliate of the George J. Mitchell Center for Sustainability Solutions. Dr. Schattman is a co-PI on this project, and is responsible for program evaluation.</p>, "", "Co-Principal Investigator"],

  // Alternative: sonja.jpg
  ["sonjaPortrait.png", <p><b>Dr. Sonja Birthisel</b> is a part-time faculty associate in the School of Forest Resources at University of Maine. Her research interests include farm adaptation to and mitigation of climate change, ecological weed and pest management, farmland food webs, and ecosystem services. She is committed to addressing practical questions posed by farmers, and enjoys partnering with stakeholders in research.</p>, "Johnny Sanchez", ""],
  ["bdemarest.png", <p><b>Dr. Bradford Demarest</b> is a postdoctoral associate at the University of Vermont's Neurobotics Lab.  He received his Ph.D. in Information Science from Indiana University's Luddy School of Informatics, Computing, and Engineering.  His research applies computational approaches to language analysis to study a wide range of topics including farmers' perspectives on climate change, clinician-patient conversations, and community norms in science and open-source coding communities.</p>, "", ""],
  ["tharrold.jpg", <p><b>Tim Harrold</b> is an undergraduate Computer Science student at UVM. He is interested in data visualization, and exploring ways to apply computing concepts in interdisciplinary studies. He has completed data visualization projects using methods such as speech analysis and graph theory. Current projects include designing this website, and exploring different visual and algorithmic approaches to modeling crop diversity and nutritional stability.</p>, "", ""],
  ["bholtzman.png", <p><b>Beth Holtzman</b> is a senior outreach professional with the University of Vermont Extension. As coordinator of the University of Vermont Extension <a rel="noreferrer" target="_blank" href="https://blog.uvm.edu/newfarmer/">New Farmer Project</a> and <a rel="noreferrer" target="_blank" href="https://www.uvm.edu/extension/agriculture/womens-agricultural-network">Women’s Agricultural Network</a> (WAgN), she has developed and managed education programs that help farmers achieve greater viability, resilience and satisfaction with their businesses and their quality of life. Since 2018, she has also served as the <a rel="noreferrer" target="_blank" href="https://blog.uvm.edu/vtsare/">Northeast SARE state coordinator for Vermont</a>. Email: beth.holtzman@uvm.edu</p>, "", ""],
  // Alternative: chricko.png
  ["chrickoPortrait.png", <p><b>Carolyn Hricko</b> is a Food Systems PhD student at the University of Vermont. Her research interests include the interactions between diet, health, agriculture and the environment, and the role of policy in supporting a more just, sustainable food system.</p>, "Keith MacDonald", ""],
  // Alternative: elane.jpg
  ["elanePortrait.png", <p><b>Erin Lane</b> has worked for the USDA Forest Service for 25 years, and has just started studying soil carbon.  She is the Coordinator of the USDA Northeast Climate Hub. The Hub focuses on communicating how we can adapt our farms and forests to climate change, and how working lands can contribute to climate mitigation. Her research is aimed at finding solutions to climate change by storing carbon in the soil. Erin is passionate about collaborating on teams and developing partnerships.</p>, "", ""]
 

]


let previousTeam = [
  "Ruthie Clements", "Devon Johnson", "Thomas Wentworth"
];


let acknowledged = [

  "Joe Orefice, PhD, Lecturer and Director of Forest & Agricultural Operations, The Forest School at  Yale School of the Environment",
  "Hamid Farahani, PhD, Water Management Engineer, USDA-NRCS East National Technology Support Center",
  "Natalie Lounsbury, PhD, Postdoctoral Research Associate, University of New Hampshire Department of Agriculture, Nutrition, and Food Systems",
  "Les Wright, PE, Civil Engineer, Natural Resources Conservation Service, United States Department of Agriculture",
  "Karrah Kwasnik, Digital Content Manager, USDA Northeast Climate Hub",
  "Ryan Maher, Research and Extension Specialist, Cornell Small Farms Program, Cornell University",
  "Brett Chedzoy, Senior Resource Educator, Cornell Cooperative Extension of Schuyler County",
  "Todd Guerdat, PhD, Engineer, USDA Natural Resources Conservation Service",
  "Juan P. Alvez, Ph.D., Research Associate Faculty, University of Vermont Extension, Center for Sustainable Agriculture"


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


      {team.map(d => (

        <span key={d[0]}>
        <Row>

          <Col xs={12} md={3} className="d-flex px-0 align-items-center align-content-center">
            <Container className="p-3">
              <Row className="d-flex justify-content-center">
                <Image 
                  style={{'height': '30vh', 'maxHeight': '30vh', 'minWidth': '15vw', 'width': '15vw'}}
                  className="my-auto w-100 d-block"
                  rounded
                  fluid
                  src={imgs.find(i => i[0]===d[0])[1].default}
                  alt={d[0]}
                  />
              </Row>
            </Container>
          </Col>

          <Col xs={12} md={9} className="pl-4 pt-3">
          {d[1] !== "" &&
            <Row className="mb-0 pb-0">
              <p>{d[1]}</p>
            </Row>
          }
          {d[3] !== "" &&
            <Row className="pt-0 mt-0">
                <em>{d[3]}</em>
            </Row>
          }
            {d[2] !== "" &&
            <>
            <Row className="d-block">
              
               <p><cite>Photo Credit - {d[2]}</cite></p>
              
            </Row>
            </>
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


        <p className="font-weight-normal mb-0">{d}</p>
        {idx < acknowledged.length-1 &&
          <hr className="w-100" />
        }
        

      </Row>

      ))}

      <Row className="w-100">

        <hr className="w-100" />
        
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={5} className="d-flex align-items-center border-right pr-3">

          <p className="font-weight-lighter" style={{"fontSize": "1em"}}><b style={{"fontSize": "2em"}} className="display-3">Visualization design and creation</b><br/>&nbsp;&nbsp;Holly Greenleaf, Greenleaf Design LLC</p>

          </Col>
          <Col xs={12} lg={7}>
          <Image
          className="w-100 d-block"
          src={greenleaf} />
          </Col>
        </Row>

        

      </Row>



  </Row>


</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>

);
}
export default Team;