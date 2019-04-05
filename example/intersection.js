import React, { useRef } from "react";
import { range } from "lodash";

import { useIntersectionObserver } from "..";

const Box = idx => {
  const ref = useRef();
  const intersections = useIntersectionObserver(ref, {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  });

  return (
    <span
      key={idx}
      ref={ref}
      style={{
        background: getBackgroundColor(intersections),
        padding: "0.3rem",
        margin: "0.3rem",
        color: "white",
        fontSize: "1.5rem"
      }}
    >
      {idx + 1}
    </span>
  );
};

export default () => (
  <section
    id="xsection"
    style={{
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "40rem"
    }}
  >
    {range(50).map(Box)}
  </section>
);

function buildThresholdList() {
  const thresholds = [];
  const numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    const ratio = i / numSteps;

    thresholds.push(ratio);
  }

  thresholds.push(0);

  return thresholds;
}

function getBackgroundColor(intersection) {
  if (!intersection || !intersection.length) {
    return "rgba(40, 40, 19)";
  }

  return `rgba(40, 40, 190, ${intersection[0].intersectionRatio})`;
}
