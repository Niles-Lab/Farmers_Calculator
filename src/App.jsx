import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, Image, Container } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';
import background from './images/background_1.jpg';
import './App.css';


import Navigation from './Navigation.jsx'
import FormController from './FormController.jsx'
import LoremIpsum from './LoremIpsum.jsx'

function App() {



  return (

    <span className="App" style={{ backgroundImage: `url(${background})` }}>

        <Navigation />
        <Switch>
          <Route path='/FormController' component={FormController}/>
          <Route path='/LoremIpsum' component={LoremIpsum}/>
        </Switch>



    </span>
  );
}

export default App;
