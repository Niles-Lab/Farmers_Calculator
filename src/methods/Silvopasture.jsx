/**
 * 
 * Silvopasture - Cover Page for Silvopasture adaptation method
 * 
 **/

 import React from 'react';
 import { Card, Row, Col, Nav, Navbar, Alert, ListGroup, Tab } from 'react-bootstrap';

 import FormController from './../calc/FormController';
 import ExternalLink from './../other/ExternalLink';
 import Acknowledgements from '../other/Acknowledgements';
 import ImageController from './../viz/ImageController';
 import Resource from './../other/Resource';

 import cover from './../images/silvopasture/cover/cover2.JPG';
 import thumbnail from './../images/silvopasture/pdf_thumbnail.jpg'

 const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources", "Acknowledgements"]; 


function Silvopasture(props) {




	return (
		<>

          <div className="parallax py-5 h-100 d-flex position-relative align-items-center justify-content-center" style={{ backgroundImage: `url(${cover})` }}>
              <div className="py-3 w-100" style={{'backgroundColor': 'rgb(255,255,255,0.7)'}}>
                    <Row className="d-block px-4">
                    <Card.Title className="display-4">
                      Silvopasture
                    </Card.Title>
                    </Row>
                    <Row className="d-block">
                    {/*<h3 className="text-center">How Can Northeast Agriculture Adapt?</h3>*/}
                    </Row>
              </div>
          </div>
          <p className="small mt-0 mb-5 text-center">Early Fall Silvopasture,
        Photo Credit: Brett Chedzoy </p>


		<Row>


		<Col xs={0} md={2} className="px-0">
		<Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto d-inline-block">

		<Nav id="sectionnav" className="mx-auto">
		{navs.map((d, idx) => (

            <a key={"navItem#"+idx} href={"#a" + idx} className="text-decoration-none">
                <Nav.Link as={Card.Title} className="font-weight-light">
                {d}
                </Nav.Link>
            </a>

			))}
		</Nav>

		</Navbar>
		</Col>
		<Col xs={12} md={10} lg={8}>

		<h1 id="a0" className='display-4'>Overview</h1>
                <hr/>

{/*
		<hr/>
			<h2 id="a0">Silvopasture</h2>
		<hr/>

		<Image
		rounded
		className="d-block w-100 mb-4"
		src={pe[1][1].default} 
		/>*/}

		<Row className="mt-5">

		<p>
		Silvopasture is an agroforestry system that intentionally combines trees, forage, and 
		pastures to generate both livestock and forest products on the same unit of land. 
		Silvopasture systems are diverse and varied and can be designed to meet farmers’ unique 
		goals and complement existing and desired farm characteristics. Silvopasture can be 
		incorporated into farm systems that have numerous types of land use, including open 
		pastures, woodlands, and orchards. This brief focuses on pasture enrichment, which 
		involves adding trees into existing pasture area and is eligible for federal cost-share
		 programs. Silvopasture may also take other forms, such as forest thinning in which 
		 trees are thinned in uniform, patch, or irregular patterns, and pasture forage species 
		 are seeded. Converting an existing forest to silvopasture may involve natural resource
		  concerns, so farmers interested in this option should consider trade-offs, ensure proper 
		  planning and design, and consult with silvopasture experts and foresters to ensure success
		   and compliance with local regulations. 
		</p>

		<br />

		<p>
		Silvopasture offers numerous climate change adaptation benefits that address challenges such
		 as increased frequency and severity of weather extremes (i.e. drought, heat, and heavy rains).
		  Pasture enrichment with trees provides shade and protection for livestock, may enhance carbon
		   sequestration, and can improve water filtration and retention. Skilled and active management
		    of enriched pastures together with sound livestock husbandry are essential to achieving a 
			sustainable and successful silvopasture system. Experience with and knowledge of rotational
			 grazing systems form a strong foundation for skilled management of silvopasture systems. 
			 Without proper management, farms using silvopasture may experience issues with soil 
			 degradation and compaction, decreased water retention and quality, and damage to tree 
			 roots, bark, and branches. 
		</p>

		</Row>

		<Row>
		<Col xs={12} md={6}>







</Col>
{/*<Col xs={12} md={6}>

<Image
className="d-block w-100 mb-4"
src={pe[0][1].default} 

/>

</Col>*/}
</Row>




<hr/>
<Card.Title>Common Components of Silvopasture</Card.Title>
<hr/>

<Alert variant={'info'} className="px-5 mx-5 mb-0">
Components of Northeast silvopasture systems may include but are not limited to:
</Alert>

<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="info">Tree Species</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Oaks</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Maples</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fruit Trees</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Eastern White Pine</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Hickories</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Commercial Nut Trees</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Black Locust</ListGroup.Item>  


</ListGroup>
</Col>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="success">Tree Products</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Firewood</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Sawtimber</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fence Posts</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Scion Wood</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fruit</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Nuts</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Maple Sap</ListGroup.Item> 

</ListGroup>
</Col>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="danger">Livestock Species</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Cattle (beef, dairy)</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Goats (meat, dairy)</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Pigs</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Sheep (meat, fiber)</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Chicken (meat, eggs)</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Turkeys</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Horses</ListGroup.Item>  


</ListGroup>
</Col>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="secondary">Forages</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Red Clover</ListGroup.Item>
<ListGroup.Item variant="light" action href="">White Clover</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Orchardgrass</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Bentgrasses</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Bluegrasses</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Fescues</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Timothy</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Ryegrasses</ListGroup.Item>  

</ListGroup>
</Col>
</Row>
</Tab.Container>

<hr/>
<Card.Title>Silvopasture Adoption Costs and Benefits</Card.Title>
<hr/>

<Alert variant={'info'} className="px-5 mx-5 mb-0">
Carefully consider trade-offs before installing silvopasture systems. It may not be possible to realize all or even some of these potential benefits, though potential challenges may be mitigated through management and/or silvopasture system design. 

</Alert>


<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="success">Potential Benefits</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Improved animal performance through greater comfort with shelter and shade</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Improved animal health through diversified diets</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Diversified farm products and income</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Balancing of seasonal forage growth and increased forage availability during droughts</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Cost-effective vegetation control</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Creation of wildlife habitat</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved soil health</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved water retention and quality</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Carbon sequestration</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Beneficial farm aesthetics</ListGroup.Item>   
</ListGroup>
</Col>
<Col>      
<ListGroup className="my-3">
<ListGroup.Item variant="danger">Potential Costs</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Livestock exposure to toxic plants, predators, parasites, diseases, physical hazards</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Silvopasture establishment and maintenance costs, time, and labor</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Managers’ lack of silvopasture management experience and knowledge</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Depending on silvopasture design, farm equipment mobility in grazing areas may be reduced or hindered</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Implementation of silvopasture may impact farms’ Current Use designation and enrollment</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Reduced ability to harvest and dry hay in pasture areas</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Possible reduction in total forage yield, depending on amount of shade from trees</ListGroup.Item>  

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

{/* Visualizations */}
<ImageController variant="silvopasture" />



<hr/>
<Card.Title className='display-4' id="a2">Silvopasture Economic Tool</Card.Title>
<hr/>

{/* Calculator */}

<FormController variant={"silvopasture"} />


<hr/>
<Card.Title className='display-4' id="a3">Additional Resources</Card.Title>
<hr/>




<Card.Title className="my-3 pt-4">Virtual Tours and Videos</Card.Title>

<ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/project/agroforestry-angus-glen"} label={"Agroforestry Angus Glen Farms, NY (USDA Northeast Climate Hub)"} /> 
<ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/project/dickinson-college-farms-silvopasture"} label={"Dickinson College’s Farm Silvopasture PA (USDA Northeast Climate Hub)"} />





<Card.Title className="my-3">Factsheets, Guides, Overviews</Card.Title>

<ExternalLink link={"https://blogs.cornell.edu/ccednrpublications/agroforestry-silvopasture/"} label={"A comprehensive collection of silvopasture resources (including economic case studies, powerpoint presentations, workbooks, frameworks for silvopasture planning and implementation, guides, and factsheets) compiled by Cornell Cooperative Extension in the Department of Natural Resources"} />
<ExternalLink link={"https://cpb-us-w2.wpmucdn.com/www.paulsmiths.edu/dist/e/71/files/2016/06/Photo-Guide-to-Northeastern-United-States-Silvopasture-1lmctmt.pdf"} label={"Photo Guide to Northeastern United States Silvopasture (Orefice, Carroll, & Ketner, June 6, 2016)"} />
<ExternalLink link={"http://nmsp.cals.cornell.edu/publications/factsheets/factsheet17.pdf"} label={"Nutrient Management for Pastures (Cornell University Cooperative Extension)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/workingtrees/infosheets/WTInfoSheet-AdaptRainIntensity.pdf"} label={"Working Trees Info: How Can Agroforestry Help Landowners Adapt to Increased Rain Intensity? (USDA National Agroforestry Center)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/workingtrees/infosheets/AgroforestryIncomeOpps08212012.pdf"} label={"Working Trees Info: What Are Agroforestry’s Income Opportunities? (USDA National Agroforestry Center)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/workingtrees/infosheets/HeatStressCattleInfoSheetMay2013.pdf"} label={"Working Trees Info: Mitigating Heat Stress in Cattle (USDA National Agroforestry Center)"} />
<ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/topic/how-can-agroforestry-support-climate-change-mitigation-northeast"} label={"How can Agroforestry support mitigation of climate change? (USDA Northeast Climate Hub)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an46si09.pdf"} label={"Agroforestry Notes: Forest Grazing, Silvopasture, and Turning Livestock into the Woods (USDA National Agroforestry Center, August 2014)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/agroforestrynotes/an29s07.pdf"} label={"Agroforestry Notes: Silvopasture Water and Fencing Systems for Cattle (USDA National Agroforestry Center, February 2005)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/workingtrees/brochures/wts.pdf"} label={"Silvopasture: An Agroforestry Practice (USDA National Agroforestry Center)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/topics/water-quality.php"} label={"Water Quality (USDA National Agroforestry Center)"} />
<ExternalLink link={"https://www.fs.usda.gov/nac/assets/documents/workingtrees/infosheets/WTInfoSheet-CarbonSequestration.pdf"} label={"Working Trees: How can agroforestry increase carbon sequestration? (USDA National Agroforestry Center, April 2021)"} />

<Card.Title className="my-3">Other</Card.Title>

<ExternalLink link={"https://www.aftaweb.org/about/afta.html"} label={"Association for Temperate Agroforestry (association promoting the wider adoption of agroforestry by landowners in temperate regions of North America)"} />
<ExternalLink link={"https://www.capitalrcd.org/nema-about-us.html"} label={"Northeast/Mid-Atlantic Agroforestry (NEMA) Working Group (network of researchers, technical service providers, agency staff, farmers and producers focused on educating, promoting and implementing agroforestry systems in the region)"} />
<ExternalLink link={"http://silvopasture.ning.com/"} label={"Silvopasture Ning Network (online forum and blog for silvopasture practitioners, advisors, and others)"} />
<ExternalLink link={"/resources/smith_etal.pdf"} label={"Silvopasture in the USA: A systematic review of natural resource professional and producer-reported benefits, challenges, and management activities (Smith, M. M., Bentrup, G., Kellerman, T., MacFarland, K., Straight, R., Ameyaw, L., & Stein, S. 2022. Agriculture, Ecosystems & Environment, 326, 107818.)"} />


<Resource format={"Download this practice brief"} download
					thumbnail
                    date={"March 2022"}
                    link={"/resources/briefs/Silvopasture 3.2.22 website.pdf"}
                    description={thumbnail} />


<div id="a4">
        <Acknowledgements
            //authors="Carolyn Hricko, Meredith Niles, Adam Daigneault, Joshua Faulkner, Stephanie Hurley"
            team={[["Principal Investigator", "Meredith Niles"], 
            ["Co-Principal Investigators", "Dr. Adam Daigneault, Dr. Nick Cheney, Dr. Joshua Faulkner, Dr. Eric Gallandt, Dr. Stephanie Hurley, Dr. Rachel Schattman"],
            ["Additional Team Members", "Dr. Sonja Birthisel, Dr. Bradford Demarest, Tim Harrold, Beth Holtzman, Carolyn Hricko, Erin Lane, Ruthie Clements, Devon Johnson, Thomas Wentworth"]]}
            external={["Joe Orefice, PhD, Lecturer and Director of Forest & Agricultural Operations, The Forest School at Yale School of the Environment", "Brett Chedzoy, Senior Resource Educator, Cornell Cooperative Extension of Schuyler County", "Kate MacFarland, Agroforester, USDA National Agroforestry Center", "Juan P. Alvez, Ph.D., Research Associate Faculty, University of Vermont Extension, Center for Sustainable Agriculture"]}
        />
    </div>


</Col>
<Col xs={0} lg={2}>

</Col>

</Row>

</>
)
}

export default Silvopasture;
