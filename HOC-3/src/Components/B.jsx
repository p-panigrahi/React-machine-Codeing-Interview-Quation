import React from "react";
import HOC from "./HOC";

const B = ({ count, handelClick }) => {
  return (
    <div>
      <h1>B-{count}</h1>
      <button onClick={handelClick}>Click Me For Subtraction</button>
    </div>
  );
};

export default HOC(B);
