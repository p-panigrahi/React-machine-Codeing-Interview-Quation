import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handelClick = () => {
    setCount1((prev) => prev + 1);
  };
  function callMe() {
    console.log("My Function");
  }

  return (
    <div>
      <Child count={count1} fn={callMe} />
      <h1>Use CallBack Example</h1>
      <button onClick={handelClick}>Count1- {count1}</button>
    </div>
  );
};

export default Parent;
