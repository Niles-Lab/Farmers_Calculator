import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap';
import umaine from './images/umaine.png';
import uvm from './images/uvm.svg';
import './App.css';


import CalcForm from './Form.js'


function App() {


  return (

    <span>
      <div>
        <header className="App-header">
          <Navbar expand="lg">
            <Navbar.Brand href="#home">UVM/UMaine for Farmers</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

            <Navbar.Brand>
              <Image src={uvm} resizeMode={"contain"} className="align-self"/>
              <Image src={umaine} resizeMode={"contain"} className="align-self"/>
            </Navbar.Brand>
              </Navbar.Collapse>


          </Navbar>
        </header>
        </div>
        <div className="container-fluid App">
          <div>
            <CalcForm />
          </div>
        </div>

    </span>
  );
}

export default App;
