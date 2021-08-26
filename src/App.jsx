import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import background from './images/background_1.jpg';
import './App.css';

import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import FormController from './FormController.jsx'
import Resources from './Resources.jsx'
import Research from './Research.jsx'

function App() {
// style={{ backgroundImage: `url(${background})` }}
  return (

    <span className="App">

        <Navigation />

        <Switch>
          <Route path='/FormController' component={FormController}/>
          <Route path='/Resources' component={Resources}/>
          <Route path='/Research' component={Research}/>
          <Route path='/' component={Home}/>
        </Switch>



    </span>
  );
}

export default App;
