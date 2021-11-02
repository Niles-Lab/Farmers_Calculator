import { React, useState } from 'react';
// import { Card, Row, Col, Container, Navbar, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
// import PriceChart from "../viz/PriceChart.jsx"
// import DotPlotFarm from "../viz/DotPlotFarm.jsx"
// import CropLossTM from "../viz/CropLossTM.jsx"
// import Chart from "../viz/Chart.jsx"
// import mental_map from './../images/mental_map.png';


import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


// export default function VerticalLinearStepper() {
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

// }





const MainContent = (props, ref) => {

const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

const steps = [
  {
    label: 'Project Description',
    description: `In an era of climate change and risk, 
        there has been an increasing focus on the development of climate resources and information for farmers to help them 
        plan for future changes. Despite the increasing availability of information, many of these resources remain broad and 
        often untargeted to specific populations. As the needs of farmers differ based on several criteria, including level 
        of experience and farm type, and many resources are not geared towards farmer-identified learning and resource needs. 
        While the availability of climate resources may be growing, there are few resources and information targeted 
        towards specific farming populations, such as small, medium and beginning farmers in New England. There is a great 
        need for resources developed in concert with the core beliefs, perceptions, and planning needs of these specific 
        farmer groups. This project investigated farmer and agricultural expert perspectives of climate change and their 
        management concerns to develop, pilot, and disseminate climate-planning resources specific to farm size and level 
        of farmer experience and in direct response to these farmers’ expressed needs.`,
  },
  {
    label: 'The Problem',
    description: 'It is now acknowledged that climate change is one of the greatest environmental threats for future generations, and that it will impact agriculture in the U.S. As a result, small, medium and beginning farmers and ranchers will face unique production challenges which will require a targeted set of resources. These resources must be designed with farm scale and size as well as farmer experience level in mind. ',
  },
  {
    label: 'The Focus',
    description: `
        The long-term goal of this project is to assess the 
        varying climate perspectives of small, medium, and beginning farmers and ranchers, and agricultural 
        extension and advisors to develop, pilot and implement targeted climate change resources and planning 
        tools specific to the unique experiences and needs of farmers in Maine and Vermont. Based on input 
        from farmers in Vermont and Maine and an assessment of existing resources and research,  the research 
        team developed economic and visualization tools for three agricultural practices (silvopasture,
         irrigation, and tarping) as well as accompanying overview briefs with additional resources. 


    `,
  },
];




//const scroll = (ref) => props.refProp.scrollIntoView()
//const ref4 = props.refs[3];


return (


<>


    <Box className="w-100" >
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            
            {/* <StepLabel
            //   optional={
            //     index === 2 ? (
            //       <Typography variant="caption">Last step</Typography>
            //     ) : null
            //   }
            // >
            //   {step.label}
            // </StepLabel>*/}
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
{/*      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}*/}
    </Box>




{/*        <div>
        <Row>

            <Col>
                    <Card>

                        <hr/>
                        <Card.Title id="1">Project Description</Card.Title>
                        <hr/>

                        <Card.Title id="0"></Card.Title>

                            <blockquote className="blockquote mb-0 mx-5">
                              
                                <h4><b></b></h4>

                             

   
                            </blockquote>
                            <Card.Body>
                                <Row>
                                    <Col>

                                    </Col>
                                    <Col>
   
                                    </Col>
                                </Row>

                            </Card.Body>

                    </Card> 

                    <Card variant="light" bg="light">

                        <hr/>
                        <Card.Title id="1">Project Goals</Card.Title>
                        <hr/>
                    
                        <Card.Body>
                        <Tab.Container id="list-group-tabs" defaultActiveKey="#l0">
                            <Row>
                                <Col>
                                <ListGroup>
                                  <ListGroup.Item variant="success">5-Stage Research Goals</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l0"> Assess farmer/agricultural advisor perceptions of Climate Change</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l1">Understand educational needs and learning styles with focus groups</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l2">Develop tools, resources and information to understand and plan for climate change</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l3">Work with community partners for outreach and evaluation of materials with small and medium farmers in Maine and Vermont</ListGroup.Item>
                                  <ListGroup.Item variant="light" action href="#l4">Expand the project through partnership with the USDA Northeast Climate Hub</ListGroup.Item>  
                                </ListGroup>
                                </Col>
                                <Col>      
                                    <Tab.Content>
                                        <Tab.Pane eventKey="#l0">
                                          <Image src={mental_map} fluid />
                                          <cite>Aggregated farmer mental model of the concepts and relationships mentioned by ≥ 10% of farmer
                                            participants (n = 33); “Relationship Mentions” and “Concept Mentions” reflect the percentage of farmers who
                                            included that relationship or concept in their mental model; color indicates the concept category</cite>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l1">
                                          <Image src="https://placekitten.com/g/1000" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l2">
                                          <Image src="https://placekitten.com/g/800" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l3">
                                          <Image src="https://placekitten.com/g/700" fluid />
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="#l4">
                                          <Image src="https://placekitten.com/g/810" fluid />
                                        </Tab.Pane>
                                  </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                        </Card.Body>  
                    </Card>
                    <Card>
                        <hr/>
                        <Card.Title id="2">What is Cost Benefit Analysis?</Card.Title>
                        <hr/>

                            <Card.Body>
                                CBA, or Cost Benefit Analysis, is a tool to identify problems, solutions, and strategies for overcoming challenges given limited resources.
                                Identifying a long-term problem, assessing multiple strategies, and identifying the costs and benefits presented by each are among the steps taken to find the most efficient solution
                                on a case-by-case basis.
                                <br/><br/>
                                In a constantly changing world with data becoming evermore present, preparation and adaptation is necessary for the survival and evolution of many trades.
                                Another goal of CBA is to find a solution that not only evolves a trade, but creates the most utility for society. Often times, there are external factors and outcomes
                                beyond the purview of a study. These may not have an explicit numerical value, but are nonetheless important to consider and prioritize in a CBA.
                                <br/><br/>
                                For example, imposing new laws and regulations on trade may have financial benefits, but will assuredly affect the livelihoods of many individuals. This "social cost" should be
                                accounted for in CBA.
                            </Card.Body>

                    </Card>  

                    <Card variant="light" bg="light">   

                        <hr/>
                        <Card.Title id="3">Our Mission</Card.Title>
                        <hr/>
                    
                            <Card.Body>
                            <Container>
                                <Row>
                                    <Col>
                                    Approximately 20% of Vermont is farmland. Across many different techniques and lifestyles, agriculture is among the state's largest exports.
                                    While many people are aware of the dangers presented by climate change, there are very few accessible options to personally explore and tackle this issue.
                                    However, this task is increasinly imperative as the quality of land and natural beauty of the state is threatened.
                                    <br/><br/>
                                    The goal of our research is to understand the local perceptions, concerns, experience and needs of farmers in Vermont.

                                    This will help us to identify resource needs for this community, what information they need to make informed decisions on adaptation practices, and how to effectively translate research on these resources.
                                    Hopefully, this will help to preseve the trade, create sustainable change,
                                    and enhance the success of small, medium, and beginning farms.
                                    <br/><br/>
                                    https://www.nass.usda.gov/Quick_Stats/Ag_Overview/stateOverview.php?state=VERMONT
                                    </Col>
                                    <Col>
                                  
                                    </Col>
                                </Row>
                                <Chart />
                            </Container>
                            </Card.Body>

                    </Card>

            </Col>
            <Col>

            </Col>
        </Row>
        </div>*/}

</>

);
}
export default MainContent;