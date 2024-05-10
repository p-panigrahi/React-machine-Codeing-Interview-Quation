import React, { memo } from "react";

const Child = ({ count2, fu }) => {
  console.log("Child Render");
  return <div> I am Child</div>;
};

export default memo(Child);
