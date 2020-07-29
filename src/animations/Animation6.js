import React from "react";
import {motion} from "framer-motion";

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
      duration: 10
    }
  }
}

let pathPlot = "M 0 5";
for (let i = 0 ; i < 16; i++) {
  const lowVal = 5 + (i * 15);
  const highVal = 495 - (i * 15);
  const nextVal = 5 + ((i + 1) * 15);
  const spiralRing = (
    `L ${highVal} ${lowVal} L ${highVal} ${highVal} L ${lowVal} ${highVal} L ${lowVal} ${nextVal}`
  );
  pathPlot += spiralRing;
}

export default function Animation4(props) {
  return (
    <div>
      <motion.svg width="500" height="500">
        <defs>
          <radialGradient 
            id="grad" cx="50%" cy="50%" r="70%" 
          >
            <stop offset="0%" stop-color="red" stop-opacity="1" />
            <stop offset="80%" stop-color="black" stop-opacity="1" />
          </radialGradient>
        </defs>
        <motion.rect
          variants={rectVariants} initial="initial" animate="animate"
          x="0" y="0" height="100%" width="100%" fill="white"
        />
        <motion.path 
          variants={svgVariants} initial="initial" animate="animate" 
          stroke="url(#grad)" stroke-width="10px" stroke-linecap="butt" fill="none"
          d={pathPlot}
        />
      </motion.svg>
    </div>
  )
}