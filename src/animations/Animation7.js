import React from "react";
import {motion} from "framer-motion";

import {path1} from "../paths/paths";

const path1Variants = {
  initial: {
    pathLength: 0,
  },
  animate: {
    pathLength: 1,
    rotate: 360,
    transition: {
      duration: 5,
      yoyo: Infinity
    }
  }
}


export default function Animation7(props) {
  return (
    <div>
      <motion.svg 
        variants={path1Variants} initial="initial" animate="animate"
        width="500" height="500"
      >

        <defs>
          <radialGradient 
            id="grad" gradientUnits="userSpaceOnUse"
            fx="50%" fy="50%" cx="50%" cy="50%" r="75%">  
          >
            <stop offset="0%" stopColor="black" />
            <stop offset="100%" stopColor="red" />
          </radialGradient>
        </defs>
        {/* <motion.path 
          variants={path1Variants} initial="initial" animate="animate" 
          stroke="url(#grad)" fill="none"
          d={path1}
        /> */}

        <motion.path
          variants={path1Variants} initial="initial" animate="animate"
          stroke="url(#grad)" fill="none"
          d="
            M 250 250
            l -250 0
          "
        />

        <motion.path
          variants={path1Variants}
          stroke="url(#grad)" fill="none"
          d="
            M 250 250
            l 250 0
          "
        />

        <motion.path
          variants={path1Variants}
          stroke="url(#grad)" fill="none"
          d="
            M 250 250
            l 0 250
          "
        />

        <motion.path
          variants={path1Variants}
          stroke="url(#grad)" fill="none"
          d="
            M 250 250
            l 0 -250
          "
        />

      </motion.svg>
    </div>
  )
}