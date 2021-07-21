import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { pageAnimation , photoAnim, lineAnime} from './animation';
import UCSF from './ucsf.png';
import Thermofisher from './Thermofisher.png';
import Twist from './twist.jpg';
import natera from './nataera.png';
import gene from './Genentech.png';
import HB from './HB.png';
import {Card, CardDeck} from 'react-bootstrap';





const Resume = () => {
return(
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
    <Title>
    <h1>My Experience</h1>
    </Title>




    <Experience> 
    <motion.img variants={photoAnim} style={{height:'5rem',width:"15rem", objectFit:'cover'}} src={HB}  />
        
        <h4>Hackbright Academy | San Francisco</h4> 
        <h5>Software Engineer (student) </h5>
        <h7>August 2020 - March 2020 </h7>
        <motion.div variants={lineAnime} className="line"></motion.div>


    <motion.img variants={photoAnim} style={{height:'5rem',width:"15rem", objectFit:'cover'}} src={UCSF}  />    
        <h4>UCSF Zuckerberg General Hospital | San Francisco</h4> 
        <h5>Clinical Research Coordinator</h5>
        <h7>September 2018 – August 2020</h7>
        <motion.div variants={lineAnime} className="line"></motion.div>

    <motion.img variants={photoAnim} style={{height:'5rem',width:"15rem", objectFit:'cover'}} src={Thermofisher}  />
         
        <h4>Thermo Fisher Scientific | South San Francisco 	</h4> 
        <h5>Technical Application Specialist</h5>
        <h7>September 2017 – September 2018</h7>
        <motion.div variants={lineAnime} className="line"></motion.div>
    
    
    
    <motion.img variants={photoAnim} style={{height:'5rem', width:"15rem", objectFit:'cover'}} src={Twist}  />  
        <h4> Twist Biosciences | San Francisco 	</h4> 
        <h5>Oligonucleotide Manufacturing Associate </h5>
        <h7>May 2017 – September 2017</h7>
        <motion.div variants={lineAnime} className="line"></motion.div>

    <motion.img variants={photoAnim} style={{height:'5rem',width:"15rem", objectFit:'cover'}} src={natera}  />    
        <h4> Natera | San Carlos </h4> 
        <h5>Clinical Laboratory Associate I </h5>
        <h7>October 2016 – May 2017</h7>
        <motion.div variants={lineAnime} className="line"></motion.div>

    <motion.img variants={photoAnim} style={{height:'5rem', width:"15rem", objectFit:'cover'}} src={gene}  />
        <h4>Genentech | South San Francisco </h4>
        <h5>Labratory Associate</h5>
        <h7>November 2015 – October 2016 </h7>

        <motion.div variants={lineAnime} className="line"></motion.div>
    





    </Experience>
    </motion.div>


   )
};

const Experience = styled.div`
    padding-bottom: 100rem;
        .line{
            height:0.5rem;
            background: #3f3a3f;
            margin-bottom: 3rem;
        }


`
const Title = styled.h1`
 font-style: lato;
 padding: 3rem;

`

export default Resume;