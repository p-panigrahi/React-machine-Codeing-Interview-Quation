import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data, setData] = useState("Ranjan Kumar Panigrahi");
  return (
    <>
      <div>I Parent {data}</div>
      <Child setData={setData}/>
    </>
  );
};

export default Parent;
