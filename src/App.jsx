import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Image, Container, Row, Col } from 'react-bootstrap'
import './FormController.jsx'
import umaine from './images/umaine.png';
import uvm from './images/uvm.svg';
import './App.css';


import CalcForm from './Form.js'
import Calculator from './Calculator.js'

function App() {


  return (

    <span>
      <div>
        <header>
          <Navbar expand="lg">
            <Navbar.Brand href="#home">UVM/Umaine for Farmers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Calculator</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            <Navbar.Brand>
              <a href="https://uvm.edu/" target="_blank"><Image src={uvm} width="70%" height="50%" className="float-right"/></a>
            </Navbar.Brand>
            <Navbar.Brand>
              <a href="https://umaine.edu/" target="_blank"><Image src={umaine} className="align-self"/></a>
            </Navbar.Brand>
          </Navbar>
        </header>
        </div>
        <div className="App">
          {FormController()}
        </div>
    </span>
  );
}

export default App;
