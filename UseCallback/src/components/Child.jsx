import React, { memo } from "react";

const Child = ({ count, callMe }) => {
  console.log("Child Render");
  return <div> I am Child</div>;
};

export default memo(Child);
