import React from 'react';
import { Card, Container, Row, Col, Image, Table } from 'react-bootstrap';
import ne from "./../images/ne.png";



const practices = ["Silvopasture", "Tarping", "Irrigation"];

function Home(props) {

//const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Our Mission"];
//const navs = ["Abstract", "Project Goals", "Methods", "Focus Group"];
//const navs = ["Project Description", "The Problem", "The Focus"];

	return (

  <div className="px-5 my-5">


        <Row>
        <Col xs={0} lg={2}>
        </Col>
        
        <Col xs={12} lg={8}>

        <hr/>



          <Image
          responsive
          fluid
          className="position-absolute w-50 d-flex align-content-center"
          style={{"zIndex": -1, "opacity": 0.2, "top": -100, "bottom": 100, "left" : 150}}
          src={ne} 
          />


          <p className="text-start justify-start">
            Welcome to the Climate Adaptation Resources for Northern New England Farmers, home to climate change adaptation resources for small, 
            medium and beginning farmers in northern New England. The climate adaptation resources 
            and tools on this website were created by a team of researchers and agricultural 
            specialists from the University of Maine, the University of Vermont, and the United 
            States Department of Agriculture (USDA) Climate Hub from 2019 to 2022 as part of an
             Agriculture and Food Research Initiative grant from the USDA’s National Institute 
             of Food and Agriculture (award number 2018-68006-28098). 
          </p>

            <p>
            The economic tools, visualizations, and resources on this website were designed with and for small, medium, and 
            beginning farmers in New England to address the unique challenges they face in adapting to climate change. These
             resources are available for three agricultural practices - silvopasture, irrigation, and tarping - that were 
             identified as areas of particular interest and need among New England farmers. To learn more about each practice
              area and explore the tools and resources, visit the practice pages. The economic tool and visualizations can also 
              be accessed on the Tools page. Visit the About page for more information on the purpose and focus of these tools
               and resources. For an overview of the research and project that generated these resources, visit the Research page. 
            </p>



   


        <Container>



      <Col xs={{ span: 8, offset: 2}}>
        <hr/>
        <Card.Title>Quick Links</Card.Title>
        <hr/>
      <Table responsive size={'sm'}>
            <thead>

            </thead>
            <tbody>
          {practices.map((d,idx) => (

            <tr key={idx} className="lead text-reset">
                

              <th><a href={"/" + d} className="text-decoration-none">
                {d}
                </a></th>
              <td><a href={"/" + d + "/#a2"}>
                Economic Tool
                </a></td>
              <td><a href={"/" + d + "/#a1"}>
                Visualizations
                </a></td>


            </tr>


          ))}
          </tbody>
      </Table>
      </Col>









{/*          {practices.map(d => (
            <>

            <Row>
              <Col xs={12} lg={1} className="d-flex">
                <a href={"/" + d}>
                {d}
                </a>
              </Col>
              <Col xs={12} lg={1} className="d-flex">

              </Col>
              <Col xs={12} lg={2}>
                <a href={"/" + d + "/#a2"}>
                Economic Tool
                </a>
              </Col>
              <Col xs={12} lg={2}>
                <a href={"/" + d + "/#a1"}>
                Visualizations
                </a>
              </Col>
            <hr/>
            </Row>
            <hr/>
            </>
          ))}*/}

    </Container>

        </Col>
        <Col xs={0} lg={2}>
        </Col>

        </Row>




</div>

		)
}

export default Home;
