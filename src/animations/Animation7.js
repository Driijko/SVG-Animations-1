import React from "react";
import {motion} from "framer-motion";

import {path1} from "../paths/paths";

export default function Animation7(props) {
  return (
    <div>
      <motion.svg width="500" height="500">
        <path
          stroke="white" fill="none"
          d={path1}
        />
      </motion.svg>
    </div>
  )
}