import React from 'react';
import {motion} from "framer-motion";

const svgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 5
    }
  }
}

export default function Animation1(props) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={`${window.innerWidth}`} height={`${window.innerHeight}`}>
        <motion.circle 
          r="120" cx="500" cy="500" fill="red" 
          variants={svgVariants} initial="hidden" animate="visible"
        /> 
      </svg>
    </div>
  )
}