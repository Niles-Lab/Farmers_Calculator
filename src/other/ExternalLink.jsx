/**
 * 
 * External link for resources per practice
 * This takes the following props:
 *  label: String label to show for resource
 * 
 *  link: URL for resource
 *  (optional) second_link: A second URL to access this resource
 *  OR
 *  download: An nested array containing download extensions and links. e.g. [["docx", "/link/to/file"], ["pdf", "/link/to/pdf"]]
 * 
 * 
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { BsDownload, BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ExternalLink(props) {

  // 1 Column per possible symbol included in this element. If this element is not centered, then symbols will take anywhere from 1/3 columns
  let symbolCol = 0;
  symbolCol += props.link ? 1 : 0;
  symbolCol += props.second_link ? 1 : 0;
  symbolCol += props.download ? 1 : 0;

	return (

    <>
      <Row className="my-2 d-flex w-100">

        <Col xs={props.center ? 7 : (12 - symbolCol)} className={(props.download || props.center) ? "d-flex justify-content-end" : "d-flex justify-content-start"}>
          <p>
            {props.label}
          </p>
        </Col>
        <Col xs={props.center ? 5 : symbolCol} className={(props.download || props.center) ? "d-flex justify-content-start" : "d-flex justify-content-end"}>
          {props.link &&
          <a className="mx-auto pr-2" target="_blank" rel="noreferrer" href={props.link}>
             <BsBoxArrowUpRight />
          </a>
          }
          {props.second_link &&
          <a className="mx-auto" target="_blank" rel="noreferrer" href={props.second_link}>
             <BsBoxArrowUpRight />
          </a>
          }

          {props.download &&

            <>
            {typeof props.download === "string" &&
            <>
              <Link to={{pathname: props.download}} download target="_blank"><BsDownload/></Link>
            </>
            }
            {typeof props.downlaod === "object" &&
            <>
              {props.download.map((d,idx) => (
                <>
                <Link to={{pathname: d[1]}} download target="_blank">{d[0]}</Link>
                {idx < props.download.length-1 && 
                  <>,&nbsp;</>
                }
                </>
              ))}

            </>
            }

            </>

          }

        </Col>

      </Row>
      <hr className="mx-auto w-75" />
    </>


		)
}

export default ExternalLink;
