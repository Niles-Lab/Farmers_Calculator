import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsBoxArrowUpRight } from "react-icons/bs";
import Resource from "./Resource.jsx"

import sp_thumbnail from './../images/silvopasture/pdf_thumbnail.jpg'
import ig_thumbnail from './../images/irrigation/pdf_thumbnail.jpg'
import tp_thumbnail from './../images/tarping/pdf_thumbnail.jpg'

function Resources(props) {


const press = [

	//["New research project to help small farms get needed climate adaptation information resources", "https://umaine.edu/news/blog/2018/10/31/new-research-project-to-help-small-farms-get-needed-climate-adaptation-information-resources/"],
  

];

	return (
		<>



<Container fluid >
<Row>
<Col xs={0} md={2}>
</Col>

<Col xs={12} md={8}>

  <Row>


  <Col xs={12} md={12}>
  	
    <hr/>
    <h2 className='display-4'>Resources</h2>
    <hr/>
  		<hr/>

      {press.map((d,idx) => (

        <span key={"navItem#"+idx}>
        <Row>

          <Col xs={10} className="d-flex text-start">
            {d[0]}
          </Col>
          <Col xs={2}>
            <a className="d-flex align-items-center align-middle" target="_blank" rel="noreferrer" href={d[1]}>
               <BsBoxArrowUpRight />
            </a>

          </Col>


        </Row>
                <hr/>
        </span>
      ))}



  </Col>



  </Row>

    <hr/>
      <h3>Briefs</h3>
    <hr/>


  <Row>

    <Resource format={"Farmer Advisor Brief"}
      date={"December 2019"}
      link={"https://womeninag.extension.org/wp-content/uploads/2020/01/Farmer-Advisor-Mental-Models-Brief_1_2020.pdf"}
      description={"What do Northern New England Farmers Need to Adapt to Climate Change?"} />

    <Resource format={"Silvopasture Practice Brief"} download
      thumbnail
      date={"March 2022"}
      link={"/resources/briefs/Silvopasture 3.2.22 website.pdf"}
      description={sp_thumbnail} />

    <Resource format={"Irrigation Practice Brief"} download
      thumbnail
      date={"March 2022"}
      link={"/resources/briefs/Irrigation 3.2.22 website.pdf"}
      description={ig_thumbnail} />

    <Resource format={"Tarping Practice Brief"} download
        thumbnail
        date={"March 2022"}
        link={"/resources/briefs/Tarping 3.2.22 website.pdf"}
        description={tp_thumbnail} />


  </Row>


    <hr/>
      <h3>Webinars / Press</h3>
    <hr/>


  <Row>

    <Resource format={"Webinar"}
    date={"March 5 2022"}
    link={"https://www.youtube.com/watch?v=2lBbL2FFHis"}
    description={"MOFGA Spring Growth Conference - “Climate Change Adaptation Resources for Northern New England Farmers”"} />

    <Resource format={"Webinar"}
    date={"January 27 2022"}
    link={"https://www.youtube.com/watch?v=tuyCxEpqeNw&list=PLszfvPfJBpgz9xndiySWAFf9Q9rZUmNP1&index=14"}
    description={"Vermont Vegetable and Berry Growers Association - “Climate Adaptation for Vegetable Farms“"} />


    <Resource format={"Webinar"}
    date={"March 29 2022"}
    link={"https://www.youtube.com/watch?v=tuyCxEpqeNw&list=PLszfvPfJBpgz9xndiySWAFf9Q9rZUmNP1&index=14"}
    description={<><div>USDA Northeast Climate Hub</div><hr/><div>Climate Adaptation Resources for Northern New England Farmers - Part 1: Livestock Enterprises</div></>} />

    <Resource format={"Webinar"}
    date={"March 29 2022"}
    link={"https://www.youtube.com/watch?v=tuyCxEpqeNw&list=PLszfvPfJBpgz9xndiySWAFf9Q9rZUmNP1&index=14"}
    description={<><div>USDA Northeast Climate Hub</div><hr/><div>Climate Adaptation Resources for Northern New England Farmers - Part 2: Vegetable Production Systems</div></>} />



    <Resource format={"News Release"}
    date={"October 31 2018"}
    link={"https://umaine.edu/news/blog/2018/10/31/new-research-project-to-help-small-farms-get-needed-climate-adaptation-information-resources/"}
    description={"New research project to help small farms get needed climate adaptation information resources"} />


  </Row>

    <hr/>
      <h3>Research</h3>
    <hr/>


  <Row>



      <Resource format={"Academic Paper"} download
      date={"April 19 2021"}
      link={"/resources/Clements et al. - 2021 - Climate change in the context of whole-farming sys.pdf"}
      description={"Climate change in the context of whole-farming systems: opportunities for improved outreach"} />





    </Row>
    <Row>


    </Row>
    <Row>

    </Row>




</Col>
<Col xs={0} md={2}>
</Col>
</Row>

</Container>


		</>
		)
}

export default Resources;
