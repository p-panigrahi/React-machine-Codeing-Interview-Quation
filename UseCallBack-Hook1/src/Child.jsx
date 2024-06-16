import React, { memo } from "react";

const Child = () => {
  console.log("Child is called");
  return (
    <div>
      <h1>I am Child</h1>
    </div>
  );
};

export default memo(Child);
