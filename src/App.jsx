import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './Home.jsx'
import Navigation from './Navigation.jsx'
import FormController from './calc/FormController.jsx'
import Resources from './Resources.jsx'
import SilvoPasture from './methods/SilvoPasture.jsx'
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
          <Route path='/SilvoPasture' component={SilvoPasture}/>
          <Route path='/Research' component={Research}/>
          <Route path='/Research' component={Research}/>
          <Route path='/' component={Home}/>
        </Switch>



    </span>
  );
}

export default App;
