import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Nav from './Nav';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';

import {Switch, Route} from 'react-router-dom'
function App() {


  return (

    <div className="App">
  
          <Nav/>
      <Switch>
        <Route path='/projects' exact>
          <Projects/>
        </Route>
        <Route path='/resume' exact>
          <Resume/>
        </Route>
        <Route path='/contact' exact>
          <Contact/>
        </Route>
      </Switch>

 

   </div>

  );
}


export default App;
