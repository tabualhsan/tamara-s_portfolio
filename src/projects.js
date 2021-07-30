import React from 'react';
import styled from 'styled-components';

import {Card, CardDeck} from 'react-bootstrap';
import dowjane from './dowjane.JPG'
import nationalpark from './nationalpark.png'
import music2 from './music2.jpg';
import Capture from './Capture.JPG';
import { AiFillGithub } from 'react-icons/ai'
// import { AiFillLinkedin } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import { pageAnimation, titleAnim, fade, photoAnim, lineAnime } from './animation';


console.log(dowjane)
console.log(nationalpark)
console.log(Capture)



const Projects = () => {

      
    return(
    <Paragraph>
    <div >

    
        <motion.div variants={pageAnimation} initial="hidden" animate="show"  >
        <div className='card-deck' >
            <div > 
            <CardDeck>
            <Card  style={{ width: '18rem' }} >
                <Card.Body >
                <Card.Title>Dow Jane</Card.Title>
                <motion.div variants={lineAnime} className="line"></motion.div>
                <a href="https://dowjane.app/" target="_blank" >
                <motion.img variants={photoAnim}   style={{height:'15rem', objectFit:'cover'}} src={dowjane} alt={"dowjane logo"}/>
                </a>
                <Card.Text style={{padding:"20px"}}> Dow Jane is an educational platform to empower women to be informed about
stock investments, and to make better informed investing decisions.</Card.Text>
            
            <Card.Text style={{padding:"10px"}}>
                <h6>Tech Stack:</h6>
                    <strong>Backend:</strong> Flask, Python3, SQLAlchemy, bycrypt, Alpha Vantage API, Flask <br></br>
                    <strong>Frontend:</strong> JavaScript, HTML5, CSS3, chart.js, jQuery, Ajax, Bootstrap<br></br>
                    <strong>Database:</strong> PostgreSQL<br></br>
                    <strong>API:</strong> Alpha Vantage API<br></br>
                    <strong>Tools:</strong>  Postman, GIT, GITHub, Visual StudioCode, AWS<br></br>
                    <strong>Website:</strong> <a href={"https://dowjane.app/"}>DowJane</a>
            </Card.Text>
                </Card.Body>
                <Card.Link>
                <a style={{color:"#D96ED4" }}href={"https://github.com/tabualhsan/Dow-Jane"} target="_blank"><AiFillGithub size={30}/></a>
                <br></br>
     
            </Card.Link>
            </Card>
            </CardDeck>
        </div>
            <div  >
            <CardDeck>
            <Card style={{ width: '18rem'}}>
                <Card.Body >
                <Card.Title>National Park Search App </Card.Title>
                <motion.div variants={lineAnime} className="line"></motion.div>
                <a href="https://nationalparkfinder.netlify.app/" target="_blank" >
                <motion.img variants={photoAnim} style={{height:'15rem', objectFit:'cover'}} src={nationalpark} alt="National Park logo"/>
                </a>
                <Card.Text style={{padding:"20px"}} >The National Park Seach App for the adventerous individual out there looking to venture and discover the 432 National Parks that the USA has.</Card.Text>
            <Card.Text style={{padding:"10px"}}><h6>Tech Stack:</h6>
            <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3,  Bootstrap <br></br>
            <strong>API:</strong> National Park Service API<br></br>
            <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
            <strong>Website:</strong> <a href={"https://nationalparkfinder.netlify.app/"}>National Park Search</a>
            </Card.Text>
                </Card.Body>
                <Card.Link  style={{color:"#D96ED4" }} target="_blank" href={"https://github.com/tabualhsan/National_Park_Finder_App"}><AiFillGithub size={30}/>
            </Card.Link>
            </Card>
            </CardDeck>
            </div>
            
            <div>
            <CardDeck>
            <Card style={{ width: '18rem',}} >
                <Card.Body >
                <Card.Title style={{fontWeight:'medium'}}> Beats By Tamara </Card.Title>
                <motion.div variants={lineAnime} className="line"></motion.div>
            <motion.img variants={photoAnim} style={{height:'15rem', objectFit:'cover'}} src={music2}/>
                <Card.Text style={{padding:"20px"}}> Beats by Tamara was inspired to ignite you musical creativity with the ability to combine a range of beats to make your own!</Card.Text>
            <Card.Text style={{padding:"10px"}} >
                <h6>Tech Stack:</h6>
                <strong>Frontend:</strong> JavaScript, HTML5, CSS3, Bootstrap<br></br>
                <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
            </Card.Text>
                </Card.Body>
                <Card.Link>
                <a style={{color:"#D96ED4" }} target="_blank" href={"https://github.com/tabualhsan/Beats_by_Tamara"}><AiFillGithub size={30}/></a>        
            </Card.Link>
            </Card>
            </CardDeck>
            </div>
            <div>
            <CardDeck >
            <Card style={{ width: '18rem'}} >
                <Card.Body >
                <Card.Title style={{fontWeight:'medium'}}> Study Beats </Card.Title>

                <motion.div variants={lineAnime} className="line"></motion.div>
                <motion.img variants={photoAnim}style={{height:'15rem'}} src={Capture}/>
                <Card.Text style={{padding:"20px"}}> A playlist of lofi beats to listen while you studying. </Card.Text>
            <Card.Text style={{padding:"10px"}} >
                <h6>Tech Stack:</h6>
                <strong>Frontend:</strong> React, JavaScript, HTML5, CSS3, Bootstrap<br></br>
                <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
            </Card.Text>
                </Card.Body>
                <Card.Link>
                <a style={{color:"#D96ED4" }} target="_blank" href={"https://github.com/tabualhsan/Music_Player_App_React"}><AiFillGithub size={30}/></a>        
            </Card.Link>
            </Card>
            </CardDeck>
            {/* <div  style={{display:"grid",align:"center"}}>
            <CardDeck>
            <Card style={{ width: '20rem', fontWeight:"small"}} className="mb-3">
                <Card.Body >
                <Card.Title style={{fontWeight:'medium'}}> My Webiste </Card.Title>
                <motion.div variants={lineAnime} className="line"></motion.div>
            <motion.img variants={photoAnim} style={{height:'15rem', objectFit:'cover'}} />
                <Card.Text> Created my own profile with React to showcase my coding journey!</Card.Text>
            <Card.Text >
                <h6>Tech Stack:</h6>
                <strong>Frontend:</strong> JavaScript, HTML5, CSS3, Bootstrap<br></br>
                <strong>Tools:</strong> GIT, GITHub, Visual StudioCode<br></br>
            </Card.Text>
                </Card.Body>
                <Card.Link>
                <a style={{color:"#D96ED4" }} target="_blank" href={"https://github.com/tabualhsan/Beats_by_Tamara"}><AiFillGithub size={30}/></a>        
            </Card.Link>
            </Card>
            </CardDeck>
            </div> */}
            
        </div>
        </div>
        </motion.div>
   
 

    </div>
    </Paragraph>   
    );
}

const Paragraph = styled.div`
    padding-bottom: 100rem;
    padding-top: 10rem;
    position:relative ;
    width:100%;
    height: 100%;
 


    padding:10px;
        
    
    .line{
        height:0.5rem;
        background: #D96ED4;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height:70vh;
        object-fit: cover;
    }
`;

export default Projects;