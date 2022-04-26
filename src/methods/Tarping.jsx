/**
 * 
 * Tarping - Cover Page for Tarping adaptation method
 * 
 **/

//import React, { useState } from 'react';
import { Alert, Card, Row, Col, Nav, Navbar, ListGroup, Tab} from 'react-bootstrap';
import FormController from './../calc/FormController';
import ExternalLink from './../other/ExternalLink';
import Acknowledgements from '../other/Acknowledgements';
import ImageController from './../viz/ImageController';
import Resource from './../other/Resource';

import thumbnail from './../images/tarping/pdf_thumbnail.jpg'
import cover from './../images/tarping/cover/IMG_3500.png';

const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources", "Acknowledgements"]; 


function Tarping(props) {





	return (
		<>

          <div className="parallax py-5 h-100 d-flex position-relative align-items-center justify-content-center" style={{ backgroundImage: `url(${cover})` }}>
              <div className="py-3 w-100" style={{'backgroundColor': 'rgb(255,255,255,0.7)'}}>
                    <Row className="d-block px-4">
                    <Card.Title className="display-4">
                      Tarping in Cover Crop Mulch and Conservation Tillage Systems
                    </Card.Title>
                    </Row>
                    <Row className="d-block">
                    {/*<h3 className="text-center">How Can Northeast Agriculture Adapt?</h3>*/}
                    </Row>
              </div>
          </div>
          <p className="small mt-0 mb-5 text-center">Tarping at the University of Vermont Horticulture Research and Education Center,
            Photo Credit: Stephanie Hurley</p>
        <Row>


        <Col xs={0} lg={2} className="px-0">
        <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto d-inline-block">

        <Nav id="sectionnav" className="mx-auto mb-5">
        {navs.map((d, idx) => (

            <a key={"navItem#"+idx} href={"#a" + idx} className="text-decoration-none">
                <Nav.Link as={Card.Title} className="font-weight-light">
                <p className="my-0 py-0">{d}</p>
                </Nav.Link>
            </a>

            ))}
        </Nav>

        <Resource format={"Download this practice brief"} view download
    thumbnail
    date={"March 2022"}
    link={"/resources/briefs/Tarping 3.2.22 website.pdf"}
    description={thumbnail} />

        </Navbar>
        </Col>
        <Col xs={12} md={12} lg={8}>


        
        <h1 id="a0" className='display-4'>Overview</h1>
        <hr/>


        <Row className="d-block">


       <p>
            Tarping is the practice of applying reusable tarps to the soil surface and removing them prior to planting to manage or terminate weeds, crops, and cover crops. Tarping can facilitate the transition between cash crops with minimal to no soil disturbance. The use of tarps to terminate cover crops in no-till and reduced tillage systems allows farms to achieve the benefits of integrating soil-building practices without specialized equipment or the application of herbicides. Given the logistical challenges of moving, securing, and storing the tarps, they are typically used on small farm operations of less than 5 acres.
       </p>

       <p>
            Tarping offers numerous climate change adaptation benefits. When used in conjunction with reduced or no-tillage and cover crops, tarping can build soil health, improve water holding capacity, increase infiltration, and reduce erosion and surface runoff. Mulch from cover crop residue can further enhance these effects, while also conserving soil moisture and regulating soil temperatures. Tarps themselves can be used as a moisture management tool during wet periods to prevent soils from becoming saturated and during dry periods to prevent evaporative losses. Additionally, tarps may reduce or eliminate the need to use equipment for tillage, which can be helpful in rainy and wet periods when the soil is too wet to work. This affords farmers more flexibility with respect to the timing of cover crops and plant termination, which is increasingly important in a more variable climate.
       </p>



        <hr/>
        <Card.Title className="text-center" id="2">General Logistics of Tarping</Card.Title>
        <hr/>
        
        <p>
            Tarps of varying thickness, material, permeability, durability, and size can be used for this practice, including landscaping fabric, billboard (not currently allowed under USDA organic standards) and silage tarps, with a lifespan ranging from 2-8 years. A commonly available silage tarp is 5mil thick and 32ft wide by 100 ft long. Sandbags and cinder blocks are often used to secure tarps and prevent the tarp from blowing loose and becoming a hazard to equipment, animals, and people. At least two people are generally needed to apply, remove, and store tarps, though this may vary depending on tarp and field size as well as weather conditions. 
        </p>

        <p>
            The use of tarping in cover crop and conservation tillage systems is a flexible multi-step process. Integrating the use of cover crops with tarps requires an even stand of cover crops with high biomass. The crop should be laid down before applying the tarp. Rolling is the best method for doing this, as it avoids creating stubble that can poke holes in the tarp as would be the case with mowing. An example of this application of tarping, best suited to transplanted crops, is shown below.
        </p>


</Row>

<hr className="mt-5"/>
<Card.Title>Costs and Benefits of Using Tarping in Cover Crop Mulch and Conservation Tillage Systems</Card.Title>
<hr/>

<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup>
<ListGroup.Item variant="success">Benefits</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Eliminates the need for herbicides and/or specialized equipment like a roller-crimper</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Provides flexibility in the timing of cover crop termination</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Augments the weed suppression provided by cover crop residue</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Increases cover crop biomass which may support long-term soil health goals, like protecting soil organic matter and building soil structure. Supporting soil health can also improve water holding capacity</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Eliminates the need for field passes (especially beneficial when soils are too wet to operate equipment)</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Reduces soil erosion</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Supports use of overwintering cover crops, some of which (i.e., hairy vetch, not pictured here) may add valuable nitrogen and reduce future need for fertilizer</ListGroup.Item> 

</ListGroup>
</Col>
<Col>      
<ListGroup>
<ListGroup.Item variant="danger">Costs</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Logistical challenges associated with handling tarps, including moving, securing, and storing tarps</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Scale-limited due to above challenges</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Ecological footprint of tarp material manufacturing</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Concerns associated with the disposal of plastic once it is no longer fit for use</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Concerns regarding release of microplastics into soil as tarps wear over time</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Loose tarps can become a hazard to farm equipment, animals, and people</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Pooling of water on and around edges of tarp</ListGroup.Item>
<ListGroup.Item variant="light" action href="">May create habitat for rodents, increasing this pest population and predators such as snakes, as well as potentially leading to crop damage</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Reusing tarps may introduce soil-borne diseases into uninfected fields if moving from an infected field</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Labor issues with managing weeds that emerge in mulch</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Potential yield reductions associated with limited nitrogen available for nitrogen demanding vegetable crops</ListGroup.Item>
</ListGroup>
</Col>
</Row>
</Tab.Container>



{/* Tabbed view of method variants */}

<hr/>
<Card.Title className='display-4' id="a1">Visualizations</Card.Title>
<hr/>


<Alert variant={"success"}>
	<p>
	These visualizations are designed to help the viewer picture how the implementation of 
	silvopasture appears in the context of a real New England farm. These images depict the 
	different stages of practice implementation and help the viewer anticipate how silvopasture 
	will appear over time and what implications it may have for the farm. 
    <cite> To use these images, please request permission from Stephanie Hurley (stephanie.hurley@uvm.edu).</cite></p>
</Alert>


<p>The use of tarping in cover crop mulch and conservation tillage systems is a flexible multi-step process. One example of this is shown below.</p>



{/* VISUALIZATIONS */}
<ImageController variant="tarping" />






<hr/>
<Card.Title className='display-4' id="a2">Tarping Economic Tool</Card.Title>
<hr/>
{/* Calculator */}
<FormController variant={"tarping"} />





<hr/>
<Card.Title className='display-4' id="a3">Additional Resources</Card.Title>
<hr/>

<Card.Title className="my-3">Guides, Factsheets, Other</Card.Title>

<ExternalLink link={"https://extension.umaine.edu/publications/1075e/"} label={"Tarping in the Northeast: A Guide for Small Farms, University of Maine Cooperative Extension, 2022, Natalie Lounsbury, Sonja Birthisel, Jason Lilley, Ryan Maher"} />
<ExternalLink link={"https://smallfarms.cornell.edu/projects/reduced-tillage/tarping/"} label={"Manage Weeds With Tarping, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, July 15, 2019, Ryan Maher"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2019/01/reusable-black-tarps-suppress-weeds-and-make-organic-reduced-tillage-more-viable"} label={"Reusable Black Tarps Suppress Weeds and Make Organic Reduced Tillage More Viable, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, January 14, 2019, Haley Rylander"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2018/04/take-me-out-to-a-tarped-field-needs-sidebar/"} label={"Take Me Out to a Tarped Field, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, April 6, 2018, Ryan Maher"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2016/10/small-scale-no-till-vegetables-at-seeds-of-solidarity-farm/"} label={"Small Scale No-Till Vegetables at Seeds of Solidarity Farm, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, October 3, 2016, Brian Caldwell and Ryan Maher"} />
<ExternalLink link={"https://projects.sare.org/wp-content/uploads/CC_Fact_Sheet_Vegetables_Northern_NE.pdf"} label={"Cover Cropping on Vegetable Farms in Northern New England, UVM Extension"} />

<Card.Title className="my-3">Videos</Card.Title>


<ExternalLink link={"https://www.youtube.com/watch?v=RgP9W44G5cE&t=16s"} label={"Silage Tarps to Reduce Tillage on Small Farms: Farmer Experiences, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, Dec 20, 2018 "} />
<ExternalLink link={"https://www.youtube.com/watch?v=sWDxJhFlGE4"} label={"No-till and Cover Crops in Vegetable Systems with Natalie Lounsbury, Recorded Webinar, April 6, 2020"} />
<ExternalLink link={"https://mediaspace.msu.edu/media/CallingAllFarmersMarch092017/1_xgvmbzio"} label={"Reduced Tillage on Permanent Beds, Webinar in “Reduced Tillage Webinar Series” hosted by Cornell RT, Michigan State University, and the University of Maine. Ryan Maher and Brian Caldwell, Cornell University, Mark Hutton, University of Maine, Thursday, March 9, 2017."} />


<Card.Title className="my-3">Research</Card.Title>

<ExternalLink link={"https://doi.org/10.1017/S1742170518000509"} second_link={"https://drive.google.com/file/d/1QBRS64azOPJ8QousMgVRGOSnN5YWlDr1/view?usp=sharing"} label={"Lounsbury NP, Warren ND, Wolfe SD, Smith RG (2018). Investigating tarps to facilitate organic no-till cabbage production with high-residue cover crops. Renewable Agriculture and Food Systems1–7."} />

<Card.Title className="my-3">Books</Card.Title>

<ExternalLink link={""} label={"Mays, Daniel. The No-Till Organic Vegetable Farm: How to Start and Run a Profitable Market Garden That Builds Health in Soil, Crops, and Communities. Storey Publishing, LLC. November 10, 2020. ISBN-10: 1635861896."} />





<div id="a4">
        <Acknowledgements
            //authors="Carolyn Hricko, Meredith Niles, Adam Daigneault, Stephanie Hurley, Sonja Birthisel"
            team={[["Principal Investigator", "Meredith Niles"], 
            ["Co-Principal Investigators", "Dr. Adam Daigneault, Dr. Nick Cheney, Dr. Joshua Faulkner, Dr. Eric Gallandt, Dr. Stephanie Hurley, Dr. Rachel Schattman"],
            ["Additional Team Members", "Dr. Sonja Birthisel, Dr. Bradford Demarest, Tim Harrold, Beth Holtzman, Carolyn Hricko, Erin Lane, Ruthie Clements, Devon Johnson, Thomas Wentworth"]]}
            external={["Natalie Lounsbury, PhD, Postdoctoral Research Associate, University of New Hampshire Department of Agriculture, Nutrition, and Food Systems", "Ryan Maher, Research and Extension Specialist, Cornell Small Farms Program, Cornell University"]}
        />
    </div>

</Col>

</Row>

</>
)
}

export default Tarping;
