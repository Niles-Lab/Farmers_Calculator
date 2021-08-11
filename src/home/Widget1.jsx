import React, { useRef } from 'react';
import { Card, Col } from 'react-bootstrap';

import CropLossTM from "../viz/CropLossTM.jsx"



function Widget1(props) {

const navs = ["Local Effects of Climate Change", "Individual Action", "What is CBA?", "Resources"];
let refs = [];

  return (

    <Card>

        <hr/>
        <Card.Title>Local Effects of Climate Change</Card.Title>
        <hr/>

            <Card.Body>

                <Row>
                    <Col>
                        <CropLossTM />
                    </Col>
                    <Col>
                        CBA, or Cost Benefit Analysis, is a tool to identify problems, solutions, and strategies for overcoming challenges given limited resources.
                        Identifying a long-term problem, assessing multiple strategies, and identifying the costs and benefits presented by each are among the steps taken to find the most efficient solution
                        on a case-by-case basis.

                        In a constantly changing world with data becoming evermore present, preparation and adaptation is necessary for the survival and evolution of many trades.
                        Another goal of CBA is to find a solution that not only evolves a trade, but creates the most utility for society. Often times, there are external factors and outcomes
                        beyond the purview of a study. These may not have an explicit numerical value, but are nonetheless important to consider and prioritize in a CBA.

                        For example, imposing new laws and regulations on trade may have financial benefits, but will assuredly affect the livelihoods of many individuals. This "social cost" should be
                        accounted for in CBA.
                    </Col>
                </Row>

            </Card.Body>

    </Card> 
    )
}

export default Widget1;
