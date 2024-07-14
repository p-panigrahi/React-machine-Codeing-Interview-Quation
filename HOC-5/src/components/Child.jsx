import React, { useState } from "react";
import HOC from "./HOC";
const Child = ({ count, fn }) => {
  return (
    <div>
      <h1>I am Child</h1>
      {count}
      <button onClick={fn}>Press</button>
    </div>
  );
};

export default HOC(Child);
