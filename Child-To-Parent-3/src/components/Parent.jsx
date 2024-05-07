import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [data,setData] = useState("Rahul");
  return <div>
    <h1>I am Parent {data}</h1>
    <Child setData={setData} data={data}/>
  </div>;
};

export default Parent;
