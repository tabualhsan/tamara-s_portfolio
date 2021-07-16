import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavDropdown, Card, CardDeck} from 'react-bootstrap';
import './App.css';
import dowjane from './dowjane.JPG'
import nationalpark from './nationalpark.png'
import music2 from './music2.jpg';
import Capture from './Capture.JPG';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';

import Nav from './Nav';
import Resume from './resume';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom'
import projects from './projects'


console.log(dowjane)
console.log(nationalpark)
console.log(Capture)
const styles = {
  container: {
    width: 300,
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#B7E0F2",
    borderRadius: 10,
    padding: "2rem"
  }
};

function App() {
  const MAX_POSSIBLE_HEIGHT = 2000;
  const ExpendableText = ({ maxHeight, children }) => {
    const ref = useRef();
    const [shouldShowExpand, setShouldShowExpand] = useState(false);
    const [expanded, setExpanded] = useState(true);
  
    useEffect(() => {
      if (ref.current.scrollHeight > maxHeight) {
        setShouldShowExpand(true);
        setExpanded(false);
      }
    }, [maxHeight]);

  
  return (
    <Card.Text as="h4" style={styles.cardText}ref={ref}>
      <div
        className="inner"
        style={{ maxHeight: expanded ? MAX_POSSIBLE_HEIGHT : maxHeight }}
      >
        {children}
      </div>
      {shouldShowExpand && (
        <button style={{fontSize:'small'}}className="expand-button" onClick={() => setExpanded(!expanded)}>Expand</button>
      )}
    </Card.Text>
  );
};

  return (

  
    <div className="App">

    <>
      <Nav/>
      <Switch>
        <Route path="/" exact>
          <projects/>
        </Route>
        <Route path='/resume' exact>
          <Resume/>
        </Route>
        <Route path='/contact' exact>
          <Contact/>
        </Route>
      </Switch>

    </>
      
      {/* <Navbar bg="myRed" variant="dark"
      sticky="top" expand="lg" className="justify-content-center">
        <Navbar.Brand> 
  
        </Navbar.Brand>

        <Nav >

          <Nav.Link href="home"><strong>Home</strong></Nav.Link>
          <NavDropdown title="Portfolio" >

            <NavDropdown.Item href="websites/Dowjane">Dow Jane</NavDropdown.Item>
            <NavDropdown.Item href="websites/Nationalpark">National Park Search</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="websites/All_projects">All</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="resume"><strong>Resume</strong></Nav.Link>
          <Nav.Link href="contact"><strong>Contact</strong></Nav.Link>
        </Nav>

        <a style={{color:"white", size: 30,  marginLeft:700}}href={"https://github.com/tabualhsan"} target="_blank">< AiFillGithub/></a>
        <a style={{color:"white", size: 30 , padding:10}}href={"https://www.linkedin.com/in/tamara-abualhsan-a8a704a1/"} target="_blank">< AiFillLinkedin/></a>
        
      </Navbar> */}

      {/* <div>
      <h1>Tamara Abualhsan</h1>
      <h4>Software Engineer</h4>
      </div> */}

  



      </div>

  );
}

export default App;
