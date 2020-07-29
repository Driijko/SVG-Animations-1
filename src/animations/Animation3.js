import React from "react";
import {motion} from "framer-motion";

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


export default function Animation3(props) {

  return (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
      <motion.path 
        variants={svgVariants} initial="initial" animate="animate" 
        stroke="red" stroke-width="10px" stroke-linecap="butt" fill="none"
        d={pathPlot}
      />
    </svg>
  )
}