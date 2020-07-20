import React from 'react';
import {motion} from "framer-motion";

const svgVariants = {
  initial: {
    opacity: 0,
    x: 0,
    scale: 0
  },
  animate: {
    opacity: 1,
    x: [500, 0],
    scale: [1, 0],
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
      {/* <motion.div width="200" height="200">

      </motion.div> */}
      <svg width={`${window.innerWidth}`} height={`${window.innerHeight}`}>
        <motion.circle 
          r="120" cx="225" cy="125" fill="red"
          variants={svgVariants} initial="initial" animate="animate"
        /> 
      </svg>
    </div>
  )
}