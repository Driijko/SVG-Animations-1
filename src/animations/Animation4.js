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
      duration: 5
    }
  }
}

export default function Animation4(props) {
  return (
    <div>
      <motion.svg width="500" height="500">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="90%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100" stopColor="black" stopOpacity="1" />
          </linearGradient>
        </defs>
        <motion.path 
          variants={svgVariants} initial="initial" animate="animate" 
          stroke="url(#grad)" fill="none"
          d={path1}
        />
      </motion.svg>
    </div>
  )
}