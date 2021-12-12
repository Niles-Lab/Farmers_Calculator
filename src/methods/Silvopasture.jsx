/**
 * 
 * Silvopasture - Cover Page for Silvopasture adaptation method
 * 
 **/

 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Card, Row, Col, Container, Nav, Navbar, Alert, ListGroup, Tab, Image } from 'react-bootstrap';
 import { BsBoxArrowUpRight } from "react-icons/bs";
 import FormController from './../calc/FormController';
 import ImageSlider from './../viz/ImageSlider';
 import ExternalLink from './../other/ExternalLink';

 const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources"]; 

 function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Silvopasture Cover Image(s)
const sp = importAll(require.context('./../images/silvopasture/sp', false, /\.(png|jpe?g|svg)$/));

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

// Groups and labels for ImageSlider
const groups = [pe,av1,pe2,av2];
const labels = ["Pasture Enrichment 1", "Aerial View", "Pasture Enrichment 2", "Aerial View"];
// let lbls = {"Irrigation": ["Step One", "Step Two", "Step Three"],
// "Ponds": ["Ex One", "Ex Two", "Ex Three"], "ABCD": ["ab", "test"]}
let lbls = [
["Step One", "Step Two", "Step Three"],
["Ex One", "Ex Two", "Ex Three"],
["abdffffffffffffffffffffffffffffffffffffffffff", "test"],
["abc","asfse","fakjsf"]
];


