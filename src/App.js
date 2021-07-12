import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown, Card, CardDeck} from 'react-bootstrap';
import './App.css';
import Image from 'react-bootstrap/Image'
import dowjane from './dowjane.JPG'
import nationalpark from './nationalpark.png'
import music2 from './music2.jpg';

console.log(music2)
console.log(dowjane)
console.log(nationalpark)
const styles = {
  container: {
    width: 300,
    margin: "0 auto"
  },
  card: {
    backgroundColor: "#B7E0F2",
    borderRadius: 55,
    padding: "3rem"
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
        <button className="expand-button" onClick={() => setExpanded(!expanded)}>Expand</button>
      )}
    </Card.Text>
  );
};

  return (
    <div className="App">
      <Navbar bg="myRed" variant="dark"
      sticky="top" expand="lg" className="justify-content-center">
        <Navbar.Brand> 
          
           {/* add logo here  
           
          //  <img src={} width="40px" height="40px"/>*/}
          
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
      </Navbar>

      <div>
      <h1>Tamara Abualhsan</h1>
      <h4>Software Engineer</h4>
      </div>

    <div className="card-deck" display="grid" >
     
      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card  style={{ display:"flex-box", width: '20rem' }} className="mb-3">
          <Card.Body >
          <Card.Title>Dow Jane</Card.Title>
          
          <Card.Img  style={{height:'20rem'}} src={dowjane} alt={"dowjane logo"}/>
          <h5>About</h5>
            <ExpendableText maxHeight={95}> Dow Jane aims to educate and empower women to be informed about the stock market and to be able to make better investment decisions.  Users sign up to a platform that eliminates the complexity of the stock market and provides real-time data about stocks. Utilizing chart.js and the Alpha Vantage API, Dow Jane populates monthly prices for over 10,000 stocks, and informs users if it is woman-lead. They can also favorite a stock to keep track of it for future investing. Finally, users can learn more of all women-led companies in the S&P 500, which only account for 6%.</ExpendableText>
        
         <Card.Text>
           <h5>Tech Stack</h5>
              Backend: Flask, Python3, SQLAlchemy, bycrypt, Alpha Vantage API, Flask
              Frontend: JavaScript, HTML5, CSS3, chart.js, jQuery, Ajax, Bootstrap
              Database: PostgreSQL
              API: Alpha Vantage API
              Tools: Postman, GIT, GITHub, Visual StudioCode
        </Card.Text>
          </Card.Body>
          <Card.Link>
          <a href={"https://github.com/tabualhsan/Dow-Jane"}>GitHub</a>
          <br></br>
          <a href={"https://dowjane.app/"}>DowJane</a>
        </Card.Link>
        </Card>
       
        </CardDeck>
      </div>

      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
          <Card.Body >
          <Card.Title>National Park Search App </Card.Title>
          <Card.Img style={{height:'20rem'}} src={nationalpark} alt="National Park logo"/>
          <Card.Text>
          <h5>About</h5>
            <ExpendableText maxHeight={95}> Dow Jane aims to educate and empower women to be informed about the stock market and to be able to make better investment decisions.  Users sign up to a platform that eliminates the complexity of the stock market and provides real-time data about stocks. Utilizing chart.js and the Alpha Vantage API, Dow Jane populates monthly prices for over 10,000 stocks, and informs users if it is woman-lead. They can also favorite a stock to keep track of it for future investing. Finally, users can learn more of all women-led companies in the S&P 500, which only account for 6%.</ExpendableText>
          </Card.Text>
         <Card.Text><h5>Tech Stack</h5>
        <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3,  Bootstrap 
        <strong>API:</strong> National Park Service API
        <strong>Tools:</strong> GIT, GITHub, Visual StudioCode
        </Card.Text>
          </Card.Body>
          <Card.Link href={"https://github.com/tabualhsan/National_Park_Finder_App"}>GitHub
        </Card.Link>
        </Card>
        </CardDeck>
      </div>
      
      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
          <Card.Body >
          <Card.Title style={{fontWeight:'medium'}}> Beats By Tamara </Card.Title>
        <Card.Img style={{height:'20rem'}} src={music2}/>
          <Card.Text> <h5>About</h5>
            <ExpendableText maxHeight={95}>  </ExpendableText></Card.Text>
         <Card.Text>
           <h5>Tech Stack</h5>
            <strong>Frontend:</strong> JavaScript, HTML5, CSS3, Bootstrap
            <strong>Tools:</strong> GIT, GITHub, Visual StudioCode
        </Card.Text>
          </Card.Body>
          <Card.Link>
          <a href={"https://github.com/tabualhsan/Beats_by_Tamara"}>GitHub</a>        
        </Card.Link>
        </Card>
        </CardDeck>
      </div>
      </div>
    </div>
      
    
 





  );
}

export default App;
