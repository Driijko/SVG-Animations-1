import React from 'react';
import {motion} from "framer-motion";

const svgVariants = {
  initial: {
  },
  animate: {
    translateX: [0, 500],
    scaleX: [0, 1],
    transition: {
      duration: 2,
      loop: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function Animation2(props) {
  return (
    <div>
      <motion.svg width={`${window.innerWidth}`} height={`${window.innerHeight}`}>
        <motion.circle 
          r="100" cx="100" cy="100" fill="red"
          variants={svgVariants} initial="initial" animate="animate"
        /> 
      </motion.svg>
    </div>
  )
}