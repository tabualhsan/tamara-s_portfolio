import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Nav from './Nav';
import Resume from './resume';
import Contact from './contact';
import Projects from './projects';
import Welcome from "./Welcome";

import {Switch, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import AboutMe from "./AboutMe";
function App() {

  const location = useLocation();
  return (
    
    <div className="App">
    <Nav/>
    
    <AnimatePresence exitBeforeEnter >
      <Switch location={location} key={location.pathname}>
      <Route path='/' exact >
        <Welcome/>
      </Route>
      <Route path='/AboutMe'>
        <AboutMe/>
      </Route>
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
      </AnimatePresence>

 

   </div>

  );
}


export default App;
