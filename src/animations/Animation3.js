import React from "react";
import {motion} from "framer-motion";

import {path1} from "../paths/paths";

const svgVariants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1
    }
  }
}

export default function Animation3(props) {

  return (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        variants={svgVariants} initial="initial" animate="animate" 
        stroke="red" fill="none"
        d={path1}
      />
    </svg>
  )
}