import React from 'react';
import { Container, Row, Col, Image, Table } from 'react-bootstrap';
import cover from "./../images/cover.jpg";

import umaine from '../images/umaine.png';
import uvm from '../images/uvm.png';
import climatehub from '../images/climatehub.png';

import mapFigure from '../images/figure1.png';


const About = (props, ref) => {

const citations = [
"USGCRP, 2018: Impacts, Risks, and Adaptation in the United States: Fourth National Climate Assessment, Volume II [Reidmiller, D.R., C.W. Avery, D.R. Easterling, K.E. Kunkel, K.L.M. Lewis, T.K. Maycock, and B.C. Stewart (eds.)]. U.S. Global Change Research Program, Washington, DC, USA, 1515 pp. doi: 10.7930/NCA4.2018."]


return (


<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>
<Col xs={12} md={8}>



  <hr/>
  <h2>About The Project</h2>
  <hr/>


  <Row className="d-flex justify-content-center">
  <Image
  className="w-75 mb-2"
  src={cover} />
  </Row>



    <hr />
    <h3>Background</h3>
    <hr />

  <Row>





    <p>
      Climate change is one of the greatest environmental threats to future generations, and one that will have significant impacts on US agriculture. There is an increasing focus on the development of climate resources and information to help farmers plan for future changes. While the availability of climate resources may be growing, few are targeted towards small, medium and beginning farmers in New England and the unique production challenges they face. 
    </p>
         






    <p>
        The tools and resources found on this website were designed to address this gap in resources and respond to farmers’ expressed needs. The economic tools, visualizations, and accompanying overview briefs presented on this website were developed based on input from farmers and technical advisors in Vermont and Maine, and an assessment of existing resources and research. They incorporate farmers’ and agricultural experts’ management concerns and take into account farm scale, regional geographic and climate characteristics, and farmer experience level.
    </p>



  </Row>

  <hr/>
  <h3>Collaborators</h3>
  <hr/>
  <Row>
      <Col xs={12} lg={4}>
      <Image fluid className="w-75" src={uvm} />
      </Col>

      <Col xs={12} lg={4}>
      <Image fluid className="w-75" src={umaine}/>
      </Col>

      <Col xs={12} lg={4}>
      <Image fluid className="w-100" src={climatehub}/>
      </Col>
  </Row>


  <hr/>
    <h3>Climate Change in the Northeast</h3>
  <hr/>

<Row>
  


  <p>A focus on this region is crucial given the nature of climate change impacts unique to the Northeast. The Northeast region has seen a 
  2°F increase in average temperatures, and a 5-inch (more than 10%) 
  increase in annual precipitation since 1895. Prevalence of extreme precipitation events is also increasing (Figure 1). Precipitation intensities
  , volume and frequency of extreme events are increasing faster in the Northeast than any other U.S. region (Horton et al. 2014), trends that are 
  expected to continue throughout this century (IPCC 2014). Increased precipitation, particularly in the springtime, could delay planting and decrease
   the net number of days suitable for cultivation (Cooper et al. 1997), despite the fact that warmer temperatures are expected to add two weeks to our
    growing season by midcentury (Fernandez et al. 2015).</p>


  <Row className="d-flex justify-content-center w-100">

  <Image
  className="d-block mb-2"
  style={{"width": "40%"}}
  src={mapFigure} />

  </Row>


<p>  Northern New England growers will likely face increased summer drought risk due to expected 
    temperature increases (Horton et al. 2014); higher likelihood of frost damage in perennial crops due to premature leafout, as was experienced by orchardists 
    in the Northeast during 2007 and 2012 (Horton et al. 2014); and increasingly variable weather (Fernandez et al. 2015), which may increase the risk of crop
     failure and complicate both short- and long-term strategic planning. In a changing climate, forward-thinking, adaptive management strategies will become 
     increasingly important to the survival and profitability of farming enterprises. We will draw from the expertise of University and Extension experts, NGO
      partners, government agencies including the USDA, and experienced farmers in developing curriculum and outreach tools that will best prepare SMF to develop
       resilient farms (Lengnick 2015) and adapt to climate-related challenges (Table 1).
</p>




  <Col xs={12} md={{offset: 1, span: 10}}>
  <Table responsive size={'sm'}>
      <tr>
        <th>Challenge (NE Region)</th>
        <th>Small and Medium Farm Management Tools</th>
      </tr>

    <tbody>


    <tr>
      <td>Increased
precipitation
intensity</td>

      <td><p>Decision-aids to monitor disease risk (e.g. UMaine Extension’s Ag-Radar);
Cover crops for erosion control (Alliaume 2014); Small retention ponds (Fiener
et al. 2005) and riparian buffers (Joyce 2011); High-efficacy cultivation
strategies (Kolb et al. 2012) to allow farmers to best utilize the fewer spring
days suitable for cultivation; No-till practices for erosion control and soil
quality (Gallandt 2014)</p></td>
    </tr>

    <tr>
      <td>Increased summer temperature/drought risk</td>

      <td className=""><p>Drip irrigation (Hutchinson 2003) coupled with mulching to retain soil moisture
(Schonbeck and Evanylo 1998) and investments in other irrigation
infrastructure (McDonald Girvetz 2013); Soil solarization for weed & disease
control (Birthisel unpublished data), which will become increasingly effective
with increasing temperatures. Choosing drought-resistant cultivars (Aprile et al.
2013)</p></td>
    </tr>

    <tr>
      <td>Increased
variability
</td>

      <td><p>Hoop houses to improve environmental control (Blomgren and Frisch 2007;
Fitzgerald and Hutton 2012); Diversification to distribute risk (Rossing et al.
2014); Rotational grazing (Wilson et al. 2014); Crop insurance (Garrido et al.
2014); Using soil amendments to reduce the effects of variability on yield
(Mallory and Porter 2007.)</p></td>
    </tr>
    </tbody>
  </Table>
  <small>Table 1: Example Management Tools for Climate-Related Challenges</small>
  </Col>





</Row>

<Row>

<h5 className="font-weight-normal mt-3">Visit the&nbsp;<a href="https://nca2018.globalchange.gov/" rel="noreferrer" target="_blank">USDA’s Fourth National Climate Assessment</a>&nbsp;for more information on climate change and its impacts across the United States, including the Northeast.</h5>


</Row>

    <hr/>
      <h3>Citations</h3>
    <hr/>
    {citations.map(d => (


      <p><small>{d}</small></p>

      ))}

</Col>
<Col xs={0} md={2}>
</Col>
</Row>


</Container>

);
}
export default About;