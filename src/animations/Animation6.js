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
      duration: 5,
      yoyo: Infinity
    }
  }
}

export default function Animation6(props) {
  return (
    <div>
      <motion.svg width="500" height="500">
        <defs>
          <radialGradient 
            id="grad" cx="50%" cy="50%" r="70%" 
          >
            <stop offset="0%" stopColor="red" stopOpacity="1" />
            <stop offset="80%" stopColor="black" stopOpacity="1" />
          </radialGradient>
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