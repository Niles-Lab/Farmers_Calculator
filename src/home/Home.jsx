import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
//import ne from "./../images/ne.png";
import fc1 from "./../images/front_cover1.png";
//import fc2 from "./../images/front_cover2.png";
//import bg2 from "./../images/background_2.jpg";


const practices = ["Silvopasture", "Tarping", "Irrigation"];

function Home(props) {


	return (

  <>
          <div className="parallax py-5 h-100 d-flex position-relative align-items-center justify-content-center" style={{ backgroundImage: `url(${fc1})` }}>
              <div className="py-3 w-100" style={{'backgroundColor': 'rgb(255,255,255,0.7)'}}>
                    <Row className="d-block px-4">
                    <Card.Title className="display-4">
                      Climate change poses a challenge to farming systems worldwide
                    </Card.Title>
                    </Row>
                    <Row className="d-block">
                    <h3 className="text-center main-subtitle">How Can Northeast Agriculture Adapt?</h3>
                    </Row>
              </div>
          </div>

          <p className="small mt-0 mb-5 text-center">The Intervale Community Farm, Photo Credit: Carolyn Hricko</p>


  <div className="px-5 my-5">



        <Row>
        <Col xs={0} lg={2}>
        </Col>
        
        <Col xs={12} lg={8}>




             <p>Welcome to the Climate Adaptation Resources for Northern New England Farmers website. The economic tools,
              visualizations, and resources on this website were designed with and for small, medium, and beginning farmers
               and ranchers<sup>1</sup> in New England to help address their unique challenges in adapting to a changing climate. These
                resources are available for three agricultural practices - silvopasture, irrigation, and tarping - that
                 were identified as areas of particular interest and need among New England farmers.</p>



                 <p>
                 To learn more about
                  each practice area and explore the tools and resources, visit the practice pages (Quick Links below). 
                  The economic tools, visualizations, and overview briefs can also be found under the Tools tab at the top of the page. Visit the <a href="/about">About the Project</a>
                    &nbsp;and <a href="/team">About the Team</a> pages for more information on the purpose and focus of these tools and resources. 
                   For an overview of the research project that generated these resources, visit the <a href="/research">Research</a> page. 
                </p>




            <p>
            The climate adaptation resources and tools on this website were created by a team of researchers and agricultural 
            specialists from the University of Maine, the University of Vermont, and the United States Department of Agriculture
             (USDA) Climate Hub from 2019 to 2022 as part of an Agriculture and Food Research Initiative grant from the USDA’s 
             National Institute of Food and Agriculture (award number 2018-68006-28098).  

            </p>

            <p className="small"><sup>1</sup>We use the USDA updated definition for a small farm as grossing less than $350,000 annually and for a medium farm as grossing less than $1 million annually (Hoppe et al. 2013). Beginning farmers and ranchers are those with less than 10 years of experience (Ahern & Newton, 2009).</p>



        <Container>



      <Col xs={12} md={{ span: 8, offset: 2}} className="px-0">
        <hr/>
        <Card.Title>Quick Links</Card.Title>
        <hr/>
      <Table responsive size={'sm'}>
            <thead>

            </thead>
            <tbody>
          {practices.map((d,idx) => (

            <tr key={idx} className="text-reset">
                

              <th><a href={"/" + d} className="text-decoration-none">
                <h5>
                {d}
                </h5>
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



    </Container>

        </Col>
        <Col xs={0} lg={2}>
        </Col>

        </Row>




</div>
</>

		)
}

export default Home;
