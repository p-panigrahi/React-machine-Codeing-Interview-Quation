import React from "react";
import Child from "./Child";
import { useState } from "react";
const Parent = () => {
  const [data, setData] = useState("Aman");
  return (
    <div>
      <h1>I am parent</h1>
      <Child data={data} />
    </div>
  );
};

export default Parent;
