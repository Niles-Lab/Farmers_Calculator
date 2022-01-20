import React, { useState, useEffect }  from 'react'
import { Navbar, Nav, Image, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import umaine from './images/logos/umaine.png';
import uvm from './images/logos/uvm.png';
import climatehub from './images/logos/climatehub.png';
import nifa from './images/logos/nifa-color-lockup.svg';

import Home from './home/Home.jsx'

import Navigation from './Navigation.jsx'

import Silvopasture from './methods/Silvopasture.jsx'
import Irrigation from './methods/Irrigation.jsx'
import Tarping from './methods/Tarping.jsx'

import Research from './other/Research.jsx'
import Press from './other/Press.jsx'

import Visualizations from './other/Visualizations.jsx';
import Tools from './other/Tools.jsx';

import About from './home/About.jsx'
import Team from './home/Team.jsx'

import Banner from './other/Banner.jsx'




function App() {


// Interaction for OffCanvas Elements
const [show, setShow] = useState(true);
const toggleShow = () => setShow(d => !d);
const handleClose = () => setShow(false);

// useEffect(() => {

//   setShow(true);

// }, [])


  return (

    <>
    <span className="App d-flex flex-column min-vh-100">

        <Banner show={show} handleClose={handleClose} />

        <Navigation />

        <Switch>

          <Route path='/Research' component={Research}/>

          <Route path='/Tools' component={Tools}/>
          <Route path='/Visualizations' component={Visualizations}/>

          {/* Import method paths */}
          <Route path='/Silvopasture' component={Silvopasture}/>
          <Route path='/Irrigation' component={Irrigation}/>
          <Route path='/Tarping' component={Tarping}/>



          <Route path='/Press' component={Press}/>
          <Route path='/About' component={About}/>
          <Route path='/team' component={Team}/>

          <Route path='/' component={Home}/>
          
        </Switch>

    </span>


    <div className="d-flex flex-column clearfix footer">


    <Navbar className="mx-0 px-0 flex-wrap" bg={"light"}>
{/*      <Col className="px-0" md={1}>
        <Navbar.Brand><Image responsive className="w-100" src={uvm} /></Navbar.Brand>
      </Col>
      <Col className="px-0" md={1}>
        <Navbar.Brand><Image responsive className="w-100" src={umaine}/></Navbar.Brand>
      </Col>

      <Col className="px-0" md={1}>
        <Navbar.Brand><Image fluid className="w-100" style={{"width": "700%"}} src={climatehub}/></Navbar.Brand>
      </Col>
      
      <Col className="px-0" xs={0} md={4}>

      </Col>*/}

      <Col xs={12} lg={2}>
        <Image fluid className="w-75" src={uvm} />
      </Col>

      <Col xs={12} lg={2}>
        <Image fluid className="w-75" src={umaine}/>
      </Col>

      <Col xs={12} lg={2}>
        <Image fluid className="w-100" src={climatehub}/>
      </Col>
  
      <Col xs={12} lg={3}>
        <Image fluid src={nifa}/>
      </Col>    



      <Col xs={0} lg={{ span: 3 }}>
      <Nav.Item className="small text-wrap">This Material is Based Upon Work Supported by USDA/NIFA Under Award Number 2018-68006-28098. Any opinions, findings, conclusions, or recommendations expressed in this publication are those of the author(s) and do not necessarily reflect the view of the U.S. Department of Agriculture.</Nav.Item>
      <Nav.Item className="small text-wrap"></Nav.Item>
      </Col>


    </Navbar>


    </div>


    </>
  );
}

export default App;
