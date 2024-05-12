import React from "react";
import { memo } from "react";

const Child = ({ counter2, sum }) => {
  console.log("Child Is Called");
  return <div>Child</div>;
};

export default memo(Child);
