/**
 * 
 * Custom component for the "Acknowledgement" section of each practice page
 * Four props are expected:
 *  Authors: A string list of names separated by commas expected.
 *         "Name 1, Name 2, Name 3"
 *  Team: Research Team, a nested array containing a title and list at each index.
 *          [["Leaders", "TH, MD"], ["Co-Investigators", "Meredith, Adam"]]
 *  External: Additional Reviewers in a list - "We thank the following....". An array of strings is expected.
 *          ["Bob from USDA Agricultural Outreach Team", "Jones from FBI Extension for ..."]
 * 
 * 
 */

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import greenleaf from '../images/logos/greenleaf_horizontal.png'

 function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return Object.entries(images);
}
const adlink = <a rel="noreferrer" target="_blank" href='https://forest.umaine.edu/faculty-staff/adam-daigneault/'>here.</a>;





const Acknowledgements = (props) => {

return (


<Container>


    <hr/>
      <h3>Acknowledgements</h3>
    <hr/>



    <p><b className="text-start">Authors:</b></p>
    
    <p>{props.authors}.</p>


    <Row>

    </Row>
    <p><b className="text-start">Research Team:</b></p>
    <Row>
            {props.team.map((d,idx) => (
                <>

                    <p><em>{d[0]}</em>: &nbsp;{d[1]}.</p>

                </>
                
            ))}

    </Row>

    <p><b>We thank the following contributors for their expert review of the agricultural practice materials and website:</b></p>
  <Row>
    
    {props.external.map(d => (
        <p>{d}</p>
    ))}

    {/* {acknowledged.map((d,idx) => (



      <Row key={"ackTm#"+idx} className="w-100">


        <p className="font-weight-normal mb-0">{d}</p>
        {idx < acknowledged.length-1 &&
          <hr className="w-100" />
        }
        

      </Row>

      ))} */}

      <Row className="w-100">

        <hr className="w-100" />
        
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={5} className="d-flex align-items-center border-right pr-3">

          <p className="font-weight-lighter" style={{"fontSize": "1em"}}><b style={{"fontSize": "2em"}} className="display-3">Visualization design and creation</b><br/>&nbsp;&nbsp;Holly Greenleaf, Greenleaf Design LLC</p>

          </Col>
          <Col xs={12} lg={7}>
          <Image
          className="w-100 d-block"
          src={greenleaf} />
          </Col>
        </Row>

        

      </Row>
      <p>This Material is Based Upon Work Supported by USDA/NIFA Under Award Number 2018-68006-28098. Any opinions, findings, conclusions, or recommendations expressed in this publication are those of the author(s) and do not necessarily reflect the view of the U.S. Department of Agriculture.</p>



  </Row>




</Container>


);
}
export default Acknowledgements;