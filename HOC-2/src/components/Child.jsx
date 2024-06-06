import React from "react";
import HOC from "./HOC";
const Child = ({ data, handelClick }) => {
  return (
    <div>
      {data}
      <button onClick={handelClick}>Click Me</button>
    </div>
  );
};

export default HOC(Child);
