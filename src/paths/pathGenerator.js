fs = require("fs");

let pathPlot = "M 0 5";
for (let i = 0 ; i < 16; i++) {
  const lowVal = 5 + (i * 15);
  const highVal = 495 - (i * 15);
  const nextVal = 5 + ((i + 1) * 15);
  const spiralRing = (
    ` L ${highVal} ${lowVal} L ${highVal} ${highVal} L ${lowVal} ${highVal} L ${lowVal} ${nextVal}`
  );
  pathPlot += spiralRing;
}

fs.writeFile("paths.js", pathPlot, ()=> {return null});