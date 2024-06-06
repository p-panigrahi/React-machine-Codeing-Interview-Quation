import React, { useState } from "react";
import HOC from "./HOC";
const Parent = ({ count, fn }) => {
  return (
    <div>
      <button onClick={() => fn()}>Counter - {count}</button>
    </div>
  );
};

export default HOC(Parent);
