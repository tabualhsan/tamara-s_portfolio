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


import { BrowserRouter } from 'react-router-dom';
import Analytics from 'react-router-ga';
function App() {

  const location = useLocation();
  return (
    
    <div className="App">

  
    <Nav/>

    <Analytics id="G-4ZWNB3NJT3" debug>
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
      </Analytics>
 

   </div>

  );
}


export default App;
