import { React, useState } from 'react';
import { Card, Row, Col, Container, Navbar, Nav, ListGroup, Tab, Image } from 'react-bootstrap';
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
//import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepButton from '@mui/material/StepButton';




const MainContent = (props, ref) => {





const [activeStep, setActiveStep] = useState(0);
const [completed, setCompleted] = useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
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


return (


<div className="px-5 mx-5">

{/*<Stepper activeStep={0} alternativeLabel>
  {steps.map((d,idx) => (

    <Step key={d.label} onClick={() => setActiveStep(idx)} style={{'cursor': 'grab'}}>
      <StepLabel>{d.label}</StepLabel>
    </Step>

  ))}
</Stepper>
<Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
{steps[activeStep].description}
</Box>*/}

    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </>
        )}
      </div>
    </Box>




<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Card>

                        <hr/>
                        <Card.Title id="0">Project Description</Card.Title>
                        <hr/>

  

                            <strong>In an era of climate change and risk,</strong>there has been an increasing focus on the development of climate resources and information for farmers to help them 
                            plan for future changes. Despite the increasing availability of information, many of these resources remain broad and 
                            often untargeted to specific populations. As the needs of farmers differ based on several criteria, including level 
                            of experience and farm type, and many resources are not geared towards farmer-identified learning and resource needs. 
                            While the availability of climate resources may be growing, there are few resources and information targeted 
                            towards specific farming populations, such as small, medium and beginning farmers in New England. There is a great 
                            need for resources developed in concert with the core beliefs, perceptions, and planning needs of these specific 
                            farmer groups. This project investigated farmer and agricultural expert perspectives of climate change and their 
                            management concerns to develop, pilot, and disseminate climate-planning resources specific to farm size and level 
                            of farmer experience and in direct response to these farmers’ expressed needs.

                             



                    </Card> 

    
                    <Card>
                        <hr/>
                        <Card.Title id="1">The Problem</Card.Title>
                        <hr/>

                            <Card.Body>
                                It is now acknowledged that climate change is one of the greatest environmental threats 
                                for future generations, and that it will impact agriculture in the U.S. As a result, 
                                    small, medium and beginning farmers and ranchers will face unique production 
                                challenges which will require a targeted set of resources. These resources must be 
                                designed with farm scale and size as well as farmer experience level in mind.
                            </Card.Body>

                    </Card>  
                    <Card>
                        <hr/>
                        <Card.Title id="2">The Focus</Card.Title>
                        <hr/>

                            <Card.Body>
                            The long-term goal of this project is to assess the 
                            varying climate perspectives of small, medium, and beginning farmers and ranchers, and agricultural 
                            extension and advisors to develop, pilot and implement targeted climate change resources and planning 
                            tools specific to the unique experiences and needs of farmers in Maine and Vermont. Based on input 
                            from farmers in Vermont and Maine and an assessment of existing resources and research,  the research 
                            team developed economic and visualization tools for three agricultural practices (silvopasture,
                             irrigation, and tarping) as well as accompanying overview briefs with additional resources.
                            </Card.Body>

                    </Card> 


 


</div>

);
}
export default MainContent;