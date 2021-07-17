import React from 'react';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion'
import { pageAnimation } from './animation';


const Resume = () => {
return(
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" >
    <h1>resume page</h1>
    </motion.div>


   )
}

export default Resume;