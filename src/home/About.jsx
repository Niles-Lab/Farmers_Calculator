/**
 * About The Project Page
 */
import React from 'react';
import { Container, Row, Col, Image, Table, Card } from 'react-bootstrap';
import cover from "./../images/cover_2.JPG";

import umaine from '../images/logos/umaine.png';
import uvm from '../images/logos/uvm.png';
import climatehub from '../images/logos/climatehub.png';
//import nifa from '../images/logos/nifa-color-lockup.svg';

import mapFigure from '../images/figure1.png';


const About = (props, ref) => {

const citations = [
"Horton, R, Yohe, G, Easterling, W, Kates, R, Ruth, M, Sussman, E, Whelchel, A, Wolfe, D and Lipschultz, F. 2014. Ch. 16: Climate Change Impacts in the United States: The Third National Climate Assessment.",
"IPCC. 2014. Climate Change 2014: Synthesis Report. Contribution of Working Groups I, II and III to the Fifth Assessment Report of the Intergovernmental Panel on Climate Change. Geneva, Switzerland.",
"Fernandez, I.J., C.V. Schmitt, S.D. Birkel, E. Stancioff, A.J. Pershing, J.T. Kelley, J.A. Runge, G.L. Jacobson, and P.A. Mayewski. 2015. Maine’s Climate Future: 2015 Update. Orono, ME: University of Maine. 24pp.",
"Cooper, G, McGechan, MB and Vinten, AJA. 1997. The Influence of a Changed Climate on Soil Workability and Available Workdays in Scotland. Journal of Agricultural Engineering Research 68: 253–269.",
"Lengnick, L. 2015. Resilient Agriculture: Cultivating Food Systems for a Changing Climate. Gabriola, Canada.",
"USGCRP, 2018: Impacts, Risks, and Adaptation in the United States: Fourth National Climate Assessment, Volume II [Reidmiller, D.R., C.W. Avery, D.R. Easterling, K.E. Kunkel, K.L.M. Lewis, T.K. Maycock, and B.C. Stewart (eds.)]. U.S. Global Change Research Program, Washington, DC, USA, 1515 pp. doi: 10.7930/NCA4.2018.",
"Alliaume, F. 2014. Reduced tillage and cover crops improve water capture and reduce erosion of fine textured soils in raised bed tomato systems. Agriculture, Ecosystems & Environment 183.",
"Fiener, P., Auerswald, K., & Weigand, S. 2005. Managing erosion and water quality in agricultural watersheds by small detention ponds. Agriculture, Ecosystems, and Environment, 110, 132-142.",
"Joyce. (2011). Focus on Intervale Conservation Nursery: What is a Riparian Buffer? Intervale Center. Retrieved from: http://www.intervale.org/focus-on-intervale-conservation-nursery-whatis-ariparian-restoration-project/",
"Kolb, LN, Gallandt, ER, and Mallory, EB. 2012. Impact of Spring Wheat Planting Density, Row Spacing, and Mechanical Weed Control on Yield, Grain Protein, and Economic Return in Maine. Weed Science 60(2): 244–253.",
"Gallandt, ER. 2014. “Weed Management in Organic Farming.” In Recent Advances in Weed Management. New York, USA",
"McDonald RI, Girvetz EH. 2013. Two Challenges for U.S. Irrigation Due to Climate Change: Increasing Irrigated Area in Wet States and Increasing Irrigation Rates in Dry States. PLoS ONE 8(6): e65589. doi:10.1371/journal.pone.0065589",
"Aprile, A, Havlickova, L, Panna, R, Marè, C, Borrelli, GM, Marone, D, and Cattivelli, L. 2013. Different stress responsive strategies to drought and heat in two durum wheat cultivars with contrasting water use efficiency. BMC Genomics 14 (1): 1–18.",
"Blomgren, T. and T. Frisch. 2007. High tunnels: Using low-cost technology to increase yields, improve quality and extend the season. 27 Jan. 2008. <http://www.uvm.edu/sustainableagriculture/hightunnels.html>",
"Rossing, WAH, Modernel, P, and Tittonell, PA. 2014. Diversity in Organic and Agroecological Farming Systems for Mitigation of Climate Change Impact, with Examples from Latin America. In Climate Change Impact and Adaptation in Agricultural Systems. Boston, USA.",
"Wilson, G.L., Dalzell, B.J., Mulla, D.J., & Porter, P.M. 2014. Estimating water quality effects of conservation practices and grazing land use scenarios. Journal of Soil and Water Conservation, 69(4), 330-342.",
"Garrido, A, Bielza, M, Rey, D, and Minguez, MN, and Ruiz-Ramos, M. 2014. “Insurance as an adaptation to climate variability in agriculture.” In Handbook on Climate Change and Agriculture. Northampton, USA.",
"Mallory, E. B., and G. A. Porter. 2007. Potato yield stability under contrasting soil management strategies. Agron J 99:501-510."
]


return (

<>
<div id="a0" className="parallax py-5 h-100 d-flex position-relative align-items-center justify-content-center" style={{ backgroundImage: `url(${cover})` }}>
    <div className="py-3 w-100" style={{'backgroundColor': 'rgb(255,255,255,0.7)'}}>
          <Row className="d-block">
          <Card.Title className="display-4">
            About the Project
          </Card.Title>
          </Row>
    </div>
</div>
<p className="small mt-0 mb-5 text-center">Irrigation from University of Vermont Extension Workshops,
Photo Credit: Jennifer Brown</p>


<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>
<Col xs={12} md={8}>





    <hr />
    <h3>Background</h3>
    <hr />

  <Row>





    <p>
      Climate change is one of the greatest threats to current and future generations, and one that will 
      have significant impacts on US agriculture. There is an increasing focus on the development of climate
       change resources and information to help farmers plan for future changes. While the availability of 
       these resources may be growing, few are targeted towards small, medium, and beginning farmers in New
      England and the unique production challenges they face. 
    </p>
         






    <p>
     The tools and resources found on this website were designed to address this gap in resources and respond
      to farmers’ expressed need for information and resources. The economic tools, visualizations, and accompanying
       overview briefs presented on this website were developed based on input from farmers and technical advisors
        in Vermont and Maine, and an assessment of existing resources and research. They incorporate farmers’ and 
        agricultural experts’ management concerns while considering farm scale, regional geographic and climate characteristics, and farmer experience level.
    </p>



  </Row>

  <hr/>
  <h3>Collaborators</h3>
  <hr/>
  <Row>

      <Col xs={12} lg={4}>
      <a className='w-100' href="https://www.uvm.edu/" target="_blank" rel='noreferrer'>
      <Image fluid className="w-75" src={uvm} />
      </a>
      </Col>

      <Col xs={12} lg={4}>
      <a className='w-100' href="https://umaine.edu/" target="_blank" rel='noreferrer'>
      <Image fluid className="w-75" src={umaine}/>
      </a>
      </Col>

      <Col xs={12} lg={4}>
      <a className='w-100' href="https://www.climatehubs.usda.gov/hubs/northeast" target="_blank" rel='noreferrer'>
      <Image fluid className="w-100" src={climatehub}/>
      </a>
      </Col>



  </Row>
{/*
  <Row>
      <Col xs={12} lg={{offset: 3, span: 6}}>
      <Image className="w-100" src={nifa}/>
      </Col>
  </Row>*/}



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


  <p>

    A focus on this region is crucial given the nature of climate change impacts unique to the Northeast. The Northeast region has seen a 2°F 
    increase in average temperatures, and a 5-inch (more than 10%) increase in annual precipitation since 1895. Prevalence of extreme precipitation
     events is also increasing (Figure 1). Precipitation intensities, volume and frequency of extreme events are increasing faster in the Northeast 
     than any other U.S. region (Horton et al. 2014), trends that are expected to continue throughout this century (IPCC 2014). Increased precipitation,
      particularly in the springtime, could delay planting and decrease the net number of days suitable for cultivation (Cooper et al. 1997), despite the 
      fact that warmer temperatures are expected to add two weeks to our growing season by midcentury (Fernandez et al. 2015).
  </p> 




  <Row className="d-flex justify-content-center w-100">

  <Image
  className="d-block mb-2"
  style={{"width": "50%"}}
  src={mapFigure} />

  </Row>


<p>
  Northern New England growers 
  will likely face increased summer drought risk due to expected temperature increases (Horton et al. 2014); higher likelihood of frost damage in perennial 
  crops due to premature leafout, as was experienced by orchardists in the Northeast during 2007 and 2012 (Horton et al. 2014); and increasingly variable
  weather (Fernandez et al. 2015), which may increase the risk of crop failure and complicate both short- and long-term strategic planning. In a 
  changing climate, forward-thinking, adaptive management strategies will become increasingly important to the survival and profitability of farming
  enterprises. We will draw from the expertise of University and Extension experts, NGO partners, government agencies including the USDA, and 
  experienced farmers in developing curriculum and outreach tools that will best prepare SMF to develop resilient farms (Lengnick 2015) and adapt
  to climate-related challenges (Table 1).
</p>




  <Col xs={12} md={{offset: 1, span: 10}}>
  <Table responsive>
      <thead>
      <tr>

        <th>Challenge (NE Region)</th>


        <th>Small and Medium Farm Management Tools</th>

      </tr>
      </thead>
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


      <td><p>Drip irrigation (Hutchinson 2003) coupled with mulching to retain soil moisture
(Schonbeck and Evanylo 1998) and investments in other irrigation
infrastructure (McDonald Girvetz 2013); Soil solarization for weed & disease
control (Birthisel unpublished data), which will become increasingly effective
with increasing temperatures. Choosing drought-resistant cultivars (Aprile et al.
2013)</p></td>
    </tr>

    <tr>
      <td>Increased variability</td>



      <td><p>Hoop houses to improve environmental control (Blomgren and Frisch 2007;
Fitzgerald and Hutton 2012); Diversification to distribute risk (Rossing et al.
2014); Rotational grazing (Wilson et al. 2014); Crop insurance (Garrido et al.
2014); Using soil amendments to reduce the effects of variability on yield
(Mallory and Porter 2007.)</p></td>
    </tr>
    </tbody>
  </Table>
  <cite>Table 1: Example Management Tools for Climate-Related Challenges</cite>
  </Col>





</Row>

<Row>

<p className="font-weight-normal mt-3">Visit the&nbsp;<a href="https://nca2018.globalchange.gov/" rel="noreferrer" target="_blank">USDA’s Fourth National Climate Assessment</a>&nbsp;for more information on climate change and its impacts across the United States, including the Northeast.</p>

<p className="font-weight-normal mt-3">For state-level climate information, visit the <a href="https://statesummaries.ncics.org/#about" rel="noreferrer" target="_blank">National Oceanic and Atmospheric Administration's State Climate Summaries.</a></p>



</Row>

    <hr/>
      <h3>Citations</h3>
    <hr/>
    {citations.map((d,idx) => (


      <p key={"smCit"+idx}><small>{d}</small></p>

      ))}

</Col>
<Col xs={0} md={2}>
</Col>
</Row>


</Container>

</>

);
}
export default About;