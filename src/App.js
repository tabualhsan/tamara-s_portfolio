import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Nav, NavDropdown, Container, Card, Row, Col, CardColumns} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="myRed" variant="dark"
      sticky="top" expand="lg" className="justify-content-center">
        <Navbar.Brand> 
          
           {/* add logo here  
           
          //  <img src={} width="40px" height="40px"/>*/}
          
        </Navbar.Brand>

        <Nav >

          <Nav.Link href="home">Home</Nav.Link>
          <NavDropdown title="Portfolio" >

            <NavDropdown.Item href="websites/Dowjane">Dow Jane</NavDropdown.Item>
            <NavDropdown.Item href="websites/Nationalpark">National Park Search</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="websites/All_projects">All</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="resume">Resume</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
      </Navbar>



      <div className="content">

      <Container className='card-columns' style={{display:"inline-block"}}>

          <Row md={2}>
            <Col md={2}>
              <CardColumns>
              <Card  style={{ display:"flex-box", width: '20rem' }} className="mb-3">
              <Card.Body className="aboutMe" style={{display:"center"}}>
              <h5>About Me</h5>

              </Card.Body>





              </Card>
              </CardColumns>




            </Col>
          </Row>


      </Container>
      </div>
      </div>
 





  );
}

export default App;
