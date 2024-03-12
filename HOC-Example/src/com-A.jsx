import React from "react";
import HOC from "./HOC";

const comA = ({ handelClick, count, name }) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handelClick}>Press {name}</button>
    </div>
  );
};

export default HOC(comA);
