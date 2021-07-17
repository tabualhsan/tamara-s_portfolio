import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import { pageAnimation } from './animation';
import Wave from './Wave';
import { titleAnim, fade, photoAnim } from './animation';
import { About, Description } from './styles';
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
const Contact= () => {
return( 

    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
    <div className="title">

  

    <About>
    <Description>
        <Hide>
        <motion.h2 variants={titleAnim} > </motion.h2>
        <Icons href={"https://github.com/tabualhsan"} target="_blank">< AiFillGithub size={70}/>GitHub</Icons>
        <Icons href={"https://www.linkedin.com/in/tamara-abualhsan-a8a704a1/"} target="_blank">< AiFillLinkedin size={70}/>Linkedin</Icons>
        <Icons href={"https://www.linkedin.com/in/tamara-abualhsan-a8a704a1/"} target="_blank">< AiFillMail size={70}/>Email</Icons>
        </Hide>
        <Hide>

      
        <motion.h2 variants={titleAnim}>
          
        </motion.h2>
        </Hide>
     
      <Wave/>
      </Description>
    
    </About>
    
      </div>
  
    </motion.div>

   



)
};

const Hide = styled.div`
overflow: hidden;
`;

const Icons = styled.a`

  color:#7a4b74cc;
  size:70;


  ;
`

export default Contact;