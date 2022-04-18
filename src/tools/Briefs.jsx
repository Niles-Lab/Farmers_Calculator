import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Resource from '../other/Resource.jsx';


import sp_thumbnail from './../images/silvopasture/pdf_thumbnail.jpg'
import ig_thumbnail from './../images/irrigation/pdf_thumbnail.jpg'
import tp_thumbnail from './../images/tarping/pdf_thumbnail.jpg'




const Briefs = (props) => {


return (


<Container fluid >

<Row>
<Col xs={12} md={1} lg={2}>
</Col>
<Col xs={12} md={10} lg={8}>
  <hr/>
    <h2 className='display-4'>Briefs</h2>
  <hr/>




</Col>
<Col xs={0} md={1} lg={2}>
</Col>
</Row>



<Row>
<Col xs={0} md={10} lg={2}>

  


</Col>
<Col xs={12} md={10} lg={8}>


        <Row>

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


</Col>
<Col xs={0} md={10} lg={2}>
</Col>
</Row>




</Container>

);
}
export default Briefs;