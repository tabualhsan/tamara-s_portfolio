import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';

import Wave from './Wave';
import { pageAnimation, titleAnim, fade, photoAnim, lineAnime } from './animation';
import { About, Description } from './styles';


const AboutMe = () => {

    return(
    
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
        <div className="title">

      

        <About>
        <Description>
          <Paragraph>
            <Hide>
            <motion.h2 variants={titleAnim} > Tamara Abualhsan</motion.h2>
            </Hide>
            <Hide>
            <motion.h3 variants={titleAnim}>
              Software Engineer
            </motion.h3>
            </Hide>
            <motion.div variants={lineAnime} className="line"></motion.div>
            <Hide>
            <motion.h2 variants={titleAnim}>
              <Text style={{fontWeight:"20px"}}>
              Throughout my career I have always had a passion to help others. I began the first 6 years of my journey working in the biotech and healthcare spaces. My last job as a clinical researcher for HIV at San Francisco General Hospital took a turn when COVID became a reality and my team and I needed to shift gears and our focus became to research COVID. Over-night this affected how we interacted with patients and I realized that technology was an enabler of care and how the lack of it brought many obstacles. I wanted to contribute to helping others by building technology to fill the gaps we were having, so with no programming knowledge prior, I enrolled in as many online programming courses and got the opportunity to be a part of Hackbright Academy’s Software Engineering Program. I aspire to take my experience with patients, technology, and healthcare to build a better world for the future where healthcare and technology meet. 
              </Text>
            </motion.h2>
            </Hide>
         
          <Wave/>
          </Paragraph>
          </Description>
     
        </About>
        
          </div>
      
        </motion.div>
   
       
  


    )
};

const Hide = styled.div`
  overflow: hidden;

`;

const Text = styled.p`
  font-size: large;
`;

const Paragraph = styled.div`
    padding-bottom: 10rem;
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

export default AboutMe;