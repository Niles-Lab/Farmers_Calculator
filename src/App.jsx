import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import background from './images/background_1.jpg';
import './App.css';

import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import FormController from './FormController.jsx'
import LoremIpsum from './LoremIpsum.jsx'

function App() {
// style={{ backgroundImage: `url(${background})` }}
  return (

    <span className="App">

        <Navigation />

        <Switch>
          <Route path='/FormController' component={FormController}/>
          <Route path='/LoremIpsum' component={LoremIpsum}/>
          <Route path='/' component={Home}/>
        </Switch>



    </span>
  );
}

export default App;
