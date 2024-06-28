import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Rabi Kumar");
  return (
    <div>
      <h1>Hell I am {data}</h1>
      <Child setFn={setData} />
    </div>
  );
};

export default Parent;
