import React, { useState } from "react";
import HOC from "./HOC";
const Parent = ({ count, fn }) => {
  return (
    <div>
      <h1>I am Prent</h1>
      {count}
      <button onClick={fn}>Press</button>
    </div>
  );
};

export default HOC(Parent);
