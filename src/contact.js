import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion'
import { pageAnimation } from './animation';



const Contact= () => {
return( 


    <Link to="/contact" exact>
        <motion.div variants={pageAnimation} initial="hidden" animate="show" >
        <h1>contact page</h1>
        </motion.div>
    </Link>


   )
}

export default Contact;