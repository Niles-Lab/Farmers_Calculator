import React from 'react'
import { Navbar, Nav, Image, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import umaine from './images/umaine.png';
import uvm from './images/uvm.png';
import nifa from "./images/nifa-color.svg";
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import FormController from './calc/FormController.jsx'

import Silvopasture from './methods/Silvopasture.jsx'
import Irrigation from './methods/Irrigation.jsx'
import Tarping from './methods/Tarping.jsx'
import Research from './Research.jsx'
import Extras from './other/Extras.jsx'
import Press from './other/Press.jsx'
import About from './home/About.jsx'

function App() {
// style={{ backgroundImage: `url(${background})` }}
  return (

    <>
    <span className="App pb-5 mb-5 overflow-auto">

        <Navigation />

        <Switch>

          <Route path='/Research' component={Research}/>


          {/* Import method paths */}
          <Route path='/Silvopasture' component={Silvopasture}/>
          <Route path='/Irrigation' component={Irrigation}/>
          <Route path='/Tarping' component={Tarping}/>



          <Route path='/Press' component={Press}/>
          <Route path='/About' component={About}/>
          <Route path='/Extras' component={Extras}/>
          <Route path='/' component={Home}/>
        </Switch>

    </span>

    <Container className="me-auto mx-0 px-0 d-flex align-content-start position-relative clearfix fixed-bottom footer">
    <Col>
    <Navbar bg={"light"}>
        <Navbar.Brand><Image className="w-75" src={uvm} /></Navbar.Brand>
        <Navbar.Brand><Image className="w-75" src={umaine}/></Navbar.Brand>
        <Navbar.Brand><Image style={{"width": "200%"}} src={nifa}/></Navbar.Brand>

    </Navbar>
    </Col>
    <Col className="d-flex align-items-center justify-content-end">
    <Nav>
      <Nav.Item>This Material is Based Upon Work Supported by USDA/NIFA Under Award Number 2018-68006-28098</Nav.Item>
    </Nav>
    </Col>
    </Container>

    </>
  );
}

export default App;
