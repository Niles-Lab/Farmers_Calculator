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
      <h3 className='display-4'>Acknowledgements</h3>
    <hr/>


  { props.authors &&
  <>
    <p><b className="text-start">Authors:</b></p>
    
    <p>{props.authors}.</p>
  </>
  }

    <Row className='mb-0'>
      <p><b>Research Team:</b></p>
    </Row>

    <Row className='mt-0'>
    {props.team &&

      <>
              {props.team.map((d,idx) => (

                      <p><em>{d[0]}</em>: &nbsp;{d[1]}.</p>
                  
              ))}
      </>

    }
    </Row>
  <Row>
    {props.external &&
      <>
      <p><b>We thank the following contributors for their expert review of the agricultural practice materials and website:</b></p>

      {props.external.map(d => (
          <p>{d}</p>
      ))}
      </>
    }

      <Row className="w-100">

        <hr className="w-100" />
        
        <Row className="d-flex justify-content-center">
          <Col xs={12} lg={5} className="d-flex align-items-center border-right pr-3">

          <p className="font-weight-lighter" style={{"fontSize": "1em"}}><b style={{"fontSize": "2em"}} className="display-3">Visualization design<br/>and creation</b><br/>&nbsp;&nbsp;Holly Greenleaf, Greenleaf Design LLC</p>

          </Col>
          <Col xs={12} lg={7}>
          <Image
          className="w-100 d-block"
          src={greenleaf} />
          </Col>
        </Row>

        

      </Row>


  </Row>




</Container>


);
}
export default Acknowledgements;