import React from "react";
import { memo } from "react";
const Parent = () => {
  console.log("Parent Calling");
  return (
    <div>
      <h1>I am Parent</h1>

    </div>
  );
};

export default memo(Parent);
