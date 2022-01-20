/**
 * 
 * Tarping - Cover Page for Tarping adaptation method
 * 
 **/

//import React, { useState } from 'react';
import { Alert, Card, Row, Col, Nav, Navbar, ListGroup, Tab, Image} from 'react-bootstrap';
import FormController from './../calc/FormController';
import ImageSlider from './../viz/ImageSlider';
import ExternalLink from './../other/ExternalLink';


const navs = ["Overview", "Visualizations", "Economic Tool", "Additional Resources"]; 

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}

// Tarping image slides
const tp = importAll(require.context('../images/tarping/', false, /\.(png|jpe?g|svg)$/));

// Tarping cover image is just the first from our one set
const sp = importAll(require.context('../images/tarping/cover', false, /\.(png|jpe?g|svg)$/));

// Collection of elements for ImageSlider
let groups = [tp];

const titles = ["Tarping in cover crop and conservation tillage systems"];
let lbls = [
["Late August/Early September: plant perennial rye cover crop",
"June: Roll down rye using either a lawn roller or a tractor driven roller crimper",
"June: Place tarps, secure with sand bags",
"June: Remove tarps after two weeks. Plant cash crop of brassica starts",
"August/September: Harvest crops, plant cover crop"]
];


function Tarping(props) {





	return (
		<>

          <div id="a0" className="parallax py-5 h-100 d-flex position-relative align-items-center justify-content-center" style={{ backgroundImage: `url(${sp[0][1].default})` }}>
              <div className="py-3 w-100" style={{'backgroundColor': 'rgb(255,255,255,0.7)'}}>
                    <Row className="d-block">
                    <Card.Title className="display-4">
                      Tarping
                    </Card.Title>
                    </Row>
                    <Row className="d-block">
                    {/*<h3 className="text-center">How Can Northeast Agriculture Adapt?</h3>*/}
                    </Row>
              </div>
          </div>

        <Row>


        <Col xs={0} md={2}>
        <Navbar style={{zIndex: 1}} sticky="top" collapseOnSelect expand="sm" variant="light" className="mx-auto">

        <Nav id="sectionnav" className="mx-auto">
        {navs.map((d, idx) => (

            <a href={"#a" + idx} className="text-decoration-none">
                <Nav.Link as={Card.Title} className="font-weight-light">
                {d}
                </Nav.Link>
            </a>

            ))}
        </Nav>

        </Navbar>
        </Col>
        <Col xs={10} lg={8}>






{/*        <hr/>
        <h2 id="a0">Tarping</h2>
        <hr/>

        <Image
        rounded
        className="d-block w-100"
        src={sp[0][1].default} 
        />*/}

        <p className="small mt-0 mb-5 text-center">Tarping at the University of Vermont Horticulture Research and Education Center,
        Photo Credit: Stephanie Hurley</p>



        <Row className="d-block">


        <p>
        Tarping is the practice of applying tarps to the soil surface and removing them prior to planting to manage or terminate weeds, crops, and cover crops, aiding the transition between cash crops with minimal to no soil disturbance. The use of tarps to terminate cover crops in no-till and reduced tillage systems allows farms to achieve the benefits of integrating these practices without specialized equipment or the application of herbicides. Given the logistical challenges of moving, securing, and storing the tarps, they are typically used on small farm operations of less than 5 acres.
        </p>

        <p>
        This practice offers numerous climate change adaptation benefits. Tarping can help facilitate no-till, reduced tillage, and cover cropping, all of which build soil health and improve water holding capacity. Tarping can also facilitate the use of cover crop residue as a mulch for cash crops which helps to conserve moisture, increase water infiltration, prevent surface runoff, and protect soil from erosion. 
        </p>

        <p>
        Tarping may also reduce the need to use farm equipment which can be helpful in periods of rainy and wet periods when the soil is too wet to work. The potential to eliminate use of machinery to terminate cover crops or incorporate biomass may also be beneficial in a more variable climate as it allows farmers greater flexibility in the timing of cover crop termination.
        </p>




        <hr/>
        <Card.Title className="text-center" id="2">General Logistics of Tarping</Card.Title>
        <hr/>
        

        <p>
            A variety of tarps of varying thickness, material, durability and size can be used for this practice, including landscaping fabric, billboard and silage tarps, with a lifespan ranging from 1-8 years. Sandbags and cinder blocks are often used to secure tarps and prevent the tarp from blowing loose and becoming a hazard to equipment, animals and people. At least two people are generally needed to apply, remove, and store tarps, though this may vary depending on tarp and field size as well as weather conditions. 
        </p>

        <p>
The use of tarping in cover crop and conservation tillage systems is a flexible multi-step process. One example of this is shown below. 
        </p>



</Row>

{/* Tabbed view of method variants */}

<hr/>
<Card.Title id="a1">Visualizations</Card.Title>
<hr/>


<Alert variant={"success"}>
These visualizations are designed to help the viewer picture how the implementation of a practice appears
 in the context of a real New England farm. These images depict the different stages of practice implementation
  and help the viewer anticipate how the implementation of the practice will appear over time and what implications
   it may have for the farm. Use the slider tool to progress through the images and implement the practice.
    <br/>
   <cite>To use these images, please request permission from Stephanie Hurley (stephanie.hurley@uvm.edu)</cite>
</Alert>

<Alert variant={'warning'} className="mx-4 mb-0">
The use of tarping in cover crop and conservation tillage systems is a flexible multi-step process. One example of this is shown below.
</Alert>


{groups.map((e,idz) => (
    
    <>
    
    <ImageSlider key={e+idz} groups={e} lbls={lbls[idz]} title={titles[idz]} />

    </>

    ))}





<hr className="mt-5"/>
<Card.Title>Benefits and Costs</Card.Title>
<hr/>

<Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
<Row>
<Col>      
<ListGroup>
<ListGroup.Item variant="success">Benefits</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Eliminates the need for herbicides and/or specialized equipment like a roller-crimper</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Provides flexibility in the timing of cover crop termination</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Augments the weed suppression provided by cover crop residue</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">May support long-term soil health goals, like protecting soil organic matter and building soil structure. Supporting soil health can also improve water holding capacity.</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Eliminates the need for field passes (especially beneficial when soils are too wet to operate equipment) </ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Reduces soil erosion</ListGroup.Item> 
<ListGroup.Item variant="light" action href="">Supports use of cover crops, some of which may add valuable nitrogen and reduce future need for fertilizer</ListGroup.Item> 
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
<ListGroup.Item variant="light" action href="">May create habitat for rodents, increasing this pest population and predators such as snakes</ListGroup.Item>
<ListGroup.Item variant="light" action href="">Reusing tarps may introduce soil-borne diseases into uninfected fields if moving from an infected field</ListGroup.Item>


</ListGroup>
</Col>
</Row>
</Tab.Container>



<hr/>
<Card.Title id="a2">Tarping Economic Tool</Card.Title>
<hr/>
{/* Calculator */}
<FormController variant={"tarping"} />





<hr/>
<Card.Title id="a3">Additional Resources</Card.Title>
<hr/>



<Card.Title className="my-3">Research</Card.Title>

<ExternalLink link={"https://www.cambridge.org/core/journals/renewable-agriculture-and-food-systems/article/abs/investigating-tarps-to-facilitate-organic-notill-cabbage-production-with-highresidue-cover-crops/007DC723EBB8BBF050763E36FB137FCF"} label={"Lounsbury NP, Warren ND, Wolfe SD, Smith RG (2018). Investigating tarps to facilitate organic no-till cabbage production with high-residue cover crops. Renewable Agriculture and Food Systems1–7."} />

<Card.Title className="my-3">Books</Card.Title>

<ExternalLink link={""} label={"Mays, Daniel. The No-Till Organic Vegetable Farm: How to Start and Run a Profitable Market Garden That Builds Health in Soil, Crops, and Communities. Storey Publishing, LLC. November 10, 2020. ISBN-10: 1635861896."} />

<Card.Title className="my-3">Videos</Card.Title>

<ExternalLink link={"https://www.youtube.com/watch?v=sWDxJhFlGE4"} label={"No-till and Cover Crops in Vegetable Systems with Natalie Lounsbury, Recorded Webinar, April 6, 2020"} />
<ExternalLink link={"https://mediaspace.msu.edu/media/CallingAllFarmersMarch092017/1_xgvmbzio"} label={"Reduced Tillage on Permanent Beds, Webinar in “Reduced Tillage Webinar Series” hosted by Cornell RT, Michigan State University, and the University of Maine. Ryan Maher and Brian Caldwell, Cornell University, Mark Hutton, University of Maine, Thursday, March 9, 2017. "} />
<ExternalLink link={"https://www.youtube.com/watch?v=RgP9W44G5cE&t=16s"} label={"Silage Tarps to Reduce Tillage on Small Farms: Farmer Experiences, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, Dec 20, 2018 "} />

<Card.Title className="my-3">Guides, Factsheets, Other</Card.Title>

<ExternalLink link={"https://projects.sare.org/wp-content/uploads/CC_Fact_Sheet_Vegetables_Northern_NE.pdf"} label={"Cover Cropping on Vegetable Farms in Northern New England, UVM Extension"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2019/07/manage-weeds-with-tarping"} label={"Manage Weeds With Tarping, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, July 15, 2019, Ryan Maher"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2019/01/reusable-black-tarps-suppress-weeds-and-make-organic-reduced-tillage-more-viable"} label={"Reusable Black Tarps Suppress Weeds and Make Organic Reduced Tillage More Viable, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, January 14, 2019, Haley Rylander"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2016/10/small-scale-no-till-vegetables-at-seeds-of-solidarity-farm/"} label={"Small Scale No-Till Vegetables at Seeds of Solidarity Farm, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, October 3, 2016, Claire Cekander"} />
<ExternalLink link={"https://smallfarms.cornell.edu/2018/04/take-me-out-to-a-tarped-field-needs-sidebar/"} label={"Take Me Out to a Tarped Field, Reduced Tillage in Vegetables Project, Small Farms Program, Cornell College of Agriculture and Life Sciences, April 6, 2018, Ryan Maher"} />



</Col>

</Row>

</>
)
}

export default Tarping;
