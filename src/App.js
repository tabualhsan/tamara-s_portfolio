import React, { useRef, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown, Card, CardDeck} from 'react-bootstrap';
import './App.css';
import dowjane from './dowjane.JPG'
import nationalpark from './nationalpark.png'
import music2 from './music2.jpg';
import Capture from './Capture.JPG';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
// import Resume from './resume'

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
      
      <Navbar bg="myRed" variant="dark"
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
          
          <Card.Img  style={{height:'15rem'}} src={dowjane} alt={"dowjane logo"}/>
          {/* <h5>About</h5> */}
            <ExpendableText maxHeight={95}> I created Dow Jane with the intent to educate and empower women to be informed about the stock market and to be able to make better investment decisions.  Users sign up to a platform that eliminates the complexity of the stock market and provides real-time data about stocks. Utilizing chart.js and the Alpha Vantage API, Dow Jane populates monthly prices for over 10,000 stocks, and informs users if it is woman-lead. They can also favorite a stock to keep track of it for future investing. Finally, users can learn more of all women-led companies in the S&P 500, which only account for 6%.</ExpendableText>
        
         <Card.Text>
           <h6>Tech Stack:</h6>
              <strong>Backend:</strong> Flask, Python3, SQLAlchemy, bycrypt, Alpha Vantage API, Flask <br></br>
              <strong>Frontend:</strong> JavaScript, HTML5, CSS3, chart.js, jQuery, Ajax, Bootstrap<br></br>
              <strong>Database:</strong> PostgreSQL<br></br>
              <strong>API:</strong> Alpha Vantage API<br></br>
              <strong>Tools:</strong>  Postman, GIT, GITHub, Visual StudioCode<br></br>
        </Card.Text>
          </Card.Body>
          <Card.Link>
          <a style={{color:"#88A1BD" }}href={"https://github.com/tabualhsan/Dow-Jane"} target="_blank"><AiFillGithub/></a>
          <br></br>
          <a href={"https://dowjane.app/"} target="_blank" >DowJane</a>
        </Card.Link>
        </Card>
       
        </CardDeck>
      </div>

      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
          <Card.Body >
          <Card.Title>National Park Search App </Card.Title>
          <Card.Img style={{height:'15rem'}} src={nationalpark} alt="National Park logo"/>
          <Card.Text>
         
            <ExpendableText maxHeight={95}> The National Park Seach App for the adventerous individual out there looking to venture and discover the 432 National Parks that the USA has. </ExpendableText>
          </Card.Text>
         <Card.Text><h6>Tech Stack:</h6>
        <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3,  Bootstrap <br></br>
        <strong>API:</strong> National Park Service API<br></br>
        <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
        </Card.Text>
          </Card.Body>
          <Card.Link  style={{color:"#88A1BD" }} target="_blank" href={"https://github.com/tabualhsan/National_Park_Finder_App"}><AiFillGithub/>
        </Card.Link>
        </Card>
        </CardDeck>
      </div>
      
      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
          <Card.Body >
          <Card.Title style={{fontWeight:'medium'}}> Beats By Tamara </Card.Title>
        <Card.Img style={{height:'15rem'}} src={music2}/>
          <Card.Text>
            <ExpendableText maxHeight={95}> Beats by Tamara was inspired to ignite you musical creativity with the ability to combine a range of beats to make your own! </ExpendableText></Card.Text>
         <Card.Text >
           <h6>Tech Stack:</h6>
            <strong>Frontend:</strong> JavaScript, HTML5, CSS3, Bootstrap<br></br>
            <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
        </Card.Text>
          </Card.Body>
          <Card.Link>
          <a style={{color:"#88A1BD" }} target="_blank" href={"https://github.com/tabualhsan/Beats_by_Tamara"}><AiFillGithub/></a>        
        </Card.Link>
        </Card>
        </CardDeck>
      </div>
      <div  style={{display:"flex"}}>
        <CardDeck>
        <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
          <Card.Body >
          <Card.Title style={{fontWeight:'medium'}}> Study Beats </Card.Title>
        <Card.Img style={{height:'15rem'}} src={Capture}/>
          <Card.Text>
            <ExpendableText maxHeight={95}> A playlist of lofi beats to listen while you studying. </ExpendableText></Card.Text>
         <Card.Text >
           <h6>Tech Stack:</h6>
            <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, Bootstrap<br></br>
            <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
        </Card.Text>
          </Card.Body>
          <Card.Link>
          <a style={{color:"#88A1BD" }} target="_blank" href={"https://github.com/tabualhsan/Music_Player_App_React"}><AiFillGithub/></a>        
        </Card.Link>
        </Card>
        </CardDeck>
      </div> 
      </div>
    </div>
      
    
   





  );
}

export default App;
