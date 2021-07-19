import React from 'react';

import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { pageAnimation, titleAnim, fade, photoAnim, lineAnime, slider, sliderContainer } from './animation';
import { motion } from 'framer-motion';

const Welcome = () => {
    return(

        <Work  style={{ background: '#fff' }} exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      

        <motion.div variants={sliderContainer}>
            <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4>
        </motion.div>


        <h1>Welcome</h1>
        </Work>
       
    )

};


const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding:5rem 10rem;
  

`;
const Frame1 =styled(motion.div)`

    position:fixed;
    left:0;
    top:10%;
    width: 100%;
    height: 100vh;
    background:#fffebf ;
    z-index:2;
    
`;
const Frame2 = styled(Frame1)`
 background:#ff8efb;
`;
const Frame3 = styled(Frame1)`
 background:#8ed2ff;
`;
const Frame4 = styled(Frame1)`
 background:#8effa0;
`;


export default Welcome; 