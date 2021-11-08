import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

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
          <Route path='/%PUBLIC_URL%/Resources' component={Resources}/>
          <Route path='/%PUBLIC_URL%/Research' component={Research}/>


          {/* Import method paths */}
          <Route path='/%PUBLIC_URL%/Silvopasture' component={Silvopasture}/>
          <Route path='/%PUBLIC_URL%/Irrigation' component={Irrigation}/>
          <Route path='/Tarping' component={Tarping}/>


          <Route path='/%PUBLIC_URL%/Press' component={Press}/>
          <Route path='/%PUBLIC_URL%/Extras' component={Extras}/>
          <Route path='/' component={Home}/>
        </Switch>



    </span>
  );
}

export default App;
