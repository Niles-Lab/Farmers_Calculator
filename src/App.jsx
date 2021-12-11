import React from 'react'
import { Navbar, Nav, Image, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import umaine from './images/umaine.png';
import uvm from './images/uvm.png';
import climatehub from './images/climatehub.png';
import nifa from "./images/nifa-color.svg";
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'

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

    <div className="position-relative clearfix fixed-bottom footer">


    <Navbar className="mx-0 px-0 flex-wrap" bg={"light"}>
      <Col className="px-0" xs={12} md={1}>
        <Navbar.Brand><Image className="w-75" src={uvm} /></Navbar.Brand>
      </Col>
      <Col className="px-0" xs={12} md={1}>
        <Navbar.Brand><Image className="w-75" src={umaine}/></Navbar.Brand>
      </Col>
      <Col className="px-0" xs={12} md={1}>        
        <Navbar.Brand><Image style={{"width": "100%"}} src={nifa}/></Navbar.Brand>
      </Col>

      <Col className="px-0" xs={12} md={1}>
        <Navbar.Brand><Image style={{"width": "300%"}} src={climatehub}/></Navbar.Brand>
      </Col>
      
      <Col className="px-0" xs={0} md={4}>

      </Col>

      <Col xs={12} md={4}>
        <Nav.Item>This Material is Based Upon Work Supported by USDA/NIFA Under Award Number 2018-68006-28098</Nav.Item>
      </Col>


    </Navbar>
    </div>

    </>
  );
}

export default App;
