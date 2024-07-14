import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Rabi");
  return (
    <div>
      <h1>I am Parent {data}</h1>
      <Child setData={setData} />
    </div>
  );
};

export default Parent;
