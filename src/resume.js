import React from 'react';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion'
import { pageAnimation } from './animation';


const Resume = () => {
return(
<Link to="/resume">
    <motion.div variants={pageAnimation} initial="hidden" animate="show" >
    <h1>resume page</h1>
    </motion.div>
</Link>

   )
}

export default Resume;