import React, { memo } from "react";

const Child = () => {
  console.log("Child is Calling");
  return <div>Child</div>;
};

export default memo(Child);
