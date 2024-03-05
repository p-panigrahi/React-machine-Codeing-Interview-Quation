import React, { useState } from "react";
import Child from "./Child";
const Parent = () => {
  const [data, setData] = useState("rakesh");
  return (
    <>
      <h1>Parent Component {data}</h1>
      <Child setData={setData} />
    </>
  );
};

export default Parent;
