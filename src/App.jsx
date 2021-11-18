import React from 'react'
import { Navbar, Nav, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import nifa from "./images/nifa-color.svg";
import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import FormController from './calc/FormController.jsx'
import Resources from './Resources.jsx'
import Silvopasture from './methods/Silvopasture.jsx'
import Irrigation from './methods/Irrigation.jsx'
import Tarping from './methods/Tarping.jsx'
import Research from './Research.jsx'
import Extras from './other/Extras.jsx'
import Press from './other/Press.jsx'

function App() {
// style={{ backgroundImage: `url(${background})` }}
  return (

    <span className="App">
        <Navigation />

        <Switch>
          <Route path='/Resources' component={Resources}/>
          <Route path='/Research' component={Research}/>


          {/* Import method paths */}
          <Route path='/Silvopasture' component={Silvopasture}/>
          <Route path='/Irrigation' component={Irrigation}/>
          <Route path='/Tarping' component={Tarping}/>


          <Route path='/Press' component={Press}/>
          <Route path='/Extras' component={Extras}/>
          <Route path='/' component={Home}/>
        </Switch>


        <Navbar bg={"light"} className="mt-5">
            <Navbar.Brand><Image src={nifa} width="100%"/></Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Item>This Material is Based Upon Work Supported by USDA/NIFA Under Award Number 2018-68006-28098</Nav.Item>
            </Nav>
        </Navbar>
    </span>
  );
}

export default App;
