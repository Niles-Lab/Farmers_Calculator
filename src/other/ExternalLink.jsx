import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsBoxArrowUpRight } from "react-icons/bs";

function ExternalLink(props) {


	return (

        <>
        <Row className="d-flex justify-content-start mx-5 px-5">

          <Col xs={props.link ? 11 : 12} className="pl-5 text-justify d-flex justify-content-start">
            {props.label}
          </Col>
          <Col xs={1}>
            {props.link &&
            <a className="mx-auto" target="_blank" rel="noreferrer" href={props.link}>
               <BsBoxArrowUpRight />
            </a>
            }

          </Col>
        </Row>
        <hr className="mx-auto w-75" />
        </>





		)
}

export default ExternalLink;
