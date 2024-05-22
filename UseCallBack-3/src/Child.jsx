import React from "react";
import { memo } from "react";

const Child = ({ counter2, fn }) => {
  console.log("I am Child");
  return <div>I am Child</div>;
};

export default memo(Child);
