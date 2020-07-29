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

const rectVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
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
          <radialGradient 
            id="grad" cx="50%" cy="50%" r="70%" 
          >
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="80%" stopColor="black" stopOpacity="1" />
          </radialGradient>
        </defs>
        <motion.rect
          variants={rectVariants} initial="initial" animate="animate"
          x="0" y="0" height="100%" width="100%" fill="white"
        />
        <motion.path 
          variants={svgVariants} initial="initial" animate="animate" 
          stroke="url(#grad)" fill="none"
          d={path1}
        />
      </motion.svg>
    </div>
  )
}