function Silvopasture(props) {




	return (
		<>
		<Row>


		<Col xs={2}>
		<Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">
		<Navbar.Collapse id="responsive-navbar-nav">
		<Nav id="sectionnav" className="mx-auto">
		{navs.map((d, idx) => (
			<Nav.Link key={d+idx} href={"#a" + idx}>
			{d}
			</Nav.Link>
			))}
		</Nav>
		</Navbar.Collapse>
		</Navbar>
		</Col>
		<Col xs={10} lg={8}>


		<Card id="a0">

		<Card.Body>


		<hr/>
		<Card.Title id="2">Silvopasture</Card.Title>
		<hr/>
		<Alert variant={'info'} className="mx-4">

		Silvopasture is an agroforestry system that combines well-managed woodlands and pastures to generate both livestock and forest 
		products on the same parcel of land. Silvopasture systems are diverse and varied and can be designed to meet farmers’ unique
		goals and complement existing and desired farm characteristics. This brief focuses on pasture enrichment, which involves adding
		trees into the pasture area and is eligible for federal cost-share programs. Silvopasture may also take other forms, such as 
		forest conversion in which trees are thinned in uniform, patch, or irregular patterns, and pasture species are seeded, though
		farmers should investigate this option with a forester to ensure compliance with current use designations.   


		</Alert>


		<Row>
		<Col xs={12} md={6}>
	{/*                <Alert variant={'info'}>*/}
	Silvopasture offers numerous climate change adaptation benefits that address challenges such as 
	increased frequency and severity of weather extremes (i.e. drought, heat, and heavy rains).
	Pasture enrichment provides shade and protection for livestock, may 
	enhance carbon sequestration, and can improve water filtration and retention. Skilled and 
	active management of enriched pastures together with sound livestock husbandry are essential
	to achieving a sustainable and successful silvopasture system.
{/*               </Alert>*/}
<br/><br/>

{/*<Alert variant={'danger'}>*/}

<br/><br/>
Skilled and active management of pasture and woodland together with sound livestock
husbandry are essential to achieving a sustainable and successful silvopasture system.
{/*</Alert>*/}







</Col>
<Col xs={12} md={6}>

<Image
className="d-block w-100 mb-4"
src={pe[0][1].default} 

/>

</Col>
</Row>
</Card.Body>

</Card>






<Card variant="light" bg="light">

<hr/>
<Card.Title>Common Components of Silvopasture</Card.Title>
<hr/>

<Alert variant={'info'} className="px-5 mx-5 mb-0">
Components of Northeast Silvopasture systems may include but are not limited to these elements
</Alert>

<Card.Body>
<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup>
<ListGroup.Item variant="info">Tree Species</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Oaks</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Maples</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fruit Trees</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Eastern White Pine</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Hickories</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Eastern Hemlock</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Commercial Nut Trees</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Black Locust</ListGroup.Item>  


</ListGroup>
</Col>
<Col>      
<ListGroup>
<ListGroup.Item variant="success">Forest Products</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Firewood</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Sawtimber</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fence Posts</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Scion Wood</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fruit</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Nuts</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Maple Sap</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Tree Nursery</ListGroup.Item>

</ListGroup>
</Col>
<Col>      
<ListGroup>
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
<ListGroup>
<ListGroup.Item variant="secondary">Forages</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Red Clover</ListGroup.Item>
<ListGroup.Item variant="light" action href="">White Clover</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Orchardgrass</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Bentgrasses</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Fescues</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Timothy</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Ryegrasses</ListGroup.Item>  

</ListGroup>
</Col>
</Row>
</Tab.Container>
</Card.Body>  
</Card>


{/* Tabbed view of method variants */}
<Card id="a1">
<hr/>
<Card.Title id="2">Visualizations</Card.Title>
<hr/>
<Card.Body>
{groups.map((e,idz) => (
	
	<>
	
	<ImageSlider key={e+idz} groups={e} lbls={lbls[idz]} labels={labels} />

	</>

	))}

</Card.Body>

</Card>  
<Card variant="light" bg="light">

<hr/>
<Card.Title>Benefits and Costs</Card.Title>
<hr/>

<Alert variant={'info'} className="px-5 mx-5 mb-0">
Before installing silvopasture systems, trade-offs 
should be carefully considered. It may not be possible to realize
all or even some of these potential benefits, while potential 
challenges may be mitigated through management and/or 
silvopasture system design. 

</Alert>

<Card.Body>
<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup>
<ListGroup.Item variant="success">Benefits</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Increased stocking capacity (when expanding grazing into wooded areas)</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Increased utilization of woodland</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Cost-effective vegetation control</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Diversified farm products and income</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Improved animal performance through greater comfort with shelter and shade</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved animal health through diversified diets</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Balancing of seasonal forage growth and increased forage availability during droughts</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Creation of high-value wildlife habitat</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved tree health and performance</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved soil health</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Improved water retention and quality</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Carbon sequestration</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Beneficial farm aesthetics</ListGroup.Item>   
</ListGroup>
</Col>
<Col>      
<ListGroup>
<ListGroup.Item variant="danger">Costs</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Livestock exposure to toxic plants, predators, parasites, diseases, physical hazards, hunters</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Silvopasture establishment and maintenance costs, time, and labor</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Managers’ lack of silvopasture management experience and knowledge </ListGroup.Item>
<ListGroup.Item variant="light" action href="">Reduced mobility of farm equipment in grazing areas</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Undesirable vegetation, including invasive plants</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Soil degradation and compaction</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Decreased water retention and qualitys</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Carbon release</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Damage to tree roots, bark, and branches</ListGroup.Item>  
<ListGroup.Item variant="light" action href="">Implementation of silvopasture may impact farms’ Current Use designation and enrollment</ListGroup.Item>  
</ListGroup>
</Col>
</Row>
</Tab.Container>
</Card.Body>  
</Card>



<hr/>
<Card.Title id="a2">Silvopasture Economic Tool</Card.Title>
<hr/>


{/* Calculator */}
<FormController />


<hr/>
<Card.Title id="a3">Additional Resources</Card.Title>
<hr/>


<Card variant="light" bg="light">   

<Card.Title className="my-3">Virtual Tour and Videos</Card.Title>

<ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/project/agroforestry-angus-glen"} label={"Agroforestry Angus Glen Farms, NY (USDA Northeast Climate Hub)"} /> 
<ExternalLink link={"https://www.climatehubs.usda.gov/hubs/northeast/project/dickinson-college-farms-silvopasture"} label={"Dickinson College’s Farm Silvopasture PA (USDA Northeast Climate Hub)"} />



<Card.Title className="my-3">Other</Card.Title>

<ExternalLink link={"https://www.aftaweb.org/about/afta.html"} label={"Association for Temperate Agroforestry (association promoting the wider adoption of agroforestry by landowners in temperate regions of North America)"} />
<ExternalLink link={"https://www.capitalrcd.org/nema-about-us.html"} label={"Northeast/Mid-Atlantic Agroforestry (NEMA) Working Group"} />


<Card.Title className="my-3">Factsheets, Guides, Overviews</Card.Title>

<ExternalLink link={"https://blogs.cornell.edu/ccednrpublications/agroforestry-silvopasture/"} label={"A comprehensive collection of silvopasture resources (including economic case studies, powerpoint presentations, workbooks, frameworks for silvopasture planning and implementation, guides, and factsheets) compiled by Cornell Cooperative Extension in the Department of Natural Resources can be found here."} />
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


</Card>

</Col>
<Col xs={0} lg={2}>

</Col>
</Row>

</>
)
}

export default Silvopasture;
