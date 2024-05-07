import React from "react";
import HOC from "./HOC";

const A = ({count,handelClick}) => {
  return (
    <div>
      <h1>A-{count}</h1>
      <button onClick={handelClick}>Click Me For Addation</button>
    </div>
  );
};

export default HOC(A);
