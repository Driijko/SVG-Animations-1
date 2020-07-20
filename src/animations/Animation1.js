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

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

export default function Animation1(props) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={`${window.innerWidth}`} height={`${window.innerHeight}`}>
        <motion.circle 
          r="120" cx="225" cy="125" fill="red" stroke="black" stroke-width="10"
          variants={svgVariants} initial="hidden" animate="visible"
        /> 
      </svg>
    </div>
  )
}